import { Injectable } from '@nestjs/common';
import { ITransaction } from './interface/transaction.interface';

@Injectable()
export class TransactionService {
  date = Date.now();

  setsetRandomAccountNumber = () => {
    const number = Math.max(999999999999999) * Math.random();
    return number.toFixed(0);
  };

  setTransactionDate = () => new Date().getDate();

  private readonly transactions: ITransaction[] = [
    {
      id: this.date,
      balance: 1000,
      accountNumber: setRandomAccountNumber(),
      name: `Test payment ${this.date}`,
      createdAt: setTransactionDate(),
    },
    {
      id: this.date,
      balance: 1500,
      accountNumber: setRandomAccountNumber(),
      name: `Test2 payment ${this.date}`,
      createdAt: setTransactionDate(),
    },
  ];

  get() {
    return this.transactions;
  }

  find(id: number): ITransaction {
    const transaction: ITransaction = this.transactions[id];
    if (!transaction) throw new Error('Transaction not found.');

    return transaction;
  }

  create(itransaction: ITransaction) {
    const id = Date.now();
    const data = (this.transactions[id] = { ...itransaction, id });

    this.transactions.push(data);
    return itransaction;
  }
}
