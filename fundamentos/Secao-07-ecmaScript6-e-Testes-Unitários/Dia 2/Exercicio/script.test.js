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
// })

const myFizzBuzz = require('./script')

// A função myFizzBuzz(num) recebe um número num como parâmetro. Caso num seja um número divisível por 3 e 5, a função retorna "fizzbuzz". Caso num seja um número divisível apenas por 3, retorna "fizz". E caso num seja um número divisível apenas por 5, retorna "buzz". Se num for um número que não é divisível nem por 3 e nem por 5, a função retorna o próprio número num. Caso num não seja um número, a função retorna false.
// Execute a função myFizzBuzz(num), sendo num um número divisível por 3 e 5, e verifique se o retorno é o esperado.

// Execute a função myFizzBuzz(num), sendo num um número divisível por 3, e verifique se o retorno é o esperado.

// Execute a função myFizzBuzz(num), sendo num um número divisível por 5, e verifique se o retorno é o esperado.

// Execute a função myFizzBuzz(num), sendo num um número que não é divisível por 3 ou 5, e verifique se o retorno é o esperado.

// Execute a função myFizzBuzz(num), sendo num um parâmetro que não é um número, e verifique se o retorno é o esperado.

describe('Exercício 2', () => {
    test('Req 1', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz')
    })

    test('Req 2', () => {
        expect(myFizzBuzz(3)).toBe('fizz')
    })

    test('Req 3', () => {
        expect(myFizzBuzz(5)).toBe('buzz')
    })

    test('Req 4', () => {
        expect(myFizzBuzz(4)).toBe(4)
    })

    test('Req 5', () => {
        expect(myFizzBuzz('t')).toBe(false)
    })
})