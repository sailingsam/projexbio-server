import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class SuperAdminGuard implements CanActivate {
  constructor() {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const appwriteUser = request.appwriteUser;

    if (!appwriteUser) {
      throw new UnauthorizedException('User not authenticated');
    }

    if (!appwriteUser.labels.includes('superuser')) {
      throw new UnauthorizedException('User is not a super user');
    }

    return true;
  }
}
