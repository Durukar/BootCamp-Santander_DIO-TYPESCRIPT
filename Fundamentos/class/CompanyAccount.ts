import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  cnpj_id: number;

  constructor(cnpj_id:number, name: string, accountNumber: number){
    super(name, accountNumber);
    this.cnpj_id = cnpj_id;
  }

  getLoan = (): void => {
    console.log('Você pegou um empréstimo')
  }

  deposit = (): void => {
    console.log('A empresa depositou')
  }
}