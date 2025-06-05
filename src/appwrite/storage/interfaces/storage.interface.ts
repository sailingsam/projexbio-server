import { Express } from 'express';

export interface StorageFile {
  url: string;
  fileId: string;
}

export interface IStorageService {
  uploadFile(
    bucketId: string,
    file: Express.Multer.File,
    path?: string,
  ): Promise<StorageFile>;

  deleteFile(bucketId: string, fileId: string): Promise<void>;
}

export const STORAGE_BUCKETS = {
  COLLEGE_ASSETS: 'college',
  USER_ASSETS: 'users',
  PROJECT_ASSETS: 'projects',
} as const;
