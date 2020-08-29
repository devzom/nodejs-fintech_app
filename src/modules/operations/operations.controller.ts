import {
  Controller,
  Get,
  Post,
  Body,
  HttpException,
  HttpStatus,
  Res,
  Param,
  Headers,
} from '@nestjs/common';

@Controller('operations')
export class OperationsController {
  @Post('deposit/:amount')
  public async deposit(
    @Param() params,
    @Res() res,
    @Body() body,
  ): Promise<any> {
    const result: any = `Processing deposit money to Your account. Amount: ${params.amount}$ - TEST`;

    return res.status(HttpStatus.OK).json(result);
  }

  @Post('withdraw/:amount')
  public async withdraw(
    @Param() params,
    @Res() res,
    @Body() body,
  ): Promise<any> {
    const result: any = `Withdrawing money from Your account. Amount: ${params.amount}$ - TEST`;

    if (!params.amount) {
      throw new HttpException(
        "Input amount You're about to withdraw.",
        HttpStatus.BAD_REQUEST,
      );
    }
    return res.status(HttpStatus.OK).json(result);
  }
}
