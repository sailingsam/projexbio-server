import { Module } from '@nestjs/common';
import { CollegesService } from './colleges.service';
import { CollegesController } from './colleges.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { AppwriteModule } from '../appwrite/appwrite.module';

@Module({
  imports: [PrismaModule, AppwriteModule],
  controllers: [CollegesController],
  providers: [CollegesService],
  exports: [CollegesService],
})
export class CollegesModule {}
