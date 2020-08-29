export interface ITransaction {
    readonly id: number
    readonly name: string
    readonly balance: number
    readonly accountNumber: number

    //TODO change to DATE datatype later
    readonly createdAt: string
}
