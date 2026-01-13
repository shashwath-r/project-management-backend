import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './api-gateway.module';
import { ValidationPipe } from '@nestjs/common';
import { ResponseInterceptor } from './common/interceptors/response.interceptor';
import { GlobalHttpExceptionFilter } from './common/filters/http-exception.filter';

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
  app.useGlobalFilters(new GlobalHttpExceptionFilter());

  await app.listen(process.env.port ?? 3000, () =>
    console.log('Api-Gateway Listening to port', process.env.port ?? 3000),
  );
}
bootstrap();
