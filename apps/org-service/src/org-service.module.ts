import { Module } from '@nestjs/common';
import { OrgServiceController } from './org-service.controller';
import { OrgService } from './org-service.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Organization } from './models/organization.model';
import { Department } from './models/department.model';

@Module({
  imports: [SequelizeModule.forFeature([Organization, Department])],
  controllers: [OrgServiceController],
  providers: [OrgService],
})
export class OrgModule {}
