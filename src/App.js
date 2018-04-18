import React, { Component } from 'react';
import Footer from './components/Footer.js';
import NavBar from './components/NavBar.js';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Questions from './components/Questions'

import Home from './components/Home'

class App extends Component {

  render() {

    return (

      <div>
      <NavBar />
      <div className="App">
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={Questions} path="/questions" />
        </Switch>
      </div>
      <Footer />
      </div>
    );
  }
}

export default App;
