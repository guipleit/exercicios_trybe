import React, { Component } from 'react';

class ProfData extends Component {
  constructor() {
    super();
    this.state = {
      hovered: false,
    };
  }

  handleMouseHover = () => {
    const { hovered } = this.state;
    if (!hovered) {
      alert('Preencha com cuidado esta informação.');
      this.setState({
        hovered: true,
      });
    }
  };

  render() {
    return (
      <fieldset>
        <label htmlFor="curr">
          Resumo do currículo
          <textarea maxLength="1000" id="curr" />
        </label>
        <label htmlFor="cargo" onMouseEnter={ this.handleMouseHover }>
          Cargo
          <input type="text" maxLength="40" id="cargo" />
        </label>
        <label htmlFor="cargo-desc">
          Descrição do cargo
          <textarea id="cargo-desc" maxLength="500" />
        </label>
      </fieldset>
    );
  }
}

export default ProfData;
