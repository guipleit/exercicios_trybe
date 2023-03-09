import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      dog: '',
    };
  }

  componentDidMount() {
    this.fetchApi();
  }

  shouldComponentUpdate(/* nextProps, nextState */) {
    // Implemente sua lógica aqui
    const { dog } = this.state;
    return !dog.includes('terrier');
  }

  componentDidUpdate() {
    // Implemente sua lógica aqui
    const { dog } = this.state;
    localStorage.setItem('dog', dog);
    const breedStartIndex = dog.indexOf('/breeds/') + '/breeds/'.length;
    const breedEndIndex = dog.indexOf('/', breedStartIndex);
    const breed = dog.substring(breedStartIndex, breedEndIndex);
    alert(breed);
  }

  fetchApi = async () => {
    const requestResponse = await fetch('https://dog.ceo/api/breeds/image/random');
    const returnedObj = await requestResponse.json();
    console.log(returnedObj);
    this.setState({
      dog: returnedObj.message,
      loading: false,
    });
  };

  render() {
    const {
      dog,
      loading,
    } = this.state;
    const loadingMessage = <h1>Loading...</h1>;
    return (
      <div>
        <h1>Doguinhos</h1>
        {
          loading ? loadingMessage : <img src={ dog } alt="Doguinho aleatório" />
        }

        <button
          id="new-dog"
          onClick={ () => this.fetchApi() }
        >
          Novo doguinho!

        </button>

      </div>
    );
  }
}

export default App;
