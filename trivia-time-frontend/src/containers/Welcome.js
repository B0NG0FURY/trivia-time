import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default class Welcome extends Component {
    render() {
        return(
            <div >
                <h1>Welcome</h1>
                <Link to="/login">
                    <Button size="lg">Log In</Button>
                </Link>
                <br></br>
                or
                <br></br>
                <Link to="/signup">
                    <Button size="lg">Sign Up</Button>
                </Link>
            </div>
        )
    }
}
