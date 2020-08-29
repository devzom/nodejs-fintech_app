import { Body, Controller, Get, Param, Post, Render, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { OperationsService } from './modules/operations/operations.service';

//! import transactions/operation on account files
import { IOperation } from './modules/operations/interface/operations.interface'
import { CreateOperation } from './modules/operations/interface/create-operation';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly operationsService: OperationsService) { }

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

  @Get('transaction')
  async index(): Promise<IOperation[]> {
    return this.operationsService.get();
  }

  @Post('transaction')
  create(@Body() createOperation: CreateOperation, @Param() param: any) {
    this.operationsService.create(createOperation);
    console.log(createOperation);
    return createOperation;
  }
}
