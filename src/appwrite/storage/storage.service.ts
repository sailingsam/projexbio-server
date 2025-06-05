import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Storage } from 'node-appwrite';
import { IStorageService, StorageFile } from './interfaces/storage.interface';
import { Express } from 'express';
import { ID } from 'node-appwrite';
import { AppwriteService } from '../appwrite.service';
import { InputFile } from 'node-appwrite/file';

@Injectable()
export class StorageService implements IStorageService {
  private readonly storage: Storage;
  private readonly buckets: Record<string, string>;
  constructor(
    private readonly appwriteService: AppwriteService,
    private readonly configService: ConfigService,
  ) {
    this.storage = new Storage(this.appwriteService.getServerClient());
    this.buckets = {
      COLLEGE_ASSETS: this.configService.getOrThrow(
        'APPWRITE_COLLEGE_BUCKET_ID',
      ),
      USER_ASSETS: this.configService.getOrThrow('APPWRITE_USERS_BUCKET_ID'),
      PROJECT_ASSETS: this.configService.getOrThrow(
        'APPWRITE_PROJECTS_BUCKET_ID',
      ),
    };
  }

  async uploadFile(
    bucketId: string,
    file: Express.Multer.File,
    path?: string,
  ): Promise<StorageFile> {
    try {
      const fileId = ID.unique();
      const inputFile = InputFile.fromBuffer(file.buffer, file.originalname);
      const uploadedFile = await this.storage.createFile(
        bucketId,
        fileId,
        inputFile,
      );

      const fileUrl = await this.storage
        .getFileView(bucketId, fileId)
        .toString();

      return {
        url: fileUrl,
        fileId: uploadedFile.$id,
      };
    } catch (error) {
      throw new Error(`Failed to upload file: ${error.message}`);
    }
  }

  async deleteFile(bucketId: string, fileId: string): Promise<void> {
    try {
      await this.storage.deleteFile(bucketId, fileId);
    } catch (error) {
      throw new Error(`Failed to delete file: ${error.message}`);
    }
  }
}
