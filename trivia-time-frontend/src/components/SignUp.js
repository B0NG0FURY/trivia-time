import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class SignUp extends Component {

    state = {
        username: "",
        password: "",
        passwordConfirmation: ""
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const configObject = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                "user": {
                    "username": this.state.username,
                    "password": this.state.password,
                    "password_confirmation": this.state.passwordConfirmation
                }
            })
        }
        fetch("http://localhost:3001/users", configObject).then(resp => resp.json()).then(info => console.log(info))
    }

    render() {
        return(
            <Form onSubmit={this.handleSubmit} >
                <Form.Group>
                    <Form.Control
                        type="text"
                        name="username"
                        placeholder="Username"
                        onChange={this.handleOnChange}
                        value={this.state.username}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={this.handleOnChange}
                        value={this.state.password}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        type="password"
                        name="passwordConfirmation"
                        placeholder="Confirm Password"
                        onChange={this.handleOnChange}
                        value={this.state.passwordConfirmation}
                    />
                </Form.Group>
                <Form.Control type="submit" value="Create Account" />
            </Form>
        )
    }
}

export default SignUp;