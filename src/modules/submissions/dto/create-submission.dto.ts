import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUrl,
  IsOptional,
} from 'class-validator';

export class CreateSubmissionDto {
  // Participant fields
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

  // Submission fields
  @IsNotEmpty({ message: 'Participation category is required' })
  @IsNumber()
  participationCategoryId: number;

  @IsNotEmpty({ message: 'Content category is required' })
  @IsNumber()
  contentCategoryId: number;

  @IsNotEmpty({ message: 'Content URL is required' })
  @IsUrl({}, { message: 'Invalid URL format' })
  contentUrl: string;
}
