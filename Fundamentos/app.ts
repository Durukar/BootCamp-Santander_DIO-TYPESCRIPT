import { CompanyAccount } from './class/CompanyAccount';
import { PeopleAccount } from './class/PeopleAccount';

// Criação de contas
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Lucas', 10)
peopleAccount.deposit(80);

// Conta pessoa juridica
const companyAccount: CompanyAccount = new CompanyAccount(2 ,'Nath', 80)
companyAccount.deposit();