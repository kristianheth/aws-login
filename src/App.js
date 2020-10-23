import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/auth/Login';
import Header from './components/Header/Header';

import User from './components/User/User';
// import { Auth } from 'aws-amplify';

import './App.css';

// username: jan.hölter, password: Test#5678

class App extends Component {
  state = {
    isAuthenticated: false,
    isAuthenticating: true,
    user: '',
  };

  setAuthStatus = (authenticated) => {
    this.setState({ isAuthenticated: authenticated });
  };

  setUser = (user) => {
    this.setState({ user: user });
  };

  render() {
    return (
      <div className='App'>
        <Router>
          <Switch>
            {this.state.isAuthenticated === false && (
              <>
                <Header />
                <Route
                  exact
                  path='/'
                  render={(props) => (
                    <Login
                      {...props}
                      user={this.state.user}
                      setAuthStatus={this.setAuthStatus}
                      isAuthenticated={this.state.isAuthenticated}
                      setUser={this.setUser}
                    />
                  )}
                />
              </>
            )}
            {this.state.isAuthenticated === true && (
              <Route
                exact
                path='/'
                render={(props) => <User {...props} user={this.state.user} />}
              />
            )}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
