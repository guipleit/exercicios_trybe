//Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

function greatest (num1, num2) {

    if (num1 > num2) {
        return `${num1} é maior!`
    } else if (num2 === num1) {
        return `São iguais!`
    } else {
        return `${num2} é maior!`
    }
}
console.log(greatest(600, 600));