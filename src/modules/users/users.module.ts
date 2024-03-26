import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserEntity } from './entities/user.entity';
import { UserRepository } from './users.repository';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([UserEntity]), 
  JwtModule.register({
    global: true,
    secret: 'ok',
    signOptions: { expiresIn: '1d' },
  })],
  controllers: [UsersController],
  providers: [
   {provide: "IUserService", useClass: UsersService},
   {provide: "IUserRepository", useClass: UserRepository}
  ],
})
export class UsersModule {}
