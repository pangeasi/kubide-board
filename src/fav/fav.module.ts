import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FavController } from './fav.controller';
import { Fav } from './fav.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Fav])],
  controllers: [FavController],
})
export class FavModule {}
