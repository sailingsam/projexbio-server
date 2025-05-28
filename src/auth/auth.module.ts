import { Module } from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { AppwriteModule } from '../appwrite/appwrite.module';

@Module({
  imports: [AppwriteModule],
  providers: [AuthGuard],
  exports: [AuthGuard, AppwriteModule],
})
export class AuthModule {}
