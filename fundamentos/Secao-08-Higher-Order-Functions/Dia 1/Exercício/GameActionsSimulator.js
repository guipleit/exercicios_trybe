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
console.log(dragonAttack(dragon));
console.log(warriorAttack(warrior));