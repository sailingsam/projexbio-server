import { Module } from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { AppwriteModule } from '../appwrite/appwrite.module';
import { SuperAdminGuard } from './super-admin.guard';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MailerModule } from '../mailer/mailer.module';

@Module({
  imports: [AppwriteModule, MailerModule],
  controllers: [AuthController],
  providers: [AuthGuard, SuperAdminGuard, AuthService],
  exports: [AuthGuard, SuperAdminGuard, AppwriteModule, AuthService],
})
export class AuthModule {}
