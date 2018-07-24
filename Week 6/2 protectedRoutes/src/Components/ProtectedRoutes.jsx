import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoutes = ({ component: Component, loggedIn, ...rest }) => {
  console.log(loggedIn);
  return (
    <Route
      {...rest}
      render={props => {
        return loggedIn ? <Component {...props} /> : <Redirect to="/login" />;
      }}
    />
  );
};

export default ProtectedRoutes;
