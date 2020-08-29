import { Controller, Get, Render, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  //TODO implement later
  //dynamic template rendering
  // @Get()
  // root(@Res() res: Response) {
  //   return res.render(
  //     this.appService.getViewName(),
  //     { message: 'Dynamic view rendering' }
  //   );
  // }

  //? default view render
  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Get()
  @Render('pages/home')
  home() {
    return {
      title: 'BankingApp',
      body: 'NestJS based banking API'
    };
  }

  @Get('account')
  @Render('pages/account')
  about() {
    return { title: 'Account login page' };
  }
}
