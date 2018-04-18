import React, { Component } from 'react';

class Questions extends Component {
    constructor(){
        super();
        this.state= {
            questions: [],
            results: []
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event, correct){
        event.target.parentElement.style.display = 'none'
        let newResults = [...this.state.results]
        console.log(event.target.innerText, correct)

    }


    componentDidMount(){
        fetch('https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple')
            .then((response) => {
            return response.json()
            })
            .then((response) => {
            let correctAnswers = []
            response.results.forEach((element) =>{
                correctAnswers.push(element.correct_answer)
            })
            this.setState({questions: response.results, correct_answer: correctAnswers}, function(){console.log(this.state)})
            })
        }
    render(){
        if(this.state.questions.length > 0){
            return(
                <div>
                <h3>Seleccion la respuesta correcta</h3>
                <br/>
                <br/>
                    {this.state.questions.map((item, i) => {
                        let answerArray = [...item.incorrect_answers, item.correct_answer]
                        function shuffle( arr ){
                            return arr.sort( () => Math.random() - 0.5 );
                            }
                        console.log(answerArray)
                        let sortedAnswer = shuffle( answerArray ) ;
                        console.log(sortedAnswer)
                        return <div key={i}>
                            <h5>{item.question}</h5>
                            <button className="btn btn-secondary btn-sm" onClick={this.handleClick}>{ sortedAnswer[0]}</button>
                            <button className="btn btn-secondary btn-sm" onClick={this.handleClick}>{ sortedAnswer[1]}</button>
                            <button className="btn btn-secondary btn-sm" onClick={this.handleClick}>{ sortedAnswer[2]}</button>
                            <button className="btn btn-secondary btn-sm" onClick={this.handleClick}>{ sortedAnswer[3]}</button>

                        </div>
                    })}
                </div>
            )

        } else {
            return <div>Cargando...</div>

        }

    }
}

export default Questions;
