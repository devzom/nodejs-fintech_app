import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<h1 style="color:gray; text-align: center">Nest JS BankApp</h1>';
  }
}
