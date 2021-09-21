import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Link from 'react-router-dom/Link';

class UserContainer extends Component {
    render() {
        return(
            this.props.user.logged_in ? <div><h1>Hello</h1></div>
            : <div>
                <h1>
                    You Need To Sign In Or Create An Account to View This Page
                </h1>
                <Link to="/login">
                    <Button>Log In</Button>
                </Link>
                <br></br><br></br>
                <Link to="/signup">
                    <Button>Sign Up</Button>
                </Link>
            </div>
        )
    }
}

export default UserContainer;