import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { fetchStats } from '../actions/fetchStats';

class Stats extends Component {
    render() {
        return(
            <div>
                <Card style={{ color: "black" }}>
                    <Card.Header>Stats</Card.Header>
                    <Card.Text>
                        Games Played:
                    </Card.Text>
                    <Card.Text>
                        Favorite Category:
                    </Card.Text>
                    <Card.Text>
                        Favorite Difficulty:
                    </Card.Text>
                    <Card.Text>
                        Questions Answered:
                    </Card.Text>
                    <Card.Text>
                        Average Correct:
                    </Card.Text>
                </Card>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        stats: state.stats
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchStats: (userId) => {
            dispatch(fetchStats(userId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stats);