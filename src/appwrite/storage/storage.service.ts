import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Storage } from 'node-appwrite';
import { Express } from 'express';
import { ID } from 'node-appwrite';
import { AppwriteService } from '../appwrite.service';
import { InputFile } from 'node-appwrite/file';

@Injectable()
export class StorageService {
  private readonly storage: Storage;
  private readonly buckets: Record<string, string>;
  constructor(
    private readonly appwriteService: AppwriteService,
    private readonly configService: ConfigService,
  ) {
    this.storage = new Storage(this.appwriteService.getServerClient());
    this.buckets = {
      COLLEGE_ASSETS: this.configService.getOrThrow<string>(
        'APPWRITE_COLLEGE_BUCKET_ID',
      ),
      USER_ASSETS: this.configService.getOrThrow<string>(
        'APPWRITE_USERS_BUCKET_ID',
      ),
      PROJECT_ASSETS: this.configService.getOrThrow<string>(
        'APPWRITE_PROJECTS_BUCKET_ID',
      ),
    };
  }

  async uploadFile(
    bucketId: string,
    file: Express.Multer.File,
  ): Promise<string> {
    try {
      const fileId = ID.unique();
      const inputFile = InputFile.fromBuffer(file.buffer, file.originalname);
      const uploadedFile = await this.storage.createFile(
        bucketId,
        fileId,
        inputFile,
      );

      return uploadedFile.$id;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error';
      throw new Error(`Failed to upload file: ${errorMessage}`);
    }
  }

  async deleteFile(bucketId: string, fileId: string): Promise<void> {
    try {
      await this.storage.deleteFile(bucketId, fileId);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error';
      throw new Error(`Failed to delete file: ${errorMessage}`);
    }
  }

  /**
   * Get file view URL using Appwrite configuration
   * @param bucketId - The bucket ID
   * @param fileId - The file ID
   * @param token - Optional token for private files
   * @returns The URL to view the file
   */
  getFileUrl(bucketId: string, fileId: string): string {
    const endpoint = this.configService.getOrThrow<string>('APPWRITE_ENDPOINT');
    const projectId = this.configService.getOrThrow<string>(
      'APPWRITE_PROJECT_ID',
    );

    const url = `${endpoint}/storage/buckets/${bucketId}/files/${fileId}/view?project=${projectId}`;

    return url;
  }
}
