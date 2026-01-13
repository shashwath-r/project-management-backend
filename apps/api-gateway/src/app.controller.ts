import { Controller, Get, Query } from '@nestjs/common';
import { IsInt } from 'class-validator';

class TestDto {
  @IsInt()
  value: number;
}

@Controller()
export class AppController {
  @Get('test')
  test(@Query() query: TestDto) {
    return { received: query.value };
  }
}
