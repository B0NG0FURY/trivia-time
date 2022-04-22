import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

class Question extends Component {

    allAnswers = () => {
        let answers = this.props.question.all_answers;
        return answers.map(answer => <li key={`answers-${this.props.number}`}><Button onClick={this.handleOnClick} style={{border: "2px solid black"}}>{answer}</Button></li>)
    }

    handleOnClick = (event) => {
        function getAllSiblings() {
            let allAnswers = [...event.target.parentElement.parentElement.children];
            return allAnswers.filter(answer => answer.firstElementChild !== event.target);
        }

        if (event.target.innerText === this.props.question.correct_answer) {
            event.target.style.backgroundColor = "green";
            event.target.innerText = "Correct";
            this.props.answeredCorrect();
        } else {
            event.target.style.backgroundColor = "red";
            event.target.innerText = "Incorrect";
            this.props.answeredIncorrect();
        }

        getAllSiblings().forEach(answer => answer.firstElementChild.disabled = true);

    }

    render() {
        return(
            <div className="questions">
                <Card 
                    style={{ color: "black", border: "6px solid blue"}}
                >
                    <Card.Body>
                        <Card.Text>
                            {`${this.props.number}. ${this.props.question.text}`}
                        </Card.Text>
                        <ul className="question-answer-lists">
                            {this.allAnswers()}
                        </ul>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Question;