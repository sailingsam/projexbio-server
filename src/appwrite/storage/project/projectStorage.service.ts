import { Injectable } from '@nestjs/common';
import { Express } from 'express';
import { StorageService } from '../storage.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ProjectStorageService {
  constructor(
    private readonly storageService: StorageService,
    private readonly configService: ConfigService,
  ) {}

  async uploadProjectAsset(file: Express.Multer.File): Promise<string> {
    const bucketId = this.configService.getOrThrow<string>(
      'APPWRITE_PROJECTS_BUCKET_ID',
    );
    return this.storageService.uploadFile(bucketId, file);
  }

  async deleteProjectAsset(fileId: string): Promise<void> {
    try {
      const bucketId = this.configService.getOrThrow<string>(
        'APPWRITE_PROJECTS_BUCKET_ID',
      );
      return this.storageService.deleteFile(bucketId, fileId);
    } catch (error) {
      console.error(`Failed to delete file ${fileId}:`, error);
    }
  }
}
