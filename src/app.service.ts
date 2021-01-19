import { Injectable } from '@nestjs/common';
import { Converter } from 'showdown';
import { readFileSync } from 'fs';
@Injectable()
export class AppService {
  getHello(): string {
    const converter = new Converter();
    const readme = readFileSync(`${__dirname}/../README.md`, 'utf8');
    return converter.makeHtml(readme);
  }
}
