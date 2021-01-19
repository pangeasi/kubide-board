import { Body, Controller, Get, Param, Post, Session } from '@nestjs/common';
import { SessionType } from 'src/helpers/entities/session.type';
import { CreateNoteDTO } from './dtos/indext';
import { NoteService } from './note.service';

@Controller('note')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Get(':id')
  oneNote(@Param('id') id: string) {
    console.log(id);
    return this.noteService.oneNote(id);
  }

  @Get()
  getAllNotes() {
    return this.noteService.getAllNotes();
  }

  @Post()
  createNote(@Body() dto: CreateNoteDTO, @Session() session: SessionType) {
    return this.noteService.createNote(dto, session);
  }
}
