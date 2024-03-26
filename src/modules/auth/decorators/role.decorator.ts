import { SetMetadata } from '@nestjs/common';
import { ROLES_KEY } from 'src/common/consts/const';
import { RoleEnum } from 'src/common/enum/enums';

export const RoleDecorator = (...roles: Array<RoleEnum>) =>
  SetMetadata(ROLES_KEY, roles);
