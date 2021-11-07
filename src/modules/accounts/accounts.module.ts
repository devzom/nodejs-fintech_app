import { AccountsController } from './accounts.controller';
import { AccountsService } from './accounts.service';
import { AccountsProviders } from './accounts.provider';
import { DatabaseModule } from '../database/database.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [DatabaseModule],
  controllers: [AccountsController],
  providers: [AccountsProviders, AccountsService],
  exports: [AccountsProviders, AccountsService],
})
export class AccountsModule {}
