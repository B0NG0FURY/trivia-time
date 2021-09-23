import React, { Component } from 'react';
import NavLink from 'react-router-dom/NavLink';

class User extends Component {

    navStyle = {
        width: "100px",
        padding: "12px",
        margin: "0 6px 6px",
        background: "blue",
        textDecoration: "none",
        color: "white"
    };

    render() {
        return(
            <div>
                <h4>Hello {this.props.user.username}</h4>
                <NavLink to="/user/game/new" exact style={this.navStyle} activeStyle={{background: "darkblue"}}>New Game</NavLink>
                <NavLink to="/user/stats" exact style={this.navStyle} activeStyle={{background: "darkblue"}}>Stats</NavLink>
            </div>
        )
    }
}

export default User;