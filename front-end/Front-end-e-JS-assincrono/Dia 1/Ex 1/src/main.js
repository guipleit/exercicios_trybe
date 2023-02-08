import { nanoid } from 'nanoid';
import copy from 'clipboard-copy';
import './style.css';

// Variáveis globais
let button = document.getElementById('btn-pass');
let result = document.getElementById('result');
//

const generateRandomPassword = () => {
    
    button.addEventListener('click', () => {
        const randomPassword = nanoid();
        result.innerHTML = randomPassword;
    });
};

const copyOnClick = () => {
    result.addEventListener('click', (event) => {
        copy(event.target.innerHTML);
        alert('Senha copiada!');
    });
};
window.onload = () => {
    generateRandomPassword();
    copyOnClick();
};
