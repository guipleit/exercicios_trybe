//Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
function reverseString(text){
    return text.split("").reverse().join("");
}

function searchForPalindrome(text) {
    if(text === reverseString(text)){
        return true
    } else {
        return false
    }

    
}

console.log(searchForPalindrome('arara'));

//Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

//Array de teste: [2, 3, 6, 7, 10, 1];.

function greatestInArray(num) {
    let greatest = 0
    for(index in num) {
        if (greatest < num[index]) {
            greatest = num[index]
        }
    }
    return greatest
    }
    
console.log(greatestInArray([2, 3, 6, 7, 10, 1]));

//Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

//Array de teste: [2, 4, 6, 7, 10, 0, -3];.

function smallestInArray(num) {
    let smallest = 0
    for(index in num) {
        if (smallest >= num[index]) {
            smallest = num[index]
        }
    }
    return smallest
    }

    console.log(smallestInArray([2, 4, 6, 7, 10, 0, -3]));