import React from 'react';

const Login = props => {
  console.log(props.logIn.toString());
  return (
    <div>
      <h1>Please Log In to View Dashboard</h1>
      <button onClick={props.logIn}>Login</button>
    </div>
  );
};

export default Login;
