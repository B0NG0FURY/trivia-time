import React, { Component } from 'react';
import Question from './Question';
import Button from 'react-bootstrap/Button';

class Game extends Component {

    buttonState = () => this.props.game.answered === this.props.game.questions.length ? false : true

    render() {
        return(
            <div>
                <p>
                    Category: {this.props.game.category.name}, Difficulty: {this.props.game.difficulty}, {this.props.game.questions.length} questions
                </p>
                <ol>
                    {this.props.game.questions.map((question, i) => <li id={`question-${i + 1}`}><Question
                        question={question}
                        number={`${i + 1}`}
                        answeredCorrect={this.props.answeredCorrect}
                        answeredIncorrect={this.props.answeredIncorrect}
                    /></li>)}
                </ol>
                <Button disabled={this.buttonState()}>Finish Game</Button>
            </div>
        )
    }
}

export default Game;