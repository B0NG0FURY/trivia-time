import './App.css';
import Welcome from './containers/Welcome';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Trivia Time</h1>
      <Router>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
      </Router>
    </div>
  );
}

export default App;
