import { Injectable } from '@nestjs/common';
import { IOperation } from './interface/operations.interface'

@Injectable()
export class OperationsService {

    private operations: IOperation[] = [];

    get() {
        return this.operations;
    }

    create(ioperation: IOperation) {
        this.operations.push(ioperation);
        return ioperation;
    }
}
