import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

export default class Welcome extends Component {
    render() {
        return(
            <div>
                <h1>Welcome To Trivia Time</h1>
                <Button>Log In</Button>
                <br></br><br></br>
                <Button>Sign Up</Button>
            </div>
        )
    }
}
