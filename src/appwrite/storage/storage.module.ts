import { Module } from '@nestjs/common';
import { StorageService } from './storage.service';
import { CollegeStorageService } from './college/college.service';
import { ConfigModule } from '@nestjs/config';
import { AppwriteService } from '../appwrite.service';

@Module({
  imports: [ConfigModule],
  providers: [StorageService, CollegeStorageService, AppwriteService],
  exports: [StorageService, CollegeStorageService],
})
export class StorageModule {}
