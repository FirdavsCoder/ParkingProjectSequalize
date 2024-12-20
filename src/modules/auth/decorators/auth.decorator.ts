import { SetMetadata, UseGuards, applyDecorators } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { AuthGuard } from 'src/modules/shared/guards/auth.guard';
import { RolesGuard } from 'src/modules/shared/guards/role.guard';
import { RoleEnum } from 'src/common/enum/enums';
import { ROLES_KEY } from 'src/common/consts/const';

export function Auth(...roles: RoleEnum[]) {
  return applyDecorators(
    SetMetadata(ROLES_KEY, roles),
    UseGuards(AuthGuard, RolesGuard),
    ApiBearerAuth(),
    ApiUnauthorizedResponse({ description: 'Unauthorized' }),
    ApiBadRequestResponse({ description: 'Bad Request' }),
    ApiOkResponse({ description: 'OK' }),
    ApiForbiddenResponse({ description: 'Forbidden resource' }),
  );
}
