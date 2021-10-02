import React, { Component } from 'react';
import { connect } from  'react-redux';
import { fetchGame } from '../actions/fetchGame';
import Game from '../components/Game';

class GameContainer extends Component {
    render() {
        return(
            <div>
                {this.props.game.requesting ? <h1>Loading Game...</h1>
                : <Game game={this.props.game} />}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { game: state.game }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchGame: () => {
            dispatch(fetchGame(this.props.location.state.configObject))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);