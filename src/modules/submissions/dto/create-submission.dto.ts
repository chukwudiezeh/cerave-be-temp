import { IsEmail, IsNotEmpty, IsNumber, IsString, IsUrl, IsOptional, IsArray, ValidateNested, ArrayMinSize } from 'class-validator';
import { Type } from 'class-transformer';

export class SubmissionItemDto {
  @IsNotEmpty({ message: 'Participation category is required' })
  @IsNumber({}, { message: 'Participation category must be a number' })
  participationCategoryId: number;

  @IsNotEmpty({ message: 'Content category is required' })
  @IsNumber({}, { message: 'Content category must be a number' })
  contentCategoryId: number;

  @IsNotEmpty({ message: 'Content URL is required' })
  @IsUrl({}, { message: 'Invalid URL format' })
  contentUrl: string;
}

export class CreateSubmissionDto {
  @IsNotEmpty({ message: 'First name is required' })
  @IsString()
  firstname: string;

  @IsNotEmpty({ message: 'Surname is required' })
  @IsString()
  surname: string;

  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail({}, { message: 'Invalid email format' })
  email: string;

  @IsNotEmpty({ message: 'Mobile is required' })
  @IsString()
  mobile: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsArray({ message: 'Submissions must be an array' })
  @ArrayMinSize(1, { message: 'At least one submission is required' })
  @ValidateNested({ each: true })
  @Type(() => SubmissionItemDto)
  submissions: SubmissionItemDto[];
}
