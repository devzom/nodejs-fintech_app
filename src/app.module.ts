import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { DatabaseModule } from './modules/database/database.module';
import { UserModule } from './modules/user/user.module';
import { AccountsModule } from './modules/accounts/accounts.module';
import { OperationsController } from './modules/operations/operations.controller';
import { OperationsService } from './modules/operations/operations.service';

@Module({
  imports: [
    DatabaseModule,
    UserModule,
    AccountsModule,
  ],
  controllers: [AppController, OperationsController],
  providers: [AppService, OperationsService],
})
export class AppModule { }
