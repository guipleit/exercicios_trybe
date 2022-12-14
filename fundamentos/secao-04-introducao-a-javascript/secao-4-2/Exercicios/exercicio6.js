let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let oddNumbers = []
for (i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 !== 0) {
        oddNumbers++
    } 
} 

if (oddNumbers === 0) {
    console.log('Nenhum número ímpar encontrado.');
} else{
console.log(oddNumbers);
}