import { IUser } from './interfaces/user.interface';
import { UsersService } from './user.service';
import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';

@Controller('users')

export class UsersController {
    constructor(
        private UsersService: UsersService,
    ) { }

    @Post('register')
    public async register(@Body() user: IUser): Promise<any> {
        const result: any = await this.UsersService.create(user);

        if (!result.success) {
            throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
        }
        return result;
    }
}