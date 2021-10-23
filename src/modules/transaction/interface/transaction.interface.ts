export interface ITransaction {
  readonly id: number;
  readonly name: string;
  readonly balance: number;
  readonly accountNumber: number;

  // readonly targetAccountNumber: number;
  // readonly targetAccountHolder: string;

  //TODO change to DATE datatype later
  readonly createdAt: string;
}
