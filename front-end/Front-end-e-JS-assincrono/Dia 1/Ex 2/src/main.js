import validator from 'validator';
import '/src/styles.css'

const form = document.querySelector('form');
const input = document.querySelector('input[type="text"]');
const select = document.querySelector('select');
const cpfRegex = new RegExp('[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}')
form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (select.value === 'email') {
    if (!validator.isEmail(input.value)) {
      alert('Formato de E-mail inválido!');
    } else {
        alert('Formato de E-mail válido')
    }
  } 
  if (select.value === 'cpf') {
    if (!cpfRegex.test(input.value)){
      alert("Formato de CPF inválido!");
    } else {
        alert('Formato de CPF válido.')
    }
  }
})
