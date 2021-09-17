import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

class SignIn extends Component {

    state = {
        username: "",
        password: "",
        errors: ""
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return(
            <Form>
                <Form.Group>
                    <Form.Control
                        type="text"
                        placeholder="Username"
                        className="form"
                        name="username"
                        onChange={this.handleOnChange}
                        value={this.state.username}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        className="form"
                        name="password"
                        onChange={this.handleOnChange}
                        value={this.state.password}
                    />
                </Form.Group>
                <Button>Sign In</Button>
            </Form>
        )
    }
}

export default SignIn;