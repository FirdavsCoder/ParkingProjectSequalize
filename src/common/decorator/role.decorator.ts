import { SetMetadata } from '@nestjs/common';
import { ROLES_KEY } from '../consts/const';
import { RoleEnum } from '../enum/enums';

export const RoleDecorator = (...roles: RoleEnum[]) => SetMetadata(ROLES_KEY, roles);