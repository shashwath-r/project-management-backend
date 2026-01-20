import {
  Table,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { BaseModel } from '@libs/database';
import { Organization } from './organization.model';

@Table({
  tableName: 'departments',
  underscored: true,
})
export class Department extends BaseModel<Department> {
  @ForeignKey(() => Organization)
  @Column(DataType.BIGINT)
  organizationId: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  isActive: boolean;

  @BelongsTo(() => Organization)
  organization: Organization;
}
