import { Fav } from 'src/fav/fav.entity';
import { BaseEntityExtended } from 'src/helpers/db/entity-extended';
import { Note } from 'src/note/note.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class User extends BaseEntityExtended {
  @Column()
  name: string;

  @Column()
  mail: string;

  @Column()
  password: string;

  @OneToMany(() => Fav, (fav) => fav.user)
  favs: Fav[];

  @OneToMany(() => Note, (note) => note.user)
  notes: Note[];
}
