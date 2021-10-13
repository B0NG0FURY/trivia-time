import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Route, Link } from 'react-router-dom';
import User from '../components/User';
import NewGame from '../components/NewGame';
import GameContainer from './GameContainer';
import Stats from '../components/Stats';

class UserContainer extends Component {
    render() {
        return(
            this.props.user.logged_in ? 
            <div className="App-header">
                <User user={this.props.user} />
                <Route 
                    exact path={`${this.props.match.url}/game/new`}
                    render={(props) => <NewGame {...props} user={this.props.user} />}
                />
                <Route 
                    exact path={`${this.props.match.url}/game`}
                    render={(props) => <GameContainer {...props} />}
                />
                <Route
                    exact path="/user/:userId/stats"
                    render={(props) => <Stats {...props} userId={this.props.user.id} />}
                />
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