import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {FaHome, FaBook, FaCog } from 'react-icons/lib/fa';
import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <div className="footer text-center">
        <div className="container">
          <span className="text-muted"><Link to="/">Home<FaHome /></Link> Settings<FaCog /> <Link to="/about">About<FaBook /></Link></span>
        </div>
      </div>
    );
  }
}

export default Footer;
