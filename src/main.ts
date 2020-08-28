import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


//in purpose to read root .env file
require('dotenv').config()

//declaration for adding any module by const
declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'debug']
  });
  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
  //for adding Hot-Reload feature
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

bootstrap();
