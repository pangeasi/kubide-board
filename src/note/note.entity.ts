import { Fav } from 'src/fav/fav.entity';
import { BaseEntityExtended } from 'src/helpers/db/entity-extended';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Note extends BaseEntityExtended {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  message: string;

  @OneToOne(() => Fav, (fav) => fav.note)
  fav: Fav;
}
