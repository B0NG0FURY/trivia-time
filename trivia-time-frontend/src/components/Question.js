import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

class Question extends Component {

    allAnswers = () => {
        // console.log(this.props.question);
        let answers = this.props.question.incorrect_answers.map(answer => answer);
        answers.splice(Math.floor(Math.random() * 4), 0, this.props.question.correct_answer);
        return answers.map(answer => <li id={`answers-${this.props.number}`}><Button onClick={this.handleOnClick}>{answer}</Button></li>)
    }

    handleOnClick = (event) => {
        function getAllSiblings() {
            let allAnswers = [...event.target.parentElement.parentElement.children];
            return allAnswers.filter(answer => answer.firstElementChild !== event.target);
        }

        if (event.target.innerText === this.props.question.correct_answer) {
            event.target.style.backgroundColor = "green";
            this.props.answeredCorrect();
        } else {
            event.target.style.backgroundColor = "red";
            this.props.answeredIncorrect();
        }

        getAllSiblings().forEach(answer => answer.firstElementChild.disabled = true);

    }

    render() {
        return(
            <div>
                <Card style={{ color: "black"}}>
                    <Card.Body>
                        <Card.Text>
                            {this.props.question.text}
                        </Card.Text>
                        <ul className="answers">
                            {this.allAnswers()}
                        </ul>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Question;