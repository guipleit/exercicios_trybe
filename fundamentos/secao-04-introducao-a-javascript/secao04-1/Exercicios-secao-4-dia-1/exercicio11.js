const wage = 3510.10
let inssWage
let finalWage

if (wage <= 1556.94) {
    inssWage = (wage - wage * 0.08)
    console.log(inssWage)
} else if (wage >= 1556.95 && wage <= 2594.92) {
    inssWage = (wage - wage * 0.09) 
} else if (wage >= 2594.93 && wage <= 5189.82) {
    inssWage = (wage - wage * 0.11)
} else {
    wage = wage - 570.88
}

if (inssWage < 1903.98) {
    (finalWage) = inssWage
    console.log(`Seu salário final é: ${(finalWage.toPrecision(6))}`)
} else if (inssWage >= 1903.99 && inssWage <= 2826.65) {
    (finalWage) = (inssWage - inssWage * 0.075) - 142.80
    console.log(`Seu salário final é: ${(finalWage.toPrecision(6))}`)
} else if (inssWage >= 2826.66 && inssWage <= 3751.05) {
    (finalWage) = (inssWage - inssWage * 0.15) - 354.80
    console.log(`Seu salário final é: ${(finalWage.toPrecision(6))}`)
} else if (inssWage >= 3751.06 && inssWage <= 4664.68) {
    (finalWage) = (inssWage - inssWage * 0.225) - 636.13
    console.log(`Seu salário final é: ${(finalWage.toPrecision(6))}`)
} else {
    (finalWage) = (inssWage - inssWage * 0.275) - 869.36
    console.log(`Seu salário final é: ${(finalWage.toPrecision(6))}.`) 
}
