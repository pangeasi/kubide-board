import {
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SessionType } from 'src/helpers/entities/session.type';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly user: Repository<User>,
  ) {}
  me(session: SessionType) {
    if (!session.user) return new NotAcceptableException();
    return session.user;
  }

  async login(mail, password, session) {
    if (!session.user) {
      const user = await this.user.findOne({ where: { mail, password } });
      if (!user) return new NotFoundException();
      session.user = user;
      return user;
    }
    return session.user;
  }

  async register(user) {
    return await this.user.save(user);
  }
}
