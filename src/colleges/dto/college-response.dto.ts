import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import { IsString, IsOptional, IsDate, IsArray } from 'class-validator';

export class CollegeResponseDto {
  @ApiProperty({ description: 'Unique identifier of the college' })
  @IsString()
  id: string;

  @ApiProperty({ description: 'Name of the college' })
  @IsString()
  @Transform(({ value }: { value: string }) => value?.trim())
  name: string;

  @ApiProperty({ description: 'URL-friendly slug of the college name' })
  @IsString()
  @Transform(({ value }: { value: string }) => value?.trim())
  slug: string;

  @ApiProperty({ description: 'Description of the college', required: false })
  @IsOptional()
  @IsString()
  @Transform(
    ({ value }: { value: string | null }) => value?.trim() || undefined,
  )
  description?: string;

  @ApiProperty({ description: 'Location of the college', required: false })
  @IsOptional()
  @IsString()
  @Transform(
    ({ value }: { value: string | null }) => value?.trim() || undefined,
  )
  location?: string;

  @ApiProperty({ description: 'Website URL of the college', required: false })
  @IsOptional()
  @IsString()
  @Transform(
    ({ value }: { value: string | null }) => value?.trim() || undefined,
  )
  website?: string;

  @ApiProperty({ description: 'File ID of the college logo', required: false })
  @IsOptional()
  @IsString()
  logoFileId?: string;

  @ApiProperty({
    description: 'File ID of the college cover image',
    required: false,
  })
  @IsOptional()
  @IsString()
  coverImgFileId?: string;

  @ApiProperty({
    description: 'List of email domains associated with the college',
    type: [String],
  })
  @IsArray()
  @IsString({ each: true })
  @Transform(({ value }: { value: { domain: string }[] }) =>
    value?.map((domain) => domain.domain.trim()),
  )
  domains: string[];

  @ApiProperty({ description: 'Creation timestamp' })
  @Type(() => Date)
  @IsDate()
  createdAt: Date;

  @ApiProperty({ description: 'Last update timestamp' })
  @Type(() => Date)
  @IsDate()
  updatedAt: Date;
}
