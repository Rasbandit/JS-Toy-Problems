import React from 'react';

const Login = props => {
  return (
    <div>
      <h2>Logged in: {props.loggedIn.toString()}</h2>
      <button onClick={props.logIn}>Log In</button>
    </div>
  );
};

export default Login;
