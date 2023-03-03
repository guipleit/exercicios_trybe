import React from 'react';

class PersonalData extends React.Component {
  handleUpperCase = (event) => {
    const { target } = event;
    target.value = target.value.toUpperCase();
  };

  render() {
    return (
      <fieldset>
        <label htmlFor="name">
          Nome
          <input
            type="text"
            id="name"
            maxLength="40"
            onChange={ this.handleUpperCase }
          />
        </label>
        Email
        <label htmlFor="email">
          <input
            type="email"
            id="50"
            maxLength="50"
          />
        </label>

        <label htmlFor="cpf">
          CPF
          <input
            type="text"
            maxLength="11"
          />
        </label>

      </fieldset>
    );
  }
}

export default PersonalData;
