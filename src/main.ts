import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


//in purpose to read root .env file
require('dotenv').config()

//declaration for adding any module by const
declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  //for adding Hot-Reload feature
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

bootstrap();
