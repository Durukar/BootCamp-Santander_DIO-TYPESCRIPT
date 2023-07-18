// Dio Banking

// name, accountNumber
// depositar, sacar, ver saldo

abstract class Account {
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

class PeopleAccount extends Account{
  doc_id: number
  constructor(doc_id: number, name: string, accountNumber: number){
    super(name, accountNumber);
    this.doc_id = doc_id;
  }
}

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Lucas', 10)
console.log(peopleAccount);