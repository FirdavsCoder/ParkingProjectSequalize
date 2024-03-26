import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { CarsModule } from './modules/cars/cars.module';
import { ParksModule } from './modules/parks/parks.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { TransactionModule } from './modules/transaction/transaction.module';
import { ParkOwners, UserEntity } from './modules/users/entities/user.entity';
import { ParkEntity } from './modules/parks/entities/park.entity';
import { CarEntity } from './modules/cars/entities/car.entity';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'firdavs2007',
      database: 'parking',
      models: [UserEntity, ParkEntity, CarEntity, ParkOwners],
      autoLoadModels: true,
      synchronize: true,
    }),
    UsersModule,
    CarsModule,
    ParksModule,
    TransactionModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
