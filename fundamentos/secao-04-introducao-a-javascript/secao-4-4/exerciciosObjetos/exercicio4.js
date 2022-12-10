//Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.


function checkPositive(num) {

    if (num > 0) {
        return 'Positive'
    } else if (num === 0) {
        return 'Zero'
    } else if (num < 0) {
        return 'Negative'
    }


    
}

console.log(checkPositive(-2));