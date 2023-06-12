import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import pokemonList from './data';
import Pokedex from './components/Pokedex';
import About from './components/About';
import PokemonDetails from './components/PokemonDetails';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/" render={ () => <Pokedex pokemonList={ pokemonList } /> } />
        <Route exact path="/about" component={ About } />
        <Route path="/pokemon/:id" render={ (props) =>  <PokemonDetails match={props.match}/>} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
