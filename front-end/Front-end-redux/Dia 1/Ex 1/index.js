import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools} from '@redux-devtools/extension'
//
const previousBtn = document.getElementById('previous')
const nextBtn = document.getElementById('next')
const currColor = document.getElementById('value')
const colorContainer = document.getElementById('container')
const randomBtn = document.getElementById('rdn')

//
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};


//

const INITIAL_STATE = {
        colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
        index: 0,
      };

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'NEXT_COLOR':
      return {
        ...state,
        index: state.index === state.colors.length - 1 ? 0 : state.index + 1,
      };
    case 'PREVIOUS_COLOR':
      return {
        ...state,
        index: state.index === 0 ? state.colors.length - 1 : state.index - 1,
      };
    case 'ADD_COLOR':
      return {
        ...state,
        colors: [...state.colors, action.payload.color],
        index: state.colors.length,
      };
    default:
      return state;
  }
};

previousBtn.addEventListener('click', () => {
    store.dispatch({ type: 'PREVIOUS_COLOR'})
})

nextBtn.addEventListener('click', () => {
    store.dispatch({type: 'NEXT_COLOR'})
})

randomBtn.addEventListener('click', () => {
  const randomColor = getRandomColor();
  store.dispatch({
    type: 'ADD_COLOR',
    payload: {
      color: randomColor,
    },
  });
});

const store = createStore(reducer, composeWithDevTools())

store.subscribe(() => {
  const currentState = store.getState();
  const currentColor = currentState.colors[currentState.index];
  currColor.innerHTML = currentColor;
  colorContainer.style.backgroundColor = currentColor
  console.log(currColor.innerHTML, currentState);
});