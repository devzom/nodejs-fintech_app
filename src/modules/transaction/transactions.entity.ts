import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  ForeignKey,
  BelongsTo,
  TableOptions,
} from 'sequelize-typescript';
import { Accounts } from './../accounts/accounts.entity';

const tableOptions: TableOptions = {
  timestamp: true,
  tableName: 'Transactions',
} as TableOptions;

@Table(tableOptions)
export class Transactions extends Model<Transactions> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  })
  public id: number;

  @Column({
    type: DataType.CHAR(200),
    allowNull: false,
  })
  public Type: string;

  @Column({
    type: DataType.CHAR(200),
    allowNull: true,
  })
  public Title: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  public Amount: number;

  @ForeignKey(() => Accounts)
  public id: number;

  @BelongsTo(() => Accounts, {
    as: 'Accounts',
    foreignKey: 'id',
    targetKey: 'id',
  })
  public Users: Users;

  @CreatedAt
  public createdAt: Date;

  @UpdatedAt
  public updatedAt: Date;
}
