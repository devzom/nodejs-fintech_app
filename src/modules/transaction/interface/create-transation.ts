import { IsDate, IsNumber, IsOptional, IsString } from "class-validator"

export class CreateTransaction {
    @IsNumber() @IsOptional() readonly id: number
    @IsString() readonly name: string
    @IsNumber() readonly balance: number
    @IsNumber() readonly accountNumber: number

    //TODO change to DATE datatype later
    @IsString() @IsOptional() readonly createdAt: string
}
