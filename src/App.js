import React, { Component } from 'react';
import './App.css'
import Footer from './components/Footer.js';
import NavBar from './components/NavBar.js';
import { Route, Switch } from "react-router-dom";
import Questions from './components/Questions'
import Results from'./components/Results'
import Home from './components/Home'
import About from './components/About'


class App extends Component {

  render() {

    return (

      <div>
      <NavBar />
      <div className="App">
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={Questions} path="/questions" />
          <Route component={Results} path="/results" />
          <Route component={About} path="/about" />
        </Switch>
      </div>
      <Footer />
      </div>
    );
  }
}

export default App;
