import { Inject, Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { ICarService } from './interfaces/car.service';
import { ResData } from 'src/common/resData';
import { CarEntity } from './entities/car.entity';
import { ICarRepository } from './interfaces/car.repository';
import { CarNotFoundException } from './exception/cars.exception';

@Injectable()
export class CarsService implements ICarService {
  constructor(
    @Inject('ICarRepository') private readonly carRepository: ICarRepository,
  ) {}
  async create(createCarDto: CreateCarDto): Promise<ResData<CarEntity>> {
    const newCar = new CarEntity();
    newCar.model = createCarDto.model;
    newCar.carIndex = createCarDto.carIndex;
    newCar.userId = createCarDto.userId;
    const createdCar = await this.carRepository.create(newCar);
    return new ResData<CarEntity>('car created', 201, createdCar);
  }

  async findAll(): Promise<ResData<Array<CarEntity>>> {
    const foundCars = await this.carRepository.getAll();
    return new ResData<CarEntity[]>('all cars', 200, foundCars);
  }

  async findOne(id: number): Promise<ResData<CarEntity>> {
    const foundCar = await this.carRepository.getById(id);
    if (!foundCar) {
      throw new CarNotFoundException();
    }
    return new ResData<CarEntity>('car found', 200, foundCar);
  }

  async update(
    id: number,
    updateCarDto: UpdateCarDto,
  ): Promise<ResData<CarEntity>> {
    await this.findOne(id);
    const updatedCar = await this.carRepository.update(id, updateCarDto);
    return new ResData<CarEntity>('car updated', 200, updatedCar);
  }

  async remove(id: number): Promise<ResData<number | any>> {
    const { data: foundCar } = await this.findOne(id);
    const deletedCar = await this.carRepository.delete(id);
    return new ResData<CarEntity>('car deleted', 200, foundCar);
  }
}
