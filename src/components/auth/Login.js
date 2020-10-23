import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
import Header from '../../components/Header/Header';

import './Login.css';

class Login extends Component {
  state = {
    username: '',
    password: '',
    errors: null,
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const user = await Auth.signIn(this.state.username, this.state.password);

      this.props.setAuthStatus(true);
      this.props.setUser(user);
      this.props.history.push('/');
    } catch (error) {
      let err = null;
      !error.message ? (err = { message: error }) : (err = error);
      this.setState({
        errors: {
          ...this.state.errors,
          cognito: err,
        },
      });
    }
  };

  onInputChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  render() {
    return (
      <div className='login'>
        <h1>Anmelden</h1>
        <div className='free-registration'>
          <span>Neuer Benutzer? </span>
          <a href='/'>Kostenlos registrieren</a>
        </div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='username'>Benutzername</label>
          <input
            type='text'
            id='username'
            placeholder='vorname.nachname'
            value={this.state.username}
            onChange={this.onInputChange}
          />
          <label htmlFor='password'>Passwort</label>
          <input
            type='password'
            id='password'
            placeholder='Passwort eingeben'
            value={this.state.password}
            onChange={this.onInputChange}
          />
          <button>Anmelden</button>
          <a href='/'>Zugangsdaten vergessen?</a>
        </form>
      </div>
    );
  }
}

export default Login;
