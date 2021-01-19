import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Note } from 'src/note/note.entity';
import { Repository } from 'typeorm';
import { Fav } from './fav.entity';

@Injectable()
export class FavService {
  constructor(
    @InjectRepository(Fav)
    private readonly fav: Repository<Fav>,
    @InjectRepository(Note)
    private readonly note: Repository<Note>,
  ) {}

  getAllFavs(user) {
    return this.fav.find({ where: { user }, relations: ['user', 'note'] });
  }

  async doFav(noteId, user) {
    if (!user) return new UnauthorizedException();
    const note = await this.note.findOne({ id: noteId });
    if (!note) return new NotFoundException();
    return this.fav.save({ note, user });
  }
}
