import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Client, Account } from 'node-appwrite';
import { AppwriteUser } from '../common/types/appwrite.types';

@Injectable()
export class AppwriteService {
  private readonly serverClient: Client;

  constructor(private configService: ConfigService) {
    const endpoint = this.configService.getOrThrow('APPWRITE_ENDPOINT');
    const projectId = this.configService.getOrThrow('APPWRITE_PROJECT_ID');
    const apiKey = this.configService.getOrThrow('APPWRITE_API_KEY');

    this.serverClient = new Client()
      .setEndpoint(endpoint)
      .setProject(projectId)
      .setKey(apiKey);
  }

  getServerClient(): Client {
    return this.serverClient;
  }

  // Creates a new client for user operations with JWT
  createUserClient(jwt: string): Client {
    const endpoint = this.configService.getOrThrow('APPWRITE_ENDPOINT');
    const projectId = this.configService.getOrThrow('APPWRITE_PROJECT_ID');

    return new Client().setEndpoint(endpoint).setProject(projectId).setJWT(jwt);
  }

  async verifyJWT(token: string): Promise<AppwriteUser> {
    try {
      // Create a new client instance for JWT verification
      const userClient = this.createUserClient(token);
      const userAccount = new Account(userClient);

      const user = await userAccount.get();

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
        labels: user.labels,
      };
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        throw error;
      }
      throw new UnauthorizedException('Invalid token');
    }
  }
}
