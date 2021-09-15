import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

class SignIn extends Component {
    render() {
        return(
            <Form>
                <Form.Group>
                    <Form.Control type="text" placeholder="Username" className="form" />
                </Form.Group>
                <Form.Group>
                    <Form.Control type="password" placeholder="Password" className="form" />
                </Form.Group>
                <Button>Sign In</Button>
            </Form>
        )
    }
}

export default SignIn;