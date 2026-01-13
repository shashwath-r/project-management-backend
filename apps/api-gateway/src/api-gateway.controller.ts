import { Controller, Get } from '@nestjs/common';
import { ApiGatewayService } from './api-gateway.service';

import { Query } from '@nestjs/common';
import { IsInt } from 'class-validator';

class TestDto {
  @IsInt()
  value: number;
}

@Controller()
export class ApiGatewayController {
  constructor(private readonly apiGatewayService: ApiGatewayService) {}

  @Get()
  getHello(): string {
    return this.apiGatewayService.getHello();
  }

  @Get('test')
  test(@Query() query: TestDto) {
    return { received: query.value };
  }
}
