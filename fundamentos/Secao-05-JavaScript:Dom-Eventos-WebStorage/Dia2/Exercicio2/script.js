// Crie um irmão para elementoOndeVoceEsta.
// Crie um filho para elementoOndeVoceEsta.
// Crie um filho para primeiroFilhoDoFilho.
// A partir desse filho criado, acesse o filhoterceiroFilho.

const paiDoFi = document.getElementById('pai') 
const irmaoDoElementoDoPaiDoFi = document.createElement('section')
irmaoDoElementoDoPaiDoFi.id = 'IrmaoDoElementoDoPaiDoFi'
paiDoFi.appendChild(irmaoDoElementoDoPaiDoFi)

const paiDoElemento = document.getElementById('elementoOndeVoceEsta')
const fiDoElemento = document.createElement('section')
fiDoElemento.id = 'fiDoElemento'
paiDoElemento.appendChild(fiDoElemento)

const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho')
const filhoDoPrimeiroFilho = document.createElement('section')
filhoDoPrimeiroFilho.id = 'filhoDoPrimeiroFilho'
primeiroFilhoDoFilho.appendChild(filhoDoPrimeiroFilho)

const terceiroFilhoPaiDoFilhoDoPrimeiroFilho = document.getElementById('filhoDoPrimeiroFilho').parentElement.parentElement.nextElementSibling
console.log(terceiroFilhoPaiDoFilhoDoPrimeiroFilho);


