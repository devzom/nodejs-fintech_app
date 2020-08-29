import { AccountsService } from './accounts.service';
import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
  Put,
  Delete, Param, Get
} from '@nestjs/common';

@Controller('accounts')
export class AccountsController {
  constructor(private accountsService: AccountsService) { }

  @Post('create')
  public async register(@Body() UserId: number): Promise<any> {
    const result: any = await this.accountsService.create(UserId);
    if (!result.success) {
      throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
    }
    return result;
  }

  @Delete('delete/:id')
  public async delete(@Param('id') id: number): Promise<any> {
    const result: any = await this.accountsService.delete(id);
    return result;
  }

  @Put('update')
  public async update(@Body() body: number): Promise<any> {
    //? body: [AccountId, Balance]
    const result: any = await this.accountsService.update(body);

    if (!result.success) {
      throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
    }
    return result;
  }
}
