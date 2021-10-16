import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class Summary extends Component {
    capitalize = (string) => string[0].toUpperCase() + string.slice(1)

    render() {
        return(
            <div>
                <Card style={{ color: "black" }} className="user-card">
                    <Card.Header>
                        Game #{`${this.props.game.id}`}
                    </Card.Header>
                    <Card.Title>
                        Results
                    </Card.Title>
                    <Card.Text>
                        Category: {`${this.props.game.category.name}`}
                    </Card.Text>
                    <Card.Text>
                        Difficulty: {`${this.capitalize(this.props.game.difficulty)}`}
                    </Card.Text>
                    <Card.Text>
                        Score: {`${this.props.game.correct}/${this.props.game.questions.length}`}
                    </Card.Text>
                </Card>
            </div>
        )
    }
}

export default Summary;