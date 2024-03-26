import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarsController } from './cars.controller';
import { CarRepository } from './cars.repository';
import { SequelizeModule } from '@nestjs/sequelize';
import { CarEntity } from './entities/car.entity';
import { UsersService } from '../users/users.service';
import { UserRepository } from '../users/users.repository';
import { UserEntity } from '../users/entities/user.entity';

@Module({
  imports:[SequelizeModule.forFeature([CarEntity, UserEntity])],
  controllers: [CarsController],
  providers: [
   {provide: "ICarService", useClass: CarsService},
   {provide:"ICarRepository", useClass: CarRepository},
  { provide: "IUserService", useClass: UsersService },
  { provide: "IUserRepository", useClass: UserRepository }
  ],
})
export class CarsModule {}
