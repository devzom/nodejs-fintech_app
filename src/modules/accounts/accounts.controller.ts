import { AccountsService } from './accounts.service';
import { Controller, Post, Body, HttpException, HttpStatus, Put } from '@nestjs/common';

@Controller('accounts')

export class AccountsController {
    constructor(private accountsService: AccountsService) { }

    @Post('create-account')

    public async register(@Body() UserId: number): Promise<any> {
        const result: any = await this.accountsService.create(UserId);
        if (!result.success) {
            throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
        }

        return result;
    }

    @Post('delete-account')
    public async delete(@Body() UserId: number): Promise<any> {
        const result: any = await this.accountsService.delete(UserId);

        return 'account delete - test';
    }

    @Put('update-account')
    public async update(@Body() UserId: number): Promise<any> {
        const result: any = await this.accountsService.update(UserId);

        return 'account update - test';
    }
}