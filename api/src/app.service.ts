import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { msg: string, server: any } {
    return { msg: 'Hello World!', server: process.env.SERVER };
  }
}
