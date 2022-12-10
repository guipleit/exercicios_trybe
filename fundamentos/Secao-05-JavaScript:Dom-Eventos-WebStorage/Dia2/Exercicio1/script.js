// Acesse o elemento elementoOndeVoceEsta.
// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
// Acesse o primeiroFilho a partir de pai.
// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
// Agora acesse o terceiroFilho a partir de pai.

// let ondevcesta = document.getElementById('elementoOndeVoceEsta')
// console.log(ondevcesta);
//
// let ondeVcEstaPai = document.getElementById('elementoOndeVoceEsta').parentElement
// ondeVcEstaPai.style.color = 'green'
// console.log(ondeVcEstaPai);

// let primeiroFilhoDoFi = document.getElementById('primeiroFilhoDoFilho')
// primeiroFilhoDoFi.innerHTML = 'Texto!'

// let primeiroFi = document.getElementById('pai').firstElementChild
// console.log(primeiroFi);

// let primeiroFi2 = document.getElementById('elementoOndeVoceEsta').previousElementSibling
// console.log(primeiroFi2);

// let atencao = document.getElementById('elementoOndeVoceEsta').nextSibling
// console.log(atencao);

let terceiroFi = document.getElementById('elementoOndeVoceEsta').nextElementSibling
console.log(terceiroFi);


