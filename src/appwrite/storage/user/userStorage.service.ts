import { Injectable } from '@nestjs/common';
import { Express } from 'express';
import { StorageService } from '../storage.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UserStorageService {
  constructor(
    private readonly storageService: StorageService,
    private readonly configService: ConfigService,
  ) {}

  async uploadUserAsset(file: Express.Multer.File): Promise<string> {
    const bucketId = this.configService.getOrThrow('APPWRITE_USERS_BUCKET_ID');
    return this.storageService.uploadFile(bucketId, file);
  }

  async deleteUserAsset(fileId: string): Promise<void> {
    try {
      const bucketId = this.configService.getOrThrow(
        'APPWRITE_USERS_BUCKET_ID',
      );
      return this.storageService.deleteFile(bucketId, fileId);
    } catch (error) {
      console.error(`Failed to delete file ${fileId}:`, error);
    }
  }
}
