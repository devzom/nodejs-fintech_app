import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { DatabaseModule } from './modules/database/database.module';
import { UserModule } from './modules/user/user.module';
import { AccountsModule } from './modules/accounts/accounts.module';
import { TransactionController } from './modules/transaction/transaction.controller';
import { TransactionService } from './modules/transaction/transaction.service';

@Module({
  imports: [
    DatabaseModule,
    UserModule,
    AccountsModule,
  ],
  controllers: [AppController, TransactionController],
  providers: [AppService, TransactionService],
})
export class AppModule { }
