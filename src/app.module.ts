import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { from } from 'rxjs';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { DatabaseModule } from './modules/database/database.module';


@Module({
  imports: [
    // serve static files
    // 
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),

    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
