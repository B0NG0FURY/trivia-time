import React, { Component } from 'react';
import NavLink from 'react-router-dom/NavLink';

class User extends Component {

    navStyle = {
        width: "100px",
        padding: "12px",
        margin: "5px 6px 0px 6px",
        background: "blue",
        textDecoration: "none",
        color: "white"
    };

    render() {
        return(
            <div className="user">
                <h4>User: {this.props.user.username}</h4>
                <NavLink to={`/user/${this.props.user.id}/game/new`} exact style={this.navStyle} activeStyle={{background: "darkblue"}} >New Game</NavLink>
                <NavLink to={`/user/${this.props.user.id}/stats`} exact style={this.navStyle} activeStyle={{background: "darkblue"}} >Stats</NavLink>
            </div>
        )
    }
}

export default User;