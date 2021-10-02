import React, { Component } from 'react';
import { connect } from  'react-redux';

class GameContainer extends Component {
    render() {
        return(
            <div>
                this.props.game.receiving ? <h1>Loading Game...</h1> : null
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { game: state.game }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);