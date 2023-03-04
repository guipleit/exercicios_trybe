import React from 'react';

class PersonalData extends React.Component {
  render() {
    return (
      <div>
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
              id="email"
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

        <fieldset />

      </div>
    );
  }
}

export default PersonalData;
