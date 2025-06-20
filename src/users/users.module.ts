import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { PrismaModule } from '../prisma/prisma.module';
import { AppwriteModule } from '../appwrite/appwrite.module';
import { StorageModule } from '../appwrite/storage/storage.module';

@Module({
  imports: [PrismaModule, AppwriteModule, StorageModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
