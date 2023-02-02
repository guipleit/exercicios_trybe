// Nova pessoa contratada
// Você ficou responsável por organizar o sistema de contratação de uma empresa e deve criar uma estrutura de dados que possua o formato { nomeCompleto, email } para representar a nova pessoa contratada. Além disso, você deve gerar os emails de cada pessoa que é contratada na empresa. Para isso:
// crie uma função que receba como parâmetro o nome completo da nova pessoa colaboradora e que automaticamente gere um email no formato nome_da_pessoa@trybe.com;
// utilize a função newEmployees, definida abaixo, para receber a sua função como parâmetro e criar o objeto de cada pessoa contratada.

const generateEmail = (name) => {
    let email = `${name.replace(/\s/g, "_")}@trybe.com`
    return email  
}

const newEmployees = () => {
  const employees = {
    id1: generateEmail('Pedro Guerra'),// Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: generateEmail('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: generateEmail('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

// Sorteador de loteria
// Desenvolva uma HOF que retorne o resultado de um sorteio. Essa HOF irá gerar um número aleatório entre 1 e 5, recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns, você ganhou”).

// Corretor automático de exame
// Crie uma HOF que receberá três parâmetros:
// O primeiro será um array de respostas corretas (soluções);
// O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;
// O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso, essa função usará os seguintes critérios:
// Uma resposta correta adiciona 1 ponto à pontuação final;
// A ausência de uma resposta não altera a pontuação (quando for “N.A”);
// Uma resposta incorreta reduz a pontuação final em 0.5 ponto.
// Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante. Utilize os seguintes arrays:

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compare = (array1, array2) => {
    let count = 0;
    for (let index = 0; index < array1.length; index += 1) {
        if (array1[index] === array2[index]) {
            count += 1
        }
        if (array1[index] === 'N.A' || array2[index] === 'N.A') {
            count
        }
        if (array1[index] !== array2[index]) {
            count -= 0.5
        }
    }
    return count
}
const autoCorrect = (rightAnswers, studentAnswer, compare) => {
    return compare(rightAnswers, studentAnswer)
}

console.log(autoCorrect(RIGHT_ANSWERS, STUDENT_ANSWERS, compare))

