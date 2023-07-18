interface User {
  nickname: string,
  roleAcess: {
    admin?: boolean;
    student?: boolean;
    viewer?: boolean;
  },
  avatar?: string;
}

function validateUserRoleAcess(role?: boolean) {
  return role
}

const lucasDavila: User = {
  nickname: 'Durukar',
  roleAcess: {
    admin: true
  },
  avatar: 'https://github.com/durukar.png'
}

console.log(validateUserRoleAcess(lucasDavila.roleAcess.admin))

// if (lucasDavila.nickname === 'Durukar') {
//   if (lucasDavila.roleAcess.admin === true) {
//     console.log('Bem vindo Admin')
//   } else if (lucasDavila.roleAcess.student === true) {
//     console.log('Bem vindo estudante')
//   } else if ( lucasDavila.roleAcess.viewer === true) {
//     console.log('Bem vindo visualizador')
//   } else {
//     console.log('Você nao tem role especificada, consulte o administrador do sitema para lhe auxiliar.')
//   }
// }

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