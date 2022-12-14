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

// Cria botões para os feriados
const createButton = (Feriados) => {
    const buttonContainer = document.querySelector('.buttons-container')
    let button = document.createElement('button');

    button.innerHTML = Feriados
    button.id = 'btn-holiday'
    buttonContainer.appendChild(button)
}

createButton('Feriados')

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