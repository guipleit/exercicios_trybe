let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let lowestNumber = numbers[0]

for (i = 0; i < numbers.length; i += 1) {
    if (lowestNumber > numbers[i]) {
        lowestNumber = numbers[i]
    }
}
console.log(lowestNumber);