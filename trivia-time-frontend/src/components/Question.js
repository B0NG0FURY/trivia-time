import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

class Question extends Component {

    allAnswers = () => {
        return this.props.question.incorrect_answers.splice(Math.floor(Math.random() * 4), 0, this.props.question.correct_answer)
    }

    render() {
        return(
            <div>
                <Card>
                    <Card.Text>
                        {this.props.question.text}
                        {this.allAnswers().map(answer => {
                            return <Button>{answer}</Button>
                        })}
                    </Card.Text>
                </Card>
            </div>
        )
    }
}

export default Question;