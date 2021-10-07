import React, { Component } from 'react';
import { connect } from  'react-redux';
import { fetchGame } from '../actions/fetchGame';
import { answeredCorrect } from '../actions/answeredCorrect';
import { answeredIncorrect } from '../actions/answeredIncorrect';
import Game from '../components/Game';

class GameContainer extends Component {
    componentDidMount() {
        this.props.fetchGame(this.props.location.state.configObject);
    }

    render() {
        return(
            <div>
                {this.props.game.loading ? <h1>Loading Game...</h1>
                : <Game game={this.props.game} answeredCorrect={this.props.answeredCorrect} answeredIncorrect={this.props.answeredIncorrect} />}
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