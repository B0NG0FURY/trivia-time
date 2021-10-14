import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { fetchStats } from '../actions/fetchStats';
import { connect } from 'react-redux';

class Stats extends Component {
    componentDidMount() {
        this.props.fetchStats(this.props.userId)
    }
    render() {
        return(
            <div>
                {this.props.stats.loading ? <h1>Loading Stats...</h1>
                : <Card style={{ color: "black" }}>
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
        fetchStats: (userId) => {
            dispatch(fetchStats(userId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stats);