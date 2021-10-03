import React, { Component } from 'react';
import Question from './Question';

class Game extends Component {
    render() {
        return(
            <div>
                <p>
                    Category: {this.props.game.category.name}, Difficulty: {this.props.game.difficulty}, {this.props.game.questions.length} questions
                </p>
                <ol>
                    {this.props.game.questions.map(question => <li><Question question={question} /></li>)}
                </ol>
            </div>
        )
    }
}

export default Game;