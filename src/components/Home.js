import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Home extends Component {
    render(){
        let imgStyle = {
            width: '200px',
            height: 'auto',
            borderRadius: '90px',
            display: 'block',
            margin: '50px auto',
        }
        return(
          <section className="jumbotron text-center">
            <div className="container">
              <h1 className="jumbotron-heading">Bienvenido a Trivia</h1>
                <img style={imgStyle} src="http://www.maxprog.com/img/cat.jpg" />
                <br/>
                <button type="button" className="btn btn-dark"><Link to="/questions">Comienza a jugar</Link></button>
            </div>
          </section>
        )
    }
}

export default Home;
