import { PartialType } from '@nestjs/mapped-types';
import { CreateNoteDTO } from './create-note.dto';
export class UpdateNoteDTO extends PartialType(CreateNoteDTO) {}
