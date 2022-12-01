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
console.log(searchForPalindrome('borzoi'));