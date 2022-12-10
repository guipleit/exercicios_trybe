//Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

function greater3(num1, num2, num3) {

    if (num1 > num2 && num1 > num3) {
        return `${num1} é o maior!`
    } else if (num2 > num1 && num2 > num3) {
        return `${num2} é o maior!`
    } else {
        return `${num3} é o maior!`
    }
    
}

console.log(greater3(5, 2, 9));