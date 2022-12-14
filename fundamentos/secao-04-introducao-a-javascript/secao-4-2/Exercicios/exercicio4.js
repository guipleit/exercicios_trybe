let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaNumbers = 0
for(i = 0; i < numbers.length; i += 1) {
   somaNumbers += numbers[i]
}
averageNumbers = somaNumbers / numbers.length

if (averageNumbers > 20) {
    console.log("A média é maior que 20");
} else {
    console.log("A média é menor que 20");
}

