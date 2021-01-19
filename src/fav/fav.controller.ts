import {
  Body,
  Controller,
  Get,
  Post,
  Session,
  UnauthorizedException,
} from '@nestjs/common';
import { SessionType } from 'src/helpers/entities/session.type';

import { DoFavDTO } from './dtos/do-fav.dto';
import { FavService } from './fav.service';

@Controller('fav')
export class FavController {
  constructor(private readonly favService: FavService) {}
  @Get()
  getAllFavs(@Session() session: SessionType) {
    if (!session.user) return new UnauthorizedException();
    return this.favService.getAllFavs(session.user.id);
  }
  @Post()
  doFav(@Body() { note }: DoFavDTO, @Session() session: SessionType) {
    return this.favService.doFav(note, session.user);
  }
}
