export abstract class DioAccount {
  private name: string;
  private accountNumber: number;
  private balance: number = 0;

  constructor(name: string, accountNumber: number){
    this.name = name;
    this.accountNumber = accountNumber;
    console.log(`Conta criada.`)
  }

  getName = () => {
    return this.name;
  }
  getAccountNumber = () => {
    return this.accountNumber;
  }

  getBalance = () => {
    return this.balance;
  }

  // Methods
  deposit = (value:number): void => {
    console.log(`Depositado ${value} na sua conta`)
  }

  withdraw = (value:number): void => {
    console.log(`Retirado ${value} da sua conta`)
  }
}
