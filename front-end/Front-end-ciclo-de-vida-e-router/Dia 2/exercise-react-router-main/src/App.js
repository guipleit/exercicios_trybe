import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import StrictAccess from './components/StrictAccess';
import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom';


class App extends Component {
  render() {

    return (
      <BrowserRouter>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/strict-access">Strict Access</Link></li>
        
      </ul>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/strict-access" render={ () => <StrictAccess user={ { username: 'joao', password: 1234} }/>} />
      <Route
            exact
            path="/users/:id"
            render={ (props) => <Users {...props} greetingsMessage="Good Morning" /> }
          />
      </Switch>
      </BrowserRouter>
      
    );
  }
}

export default App;
