import { PartialType } from '@nestjs/mapped-types';
import { CreateCarDto } from './create-car.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateCarDto {
    @ApiPropertyOptional({
        type: String,
    })
    @IsString()
    @IsOptional()
    model: string;

    @ApiPropertyOptional({
        type: String,
    })
    @IsString()
    @IsOptional()
    carIndex: string;

    @ApiPropertyOptional({
        type: Number,
    })
    @IsInt()
    @IsOptional()
    userId: number;
}
