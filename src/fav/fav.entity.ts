import { BaseEntityExtended } from 'src/helpers/db/entity-extended';
import { Note } from 'src/note/note.entity';
import { User } from 'src/user/user.entity';
import { Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';

@Entity()
export class Fav extends BaseEntityExtended {
  @JoinColumn()
  @ManyToOne(() => Note, (note) => note.fav)
  note: Note;

  @JoinColumn()
  @ManyToOne(() => User, (user) => user.favs)
  user: User;
}
