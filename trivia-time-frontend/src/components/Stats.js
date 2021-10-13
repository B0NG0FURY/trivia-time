import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

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

export default Stats;