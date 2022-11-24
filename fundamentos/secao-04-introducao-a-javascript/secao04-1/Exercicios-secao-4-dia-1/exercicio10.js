const cost = 500
const salePrice = 750

if (cost >= 0 && salePrice >= 0){
const costWithTax = (cost * 0.2) + cost
const totalProfit = (salePrice - cost) * 1000
console.log(totalProfit)
} else {
    console;log('Valor inválido!')
}


