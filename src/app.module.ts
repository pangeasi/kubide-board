import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { NoteModule } from './note/note.module';
import { FavModule } from './fav/fav.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'kubideboard',
      entities: [`${__dirname}./**/*entity{.ts,.js}`],
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    NoteModule,
    FavModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
