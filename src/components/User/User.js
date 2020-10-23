import React from 'react';

import './User.css';

const User = (props) => {
  const cognitoUser = props.user;

  const loggedinUserName = cognitoUser.username;

  return (
    <div className='user'>
      <div className='user-header'>
        <span>←</span>
        <span>Profil ansehen/ändern</span>
        <span>=</span>
      </div>
      <h1> {loggedinUserName}</h1>

      <ul>
        <li>Benutzername: {loggedinUserName}</li>
        <li>Email:</li>
        <li>Telefon 1: </li>
        <li>Telefon 2:</li>
        <li>Benutzer erstellt:</li>
      </ul>

      {/* <form>
        <label htmlFor='username'>Benutzername: </label>
        <input
          type='test'
          id='username'
          value={loggedinUserName}
          onChange={onInputChange}
        /> 
       </form> */}
    </div>
  );
};

export default User;
