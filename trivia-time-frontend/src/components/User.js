import React, { Component } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NewGame from './NewGame';

class User extends Component {
    render() {
        return(
            <div className="App-header">
                <h4>Hello {this.props.user.username}</h4>
                <Breadcrumb>
                    <Breadcrumb.Item href="/user/game/new">New Game</Breadcrumb.Item>
                    <Breadcrumb.Item>Stats</Breadcrumb.Item>
                </Breadcrumb>
                <Router>
                    <Route exact path="/user/game/new" component={NewGame} />
                </Router>
            </div>
        )
    }
}

export default User;