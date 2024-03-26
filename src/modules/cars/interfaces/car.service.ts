import { ResData } from "src/common/resData";
import { CarEntity } from "../entities/car.entity";
import { CreateCarDto } from "../dto/create-car.dto";
import { UpdateCarDto } from "../dto/update-car.dto";

export interface ICarService {
    findAll(): Promise<ResData<Array<CarEntity>>>;
    findOne (id: number): Promise<ResData<CarEntity>>;
    create(dto: CreateCarDto): Promise<ResData<CarEntity>>;
    update(id: number, dto: UpdateCarDto):Promise<ResData<CarEntity>>;
    remove(id: number);
}