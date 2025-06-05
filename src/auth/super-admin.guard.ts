import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class SuperAdminGuard implements CanActivate {
  constructor() {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const appwriteUser = request.appwriteUser;

    if (!appwriteUser) {
      throw new UnauthorizedException('User not authenticated');
    }

    if (!appwriteUser.labels.includes('superuser')) {
      throw new UnauthorizedException('User is not a super admin');
    }

    return true;
  }
}
