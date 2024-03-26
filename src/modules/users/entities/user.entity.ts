import {
  AutoIncrement,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { RoleEnum } from 'src/common/enum/enums';
import { CarEntity } from 'src/modules/cars/entities/car.entity';
import { ParkEntity } from 'src/modules/parks/entities/park.entity';

@Table({ tableName: 'users' })
export class UserEntity extends Model {
  @Column({ type: DataType.STRING(255), field: 'full_name', allowNull: false })
  fullName: string;

  @Column({
    type: DataType.BIGINT,
    field: 'phone_number',
    allowNull: false,
    unique: true,
  })
  phoneNumber: number;

  @Column({ type: DataType.STRING(255), allowNull: false })
  password: string;

  @Column({
    type: DataType.ENUM(RoleEnum.ADMIN, RoleEnum.USER, RoleEnum.OWNER),
    allowNull: false,
  })
  role: RoleEnum;

  @HasMany(() => CarEntity)
  cars: Array<CarEntity>;

  @BelongsToMany(() => ParkEntity, () => ParkOwners)
  parks: ParkEntity[];
}

@Table({ tableName: 'park_owners' })
export class ParkOwners extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ field: 'id' })
  id: number;

  @ForeignKey(() => UserEntity)
  @Column({ field: 'user_id' })
  userId: number;

  @ForeignKey(() => ParkEntity)
  @Column({ field: 'park_id' })
  parkId: number;
}
