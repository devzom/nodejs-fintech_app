import { Accounts } from './accounts.entity';
export const AccountsProviders = {
  provide: 'ACCOUNTS_REPOSITORY',
  useValue: Accounts,
};
