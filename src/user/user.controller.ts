import { Body, Controller, Get, Post, Session } from '@nestjs/common';
import { SessionType } from 'src/helpers/entities/session.type';
import { LoginDTO } from './dtos/login.dto';
import { RegisterDTO } from './dtos/register.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  me(@Session() session: SessionType) {
    return this.userService.me(session);
  }

  @Post('login')
  login(@Body() { mail, password }: LoginDTO, @Session() session: SessionType) {
    return this.userService.login(mail, password, session);
  }

  @Post('register')
  register(@Body() dto: RegisterDTO) {
    return this.userService.register(dto);
  }
}
