import { Fav } from 'src/fav/fav.entity';
import { BaseEntityExtended } from 'src/helpers/db/entity-extended';
import { User } from 'src/user/user.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Note extends BaseEntityExtended {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  message: string;

  @OneToMany(() => Fav, (fav) => fav.note)
  fav: Fav[];

  @ManyToOne(() => User, (user) => user.notes)
  user: User;
}
