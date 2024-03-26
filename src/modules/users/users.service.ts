import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IUserRepository } from './interfaces/user.repository';
import { UserEntity } from './entities/user.entity';
import { ResData } from 'src/common/resData';
import { UserNotFoundException } from './exeption/excepton';
import { JwtService } from '@nestjs/jwt';
import { IResDataToken, IUserService } from './interfaces/user.service';

@Injectable()
export class UsersService implements IUserService {
  constructor(
    @Inject('IUserRepository') private readonly userRepository: IUserRepository,
    private jwtService: JwtService,
  ) {}
  async create(createUserDto: CreateUserDto): Promise<ResData<IResDataToken>> {
    const newUser = new UserEntity();
    newUser.fullName = createUserDto.fullName;
    newUser.phoneNumber = createUserDto.phoneNumber;
    newUser.password = createUserDto.password;
    newUser.role = createUserDto.role;
    console.log('new user :', newUser);
    const userCreated = await this.userRepository.create(newUser);
    const token = await this.jwtService.signAsync({ id: userCreated.id });
    return new ResData<IResDataToken>('User created', 201, {
      user: userCreated,
      token,
    });
  }

  async findAll(): Promise<ResData<UserEntity[]>> {
    const foundUsers = await this.userRepository.getAll();
    return new ResData<UserEntity[]>('Users found', 200, foundUsers);
  }

  async findOne(id: number): Promise<ResData<UserEntity>> {
    const foundUser = await this.userRepository.getById(id);
    if (!foundUser) {
      throw new UserNotFoundException();
    }
    return new ResData<UserEntity>('Users found', 200, foundUser);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.findOne(id);
    const updated = await this.userRepository.update(id, updateUserDto);
    return new ResData<UserEntity>('Users updated', 200, updated);
  }

  async remove(id: number): Promise<ResData<number>> {
    await this.findOne(id);
    const deleted = await this.userRepository.delete(id);
    return new ResData<number>('Users deleted', 200, deleted);
  }
}
