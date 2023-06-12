const readline = require('readline-sync');
const weight = readline.questionFloat('Qual o seu peso? (kg) ');
const height = readline.questionInt('Qual a sua altura? (cm) ');
const imc = weight / (height / 100) ** 2;
console.log(`Seu IMC é ${imc.toFixed(2)}.`);
if (imc < 18.5) console.log('Abaixo do peso (magreza)');
if (imc >= 18.5 && imc < 25) console.log('Peso normal');
if (imc >= 25 && imc < 30) console.log('Acima do peso (sobrepeso)');
if (imc >= 30 && imc < 35) console.log('Obesidade grau I');
if (imc >= 35 && imc < 40) console.log('Obesidade grau II');
if (imc >= 40) console.log('Obesidade graus III e IV');




