import 'dotenv/config';

import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './api-gateway.module';
import { ValidationPipe } from '@nestjs/common';
import { ResponseInterceptor } from './common/interceptors/response.interceptor';
import { GlobalHttpExceptionFilter } from './common/filters/http-exception.filter';
import { LoggingInterceptor } from './common/interceptors/logging.inetrceptor';
import { AppLogger } from '@libs/logger';

async function bootstrap() {
  const app = await NestFactory.create(ApiGatewayModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // stripe unknown fields
      forbidNonWhitelisted: true, //throw error on extra fields,
      transform: true, // auto transform dtos
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  app.useGlobalInterceptors(new ResponseInterceptor());
  const logger = app.get(AppLogger);
  app.useGlobalFilters(new GlobalHttpExceptionFilter(logger));
  app.useGlobalInterceptors(new LoggingInterceptor(logger));

  await app.listen(process.env.port ?? 3000, () =>
    console.log('Api-Gateway Listening to port', process.env.port ?? 3000),
  );
}
bootstrap();
