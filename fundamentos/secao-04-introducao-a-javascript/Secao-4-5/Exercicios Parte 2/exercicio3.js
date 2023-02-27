// Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase.

// longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'

// De olho na dica 👀: Nesse exercício, será necessário utilizar os conhecimentos sobre array, método split e loop for/of.

// Bônus (opcional): Tente fazer o mesmo exercício utilizando o método array.sort().

const biggestWord = (text) => {
    text = text.split(' ')
    let storeBiggest = [0]

    for(index = 0; index < text.length; index += 1) {
        if(storeBiggest.length < text[index].length) {
            storeBiggest = text[index]
        }
    }

    return storeBiggest
}

console.log(biggestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));