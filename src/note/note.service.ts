import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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
    return this.note.find({});
  }

  oneNote(id: string) {
    return this.note.find({ id });
  }

  createNote(dto: CreateNoteDTO) {
    return this.note.create(dto as Note);
  }
}
