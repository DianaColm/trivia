import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Home extends Component {
    render(){
        let imgStyle = {
            width: '200px',
            height: 'auto',
            display: 'block',
            margin: '0 auto'
        }
        return(
            <div>
                <h1>Bienvenido a trivia</h1>
                <Link to="/questions">Comienza a jugar</Link>
                <img style={imgStyle} src="http://www.maxprog.com/img/cat.jpg" />
            </div>
        )
    }
}

export default Home;