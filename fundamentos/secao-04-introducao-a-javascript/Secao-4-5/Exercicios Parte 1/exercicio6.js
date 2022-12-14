//🚀 Modifique a estrutura das funções a seguir para que elas sejam arrow functions;


//   function numeroAleatorio() {
//     return Math.random()
//   }
//   console.log(numeroAleatorio());

  const numeroAleatorio = () => Math.random()
  console.log(numeroAleatorio());

//     function hello(nome) {
//     return `Olá, ${nome}!`
//   }
//   let nome = 'Ivan';
//   console.log(hello(nome));

  const hello = (nome) => `Olá, ${nome}!`
   
  let nome = 'Ivan';
  console.log(hello(nome));

//     function nomeCompleto(nome, sobrenome) {
//     return `${nome} ${sobrenome}`
//   }
//   let nome = 'Ivan';
//   let sobrenome = 'Pires';
//   console.log(nomeCompleto(nome, sobrenome));

  const nomeCompleto = (nome1, sobrenome) => `${nome1} ${sobrenome}`
 
  let nome1 = 'Ivan';
  let sobrenome = 'Pires';
  console.log(nomeCompleto(nome, sobrenome));