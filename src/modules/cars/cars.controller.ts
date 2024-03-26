import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Inject,
  Put,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/common/decorator/auth.decorator';
import { RoleEnum } from 'src/common/enum/enums';

@ApiTags('Cars')
@Controller('cars')
export class CarsController {
  constructor(
    @Inject('ICarService') private readonly carsService: CarsService,
  ) {}

  @Post()
  create(@Body() createCarDto: CreateCarDto) {
    return this.carsService.create(createCarDto);
  }

  @Auth(RoleEnum.ADMIN, RoleEnum.USER, RoleEnum.OWNER)
  @Get()
  findAll() {
    return this.carsService.findAll();
  }

  @Auth(RoleEnum.ADMIN, RoleEnum.USER, RoleEnum.OWNER)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carsService.findOne(+id);
  }

  @Auth(RoleEnum.ADMIN)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateCarDto: UpdateCarDto) {
    return this.carsService.update(+id, updateCarDto);
  }

  @Auth(RoleEnum.ADMIN, RoleEnum.USER)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carsService.remove(+id);
  }
}
