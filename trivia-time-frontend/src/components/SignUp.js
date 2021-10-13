import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addUser } from '../actions/addUser';
import { Redirect } from 'react-router-dom';

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
        fetch("http://localhost:3001/users", configObject).then(resp => resp.json()).then(resp => {
            if (resp.user) {
                localStorage.setItem("jwt", resp.jwt);
                let user = {
                    logged_in: resp.logged_in,
                    username: resp.user.username,
                    id: resp.user.id
                };
                this.props.addUser(user);
                this.setState({
                    ...this.state,
                    redirect: `/user/${resp.user.id}`
                });
            } else {
                this.setState({
                    ...this.state,
                    errors: resp.errors
                })
            }
        })
    }

    handleErrors = () => {
        return this.state.errors.map(error => <li>{error}</li>)
    }
    
    render() {
        return(
            <div>
                { this.state.errors ? this.handleErrors() : null }
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
                { this.state.redirect ? <Redirect to={this.state.redirect} /> : null }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addUser: (user) => {
            dispatch(addUser(user))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);