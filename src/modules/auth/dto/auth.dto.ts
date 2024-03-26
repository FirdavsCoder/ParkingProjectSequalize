import { IsEnum, IsInt, IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';
import { RoleEnum } from '../../../common/enum/enums';

export class LoginDto {
  @ApiProperty({ type: Number, description: 'User Login' })
  @IsInt()
  @IsNotEmpty()
  phoneNumber: number;

  @ApiProperty({ type: String, description: 'User Password' })
  @IsString()
  @IsNotEmpty()
  password: string;
}

export class RegisterDto {
  @ApiProperty({ type: String, description: 'User Full Name' })
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @ApiProperty({ type: Number, description: 'User Phone Number' })
  @IsInt()
  @IsNotEmpty()
  phoneNumber: number;

  @ApiProperty({ type: String, description: 'User Password' })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({ type: String, description: 'User Role' })
  @IsEnum(RoleEnum)
  @IsNotEmpty()
  role: RoleEnum;
}
