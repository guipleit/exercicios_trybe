import "./style.css"

// No exercício pede para fazer com super heróis, mas não consegui acesso à API. Farei com pokémons.

const submit = document.getElementById('submit');
const img = document.getElementById('s-img')
const name = document.getElementById('name')

submit.addEventListener('click', async (event) => {
    event.preventDefault
    let random = Math.round((Math.random() * 800) + 1)
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}/`);
    const data = await response.json()
    img.src =data.sprites.front_default
    const pokeName = data.name
    const upperString = pokeName.charAt(0).toUpperCase() + pokeName.slice(1)
    name.innerText = upperString
    
})