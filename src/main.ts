import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join, resolve } from 'path';
import * as hbs from 'hbs';
import { ValidationPipe } from '@nestjs/common';
import * as bodyParser from 'body-parser';





//in purpose to read root .env file
require('dotenv').config();
//declaration for adding any module by const
declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    // logger: ['error', 'debug'],
  });

  //Validation
  app.useGlobalPipes(new ValidationPipe());

  app.use(bodyParser.json());


  //view
  app.useStaticAssets(resolve('./src/public'));
  app.setBaseViewsDir(resolve('./src/views'));
  hbs.registerPartials(join('./src/views/partials'));

  app.setViewEngine('hbs');

  app.set('view options', {
    layout: 'layouts/layout',
  });
  //view

  await app.listen(process.env.APP_PORT);
  console.log(`Application is running on: ${await app.getUrl()}`);

  //for adding Hot-Reload feature
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

bootstrap();
