import React, { Component } from 'react';
import Question from './Question';

class Game extends Component {
    render() {
        return(
            <div>
                <p>
                    Difficulty: {this.props.game.difficulty},     
                    {this.props.game.questions.length} questions
                </p>
                {this.props.game.questions.map(question => <Question question={question} />)}
            </div>
        )
    }
}

export default Game;