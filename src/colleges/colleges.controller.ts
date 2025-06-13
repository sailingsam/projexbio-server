import {
  Controller,
  Post,
  Get,
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
import { AuthGuard } from '../auth/auth.guard';
import { CollegeResponseDto } from './dto/college-response.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('colleges')
@Controller('colleges')
export class CollegesController {
  constructor(private readonly collegesService: CollegesService) {}

  @Get()
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Get all colleges with their email domains' })
  @ApiResponse({
    status: 200,
    description: 'List of colleges with their email domains',
    type: [CollegeResponseDto],
  })
  async findAll(): Promise<CollegeResponseDto[]> {
    return this.collegesService.findAll();
  }

  @Post('create')
  @UseGuards(AuthGuard, SuperAdminGuard)
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
