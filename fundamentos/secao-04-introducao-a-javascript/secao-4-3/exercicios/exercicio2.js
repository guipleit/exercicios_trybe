//Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
//let word = 'tryber';

let word = 'tryber'
let reverteWord = ''

for (let index = word.length - 1; index >= 0; index -= 1){
    reverteWord += word[index]
}
console.log(reverteWord);


