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

    get() {
        return this.transactions;
    }

    find(id: number): ITransaction {
        const transaction: ITransaction = this.transactions[id];
        if (!transaction) throw new Error("Transaction not found.");

        return transaction;
    }

    create(itransaction: ITransaction) {
        const id = Date.now();
        const data = this.transactions[id] = { ...itransaction, id };

        this.transactions.push(data);
        return itransaction;
    }
}
