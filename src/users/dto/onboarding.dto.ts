import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsOptional,
  IsEnum,
  IsUUID,
  IsDateString,
  IsBoolean,
  ValidateIf,
  MinLength,
  MaxLength,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export enum UserRole {
  STUDENT = 'STUDENT',
  FACULTY = 'FACULTY',
}

// Union DTO that handles both student and faculty cases with form data
export class OnboardingDto {
  @ApiProperty({
    description: 'Appwrite ID of the user',
    example: 'appwrite-user-id-123',
  })
  @IsString()
  @IsNotEmpty()
  appwriteId: string;

  @ApiProperty({
    description: 'User role - either STUDENT or FACULTY',
    enum: UserRole,
    example: UserRole.STUDENT,
  })
  @IsEnum(UserRole)
  role: UserRole;

  @ApiPropertyOptional({
    description: 'Avatar file upload',
    type: 'string',
    format: 'binary',
  })
  @IsOptional()
  avatar?: Express.Multer.File;

  @ApiProperty({
    description: 'Unique username for the user',
    example: 'john_doe',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(25)
  username: string;

  @ApiProperty({
    description: 'First name of the user',
    example: 'John',
  })
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiPropertyOptional({
    description: 'Middle name of the user',
    example: 'Michael',
  })
  @IsOptional()
  @IsString()
  middleName?: string;

  @ApiPropertyOptional({
    description: 'Last name of the user',
    example: 'Doe',
  })
  @IsOptional()
  @IsString()
  lastName?: string;

  @ApiProperty({
    description: 'Primary email address of the user',
    example: 'john.doe@gmail.com',
  })
  @IsEmail()
  @IsNotEmpty()
  primaryEmail: string;

  @ApiProperty({
    description: 'College ID where the user belongs',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @IsUUID()
  @IsNotEmpty()
  collegeId: string;

  @ApiProperty({
    description: 'College email address of the user',
    example: 'john.doe@college.edu',
  })
  @IsEmail()
  @IsNotEmpty()
  collegeEmail: string;

  // Student-specific fields
  @ApiPropertyOptional({
    description:
      'Program/degree type of the student (required for STUDENT role)',
    example: 'Bachelor of Technology',
  })
  @ValidateIf((o: OnboardingDto) => o.role === UserRole.STUDENT)
  @IsString()
  @IsNotEmpty()
  program?: string;

  @ApiPropertyOptional({
    description:
      'Branch/specialization of the student (required for STUDENT role)',
    example: 'Computer Science',
  })
  @ValidateIf((o: OnboardingDto) => o.role === UserRole.STUDENT)
  @IsString()
  @IsNotEmpty()
  branch?: string;

  @ApiPropertyOptional({
    description:
      'Start date of the program (YYYY-MM-DD format, required for STUDENT role)',
    example: '2023-08-01',
  })
  @ValidateIf((o: OnboardingDto) => o.role === UserRole.STUDENT)
  @IsDateString()
  @IsNotEmpty()
  startDate?: string;

  @ApiPropertyOptional({
    description:
      'End date of the program (YYYY-MM-DD format, required for STUDENT role)',
    example: '2027-05-30',
  })
  @ValidateIf((o: OnboardingDto) => o.role === UserRole.STUDENT)
  @IsDateString()
  @IsNotEmpty()
  endDate?: string;

  // Faculty-specific fields
  @ApiPropertyOptional({
    description:
      'Designation/position of the faculty member (required for FACULTY role)',
    example: 'Assistant Professor',
  })
  @ValidateIf((o: OnboardingDto) => o.role === UserRole.FACULTY)
  @IsString()
  @IsNotEmpty()
  designation?: string;
}

// Response DTO
export class OnboardingResponseDto {
  @ApiProperty({
    description: 'Success status of the onboarding process',
    example: true,
  })
  @IsBoolean()
  success: boolean;

  @ApiProperty({
    description: 'Response message',
    example: 'User onboarded successfully',
  })
  @IsString()
  message: string;

  @ApiPropertyOptional({
    description: 'User data after onboarding',
    example: {
      id: '123e4567-e89b-12d3-a456-426614174000',
      username: 'john_doe',
      firstName: 'John',
      email: 'john.doe@gmail.com',
    },
  })
  @IsOptional()
  user?: any;
}
