import { nanoid } from 'nanoid'
import './style.css'


const generateRandomPassword = () => {
    let button = document.getElementById('btn-pass')
    let result = document.getElementById('result')
    button.addEventListener('click', () => {
       const randomPassword = nanoid()
        result.innerHTML = randomPassword
    })
}
window.onload = () => {
generateRandomPassword()
}
