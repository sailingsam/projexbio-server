import {
  Injectable,
  NotFoundException,
  BadRequestException,
  Inject,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { UserStorageService } from '../appwrite/storage/user/userStorage.service';
import {
  OnboardingDto,
  UserRole,
  OnboardingResponseDto,
} from './dto/onboarding.dto';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    @Inject(CACHE_MANAGER) private cache: Cache,
    private userStorageService: UserStorageService,
  ) {}

  async findByAppwriteId(appwriteId: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        appwriteId,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    // Replace avatarFileId with avatarUrl
    const { avatarFileId, ...userWithoutFileId } = user;

    return {
      ...userWithoutFileId,
      avatarUrl: avatarFileId
        ? this.userStorageService.getUserAssetUrl(avatarFileId)
        : null,
    };
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

  async onboardUser(
    onboardingData: OnboardingDto,
  ): Promise<OnboardingResponseDto> {
    // Validate that user doesn't already exist
    const existingUser = await this.prisma.user.findFirst({
      where: {
        OR: [
          { appwriteId: onboardingData.appwriteId },
          { username: onboardingData.username },
          { email: onboardingData.primaryEmail },
        ],
      },
    });

    if (existingUser) {
      throw new BadRequestException(
        'User already exists with this username or primary email',
      );
    }

    // Check if college email is already used by another user
    const existingCollegeEmail = await this.prisma.userCollege.findUnique({
      where: {
        collegeEmail: onboardingData.collegeEmail,
      },
    });

    if (existingCollegeEmail) {
      throw new BadRequestException(
        'College email is already registered by another user',
      );
    }

    // Validate college exists
    const college = await this.prisma.college.findUnique({
      where: { id: onboardingData.collegeId },
      include: { emailDomains: true },
    });

    if (!college) {
      throw new BadRequestException(
        'College not found, please select a valid college or Request for college to be added',
      );
    }

    // Validate college email domain
    const emailDomain = '@' + onboardingData.collegeEmail.split('@')[1];
    const validDomain = college.emailDomains.some(
      (domain) => domain.domain === emailDomain,
    );

    if (!validDomain) {
      throw new BadRequestException(
        'College email domain does not match the selected college',
      );
    }

    // Check if college email is verified in cache
    const verifiedKey = `verified:${onboardingData.collegeEmail}`;
    const isVerified = await this.cache.get<string>(verifiedKey);

    if (!isVerified) {
      throw new BadRequestException(
        'College email is not verified. Please verify your college email first.',
      );
    }

    // Additional validations based on role
    if (onboardingData.role === UserRole.STUDENT) {
      // Validate dates
      const startDate = new Date(onboardingData.startDate!);
      const endDate = new Date(onboardingData.endDate!);

      if (startDate >= endDate) {
        throw new BadRequestException('Start date must be before end date');
      }
    }

    let avatarFileId: string | undefined;

    try {
      // Upload avatar if provided
      if (onboardingData.avatar) {
        avatarFileId = await this.userStorageService.uploadUserAsset(
          onboardingData.avatar,
        );
      }

      // Create user and user-college relationship in a transaction
      const result = await this.prisma.$transaction(async (tx) => {
        // Create user
        const user = await tx.user.create({
          data: {
            appwriteId: onboardingData.appwriteId,
            username: onboardingData.username,
            firstName: onboardingData.firstName,
            middleName: onboardingData.middleName,
            lastName: onboardingData.lastName,
            email: onboardingData.primaryEmail,
            avatarFileId,
          },
        });

        // Create user-college relationship
        const userCollegeData: {
          userId: string;
          collegeId: string;
          userType: UserRole;
          collegeEmail: string;
          verified: boolean;
          joinedAt: Date;
          leftAt: Date;
          degreeType?: string;
          branch?: string;
          designation?: string;
        } = {
          userId: user.id,
          collegeId: onboardingData.collegeId,
          userType: onboardingData.role,
          collegeEmail: onboardingData.collegeEmail,
          verified: true,
          joinedAt: new Date(),
          leftAt: new Date(),
        };

        if (onboardingData.role === UserRole.STUDENT) {
          userCollegeData.degreeType = onboardingData.program;
          userCollegeData.branch = onboardingData.branch;
          userCollegeData.joinedAt = new Date(onboardingData.startDate!);
          userCollegeData.leftAt = new Date(onboardingData.endDate!);
        } else if (onboardingData.role === UserRole.FACULTY) {
          userCollegeData.designation = onboardingData.designation;
        }

        await tx.userCollege.create({
          data: userCollegeData,
        });

        return user;
      });

      // Remove verification from cache after successful onboarding
      await this.cache.del(verifiedKey);

      return {
        success: true,
        message: 'User onboarded successfully',
        user: {
          id: result.id,
          username: result.username,
          firstName: result.firstName,
          email: result.email,
        },
      };
    } catch {
      // Clean up uploaded avatar if database operation fails
      if (avatarFileId) {
        await this.userStorageService.deleteUserAsset(avatarFileId);
      }
      throw new BadRequestException(
        'Failed to onboard user. Please try again.',
      );
    }
  }
}
