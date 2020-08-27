import { UsersService } from './user.service';
import { UsersController } from './user.contoller';
import { Module } from '@nestjs/common';
import { UsersProvider } from './user.provider';



@Module({
    controllers: [UsersController],
    providers: [UsersProvider, UsersService],
    exports: [UsersProvider, UsersService]
})

export class UserModule { };