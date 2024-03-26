import { Module } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { UserRepository } from '../users/users.repository';
import { UserEntity } from '../users/entities/user.entity';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    SequelizeModule.forFeature([UserEntity]),
    JwtModule.register({
      global: true,
      secret: 'ok',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [
    { provide: 'IUserRepository', useClass: UserRepository },
    { provide: 'IUserService', useClass: UsersService },
  ],
  exports: [
    { provide: 'IUserRepository', useClass: UserRepository },
    { provide: 'IUserService', useClass: UsersService },
  ],
})
export class SharedModule {}
