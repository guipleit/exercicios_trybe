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
        if (num[greatest] < num[index]) {
            greatest = index
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
        if (num[smallest] >= num[index]) {
            smallest = index
        }
    }
    return smallest
}

    console.log(smallestInArray([2, 4, 6, 7, 10, 0, -3]));

    //Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

    //Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.

    //Valor esperado no retorno da função: Fernanda.

    function longestName(array) {
        let longest = array[0]
        for(index in array) {
            if(array[index].length > longest.length){
        longest = array[index] 
            }

        }     
        return longest
}

console.log(longestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

//Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

//Array de teste: [2, 3, 2, 5, 8, 2, 3];.

//Valor esperado no retorno da função: 2.

function maisRepetido(numeros) {       //Dificuldade pra entender, olhei no gabarito. Estudar depois.
  let contRepetido = 0;
  let contNumero = 0;
  let indexNumeroRepetido = 0;

  for (let index in numeros) {
    let verificaNumero = numeros[index];
    for (let index2 in numeros) {
      if (verificaNumero === numeros[index2]) {
        contNumero += 1;
      }
    }
    if (contNumero > contRepetido) {
      contRepetido = contNumero;
      indexNumeroRepetido = index;
    }
    contNumero = 0;
  }

  return numeros[indexNumeroRepetido];
}
console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));

//Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

//Valor de teste: N = 5.

//Valor esperado no retorno da função: 1+2+3+4+5 = 15.

function sumOfN(num) {
    let storeNum = 0
    for(let index = 0; index < num ; index += 1){
    storeNum += num - index
}    
return storeNum
}


console.log(sumOfN(5));