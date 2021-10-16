import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { fetchStats } from '../actions/fetchStats';
import { connect } from 'react-redux';

class Stats extends Component {
    componentDidMount() {
        const token = localStorage.getItem("jwt");

        const configObject = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${token}`
            }
        }
        this.props.fetchStats(this.props.userId, configObject)
    }
    render() {
        return(
            <div className="user-component">
                {this.props.stats.loading ? <h1>Loading Stats...</h1>
                : <Card style={{ color: "black" }} className="user-card">
                  <Card.Header>Stats</Card.Header>
                  <Card.Text>
                      Games Played: {this.props.stats.gamesPlayed}
                  </Card.Text>
                  <Card.Text>
                      Favorite Category: {this.props.stats.favCategory}
                  </Card.Text>
                  <Card.Text>
                      Favorite Difficulty: {this.props.stats.favDifficulty}
                  </Card.Text>
                  <Card.Text>
                      Questions Answered: {this.props.stats.questionsAnswered}
                  </Card.Text>
                  <Card.Text>
                      Average Correct: {this.props.stats.avgCorrect}%
                  </Card.Text>
              </Card>}
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
        fetchStats: (userId, configObject) => {
            dispatch(fetchStats(userId, configObject))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stats);