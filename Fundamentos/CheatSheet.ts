// let b: string = 'b'

// let m: string | number = 2

// Objetos

// Interface
interface Pessoa {
  nome: string,
  idade: number,
  profissao?: string
}

// Objeto pessoa sem a opcao opcional
const pessoa: Pessoa = {
  nome: 'Lucas',
  idade: 32
}

// Objeto pessoa com a opcao opcional
const outraPessoa: Pessoa = {
  nome: 'Paulo',
  idade: 25,
  profissao: 'Desenvolvedor'
}

// Array de objetos do tipo "Pessoa "
const arrayPessoas: Array<Pessoa> = [
  pessoa,
  outraPessoa
]

// Array do tipo number (primitivo)
const arrayNum: number[] = [
  1,2,3
]

// Array do tipo string (primitivo)
const arrayString: Array<string> = [
  'a', 'b', 'c'
]

// const num: number = 16;

// if(num > 15) {
//   console.log('Number is greater than 15');
// } else if (num === 15) {
//   console.log('Number is equal to 15');
// } else {
//   console.log('Number is less than 15');
// }

// objeto literal

const typeUser = {
  admin: 'Seja bem vindo admin',
  student: 'Você é um estudante',
  viewer: 'Você pode visualizar'
};

function validateUser(user: string) {
  console.log(typeUser[user as keyof typeof typeUser]);
};

const user = 'admin';

validateUser(user);
validateUser('student');
validateUser('viewer');

// Laços de repetiçao

//for

// for(let i=0; i <= 5; i++) {
//   console.log(i)
// }

let n = 2;
while(n < 6) {
  console.log(n);
  n++;
}

// Array

// const array: Array<number> = [1, 2, 3, 4];

// const stringArray: string[] = ['a', 'b', 'c'];

// console.log('Original: ', array);

// array.push(5);

// console.log('Novo: ', array);

// array.pop();

// console.log('Retirado: ', array)

// FIND

// const buscaNum = array.find(num => num > 1);

// console.log(buscaNum);