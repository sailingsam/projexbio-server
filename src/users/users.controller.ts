import {
  Controller,
  Get,
  UseGuards,
  Req,
  Query,
  BadRequestException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from '../auth/auth.guard';
import { Request } from 'express';

@Controller('users')
@UseGuards(AuthGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('me')
  async getCurrentUser(@Req() req: Request) {
    if (!req.appwriteUser) {
      throw new Error('User not authenticated');
    }
    return this.usersService.findByAppwriteId(req.appwriteUser.appwriteId);
  }

  @Get('check-username')
  async checkUsername(@Query('username') username: string) {
    if (!username) {
      throw new BadRequestException('Username is required');
    }
    return { available: await this.usersService.isUsernameAvailable(username) };
  }
}
