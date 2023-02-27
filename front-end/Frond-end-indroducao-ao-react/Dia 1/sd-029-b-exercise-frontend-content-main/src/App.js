import React from 'react';
import './App.css';
import H1Render from './Header';
import Content from './Content';
import CreateFooter from './Footer';

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Exercise - Frontend content</h1>
        <H1Render />
        <Content />
        <CreateFooter />
      </>
    );
  }
}

export default App;
