import Swal from 'sweetalert2'

// Captura elementos globais
const input = document.getElementById('text-input')
const submit = document.getElementById('submit-btn')
const title = document.getElementById('currency-title')
//

const getApi = (value, callback) => {
    const CURR_API = fetch(`https://api.exchangerate.host/latest?base=${value}`)
    return CURR_API.then((response) => response.json())
    .then((data) => callback(value, data))
}

const buildRates = (value, { rates }) => {
    if (!Object.keys(rates).includes(value)) {
        return Swal.fire({
        icon: 'error',
        title: 'Insira uma moeda válida!',
        text: '',
        customClass: {
            confirmButtonClass: 'aceitar'
        }
      }).then(title.innerHTML = '')
      }
  const container = document.querySelector('.results-container');
  const resultTitle = document.querySelector('#currency-title');
  resultTitle.innerHTML = `Valores referentes a 1 ${value}`;
  Object.entries(rates).forEach(([key, value]) => {
    let createdDiv = document.createElement('div');
    createdDiv.className = 'div-result';

    let keyElement = document.createElement('div');
    keyElement.className = 'key';
    keyElement.innerHTML = key;

    let valueElement = document.createElement('div');
    valueElement.className = 'value';
    valueElement.innerHTML = value.toFixed(3);

    createdDiv.appendChild(keyElement);
    createdDiv.appendChild(valueElement);
    container.appendChild(createdDiv);
  });
};
// Executa funções
window.onload = () => {
    submit.addEventListener('click', (event) => {
      event.preventDefault()
      const container = document.querySelector('.results-container');
      container.innerHTML = '';
      const currency = input.value.toUpperCase()
      input.value = ''
      if (!currency) {
        return Swal.fire({
        icon: 'error',
        title: 'Insira uma moeda válida!',
        text: '',
        customClass: {
            confirmButtonClass: 'aceitar'
        }
      }).then(title.innerHTML = '')
      }
      return getApi(`${currency}`, buildRates)
})

    submit.addEventListener('keydown', (event) => {
      event.preventDefault()
      if (event.key === 'Enter') {
        const container = document.querySelector('.results-container');
        container.innerHTML = '';
        const currency = input.value.toUpperCase()
        input.value = ''
        if (!currency) {
        return Swal.fire({
        icon: 'error',
        title: 'Insira uma moeda válida!',
        text: '',
        customClass: {
            confirmButtonClass: 'aceitar'
        }
      }).then(title.innerHTML = '')
      }
        return getApi(`${currency}`, buildRates)
    }
    
})
}