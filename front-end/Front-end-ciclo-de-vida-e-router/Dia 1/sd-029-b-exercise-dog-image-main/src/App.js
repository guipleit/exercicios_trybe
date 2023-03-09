import React from 'react';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    // Implemente sua lógica aqui
  }

  shouldComponentUpdate(/* nextProps, nextState */) {
    // Implemente sua lógica aqui
    return true;
  }

  componentDidUpdate() {
    // Implemente sua lógica aqui
  }

  async fetchApi = () => {
    const requestResponse = await fetch('https://dog.ceo/api/breeds/image/random');
    const returnedObj = await requestResponse.json()
    console.log(returnedObj);
  }
  render() {
    this.fetchApi()
    return <h1>Doguinhos</h1>;
  }
}

export default App;
