import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
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
        console.log(this.state.username);
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
                "username": this.state.username,
                "password": this.state.password
            })
        }
        fetch("http://localhost:3001/login", configObject).then(resp => resp.json()).then(resp => {
            console.log(resp);
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
            <div className="raise-up">
                {this.state.errors ? <div className="error"><li>{this.state.errors}</li></div> : null}
                <Form onSubmit={this.handleSubmit} >
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
                    <br/>
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
                    <br/>
                    <Form.Control
                        type="submit"
                        value="Sign In"
                        style={{ backgroundColor: "blue", color: "white" }}
                    />
                </Form>
                {this.state.redirect ? <Redirect to={this.state.redirect} /> : null}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
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