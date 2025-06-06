import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCollegeDto } from './dto/create-college.dto';
import { generateSlug } from '../common/utils/string-utils';
import { Express } from 'express';
import { CollegeStorageService } from '../appwrite/storage/college/collegeStorage.service';

@Injectable()
export class CollegesService {
  constructor(
    private prisma: PrismaService,
    private collegeStorageService: CollegeStorageService,
  ) {}

  private async generateUniqueSlug(baseName: string): Promise<string> {
    let slug = generateSlug(baseName);
    let counter = 1;
    let uniqueSlug = slug;

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
    const slug = await this.generateUniqueSlug(createCollegeDto.name);

    // Upload logo file if provided
    let logoFileId: string | undefined;
    if (logo) {
      const logoFileId =
        await this.collegeStorageService.uploadCollegeAsset(logo);
    }

    // Upload cover image if provided
    let coverFileId: string | undefined;
    if (coverImage) {
      const coverFileId =
        await this.collegeStorageService.uploadCollegeAsset(coverImage);
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
      await Promise.all([
        logoFileId
          ? this.collegeStorageService.deleteCollegeAsset(logoFileId)
          : Promise.resolve(),
        coverFileId
          ? this.collegeStorageService.deleteCollegeAsset(coverFileId)
          : Promise.resolve(),
      ]);

      throw error;
    }
  }
}
