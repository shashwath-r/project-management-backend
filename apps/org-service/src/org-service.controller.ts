import { Controller, Get } from '@nestjs/common';
import { OrgService } from './org-service.service';

@Controller()
export class OrgServiceController {
  constructor(private readonly orgServiceService: OrgService) {}

  @Get()
  getHello(): string {
    return this.orgServiceService.getHello();
  }
}
