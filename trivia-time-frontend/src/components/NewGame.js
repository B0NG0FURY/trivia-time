import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

class NewGame extends Component {
    state = {
        category: "",
        difficulty: "",
        numberOfQuestions: ""
    }

    render() {
        return(
            <div>
                <h3>Start A New Game</h3>
                <Form>
                    
                </Form>
            </div>
        )
    }
}