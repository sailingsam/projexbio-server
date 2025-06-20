import {
  Controller,
  Get,
  Post,
  UseGuards,
  Req,
  Query,
  Body,
  BadRequestException,
  UseInterceptors,
  UploadedFile,
  ParseFilePipe,
  MaxFileSizeValidator,
  FileTypeValidator,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UsersService } from './users.service';
import { AuthGuard } from '../auth/auth.guard';
import { Request } from 'express';
import { OnboardingDto, OnboardingResponseDto } from './dto/onboarding.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiConsumes,
} from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
@UseGuards(AuthGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('me')
  @ApiOperation({ summary: 'Get current user information' })
  @ApiResponse({
    status: 200,
    description: 'User information retrieved successfully',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 404, description: 'User not found' })
  async getCurrentUser(@Req() req: Request) {
    if (!req.appwriteUser) {
      throw new Error('User not authenticated');
    }
    return this.usersService.findByAppwriteId(req.appwriteUser.appwriteId);
  }

  @Get('check-username')
  @ApiOperation({ summary: 'Check if username is available' })
  @ApiResponse({ status: 200, description: 'Username availability checked' })
  @ApiResponse({ status: 400, description: 'Username is required' })
  async checkUsername(@Query('username') username: string) {
    if (!username) {
      throw new BadRequestException('Username is required');
    }
    return { available: await this.usersService.isUsernameAvailable(username) };
  }

  @Post('onboarding')
  @UseInterceptors(FileInterceptor('avatar'))
  @ApiOperation({
    summary: 'Onboard a new user',
    description:
      'Complete user onboarding process with role-based validation and file upload',
  })
  @ApiConsumes('multipart/form-data')
  @ApiResponse({
    status: 201,
    description: 'User onboarded successfully',
    type: OnboardingResponseDto,
  })
  @ApiResponse({ status: 400, description: 'Invalid onboarding data' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({
    status: 409,
    description: 'User already exists or username taken',
  })
  async onboardUser(
    @Body() onboardingData: OnboardingDto,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 500 * 1024 }), // 500kb
          new FileTypeValidator({ fileType: '.(jpg|jpeg|png|gif)' }),
        ],
        fileIsRequired: false,
      }),
    )
    avatar?: Express.Multer.File,
  ): Promise<OnboardingResponseDto> {
    // Check if onboardingData exists
    if (!onboardingData) {
      throw new BadRequestException('Request body is required');
    }

    // Add avatar file to onboarding data
    const onboardingDataWithAvatar = {
      ...onboardingData,
      avatar,
    };

    return this.usersService.onboardUser(onboardingDataWithAvatar);
  }
}
