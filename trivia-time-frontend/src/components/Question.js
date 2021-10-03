import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

class Question extends Component {

    allAnswers = () => {
        // console.log(this.props.question);
        let answers = this.props.question.incorrect_answers.map(answer => answer);
        answers.splice(Math.floor(Math.random() * 4), 0, this.props.question.correct_answer);
        return answers.map(answer => <li><Button>{answer}</Button></li>)
    }

    render() {
        return(
            <div>
                <Card style={{ color: "black"}}>
                    <Card.Body>
                        <Card.Text>
                            {this.props.question.text}
                        </Card.Text>
                        <ul>
                            {this.allAnswers()}
                        </ul>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Question;