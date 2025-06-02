import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { AppwriteService } from '../appwrite/appwrite.service';
import { AppwriteUser } from '../types/appwrite.types';

// Extend the Request interface to include user
declare global {
  namespace Express {
    interface Request {
      appwriteUser?: AppwriteUser;
    }
  }
}

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly appwriteService: AppwriteService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // return true;

    const request = context.switchToHttp().getRequest<Request>();
    const [type, token] = request.headers.authorization?.split(' ') ?? [];

    if (!type || type !== 'Bearer' || !token) {
      throw new UnauthorizedException(
        'Authorization header missing or invalid',
      );
    }

    try {
      request.appwriteUser = await this.appwriteService.verifyJWT(token);
      return true;
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
