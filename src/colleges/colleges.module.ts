import { Module } from '@nestjs/common';
import { CollegesService } from './colleges.service';
import { CollegesController } from './colleges.controller';
import { PrismaService } from '../prisma/prisma.service';
// import { StorageService } from '../appwrite/storage/storage.service';

@Module({
  controllers: [CollegesController],
  providers: [CollegesService, PrismaService],
})
export class CollegesModule {}
