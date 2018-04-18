import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Results extends Component {
    render() {
        let results = localStorage.results.split(',')
        let counter = 0
        console.log(results)
        results.forEach((element)=>{
            if(element === 'correct'){
                counter = counter + 1;
            }
        })
        return (
        <div>
            <p>Respuestas correctas: {counter}</p>
                    <Link to="/questions">Vuelve a jugar</Link>
        </div>
        
        );
    }
}

export default Results;