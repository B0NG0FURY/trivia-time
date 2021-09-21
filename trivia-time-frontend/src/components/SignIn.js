import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import addUser from './actions/addUser';

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
        fetch("http://localhost:3001/login", configObject).then(resp => resp.json()).then(info => console.log(info))
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
                <Button onClick={this.submitForm}>Sign In</Button>
            </Form>
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