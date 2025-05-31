import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findByAppwriteId(appwriteId: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        appwriteid: appwriteId,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async isUsernameAvailable(username: string): Promise<boolean> {
    const user = await this.prisma.user.findUnique({
      where: {
        username: username,
      },
    });
    // agar user null mila mtlb exist nhi krta
    return user === null;
  }
}
