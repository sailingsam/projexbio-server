import { Injectable } from '@nestjs/common';
import { Express } from 'express';
import { StorageService } from '../storage.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CollegeStorageService {
  constructor(
    private readonly storageService: StorageService,
    private readonly configService: ConfigService,
  ) {}

  async uploadCollegeAsset(file: Express.Multer.File): Promise<string> {
    const bucketId = this.configService.getOrThrow<string>(
      'APPWRITE_COLLEGE_BUCKET_ID',
    );
    return this.storageService.uploadFile(bucketId, file);
  }

  async deleteCollegeAsset(fileId: string): Promise<void> {
    try {
      const bucketId = this.configService.getOrThrow<string>(
        'APPWRITE_COLLEGE_BUCKET_ID',
      );
      return this.storageService.deleteFile(bucketId, fileId);
    } catch (error) {
      console.error(`Failed to delete file ${fileId}:`, error);
    }
  }
}
