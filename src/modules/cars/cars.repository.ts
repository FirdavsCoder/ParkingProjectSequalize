import { InjectModel } from '@nestjs/sequelize'
import { CarEntity } from './entities/car.entity'
import { ICarRepository } from './interfaces/car.repository'
import { UpdateCarDto } from './dto/update-car.dto'

export class CarRepository implements ICarRepository {
  constructor (
    @InjectModel(CarEntity) private readonly carModel: typeof CarEntity,
  ) {}
  async getAll (): Promise<Array<CarEntity>> {
    return await this.carModel.findAll()
  }
  async getById (id: number): Promise<CarEntity | undefined> {
    return await this.carModel.findOne({
      where: {
        id: id,
      },
    })
  }
  async create (entity: CarEntity): Promise<CarEntity> {
    return await this.carModel.create({
      model: entity.model,
      carIndex: entity.carIndex,
      userId: entity.userId,
    })
  }
  async update (id: number, dto: UpdateCarDto) {
    return await this.carModel.update(dto, {
      fields: ['model', 'carIndex', 'userId'],
      where: { id: id },
      returning: true,
    })
  }
  async delete (id: number): Promise<number> {
    return await this.carModel.destroy({ where: { id: id } })
  }
}
