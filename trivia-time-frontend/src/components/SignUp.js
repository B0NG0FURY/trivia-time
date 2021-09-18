import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'

class SignUp extends Component {

    state = {
        username: "",
        password: "",
        passwordConfirmation: "",
        errors: ""
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitForm = (event) => {
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
            <Form>
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
                <Button onClick={this.submitForm}>Create Account</Button>
            </Form>
        )
    }
}

export default SignUp;