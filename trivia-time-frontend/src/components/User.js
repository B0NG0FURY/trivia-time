import React, { Component } from 'react';
import { Breadcrumb } from 'react-bootstrap';

class User extends Component {
    render() {
        return(
            <div className="App-header">
                <h4>Hello {this.props.user.username}</h4>
                <Breadcrumb>
                    <Breadcrumb.Item>New Game</Breadcrumb.Item>
                    <Breadcrumb.Item>Stats</Breadcrumb.Item>
                </Breadcrumb>
            </div>
        )
    }
}

export default User;