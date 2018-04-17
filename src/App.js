import React, { Component } from 'react';
import NavBar from './Components/NavBar.js';
import Footer from './Components/Footer.js';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <p>este es mi contenido</p>
        <Footer />
      </div>
    );
  }
}

export default App;
