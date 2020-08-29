import { UsersService } from './user.service';
import { UsersController } from './user.contoller';
import { Module } from '@nestjs/common';
import { UsersProvider } from './user.provider';
import { AccountsModule } from '../accounts/accounts.module';

@Module({
  controllers: [UsersController],
  imports: [AccountsModule],
  providers: [UsersProvider, UsersService],
  exports: [UsersProvider, UsersService],
})
export class UserModule {}
