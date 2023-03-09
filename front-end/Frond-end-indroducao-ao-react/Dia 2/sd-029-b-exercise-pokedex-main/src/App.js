import React from 'react';
import './App.css';
import pokemonList from './data';
import PokemonComponent from './components/Pokemon';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Exercise - Pokedex</h1>
        <PokemonComponent pokemon={ pokemonList } />
      </div>
    );
  }
}

export default App;
