import { Module, MiddlewareConsumer } from '@nestjs/common';
import { ApiGatewayController } from './api-gateway.controller';
import { ApiGatewayService } from './api-gateway.service';
import { LoggerModule } from '@libs/logger';
import { RequestIdMiddleware } from './common/middleware/request-id.middleware';
import { DatabaseModule } from '@libs/database';

@Module({
  imports: [LoggerModule, DatabaseModule],
  controllers: [ApiGatewayController],
  providers: [ApiGatewayService],
})
export class ApiGatewayModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestIdMiddleware).forRoutes('*');
  }
}
