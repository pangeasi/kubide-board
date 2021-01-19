import { IsEmail, IsString } from 'class-validator';

export class LoginDTO {
  @IsString()
  password: string;

  @IsString()
  @IsEmail()
  mail: string;
}
