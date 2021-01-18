import { Body, Controller, Get, Post } from '@nestjs/common';
import { RegisterDTO } from './dtos/register.dto';

@Controller('user')
export class UserController {
  @Get()
  me() {
    return 'kk';
  }

  @Get()
  login() {
    return '';
  }

  @Post()
  register(@Body() dto: RegisterDTO) {
    return dto;
  }
}
