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