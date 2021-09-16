import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Link from 'react-router-dom/Link';

export default class Welcome extends Component {
    render() {
        return(
            <div >
                <h1>Welcome To Trivia Time</h1>
                <Link to="/login">
                    <Button>Log In</Button>
                </Link>
                <br></br><br></br>
                <Link to="/signup">
                    <Button>Sign Up</Button>
                </Link>
            </div>
        )
    }
}
