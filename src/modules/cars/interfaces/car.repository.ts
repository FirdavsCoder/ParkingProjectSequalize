import { UpdateCarDto } from "../dto/update-car.dto";
import { CarEntity } from "../entities/car.entity";

export interface ICarRepository{
    getAll():Promise<Array<CarEntity>>;
    getById(id:number):Promise<CarEntity | undefined>;
    create(entity:CarEntity):Promise<CarEntity>;
    update(id: number, dto: UpdateCarDto);
    delete(id:number);
}