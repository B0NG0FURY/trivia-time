import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class Summary extends Component {
    render() {
        return(
            <div className="summary">
                <Card style={{ color: "black" }}>
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
                        Difficulty: {`${this.props.game.difficulty}`}
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