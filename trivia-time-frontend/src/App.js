import React, { Component } from 'react';
import './App.css';
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
          <Route exact path="/" component={Welcome} />
          <Route exact path="/login" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route 
            exact path="/user"
            render={routerProps => <UserContainer logged_in={this.props.store.getState().logged_in} />}
          />
        </Router>
      </div>
    );
  }
}

export default App;
