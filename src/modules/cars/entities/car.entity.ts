import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { UserEntity } from 'src/modules/users/entities/user.entity';

@Table({tableName: "cars"})
export class CarEntity extends Model {
  @Column({type: DataType.STRING(255), allowNull: false})
  model: string;

  @Column({type: DataType.STRING, field:"index", allowNull: false, unique: true})
  carIndex: string;
  
  @ForeignKey(() => UserEntity)
  @Column({type: DataType.INTEGER, allowNull: false})
  userId: number;

  @BelongsTo(() => UserEntity)
  user: UserEntity;
}

