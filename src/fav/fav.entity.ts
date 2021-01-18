import { BaseEntityExtended } from 'src/helpers/db/entity-extended';
import { Note } from 'src/note/note.entity';
import { User } from 'src/user/user.entity';
import { Entity, JoinColumn, OneToOne } from 'typeorm';

@Entity()
export class Fav extends BaseEntityExtended {
  @JoinColumn()
  @OneToOne(() => Note, (note) => note.fav)
  note: Note;

  @JoinColumn()
  @OneToOne(() => User, (user) => user.favs)
  user: User;
}
