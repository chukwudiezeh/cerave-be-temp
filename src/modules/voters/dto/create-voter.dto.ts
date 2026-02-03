import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateVoterDto {
  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail({}, { message: 'Invalid email format' })
  email: string;
}
