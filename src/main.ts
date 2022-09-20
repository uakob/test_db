require('dotenv').config();

import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import bodyParser from 'body-parser';
import { NestExpressApplication } from '@nestjs/platform-express';
import { HttpExceptionFilter } from './filters';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.setGlobalPrefix('api');

  app.useGlobalPipes(new ValidationPipe(
    {
      transform: true,
    }
  ));

  // app.use(
  //   bodyParser.urlencoded({
  //     extended: true,
  //     limit: '10mb',
  //   }),
  // );

  app.use(bodyParser.json({ limit: '10mb' }));

  // app.enableCors({
  //   origin: corsOriginMap[appConfig.nodeEnv] || corsOriginMap[NODE_ENV.DEFAULT],
  //   credentials: true,
  // });

  // app.set('trust proxy', 1);

  const swaggerConfig = new DocumentBuilder()
    .setTitle('test')
    .setDescription('The test API schema')
    .setVersion('1.0')
    .addTag('test')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig, );

  SwaggerModule.setup('api', app, document, {
    swaggerOptions: { persistAuthorization: true },
  });

  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(process.env.APP_HTTP_PORT as any);
}


bootstrap().catch((error) => {
  console.error(error);
});
