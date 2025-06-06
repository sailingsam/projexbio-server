import { Express } from 'express';

export interface IStorageService {
  uploadFile(
    bucketId: string,
    file: Express.Multer.File,
    path?: string,
  ): Promise<string>;

  deleteFile(bucketId: string, fileId: string): Promise<void>;
}
