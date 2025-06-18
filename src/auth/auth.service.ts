import { Inject, Injectable } from '@nestjs/common';
import { OTPContext } from './dto/send-otp.dto';
import { MailerService } from '@nestjs-modules/mailer';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

interface OTPConfig {
  length: number;
  expiryMinutes: number;
  message: string;
}

@Injectable()
export class AuthService {
  constructor(
    private readonly mailerService: MailerService,
    @Inject(CACHE_MANAGER) private cache: Cache,
  ) {}

  private getOTPConfig(context: OTPContext): OTPConfig {
    switch (context) {
      case OTPContext.VERIFY_EMAIL:
        return {
          length: 6,
          expiryMinutes: 10,
          message: 'Your email verification code is: {otp}',
        };
      case OTPContext.PASSWORD_RESET:
        return {
          length: 6,
          expiryMinutes: 10,
          message: 'Your password reset code is: {otp}',
        };
      default:
        return {
          length: 4,
          expiryMinutes: 10,
          message: 'Your verification code is: {otp}',
        };
    }
  }

  private generateOTP(length: number): string {
    return Math.floor(Math.random() * Math.pow(10, length))
      .toString()
      .padStart(length, '0');
  }

  async sendOTP(email: string, context: OTPContext): Promise<void> {
    const { length, expiryMinutes } = this.getOTPConfig(context);
    const otp = this.generateOTP(length);

    await this.cache.set(`otp:${email}`, otp, expiryMinutes * 60 * 1000);

    // Send email using nodemailer
    await this.mailerService.sendMail({
      to: email,
      subject: `Your ${context} verification code`,
      template: 'otp',
      context: {
        otp,
        context,
        expiryMinutes,
      },
    });
  }

  async verifyOTP(email: string, otp: string): Promise<boolean> {
    const key = `otp:${email}`;
    const saved = await this.cache.get<string>(key);
    if (saved !== otp) return false;

    await this.cache.del(key);
    await this.cache.set(`verified:${email}`, '1', 60 * 60 * 1000);
    return true;
  }
}
