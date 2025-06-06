import { Module } from '@nestjs/common';
import { StorageService } from './storage.service';
import { CollegeStorageService } from './college/collegeStorage.service';
import { UserStorageService } from './user/userStorage.service';
import { ProjectStorageService } from './project/projectStorage.service';
import { ConfigModule } from '@nestjs/config';
import { AppwriteService } from '../appwrite.service';

@Module({
  imports: [ConfigModule],
  providers: [
    StorageService,
    CollegeStorageService,
    UserStorageService,
    ProjectStorageService,
    AppwriteService,
  ],
  exports: [
    StorageService,
    CollegeStorageService,
    UserStorageService,
    ProjectStorageService,
  ],
})
export class StorageModule {}
