import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { CreateNoteDTO } from './dtos/indext';

@Controller('note')
export class NoteController {
  @Get()
  getAllNotes() {
    return '';
  }

  @Get(':id')
  oneNote() {
    return '';
  }

  @Post()
  createNote(@Body() dto: CreateNoteDTO) {
    return dto;
  }

  @Put(':id')
  updateNote() {
    return '';
  }

  @Delete(':id')
  deleteNote() {
    return '';
  }
}
