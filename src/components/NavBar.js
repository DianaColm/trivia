import React, { Component } from 'react';
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark text-center">
        <div className="container">
          <p className="text-center navbar-brand mb-0 h1" ><Link to="/">Trivia</Link></p>
        </div>
      </nav>


    );
  }
}

export default NavBar;
