import { IsUUID } from 'class-validator';

export class DoFavDTO {
  @IsUUID()
  note: string;
}
