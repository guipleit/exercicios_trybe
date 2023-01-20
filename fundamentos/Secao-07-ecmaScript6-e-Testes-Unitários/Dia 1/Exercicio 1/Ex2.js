// Suponha que você esteja trabalhando em uma escola e precise fazer algumas atualizações no sistema. Para isso, considere o seguinte código:

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};


// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

// Crie uma função para mostrar o tamanho de um objeto.

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

// Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:


// Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const lessons2Night = (object, key, value) => {
    object[key] = value
}

const listKeys = (object) => {
    return Object.keys(object) 
}

const objectLength = (object) => {
    return Object.keys(object).length
}

const objectValues = (object) => {
    return Object.values(object)
}

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3})

console.log(allLessons);



// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:

// console.log(getValueByNumber(lesson1, 0));
// Output: 'Matemática'

const getKey = (object, i) => {
    const values = objectValues(object)
    return values[i]
}

console.log(getKey(lesson2, 0));

// Usando o objeto criado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas.

const sumStudents = (object) => {
    let total = 0
    const keys = Object.keys(object)

    for (index in keys) {
        total += object[keys[index]].numeroEstudantes
    }
    return total
}

console.log(sumStudents(allLessons));

// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles o objeto, o nome da chave e o valor da chave. Exemplo:

// console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
// console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false

const verifyPair = (object, key, value) => {
    const pair = Object.entries(object)
    for (let index = 0; index < pair.length; index += 1) {
        if (pair[index][0].includes(key) && pair[index][1].includes(value)) {
            return true
        } else {
            return false
        }
    }
}
