//Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.

function triangle (num1, num2, num3) {
    if (num1 < 0 || num2 < 0 || num3 < 0) {
        return 'Angulo inválido.'
    } else if (num1 + num2 + num3 === 180) {
        return true
    } else {
        return false
    }
}

console.log(triangle(60, 60, 60));
