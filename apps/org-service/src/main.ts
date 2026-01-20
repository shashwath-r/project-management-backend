import { NestFactory } from '@nestjs/core';
import { OrgModule } from './org-service.module';

async function bootstrap() {
  const app = await NestFactory.create(OrgModule);
  await app.listen(process.env.port ?? 3002);
}
bootstrap();
