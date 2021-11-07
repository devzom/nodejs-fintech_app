import {AccountsService} from './accounts.service';
import {Body, Controller, Delete, HttpException, HttpStatus, Param, Post, Put} from '@nestjs/common';

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
    return await this.accountsService.delete(id);
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
