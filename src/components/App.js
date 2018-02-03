import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Profile from './Profile';
import Favorites from './Favorites';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/profile" component={Profile}/>
                <Route exact path="/favorites" component={Favorites}/>
                <Route component={Home}/>
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
