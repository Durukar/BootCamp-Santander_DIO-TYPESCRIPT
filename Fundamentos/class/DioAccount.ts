export abstract class DioAccount {
  private name: string;
  private accountNumber: number;
  private balance: number = 0;
  private status: boolean = false;

  constructor(name: string, accountNumber: number){
    this.name = name;
    this.accountNumber = accountNumber;
    console.log(`Conta criada.`)
  }

  public getName = () => {
    return this.name;
  }
  public getAccountNumber = () => {
    return this.accountNumber;
  }

  public getBalance = () => {
    return this.balance;
  }

  // Methods
  public deposit = (value:number): void => {
    if(this.validateStatus()) {
      console.log(`Depositado ${value} na sua conta`)
    }
  }

  public withdraw = (value:number): void => {
    console.log(`Retirado ${value} da sua conta`)
  }

  private validateStatus = (): boolean => {
    if(this.status) {
      return this.status
    }

    throw new Error('Account crakelad');
  }
}
