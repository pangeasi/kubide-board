import { Body, Controller, Get, Param, Post, Session } from '@nestjs/common';
import { SessionType } from 'src/helpers/entities/session.type';
import { CreateNoteDTO } from './dtos/indext';
import { NoteService } from './note.service';

@Controller('note')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Get()
  getAllNotes() {
    return this.noteService.getAllNotes();
  }

  @Get(':id')
  oneNote(@Param('id') id) {
    return this.oneNote(id);
  }

  @Post()
  createNote(@Body() dto: CreateNoteDTO, @Session() session: SessionType) {
    return this.noteService.createNote(dto, session);
  }
}
