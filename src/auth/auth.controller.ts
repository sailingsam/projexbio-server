import {
  Body,
  Controller,
  Post,
  HttpCode,
  BadRequestException,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SendOTPDto } from './dto/send-otp.dto';
import { VerifyOTPDto } from './dto/verify-otp.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from './auth.guard';

@ApiTags('Authentication')
@Controller('auth')
@UseGuards(AuthGuard)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('send-otp')
  @HttpCode(200)
  @ApiOperation({ summary: 'Send OTP to user email' })
  @ApiResponse({
    status: 200,
    description: 'OTP sent successfully',
    schema: {
      type: 'object',
      properties: {
        message: {
          type: 'string',
          example: 'OTP sent successfully',
        },
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid email or context provided',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - Invalid or missing token',
  })
  async sendOTP(@Body() sendOTPDto: SendOTPDto): Promise<{ message: string }> {
    await this.authService.sendOTP(sendOTPDto.email, sendOTPDto.context);
    return {
      message: 'OTP sent successfully',
    };
  }

  @Post('verify-otp')
  @HttpCode(200)
  @ApiOperation({ summary: 'Verify OTP' })
  @ApiResponse({
    status: 200,
    description: 'OTP verified successfully',
    schema: {
      type: 'object',
      properties: {
        message: {
          type: 'string',
          example: 'OTP verified successfully',
        },
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid OTP or expired',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - Invalid or missing token',
  })
  verifyOTP(@Body() verifyOTPDto: VerifyOTPDto): { message: string } {
    const isValid = this.authService.verifyOTP(
      verifyOTPDto.email,
      verifyOTPDto.otp,
    );
    if (!isValid) {
      throw new BadRequestException('Invalid OTP or expired');
    }
    return {
      message: 'OTP verified successfully',
    };
  }
}
