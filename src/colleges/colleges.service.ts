import {
  Injectable,
  BadRequestException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCollegeDto } from './dto/create-college.dto';
import { generateSlug } from '../utils/string-utils';
import { Express } from 'express';
import { CollegeStorageService } from '../appwrite/storage/college/college.service';
import { Prisma } from '../../generated/prisma';

@Injectable()
export class CollegesService {
  constructor(
    private prisma: PrismaService,
    private collegeStorageService: CollegeStorageService,
  ) {}

  private validateEmailDomains(domains: string[]): void {
    if (!domains.length) {
      throw new BadRequestException('At least one email domain is required');
    }

    const domainPattern = /^@/;
    const invalidDomains = domains.filter(
      (domain) => !domainPattern.test(domain),
    );

    if (invalidDomains.length) {
      throw new BadRequestException(
        `Invalid email domains: ${invalidDomains.join(', ')}`,
      );
    }
  }

  private async checkDuplicateDomains(domains: string[]): Promise<void> {
    const existingDomains = await this.prisma.collegeEmailDomain.findMany({
      where: {
        domain: {
          in: domains,
        },
      },
      select: {
        domain: true,
        college: {
          select: {
            name: true,
          },
        },
      },
    });

    if (existingDomains.length > 0) {
      const duplicateInfo = existingDomains.map(
        (d) => `${d.domain} (already used by ${d.college.name})`,
      );
      throw new ConflictException(
        `The following email domains are already registered: ${duplicateInfo.join(', ')}`,
      );
    }
  }

  private async generateUniqueSlug(baseName: string): Promise<string> {
    let slug = generateSlug(baseName);
    let counter = 1;
    let uniqueSlug = slug;

    console.log(uniqueSlug);

    // Keep checking and incrementing counter until we find a unique slug
    while (true) {
      const existing = await this.prisma.college.findUnique({
        where: { slug: uniqueSlug },
      });

      if (!existing) {
        return uniqueSlug;
      }

      // If slug exists, add counter and try again
      uniqueSlug = `${slug}-${counter}`;
      counter++;
    }
  }

  async create(
    createCollegeDto: CreateCollegeDto,
    logo?: Express.Multer.File,
    coverImage?: Express.Multer.File,
  ) {
    // Validate required fields
    if (!createCollegeDto.name || createCollegeDto.name.trim() === '') {
      throw new BadRequestException('College name is required');
    }

    if (
      !createCollegeDto.emailDomains ||
      !Array.isArray(createCollegeDto.emailDomains) ||
      createCollegeDto.emailDomains.length === 0
    ) {
      throw new BadRequestException('At least one email domain is required');
    }
    this.validateEmailDomains(createCollegeDto.emailDomains);

    // Check for duplicate domains before proceeding
    await this.checkDuplicateDomains(createCollegeDto.emailDomains);

    try {
      if (createCollegeDto.website) {
        new URL(createCollegeDto.website);
      }
    } catch {
      throw new BadRequestException('Invalid website URL');
    }

    const slug = await this.generateUniqueSlug(createCollegeDto.name);

    // Upload logo file if provided
    let logoFileId: string | undefined;
    if (logo) {
      const logoFile = await this.collegeStorageService.uploadCollegeAsset(
        logo,
        `${slug}/logo-${Date.now()}`,
      );
      logoFileId = logoFile.fileId;
    }

    // Upload cover image if provided
    let coverFileId: string | undefined;
    if (coverImage) {
      const coverImageFile =
        await this.collegeStorageService.uploadCollegeAsset(
          coverImage,
          `${slug}/cover-${Date.now()}`,
        );
      coverFileId = coverImageFile.fileId;
    }

    try {
      // Create college and domains in a transaction
      const college = await this.prisma.$transaction(async (tx) => {
        // Create college with optional fields
        const college = await tx.college.create({
          data: {
            name: createCollegeDto.name,
            slug,
            description: createCollegeDto.description,
            location: createCollegeDto.location,
            website: createCollegeDto.website,
            logoFileId,
            coverImgFileId: coverFileId,
          },
        });

        // Create domains
        await tx.collegeEmailDomain.createMany({
          data: createCollegeDto.emailDomains.map((domain) => ({
            domain,
            collegeId: college.id,
          })),
        });

        return college;
      });

      return college;
    } catch (error) {
      // Clean up uploaded files if database operation fails
      await this.cleanupUploadedFiles(logoFileId, coverFileId);

      // Handle Prisma errors
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          // Unique constraint violation
          const field = error.meta?.target as string[];
          if (field?.includes('slug')) {
            throw new ConflictException(
              'A college with a similar name already exists',
            );
          }
          if (field?.includes('domain')) {
            throw new ConflictException(
              'One or more email domains are already registered to another college',
            );
          }
          throw new ConflictException(
            'A college with these details already exists',
          );
        }
      }

      // Re-throw the original error if it's not a known Prisma error
      throw error;
    }
  }

  private async cleanupUploadedFiles(
    logoFileId?: string,
    coverFileId?: string,
  ): Promise<void> {
    if (!logoFileId && !coverFileId) {
      return; // Nothing to cleanup
    }

    console.log(
      'Cleaning up uploaded files due to database operation failure...',
    );

    const cleanupPromises: Promise<void>[] = [];

    if (logoFileId) {
      console.log(`Attempting to delete logo file: ${logoFileId}`);
      cleanupPromises.push(
        this.collegeStorageService
          .deleteCollegeAsset(logoFileId)
          .then(() => {
            console.log(`Successfully deleted logo file: ${logoFileId}`);
          })
          .catch((error) => {
            // Log the error but don't throw - we don't want cleanup failures
            // to mask the original database error
            console.error(`Failed to cleanup logo file ${logoFileId}:`, error);
          }),
      );
    }

    if (coverFileId) {
      console.log(`Attempting to delete cover image file: ${coverFileId}`);
      cleanupPromises.push(
        this.collegeStorageService
          .deleteCollegeAsset(coverFileId)
          .then(() => {
            console.log(
              `Successfully deleted cover image file: ${coverFileId}`,
            );
          })
          .catch((error) => {
            console.error(
              `Failed to cleanup cover image file ${coverFileId}:`,
              error,
            );
          }),
      );
    }

    // Wait for all cleanup operations to complete
    await Promise.all(cleanupPromises);
    console.log('File cleanup operations completed');
  }
}
