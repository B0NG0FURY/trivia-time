import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Welcome from './containers/Welcome';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import UserContainer from './containers/UserContainer';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Trivia Time</h1>
        <Router>
          <div className="App-header">
            <Route exact path="/" component={Welcome} />
            <Route exact path="/login"
              render={routerProps => <SignIn />} />
            <Route exact path="/signup" component={SignUp} />
            <Route 
              path="/user/:userId"
              render={routerProps => <UserContainer {...routerProps} user={this.props.user} />}
            />
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App);
