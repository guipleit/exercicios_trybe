const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonAttack = (dragon) => {
    return Math.floor(Math.random() * (dragon.strength - 15 + 1) + 15)
}

// Crie uma função que retorne o dano causado pelo warrior.
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).

const warriorAttack = (warrior) => {
    return Math.floor(Math.random() * (warrior.strength - warrior.weaponDmg + 1) + warrior.weaponDmg)
}

// Crie uma função que retorne um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disso, a função deve ter uma condicional: caso o mago tenha menos de 15 de mana, o valor de dano recebe uma mensagem (Ex: “Não possui mana suficiente”), e a mana gasta é 0.

const mageAttack = (mage) => {
    let mana = mage.mana
    let damageRoll = Math.floor(Math.random() * (mage.intelligence * 2 - mage.intelligence + 1) + mage.intelligence)
    if (mana <= 15) {
        return 'Não possui mana suficiente.'
    } else {
        mana -= 15
        return damageRoll
    }
}

console.log(mageAttack(mage));