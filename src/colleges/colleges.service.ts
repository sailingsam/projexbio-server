import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
// import { FileUploadService } from '../utils/file-upload.service';
import { CreateCollegeDto } from './dto/create-college.dto';
import { generateSlug } from '../utils/string-utils';
import { Express } from 'express';
// import { StorageService } from '../appwrite/storage/storage.service';
import { InputFile } from 'node-appwrite/file';

@Injectable()
export class CollegesService {
  constructor(
    private prisma: PrismaService,
    // private storageService: StorageService,
  ) {}

  private validateEmailDomains(domains: string[]): void {
    if (!domains.length) {
      throw new BadRequestException('At least one email domain is required');
    }

    const domainPattern = /^@[\w-]+\.[a-zA-Z]+(\.[a-zA-Z]+)?$/;
    const invalidDomains = domains.filter(
      (domain) => !domainPattern.test(domain),
    );

    if (invalidDomains.length) {
      throw new BadRequestException(
        `Invalid email domains: ${invalidDomains.join(', ')}`,
      );
    }
  }

  private validateWebsite(website?: string): void {
    if (website) {
      try {
        new URL(website);
      } catch {
        throw new BadRequestException('Invalid website URL');
      }
    }
  }

  private async generateUniqueSlug(baseName: string): Promise<string> {
    let slug = generateSlug(baseName);
    let counter = 1;
    let uniqueSlug = slug;

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
    // Validate inputs
    this.validateEmailDomains(createCollegeDto.emailDomains);
    this.validateWebsite(createCollegeDto.website);

    const slug = await this.generateUniqueSlug(createCollegeDto.name);

    // Upload logo file (required) if logo is provided
    let logoUrl: string | undefined;
    if (logo) {
      // logoUrl = await this.storageService.uploadCollegeAsset(logo);
    }

    // Upload cover image if provided
    let coverImageUrl: string | undefined;
    if (coverImage) {
      // coverImageUrl = await this.storageService.uploadCollegeAsset(coverImage);
    }

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
          logoUrl,
          coverImageUrl,
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
  }
}
