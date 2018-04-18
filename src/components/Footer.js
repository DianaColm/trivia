import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <div className="footer text-center">
        <div className="container">
          <span className="text-muted">Home About Settings</span>
        </div>
      </div>
    );
  }
}

export default Footer;
