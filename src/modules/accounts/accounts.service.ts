import { Injectable, Inject } from '@nestjs/common';
import { Accounts } from './accounts.entity';

@Injectable()
export class AccountsService {
  constructor(
    @Inject('ACCOUNTS_REPOSITORY')
    private accountsRepository: typeof Accounts,
  ) { }

  public async create(UserId: number): Promise<object> {
    const account = {
      Name: 'Account',
      Type: 'Personal Account',
      Balance: 1000,
      UserId: UserId,
    };
    const newAccount: any = await this.accountsRepository.create<Accounts>(
      account,
    );

    if (newAccount) {
      return {
        ...account,
        id: newAccount.id,
      };
    }
  }

  public async update(body?: any): Promise<any> {
    let response;
    const currency = "$";
    const value = Number(body['Balance']);
    const id = Number(body['AccountId']);

    if (!value || !id) {
      response = {
        message: 'Wrong data.',
        success: false
      }
    } else {
      //? using ternary operator to simply elseif
      response = {
        accountId: id,
        message: `Balance updated. ${value > 0 ? "Deposited:" : "Withdrawed:"} ${value} ${currency}`,
        success: true,
      }
    }
    return response;
  }

  public async delete(AccountId?: number): Promise<any> {
    return `Deleted account ID: ${AccountId}`;
  }

  public async getAccountsByUserId(UserId?: number): Promise<object> {
    const accounts = await Accounts.findAll<Accounts>({
      where: { UserId },
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });

    return accounts ? accounts : [];
  }

  public async getAccountsBalanceByUserId(UserId?: number): Promise<object> {
    const accountsBalance = await Accounts.findAll<Accounts>({
      where: { UserId },
      attributes: {
        exclude: ['Type', 'id', 'Email', 'Username', 'createdAt', 'updatedAt'],
      },
    });

    return accountsBalance ? accountsBalance : [];
  }
}
