import React from 'react';
import PersonalData from './components/PersonalData';
import AddressData from './components/AddressData';
import ProfData from './components/ProfData';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          React Form
        </h1>
        <PersonalData />
        <AddressData />
        <ProfData />

      </div>
    );
  }
}

export default App;
