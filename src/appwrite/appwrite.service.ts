import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Client, Account, Models } from 'node-appwrite';
import { AppwriteUser } from '../types/appwrite.types';

@Injectable()
export class AppwriteService {
  private readonly client: Client;
  private readonly account: Account;

  constructor(private configService: ConfigService) {
    const endpoint = this.configService.getOrThrow('APPWRITE_ENDPOINT');
    const projectId = this.configService.getOrThrow('APPWRITE_PROJECT_ID');

    this.client = new Client().setEndpoint(endpoint).setProject(projectId);
    this.account = new Account(this.client);
  }

  async verifyJWT(token: string): Promise<AppwriteUser> {
    try {
      this.client.setJWT(token);
      const user: Models.User<Models.Preferences> = await this.account.get();

      if (!user.emailVerification) {
        throw new UnauthorizedException('Email not verified');
      }

      if (!user.status) {
        throw new UnauthorizedException('User is not active');
      }

      return {
        appwriteId: user.$id,
        email: user.email,
        name: user.name,
      };
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        throw error;
      }
      throw new UnauthorizedException('Invalid token');
    }
  }
}
