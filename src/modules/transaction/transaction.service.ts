import { Injectable } from '@nestjs/common';
import { ITransaction } from './interface/transaction.interface'

@Injectable()
export class TransactionService {

    date = Date.now();

    private readonly transactions: ITransaction[] = [
        // {
        //     id: this.date,
        //     balance: 1000,
        //     accountNumber: this.date,
        //     name: `Test payment ${this.date}`
        // }
    ];

    getAll() {
        return this.transactions;
    }

    find(transID: number) {
    }

    create(itransaction: ITransaction) {
        const id = Date.now();
        this.transactions.push(itransaction);
        return itransaction;
    }


   
}
