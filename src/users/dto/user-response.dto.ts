import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsString,
  IsOptional,
  IsDate,
  IsArray,
  IsBoolean,
  ValidateNested,
} from 'class-validator';

export class SkillDto {
  @ApiProperty({ description: 'Unique identifier of the skill' })
  @IsString()
  id: string;

  @ApiProperty({ description: 'Name of the skill' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'URL-friendly slug of the skill' })
  @IsString()
  slug: string;
}

export class SocialLinkDto {
  @ApiProperty({ description: 'Social media platform name' })
  @IsString()
  platform: string;

  @ApiProperty({ description: 'URL of the social media profile' })
  @IsString()
  url: string;
}

export class UserCollegeDto {
  @ApiProperty({ description: 'College ID' })
  @IsString()
  collegeId: string;

  @ApiProperty({
    description: 'User type in the college',
    enum: ['STUDENT', 'FACULTY', 'GENERAL'],
  })
  @IsString()
  userType: 'STUDENT' | 'FACULTY' | 'GENERAL';

  @ApiProperty({ description: 'Whether user is admin of the college' })
  @IsBoolean()
  isAdmin: boolean;

  @ApiPropertyOptional({ description: 'Degree type (for students)' })
  @IsOptional()
  @IsString()
  degreeType?: string;

  @ApiPropertyOptional({ description: 'Branch (for students)' })
  @IsOptional()
  @IsString()
  branch?: string;

  @ApiProperty({ description: 'Whether the college association is verified' })
  @IsBoolean()
  verified: boolean;

  @ApiProperty({ description: 'Date when user joined the college' })
  @Type(() => Date)
  @IsDate()
  joinedAt: Date;

  @ApiProperty({ description: 'Date when user left the college' })
  @Type(() => Date)
  @IsDate()
  leftAt: Date;

  @ApiProperty({ description: 'College email address' })
  @IsString()
  collegeEmail: string;

  @ApiPropertyOptional({ description: 'Designation (for faculty)' })
  @IsOptional()
  @IsString()
  designation?: string;

  @ApiProperty({ description: 'College name' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'College slug' })
  @IsString()
  slug: string;

  @ApiPropertyOptional({ description: 'College logo URL' })
  @IsOptional()
  @IsString()
  logoUrl?: string;
}

export class UserResponseDto {
  @ApiProperty({ description: 'Unique identifier of the user' })
  @IsString()
  id: string;

  @ApiProperty({ description: 'First name of the user' })
  @IsString()
  firstName: string;

  @ApiPropertyOptional({ description: 'Middle name of the user' })
  @IsOptional()
  @IsString()
  middleName?: string;

  @ApiPropertyOptional({ description: 'Last name of the user' })
  @IsOptional()
  @IsString()
  lastName?: string;

  @ApiProperty({ description: 'Username of the user' })
  @IsString()
  username: string;

  @ApiProperty({ description: 'Email address of the user' })
  @IsString()
  email: string;

  @ApiProperty({ description: 'Whether user is a super admin' })
  @IsBoolean()
  isSuperAdmin: boolean;

  @ApiPropertyOptional({ description: 'User tagline' })
  @IsOptional()
  @IsString()
  tagline?: string;

  @ApiPropertyOptional({ description: 'User bio' })
  @IsOptional()
  @IsString()
  bio?: string;

  @ApiPropertyOptional({ description: 'Resume file ID' })
  @IsOptional()
  @IsString()
  resume?: string;

  @ApiProperty({ description: 'Appwrite ID of the user' })
  @IsString()
  appwriteId: string;

  @ApiPropertyOptional({ description: 'Website URL' })
  @IsOptional()
  @IsString()
  websiteUrl?: string;

  @ApiPropertyOptional({ description: 'Avatar URL' })
  @IsOptional()
  @IsString()
  avatarUrl?: string;

  @ApiProperty({ description: 'User skills', type: [SkillDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SkillDto)
  skills: SkillDto[];

  @ApiProperty({ description: 'User social links', type: [SocialLinkDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SocialLinkDto)
  socialLinks: SocialLinkDto[];

  @ApiProperty({
    description: 'User college associations',
    type: [UserCollegeDto],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UserCollegeDto)
  colleges: UserCollegeDto[];
}
