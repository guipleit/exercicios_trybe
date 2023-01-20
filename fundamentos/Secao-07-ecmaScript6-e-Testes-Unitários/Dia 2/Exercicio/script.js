// Exercício 1
// function myRemove(arr, item) {
//   let newArr = [];
//   for (let index = 0; index < arr.length; index += 1) {
//     if (item !== arr[index]) {
//       newArr.push(arr[index]);
//     }
//   }
//   return newArr;
// }

// module.exports = myRemove

// // Exercicio 2
// function myFizzBuzz(num) {
//   if (typeof num !== 'number') return false;
//   if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
//   if (num % 3 === 0) return 'fizz';
//   if (num % 5 === 0) return 'buzz';
//   return num;
// }
// module.exports = myFizzBuzz

// // Exercício 3

// const mapString = (objectMap, string) => {
//   const splitString = string.split('');
//   const mappedArray = [];
//   for (let index = 0; index < splitString.length; index += 1) {
//     const character = splitString[index];
//     const mappedValue = objectMap[character];
    
//     if (mappedValue) {
//       mappedArray.push(mappedValue);
//     } else {
//       mappedArray.push(character);
//     }
//   }
//   return mappedArray.join('');
// }
// const encode = (string) => {
//   const map = {
//     a: 1,
//     e: 2,
//     i: 3,
//     o: 4,
//     u: 5,
//   };
//   return mapString(map, string);
// }
// const decode = (string) => {
//   const map = {
//     1: 'a',
//     2: 'e',
//     3: 'i',
//     4: 'o',
//     5: 'u',
//   };
//   return mapString(map, string);
// }

// module.exports = mapString
// module.exports = encode
// module.exports = decode

// const techList = (array, name) => {
//   let arrayList = []
//   if (array.length === 0) {
//     return 'Vazio!'}
//   for (let index = 0; index < array.length; index += 1) {
//     let newObj = {}
//     newObj.tech = array[index]
//     newObj.name = name
//     arrayList.push(newObj)
    
//   }
//   arrayList.sort((a, b) => a.tech.localeCompare(b.tech))
//   return arrayList
// }
// module.exports = techList
// console.log(techList([], 'Lucas'))

const hydrate = (string) => {
 let water = 0
 let numbers = string.match(/\d+/g) || [];
 water = numbers.reduce((acc, val) => acc + parseInt(val), 0);
 let copos = 'copo'
 if (water > 1) copos = 'copos'
 return `${water} ${copos} de água`
}
module.exports = hydrate
console.log(hydrate('5 copo de cerveja'));