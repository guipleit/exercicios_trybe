import React from 'react';
import countryStates from './countryStates';

class AddressData extends React.Component {
  handleAddressChange = (event) => {
    const inputString = event.target.value;
    const sanitizedString = inputString.replace(/[^\w\s]/gi, '');
    event.target.value = sanitizedString;
  };

  handleCityBlur = (event) => {
    const inputString = event.target.value;
    const startsWithNumber = /^\d/.test(inputString);

    if (startsWithNumber) {
      event.target.value = '';
    }
  };

  render() {
    const mapStates = countryStates.map((state, index) => (
      <option key={ index } value={ state }>
        {state}
      </option>
    ));

    return (
      <fieldset>
        <label htmlFor="adress">
          Endereço
          <input
            id="adress"
            type="text"
            maxLength="200"
            onChange={ this.handleAddressChange }
          />
        </label>

        <label htmlFor="city">
          Cidade
          <input
            id="city"
            type="text"
            maxLength="28"
            onBlur={ this.handleCityBlur }
          />
        </label>

        <label htmlFor="estate">
          Estado
          <select
            id="estate"
          >
            {mapStates}
          </select>
        </label>

        <label htmlFor="tipo">
          Tipo
          <input type="radio" id="casa" name="tipo" value="casa" defaultChecked />
          <label htmlFor="casa">Casa</label>
          <input type="radio" id="apartamento" name="tipo" value="apartamento" />
          <label htmlFor="apartamento">Apartamento</label>
        </label>

      </fieldset>
    );
  }
}

export default AddressData;
