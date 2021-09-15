import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'

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
                <Button>Create Account</Button>
            </Form>
        )
    }
}

export default SignUp;