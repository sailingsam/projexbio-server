import {
  IsNotEmpty,
  IsString,
  IsArray,
  ArrayMinSize,
  IsOptional,
  IsUrl,
  Matches,
} from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateCollegeDto {
  @IsNotEmpty({ message: 'College name is required' })
  @IsString({ message: 'College name must be a string' })
  @Transform(({ value }) => value?.trim())
  name: string;

  @IsOptional()
  @IsString({ message: 'Description must be a string' })
  description?: string;

  @IsOptional()
  @IsString({ message: 'Location must be a string' })
  location?: string;

  @IsOptional()
  @IsUrl({}, { message: 'Website must be a valid URL' })
  website?: string;

  @IsArray({ message: 'Email domains must be an array' })
  @ArrayMinSize(1, { message: 'At least one email domain is required' })
  @IsString({ each: true, message: 'Each email domain must be a string' })
  @Matches(/^@/, { each: true, message: 'Each email domain must start with @' })
  emailDomains: string[];
}
