import { IsEmail, IsEnum, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export enum OTPContext {
  PASSWORD_RESET = 'password_reset',
  VERIFY_EMAIL = 'verify_email',
}

export class SendOTPDto {
  @ApiProperty({
    description: 'Email address to send the OTP to',
    example: 'user@example.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'Context for which the OTP is being sent',
    enum: OTPContext,
    example: OTPContext.VERIFY_EMAIL,
    enumName: 'OTPContext',
  })
  @IsEnum(OTPContext)
  @IsNotEmpty()
  context: OTPContext;
}
