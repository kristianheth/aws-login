import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Login from '../components/auth/Login';
// import Register from '../components/auth/Register';
import { Auth } from 'aws-amplify';

import './AuthContainer.css';

const AuthContainer = (props) => {
  const [signin, triggerSigninHandler] = useState(false);

  const { username, changeUsername } = useState('');
  const onUsernameChangeHandler = (event) => {
    changeUsername(event.target.value);
  };

  const [password, changePassword] = useState('');
  const onPasswordChangeHandler = (event) => {
    changePassword(event.target.value);
  };

  const triggerSignin = () => {
    triggerSigninHandler(!signin);
  };

  return (
    <div>
      <Header />
      <div className='auth-container'>
        <div className='auth'>
          {signin === false && (
            <Login
              username={username}
              password={password}
              onUsernameChangeHandler={onUsernameChangeHandler}
              onPasswordChangeHandler={onPasswordChangeHandler}
              triggerSignin={triggerSignin}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthContainer;
