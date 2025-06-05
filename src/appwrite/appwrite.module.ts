import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppwriteService } from './appwrite.service';
import { StorageModule } from './storage/storage.module';

@Module({
  imports: [ConfigModule, StorageModule],
  providers: [AppwriteService],
  exports: [AppwriteService, StorageModule],
})
export class AppwriteModule {}
