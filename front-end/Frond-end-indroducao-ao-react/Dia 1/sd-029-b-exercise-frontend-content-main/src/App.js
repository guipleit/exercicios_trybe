import React from 'react';
import './App.css';
import H1Render from './Header';
import Content from './Content';

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Exercise - Frontend content</h1>
        <H1Render />
        <Content />
      </>
    );
  }
}

export default App;
