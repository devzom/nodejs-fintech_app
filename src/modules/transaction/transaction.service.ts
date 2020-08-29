import { Injectable } from '@nestjs/common';
import { ITransaction } from './interface/transaction.interface'

@Injectable()
export class TransactionService {

    private readonly transactions: ITransaction[] = [
        {
            id: 1,
            balance: 1000,
            accountNumber: 11111,
            name: '11'
        }
    ];

    get() {
        return this.transactions;
    }

    create(itransaction: ITransaction) {

        const id = Date.now();
        this.transactions.push(itransaction);

        // this.otransaction[id] = { ...itransaction, id };
        return itransaction;
    }
}
