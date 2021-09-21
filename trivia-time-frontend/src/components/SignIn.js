import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addUser } from '../actions/addUser';
import { Redirect } from 'react-router-dom';

class SignIn extends Component {

    state = {
        username: "",
        password: ""
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
                "username": this.state.username,
                "password": this.state.password
            })
        }
        fetch("http://localhost:3001/login", configObject).then(resp => resp.json()).then(resp => {
            console.log(resp);
            if (resp.user) {
                let user = {
                    logged_in: resp.logged_in,
                    username: resp.user.username,
                    id: resp.user.id
                };
                this.props.addUser(user);
                this.setState({
                    ...this.state,
                    redirect: "/user"
                })
            } else {
                this.setState({
                    ...this.state,
                    errors: resp.error
                })
            }
        })
    }

    render() {
        return(
            <div>
                {this.state.errors ? <li>{this.state.errors}</li> : null}
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
                    <Button onClick={this.submitForm}>Sign In</Button>
                </Form>
                {this.state.redirect ? <Redirect to={this.state.redirect} /> : null}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state
    };
}

const mapDispatchToProps = dispatch => {
    return {
      addUser: (user) => {
        dispatch(addUser(user))
      }
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);