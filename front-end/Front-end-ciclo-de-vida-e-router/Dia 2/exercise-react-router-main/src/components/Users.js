import React, { Component } from 'react';

class Users extends Component {
  render() {
    const {
      greetingsMessage,
      match: { params: { id }
    } } = this.props;

    return (
      <main>
        <h2> Users </h2>
        <p>
        { `${greetingsMessage} User ${id}` }, this is my awesome Users component
        </p>
      </main>
    );
  }
}


export default Users;