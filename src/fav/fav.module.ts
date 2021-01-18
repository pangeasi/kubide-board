import { Module } from '@nestjs/common';
import { FavController } from './fav.controller';

@Module({
  controllers: [FavController],
})
export class FavModule {}
