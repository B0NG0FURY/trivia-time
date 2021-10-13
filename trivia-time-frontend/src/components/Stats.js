import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class Stats extends Component {
    render() {
        return(
            <div>
                <Card>
                    <Card.Header>Stats</Card.Header>
                    <Card.Text>
                        Games Played:
                    </Card.Text>
                    <Card.Text>
                        Favorite Category:
                    </Card.Text>
                    <Card.Text>
                        Average Score:
                    </Card.Text>
                </Card>
            </div>
        )
    }
}

export default Stats;