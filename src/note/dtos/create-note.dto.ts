import { IsString } from 'class-validator';

export class CreateNoteDTO {
  @IsString()
  message: string;
}
