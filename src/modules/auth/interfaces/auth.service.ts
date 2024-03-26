import { UserEntity } from '../../users/entities/user.entity';

export interface ILoginData {
  user: UserEntity;
  token: string;
}
