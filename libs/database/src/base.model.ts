import {
  Column,
  CreatedAt,
  UpdatedAt,
  Model,
  DataType,
} from 'sequelize-typescript';

export abstract class BaseModel<T extends {}> extends Model<T> {
  @Column({
    type: DataType.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}
