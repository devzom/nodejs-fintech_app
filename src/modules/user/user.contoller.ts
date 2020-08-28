import { Controller, Post, Body, HttpException, HttpStatus, Res, Param, Headers } from '@nestjs/common';
import { UsersService } from './user.service';
import { IUser } from './interfaces/user.interface';


@Controller('users')

export class UsersController {
    constructor(private usersService: UsersService) { }

    //Create register function for API
    @Post('register')
    public async register(@Res() res, @Body() user: IUser): Promise<any> {
        const result: any = await this.usersService.create(user,);
        if (!result.success) {
            throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
        }
        return res.status(HttpStatus.OK).json(result);
    }


    //Create login function for API
    @Post('login')
    public async login(@Res() res, @Body() credentials: any): Promise<any> {
        const result: any = await this.usersService.login(credentials);

        if (!result.success) {
            throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
        }

        return res.status(HttpStatus.OK).json(result);
    }

    //Create auth endpoint

    @Post(':id')
    public async authenticate(@Param() params, @Res() res, @Headers() headers): Promise<any> {

        const token = headers.authorization.replace('Bearer', '');
        const result: any = await this.usersService.authenticate(params.id, token);

        if (!result.success) {
            throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
        }
        return res.status(HttpStatus.OK).json(result);
    }
}