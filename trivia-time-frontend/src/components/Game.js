import React, { Component } from 'react';
import Question from './Question';
import Button from 'react-bootstrap/Button';
import { Redirect } from 'react-router-dom';

class Game extends Component {
    state = {};

    buttonState = () => this.props.game.answered === this.props.game.questions.length ? false : true

    finishGame = () => {
        const token = localStorage.getItem("jwt");

        let configObject = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                "game": {
                    "score": this.props.game.correct
                }
            })
        }

        this.setState({
            redirect: "/game/summary"
        })
    }

    redirect = () => {
        return <Redirect
                    to={{
                        pathname: this.state.redirect,
                        state: { game: this.props.game }
                    }}
                />
    }

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
                <Button id="finish-game" disabled={this.buttonState()}>
                    Finish Game
                </Button>

                {this.state.redirect ? this.redirect() : null}
            </div>
        )
    }
}

export default Game;