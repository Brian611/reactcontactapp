import React, { Component } from 'react';
import Nav from './Components/navigation';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Components/Home';
import Contacts from './Components/Contacts';
import User from './Components/User';

class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <div className="ui segment">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/user" component={User} />
            <Route path="/contacts" component={Contacts} />
            <Route render={() => { return <h3>404 Not Found! </h3> }} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
