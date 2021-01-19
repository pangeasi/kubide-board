import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Note } from 'src/note/note.entity';
import { FavController } from './fav.controller';
import { Fav } from './fav.entity';
import { FavService } from './fav.service';

@Module({
  imports: [TypeOrmModule.forFeature([Fav, Note])],
  controllers: [FavController],
  providers: [FavService],
})
export class FavModule {}
