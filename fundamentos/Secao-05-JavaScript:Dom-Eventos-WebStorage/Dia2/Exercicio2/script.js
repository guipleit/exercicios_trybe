// Crie um irmão para elementoOndeVoceEsta.
// Crie um filho para elementoOndeVoceEsta.
// Crie um filho para primeiroFilhoDoFilho.
// A partir desse filho criado, acesse o filhoterceiroFilho.

const paiDoFi = document.getElementById('pai') 
const irmaoDoElementoDoPaiDoFi = document.createElement('Section')
irmaoDoElementoDoPaiDoFi.id = 'IrmaoDoElementoDoPaiDoFi'
paiDoFi.appendChild(irmaoDoElementoDoPaiDoFi)