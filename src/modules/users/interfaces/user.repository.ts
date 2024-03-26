import { UpdateUserDto } from '../dto/update-user.dto';
import { UserEntity } from '../entities/user.entity';

export interface IUserRepository {
  getAll(): Promise<Array<UserEntity>>;
  getById(id: number): Promise<UserEntity | undefined>;
  getUserByNumber(phoneNumber: number): Promise<UserEntity | undefined>;
  create(entity: UserEntity): Promise<UserEntity>;
  update(id: number, dto: UpdateUserDto);
  delete(id: number): Promise<number>;
}
