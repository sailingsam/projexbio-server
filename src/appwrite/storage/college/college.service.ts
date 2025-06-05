import { Injectable } from '@nestjs/common';
import { Express } from 'express';
import { StorageService } from '../storage.service';
import { StorageFile } from '../interfaces/storage.interface';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CollegeStorageService {
  constructor(
    private readonly storageService: StorageService,
    private readonly configService: ConfigService,
  ) {}

  async uploadCollegeAsset(
    file: Express.Multer.File,
    path?: string,
  ): Promise<StorageFile> {
    const bucketId = this.configService.getOrThrow(
      'APPWRITE_COLLEGE_BUCKET_ID',
    );
    return this.storageService.uploadFile(bucketId, file, path);
  }

  async deleteCollegeAsset(fileId: string): Promise<void> {
    const bucketId = this.configService.getOrThrow(
      'APPWRITE_COLLEGE_BUCKET_ID',
    );
    return this.storageService.deleteFile(bucketId, fileId);
  }
}
