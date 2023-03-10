import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pokemonList from '../data';
import '../styles/pokemondetails.css';
import { Link } from 'react-router-dom';

class PokemonDetails extends Component {
  render() {
    const { match: { params: { id } } } = this.props;
    const matchPokemon = pokemonList.find((pokemon) => Number(id) === pokemon.id);
    console.log(id);
    console.log(matchPokemon);
    return (
      <div>
        <h1>
          { matchPokemon.name }
          {' '}
          details
        </h1>
        <h1>{ matchPokemon.name }</h1>
        <p>
          Type:
          {' '}
          {matchPokemon.type}
        </p>
        <p>
          averageWeight:
          {' '}
          { matchPokemon.averageWeight.value }
          { matchPokemon.averageWeight.measurementUnit }
        </p>
        <p>{ matchPokemon.summary }</p>
        <div>
          <h2>Found At:</h2>
          <ul>
            {matchPokemon.foundAt.map((location) => (
              <li key={ location.location }>
                {location.location}
                <img src={ location.map } alt={ `Map of ${location.location}` } />
              </li>
            ))}
          </ul>
        </div>
        <Link to="/">Voltar</Link>
      </div>
    );
  }
}

PokemonDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
    }).isRequired,
  }).isRequired,
};

export default PokemonDetails;
