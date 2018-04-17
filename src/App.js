import React, { Component } from 'react';
import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Questions from './components/Questions'

import Home from './components/Home'

class App extends Component {

    constructor(props){
      super(props)
      this.state = {
        questions : ''
      }
    }
    componentWillMount(){
      // console.log(this.state)
    }
  
    componentDidMount(){
      fetch('https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple')
        .then((response) => {
          return response.json()
        })
        .then((response) => {
          this.setState({questions: response.results}, function(){console.log(this.state.questions)})
        })
    }


  render() {
    
    return (

      <div>
        <NavBar />
        <p>este es mi contenido</p>
        <Footer />
      <div className="App">
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={Questions} path="/questions" />
        </Switch>
      </div>
      </div>
    );
  }
}

export default App;
