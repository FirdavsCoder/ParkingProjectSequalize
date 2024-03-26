import { InjectModel } from '@nestjs/sequelize';
import { IUserRepository } from './interfaces/user.repository';
import { UserEntity } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';

export class UserRepository implements IUserRepository {
  constructor(
    @InjectModel(UserEntity) private readonly userModel: typeof UserEntity,
  ) {}
  async getAll(): Promise<UserEntity[]> {
    return await this.userModel.findAll();
  }

  async getUserByNumber(phoneNumber: number): Promise<UserEntity | undefined> {
    return await this.userModel.findOne({
      where: {
        phoneNumber: phoneNumber,
      },
    });
  }

  async getById(id: number): Promise<UserEntity | undefined> {
    return await this.userModel.findOne({
      where: {
        id: id,
      },
    });
  }
  async create(entity: UserEntity): Promise<UserEntity> {
    console.log('entity :', entity);

    return await this.userModel.create<UserEntity>({
      fullName: entity.fullName,
      phoneNumber: entity.phoneNumber,
      password: entity.password,
      role: entity.role,
    });
  }
  async update(id: number, dto: UpdateUserDto) {
    return await this.userModel.update<UserEntity>(dto, {
      fields: ['fullName', 'phoneNumber', 'password', 'role'],
      where: { id },
      returning: true,
    });
  }
  async delete(id: number): Promise<number> {
    return this.userModel.destroy({ where: { id: id } });
  }
}
