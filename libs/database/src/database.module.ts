import { Module, Global } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

@Global()
@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadModels: true,
      synchronize: false,
      logging: false,
    }),
  ],
  exports: [SequelizeModule],
})
export class DatabaseModule {}
