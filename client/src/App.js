import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import './Application.css';
import './Home.css';
import './Dialler.css';
import Home from './Home';
import Dialler from './Dialler';

class App extends Component {
  // state = {users: []}

  // componentDidMount() {
  //   fetch('/users')
  //     .then(res => res.json())
  //     .then(users => this.setState({ users }));
  // }

  render() {
    return (
      // <div className="App">
      //   <h1>Users</h1>
      //   {this.state.users.map(user =>
      //     <div key={user.id}>{user.username}</div>
      //   )}
      // </div>
      <Router>
          <div className="center">
            <h2>Welcome to Crime Zero Inc.</h2>
            <div className="btn-submit">
              <button className="btn btn-primary pull-right crime-button"><Link to={'/'}>Home</Link></button>
              <button className="btn btn-primary pull-right crime-button"><Link to={'/Dialler'}>Dial for Help</Link></button>
            </div>
            <hr />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/Dialler' component={Dialler} />
            </Switch>
          </div>
      </Router>
    );
  }
}

export default App;