import { Injectable } from '@nestjs/common';
import { Express } from 'express';
import { StorageService } from '../storage.service';
import { ConfigService } from '@nestjs/config';

// TODO: we have added 3 redundant services for each bucket, we indirectly uses storage service everything in same way so we should remove these services and use storage service directly
// We can use something like enum or something to identify the bucket and use storage service directly
@Injectable()
export class UserStorageService {
  private readonly bucketId: string;

  constructor(
    private readonly storageService: StorageService,
    private readonly configService: ConfigService,
  ) {
    this.bucketId = this.configService.getOrThrow('APPWRITE_USERS_BUCKET_ID');
  }

  async uploadUserAsset(file: Express.Multer.File): Promise<string> {
    return this.storageService.uploadFile(this.bucketId, file);
  }

  async deleteUserAsset(fileId: string): Promise<void> {
    try {
      return this.storageService.deleteFile(this.bucketId, fileId);
    } catch (error) {
      console.error(`Failed to delete file ${fileId}:`, error);
    }
  }

  /**
   * Get the URL for a user asset file
   * @param fileId - The ID of the file in user storage
   * @returns The direct URL to view the file
   */
  getUserAssetUrl(fileId: string): string {
    return this.storageService.getFileUrl(this.bucketId, fileId);
  }
}
