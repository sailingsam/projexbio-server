import { Module } from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { AppwriteModule } from '../appwrite/appwrite.module';
import { SuperAdminGuard } from './super-admin.guard';

@Module({
  imports: [AppwriteModule],
  providers: [AuthGuard, SuperAdminGuard],
  exports: [AuthGuard, SuperAdminGuard, AppwriteModule],
})
export class AuthModule {}
