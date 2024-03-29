// const myRemove = require('./script');

// // A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item, caso ele exista no array:
// // Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado;

// // Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4];

// // Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado.



// describe('Exercicío 1', () => {
//     test('Verifica array', () => {
//         expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4], 3)
//     })

//     test('Verifica req 2', () => {
//         expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
//     })

//     test('Verifica req 3', () => {
//         expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
//     })
// // })

// const myFizzBuzz = require('./script')

// A função myFizzBuzz(num) recebe um número num como parâmetro. Caso num seja um número divisível por 3 e 5, a função retorna "fizzbuzz". Caso num seja um número divisível apenas por 3, retorna "fizz". E caso num seja um número divisível apenas por 5, retorna "buzz". Se num for um número que não é divisível nem por 3 e nem por 5, a função retorna o próprio número num. Caso num não seja um número, a função retorna false.
// Execute a função myFizzBuzz(num), sendo num um número divisível por 3 e 5, e verifique se o retorno é o esperado.

// Execute a função myFizzBuzz(num), sendo num um número divisível por 3, e verifique se o retorno é o esperado.

// Execute a função myFizzBuzz(num), sendo num um número divisível por 5, e verifique se o retorno é o esperado.

// Execute a função myFizzBuzz(num), sendo num um número que não é divisível por 3 ou 5, e verifique se o retorno é o esperado.

// Execute a função myFizzBuzz(num), sendo num um parâmetro que não é um número, e verifique se o retorno é o esperado.

// describe('Exercício 2', () => {
//     test('Req 1', () => {
//         expect(myFizzBuzz(15)).toBe('fizzbuzz')
//     })

//     test('Req 2', () => {
//         expect(myFizzBuzz(3)).toBe('fizz')
//     })

//     test('Req 3', () => {
//         expect(myFizzBuzz(5)).toBe('buzz')
//     })

//     test('Req 4', () => {
//         expect(myFizzBuzz(4)).toBe(4)
//     })

//     test('Req 5', () => {
//         expect(myFizzBuzz('t')).toBe(false)
//     })
// })
// const mapString = require('./script')
// const encode = require('./script')
// const decode = require('./script')


// // Para as funções encode e decode, crie os seguintes testes em Jest:
// // Teste se encode e decode são funções;
// // Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
// // Para a função decode, teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente;
// // Teste se as demais letras/números não são convertidos para cada caso;
// // Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro.

// describe('Exercício 3', () => {
//     test('Req 1', () => {
//         expect(typeof encode).toEqual('function')
//         expect(typeof decode).toEqual('function')
//     })

//     test('Req 2', () => {
//         expect(encode(['a'])).toBe(1)
//     })
// })

// const techList = require('./script.js');

// describe('Testa a função techList', () => {
//   it('Testa se a função techList é definida', () => {
//     expect(techList).toBeDefined();
//   });
//   it('Testa se techList é uma função', () => {
//     expect(typeof techList).toBe('function');
//   });
//   it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
//     expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
//       {
//         tech: 'CSS',
//         name: 'Lucas'
//       },
//       {
//         tech: 'HTML',
//         name: 'Lucas'
//       },
//       {
//         tech: 'JavaScript',
//         name: 'Lucas'
//       },
//       {
//         tech: 'Jest',
//         name: 'Lucas'
//       },
//       {
//         tech: 'React',
//         name: 'Lucas'
//       }
//     ]);
//   });
//   it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
//     expect(techList([], 'Lucas')).toBe('Vazio!');
//   });
// });

// module.exports = techList;

const hydrate = require('./script.js');

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});