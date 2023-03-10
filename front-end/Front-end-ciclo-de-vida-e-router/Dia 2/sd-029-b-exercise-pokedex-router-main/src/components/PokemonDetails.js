import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pokemonList from '../data';

class PokemonDetails extends Component {
  render() {
    const { match: { params: { id } } } = this.props;
    const matchPokemon = pokemonList.find((pokemon) => Number(id) === pokemon.id);
    console.log(id);
    console.log(matchPokemon);
    return (
      <h1>
        { matchPokemon.name }
        {' '}
        details
      </h1>
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
