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
                <img style={imgStyle} src="http://www.maxprog.com/img/cat.jpg" />
                <br/>
                <br/>
                <button type="button" className="btn btn-dark"><Link to="/questions">Comienza a jugar</Link></button>
            </div>
        )
    }
}

export default Home;
