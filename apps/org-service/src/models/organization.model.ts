import { Table, Column, DataType, HasMany } from 'sequelize-typescript';
import { BaseModel } from '@libs/database';
import { Department } from './department.model';

@Table({
  tableName: 'organizations',
  underscored: true,
})
export class Organization extends BaseModel<Organization> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    defaultValue: 'ACTIVE',
  })
  status: string;

  @HasMany(() => Department)
  departments: Department[];
}
