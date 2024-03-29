import React from 'react';
import { Link } from 'react-router-dom';
import { pokemonType } from '../types';
import '../styles/pokemon.css';

class Pokemon extends React.Component {
  render() {
    const { pokemon } = this.props;
    const { name, type, averageWeight, image, id } = pokemon;

    return (
      <div className="pokemon">
        <Link to={ `/pokemon/${id}` }>Details</Link>
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>
            {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
        </div>
        <img src={ image } alt={ `${name} sprite` } />

      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: pokemonType.isRequired,
};

export default Pokemon;
