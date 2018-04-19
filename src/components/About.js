import React, { Component } from 'react';

class About extends Component {
render(){
    return(
      <div className="inner cover">
        <h2 className="cover-heading">About</h2>
        <hr/>
          <p className="lead"><h5>App Name:</h5>Trivia </p>
          <p className="lead"><h5>Versión:</h5>5.1 </p>
          <p className="lead"><h5>Description:</h5> Random question game some specific subject</p>
          <p className="lead"><h5>Created by:</h5> Biokah</p>
      </div>
    )
}
}

export default About;
