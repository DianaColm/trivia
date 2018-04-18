import React, { Component } from 'react';

class About extends Component {
render(){
    return(
        <div>
            <Nav />
            <div>
              <h1>About</h1>
              <p>App Name:Trivia </p>
              <p>Versión:5.1 </p>
              <p>Description: Random question game some specific subject</p>
              <p>Created by: Microsoft</p>
            </div>
            <footer />
        </div>
    )
}
}

export default About;
