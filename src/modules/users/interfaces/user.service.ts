import { ResData } from 'src/common/resData';
import { UserEntity } from '../entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

export interface IResDataToken {
  user: UserEntity;
  token: string;
}

export interface IUserService {
  findAll(): Promise<ResData<UserEntity[]>>;
  findOne(id: number): Promise<ResData<UserEntity>>;
  create(dto: CreateUserDto): Promise<ResData<IResDataToken>>;
  update(id: number, dto: UpdateUserDto);
  remove(id: number);
}
