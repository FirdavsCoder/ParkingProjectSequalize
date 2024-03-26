import { BelongsToMany, Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { CarEntity } from 'src/modules/cars/entities/car.entity';
import { ParkOwners, UserEntity } from 'src/modules/users/entities/user.entity';

@Table({tableName: "parks"})
export class ParkEntity extends Model {
  @Column({type: DataType.STRING(255), allowNull: false})
  name: string;

  @Column({type: DataType.INTEGER, field:"empty_parking_places", allowNull: false})
  empty_parking_places: number;

  @Column({type: DataType.INTEGER, allowNull: false})
  price:  number;

 @BelongsToMany(() => UserEntity, () => ParkOwners)
  authors: UserEntity[];
}
