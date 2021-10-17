import React, { Component } from 'react';
import { connect } from  'react-redux';
import { fetchGame } from '../actions/fetchGame';
import { answeredCorrect } from '../actions/answeredCorrect';
import { answeredIncorrect } from '../actions/answeredIncorrect';
import Game from '../components/Game';
import Summary from '../components/Summary';
import Button from 'react-bootstrap/Button';
import { BACKEND_URL } from '../api/backendUrl';

class GameContainer extends Component {
    state = {
        gameOver: false
    }

    componentDidMount() {
        this.props.fetchGame(this.props.location.state.configObject);
    }

    renderGameState = () => {
        if (this.state.gameOver) {
            return <Summary game={this.props.game} />
        } else {
            return (
                <div className="game">
                    <Game 
                        game={this.props.game}
                        answeredCorrect={this.props.answeredCorrect}
                        answeredIncorrect={this.props.answeredIncorrect} 
                    />
                    <Button 
                        id="finish-game"
                        disabled={this.buttonState()}
                        onClick={this.finishGame}
                    >
                      Finish Game
                    </Button>
                    <br></br>
                    <br></br>
                </div>
            )
        }
    }

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
                    "id": this.props.game.id,
                    "score": this.props.game.correct
                }
            })
        }

        fetch(`${BACKEND_URL}/${this.props.game.id}`, configObject).then(resp => resp.json()).then(resp => console.log(resp["status"]));

        this.setState({
            gameOver: true
        });
    }

    render() {
        return(
            <div className="user-component">
                {this.props.game.loading ? <h1>Loading Game...</h1>
                : this.renderGameState()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { game: state.game }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchGame: (configObject) => {
            dispatch(fetchGame(configObject))
        },
        answeredCorrect: () => {
            dispatch(answeredCorrect())
        },
        answeredIncorrect: () => {
            dispatch(answeredIncorrect())
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);