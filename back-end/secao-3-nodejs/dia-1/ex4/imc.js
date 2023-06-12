const readline = require('readline-sync');
const weight = readline.questionFloat('Qual o seu peso? (kg) ');
const height = readline.questionInt('Qual a sua altura? (cm) ');
const imc = weight / (height / 100) ** 2;
console.log(`Seu IMC é ${imc.toFixed(2)}.`);

