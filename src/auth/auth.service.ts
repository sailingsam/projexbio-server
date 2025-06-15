import { Injectable } from '@nestjs/common';
import { OTPContext } from './dto/send-otp.dto';
import { MailerService } from '@nestjs-modules/mailer';

interface OTPConfig {
  length: number;
  expiryMinutes: number;
  message: string;
}

@Injectable()
export class AuthService {
  private otpStore: Map<string, { otp: string; expiry: Date }> = new Map();

  constructor(private readonly mailerService: MailerService) {}

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
    const config = this.getOTPConfig(context);
    const otp = this.generateOTP(config.length);
    const expiry = new Date();
    expiry.setMinutes(expiry.getMinutes() + config.expiryMinutes);

    // Store OTP in memory (will be replaced with Redis later)
    this.otpStore.set(email, { otp, expiry });

    // Send email using nodemailer
    await this.mailerService.sendMail({
      to: email,
      subject: `Your ${context} verification code`,
      template: 'otp',
      context: {
        otp,
        context,
        expiryMinutes: config.expiryMinutes,
      },
    });
  }

  verifyOTP(email: string, otp: string): boolean {
    const storedData = this.otpStore.get(email);
    if (!storedData) return false;

    if (new Date() > storedData.expiry) {
      this.otpStore.delete(email);
      return false;
    }

    const isValid = storedData.otp === otp;
    if (isValid) {
      this.otpStore.delete(email);
    }
    return isValid;
  }
}
