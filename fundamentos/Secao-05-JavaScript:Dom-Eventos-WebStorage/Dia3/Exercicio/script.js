const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Parte 1
// Crie um calendário dinamicamente.
// O array decemberDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Sua função deve criar dinamicamente cada dia do calendário e os adicionar dentro da tag <ul>.

// // Observação 🔎: Note que os dias 29 e 30 de novembro estão no array, pois representam respectivamente Domingo e Segunda-feira.

// A tag <ul> deve conter o id 'days';
// Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>;
// Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>;
// Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>.

const daysCalendar = document.getElementById('days')
const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const createDays = () => {
    for (let index = 0; index < decemberDaysList.length; index += 1) {
        const days = document.createElement('li')
        days.className = 'day'

        if (decemberDaysList[index] === 24 || decemberDaysList[index] === 25 || decemberDaysList[index] === 31) {
            days.className += ' holiday'
        }

        if (decemberDaysList[index] === 4 || decemberDaysList[index] === 11 || decemberDaysList[index] === 18 || decemberDaysList[index] === 25) {
            days.className += ' friday'
        }

        days.innerHTML = decemberDaysList[index]
        daysCalendar.appendChild(days)
    }
}

createDays()

// Parte 2
// Implemente uma função que crie dinamicamente um botão com o nome “Feriados”;
// Sua função deve receber um parâmetro com a string 'Feriados';
// Adicione a este botão a ID "btn-holiday";
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container".

const createButton = (Feriados) => {
    const buttonContainer = document.querySelector('.buttons-container')
    let button = document.createElement('button');

    button.innerHTML = Feriados
    button.id = 'btn-holiday'
    buttonContainer.appendChild(button)
}

createButton('Feriados')

// Parte 3
// Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday";
// Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday".
// De olho na dica 👀: É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial com a cor “rgb(238,238,238)”.

const colorHoliday = () => {
  const holiday = document.getElementsByClassName('holiday');
  const holidayButton = document.getElementById('btn-holiday');
  const backgroundColor = document.body.style.backgroundColor;
  const newColor = 'white';

  holidayButton.addEventListener('click', () => {
    for (let index = 0; index < holiday.length; index += 1) {
        if (holiday[index].style.backgroundColor === document.body.style.backgroundColor) {
            holiday[index].style.backgroundColor = newColor;
        } else {
            holiday[index].style.backgroundColor = backgroundColor
        }
    }
  });
}

colorHoliday()

// Parte 4
// Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira";
// Sua função deve receber como parâmetro a string “Sexta-feira”;
// Adicione a esse botão o ID "btn-friday";
// Adicione esse botão como filho/filha da tag <div> com classe "buttons-container".

const createFriday = (text) => {
    const buttonContainer = document.querySelector('.buttons-container');
    let button = document.createElement('button');

    button.innerHTML = text
    button.id = "btn-friday"
    buttonContainer.appendChild(button)
}

createFriday('Sexta-Feira')

// Parte 5
// Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira;
// Adicione ao botão “Sexta-feira” um evento de “click” e modifique o texto a ser exibido nos dias que são sextas-feiras.
// De olho na dica 👀: É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial exibindo os dias.

const modFriday = () => {
    const friday = document.getElementsByClassName('friday');
    const fridayColor = document.getElementsByClassName('friday')[0].style.color;
    const fridayNewColor = 'green';
    const buttonFriday = document.getElementById('btn-friday');


    buttonFriday.addEventListener('click', () => {
        for (let index = 0; index < friday.length; index += 1) {
            if (friday[index].style.color === fridayColor) {
                friday[index].style.color = fridayNewColor;
            } else {
                friday[index].style.color = fridayColor;
            }
        }
    });
}
modFriday()