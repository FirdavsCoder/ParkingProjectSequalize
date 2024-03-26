import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsInt, IsNotEmpty, IsString } from 'class-validator';
import { RoleEnum } from 'src/common/enum/enums';

export class CreateUserDto {
  @ApiProperty({
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @ApiProperty({
    type: Number,
  })
  @IsInt()
  @IsNotEmpty()
  phoneNumber: number;

  @ApiProperty({
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    type: String,
  })
  @IsEnum(RoleEnum)
  @IsNotEmpty()
  role: RoleEnum;
}
