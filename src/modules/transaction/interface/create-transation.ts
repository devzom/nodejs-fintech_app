import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateTransaction {
  @IsNumber() @IsOptional() readonly id: number;
  @IsString() readonly name: string;
  @IsNumber() readonly balance: number;
  @IsNumber() readonly accountNumber: number;

  // @IsNumber() readonly targetAccountNumber: number;
  // @IsString() @IsOptional() readonly targetAccountHolder: string;

  //TODO change to DATE datatype later
  @IsString() readonly createdAt: string;
}
