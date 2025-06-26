import { Injectable } from '@nestjs/common';
import { Express } from 'express';
import { StorageService } from '../storage.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ProjectStorageService {
  private readonly bucketId: string;

  constructor(
    private readonly storageService: StorageService,
    private readonly configService: ConfigService,
  ) {
    this.bucketId = this.configService.getOrThrow<string>(
      'APPWRITE_PROJECTS_BUCKET_ID',
    );
  }

  async uploadProjectAsset(file: Express.Multer.File): Promise<string> {
    return this.storageService.uploadFile(this.bucketId, file);
  }

  async deleteProjectAsset(fileId: string): Promise<void> {
    try {
      return this.storageService.deleteFile(this.bucketId, fileId);
    } catch (error) {
      console.error(`Failed to delete file ${fileId}:`, error);
    }
  }

  /**
   * Get the URL for a project asset file
   * @param fileId - The ID of the file in project storage
   * @returns The direct URL to view the file
   */
  getProjectAssetUrl(fileId: string): string {
    return this.storageService.getFileUrl(this.bucketId, fileId);
  }
}
