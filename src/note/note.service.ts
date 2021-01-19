import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SessionType } from 'src/helpers/entities/session.type';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import { CreateNoteDTO } from './dtos/indext';
import { Note } from './note.entity';

@Injectable()
export class NoteService {
  constructor(
    @InjectRepository(Note)
    private readonly note: Repository<Note>,
  ) {}

  getAllNotes() {
    return this.note.find({ relations: ['user'] });
  }

  oneNote(id: string) {
    return this.note.find({ where: { id }, relations: ['user'] });
  }

  createNote(dto: CreateNoteDTO, session: SessionType) {
    if (!session.user) return new UnauthorizedException();
    return this.note.save({ user: session.user as User, ...dto });
  }
}
