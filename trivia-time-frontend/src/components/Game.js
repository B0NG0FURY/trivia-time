import React, { Component } from 'react';
import Question from './Question';

class Game extends Component {
    render() {
        return(
            <div>
                <p>
                    Category: {this.props.game.category.name}, Difficulty: {this.props.game.difficulty}, {this.props.game.questions.length} questions
                </p>
                <ul className="question-answer-lists">
                    {this.props.game.questions.map((question, i) => <li id={`question-${i + 1}`}><Question
                        question={question}
                        number={`${i + 1}`}
                        answeredCorrect={this.props.answeredCorrect}
                        answeredIncorrect={this.props.answeredIncorrect}
                    /></li>)}
                </ul>
            </div>
        )
    }
}

export default Game;