import {
  Controller,
  Post,
  Body,
  UseGuards,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { CollegesService } from './colleges.service';
import { CreateCollegeDto } from './dto/create-college.dto';
import { SuperAdminGuard } from '../auth/super-admin.guard';
import { Express } from 'express';

@Controller('colleges')
export class CollegesController {
  constructor(private readonly collegesService: CollegesService) {}

  @Post('create')
  @UseGuards(SuperAdminGuard)
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'logo', maxCount: 1 },
      { name: 'coverImage', maxCount: 1 },
    ]),
  )
  async create(
    @Body() createCollegeDto: CreateCollegeDto,
    @UploadedFiles()
    files: {
      logo?: Express.Multer.File[];
      coverImage?: Express.Multer.File[];
    },
  ) {
    return this.collegesService.create(
      createCollegeDto,
      files.logo?.[0],
      files.coverImage?.[0],
    );
  }
}
