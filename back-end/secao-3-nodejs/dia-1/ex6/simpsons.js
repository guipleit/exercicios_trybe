const fs = require('fs').promises;
const parseJson = async () => {
    const fileContent = await fs.readFile('./simpsonsFamily.json', 'utf-8');
    const simpsons = JSON.parse(fileContent)
    return simpsons
}


async function readAll() {
  const simpsons = await parseJson()
  const strings = simpsons.map(({id, name}) => `${id} - ${name}`)
  console.log(strings);
}

characterByID = async (id) => {
    const simpsons = await parseJson()
    const promise = new Promise((resolve, reject) =>{
       const idExists = simpsons.some((charid) => charid.id == id)
       if (!idExists) reject(new Error('Id de personagem não encontrado.'))

       const foundId = simpsons.find((charId) => id == charId.id)
       resolve(foundId)
    })
    return console.log(promise)
}

const removeIds = async () => {
    const simpsons = await parseJson()
    const filteredArray = simpsons.filter((simpson) => simpson.id < 6 || simpson.id > 10);
    try {
        await fs.writeFile('.simpsons.json', JSON.stringify(filteredArray));
        console.log('success!');
    } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
}

const newSimpsonsFile = async () => {
    const simpsons = await parseJson();
    const filteredArray = simpsons.filter((simpson) => simpson.id > 0 && simpson.id < 5);
    try {
        await fs.writeFile('.simpsonsFamily.json', JSON.stringify(filteredArray))
        console.log("Arquivo simpsonsFamily escrito com sucesso!");
    } catch (err) {
        console.error(`Erro ao escrever o arquivo: ${err.message}`)
    }
}

const addNelson = async () => {
    const fileContent = await fs.readFile('./simpsonsFamily.json', 'utf-8');
    const simpsonsFamily = JSON.parse(fileContent)
    const newArray = [...simpsonsFamily, {
        id: 5,
        name: "Nelson Muntz"
    }]
    try {
        await fs.writeFile('./simpsonsFamily.json', JSON.stringify(newArray));
        console.log("Personagem Nelson adicionado com sucesso!");
    } catch (err) {
        console.error(`Erro ao escrever o arquivo: ${err.message}`)
    }

}

const replaceNelson = async () => {
    const fileContent = await fs.readFile('./simpsonsFamily.json', 'utf-8');
    const simpsonsFamily = JSON.parse(fileContent)
    const filteredArray = simpsonsFamily.filter((simpson) => simpson.name !== "Nelson Muntz")
    const newArray = [...filteredArray, {
        id: 5,
        name: "Maggie Simpson"
    }]
     try {
        await fs.writeFile('.simpsonsFamily.json', JSON.stringify(newArray));
        console.log("Personagem Maggie substituiu o Nelson com sucesso!");
    } catch (err) {
        console.error(`Erro ao escrever o arquivo: ${err.message}`)
    }
}



async function main () {
    // await characterByID(3)
    // await removeIds()
    // await newSimpsonsFile()
    // await addNelson()
    await replaceNelson()
}

main()