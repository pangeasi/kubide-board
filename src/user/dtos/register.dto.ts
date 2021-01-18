import { IsEmail, IsString } from 'class-validator';

export class RegisterDTO {
  @IsString()
  name: string;

  @IsString()
  password: string;

  @IsString()
  @IsEmail()
  mail: string;
}
