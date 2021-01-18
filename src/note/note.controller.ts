import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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
  createNote(@Body() dto: CreateNoteDTO) {
    return this.noteService.createNote(dto);
  }
}
