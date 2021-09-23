import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Route, Link } from 'react-router-dom';
import User from '../components/User';
import NewGame from '../components/NewGame';

class UserContainer extends Component {
    render() {
        return(
            this.props.user.logged_in ? 
            <div className="App-header">
                <User user={this.props.user} />
                <Route path={`${this.props.match.url}/game/new`} component={NewGame} />
            </div>
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