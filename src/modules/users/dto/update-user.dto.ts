import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsInt, IsOptional, IsString } from 'class-validator';
import { RoleEnum } from 'src/common/enum/enums';

export class UpdateUserDto {
  @ApiPropertyOptional({
    type: String,
  })
  @IsString()
  @IsOptional()
  fullName: string;

  @ApiPropertyOptional({
    type: Number,
  })
  @IsInt()
  @IsOptional()
  phoneNumber: number;

  @ApiPropertyOptional({
    type: String,
  })
  @IsString()
  @IsOptional()
  password: string;

  @ApiPropertyOptional({
    type: String,
  })
  @IsEnum(RoleEnum)
  @IsOptional()
  role: RoleEnum;
}
