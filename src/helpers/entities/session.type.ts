import { Session } from 'express-session';

export type SessionType = Session & {
  user: { name: string; mail: string; password: string; id: string };
};
