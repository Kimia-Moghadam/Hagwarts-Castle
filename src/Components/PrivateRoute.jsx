import React from 'react';
import { Navigate } from 'react-router-dom';  

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = localStorage.getItem('token');  

  return (
    isLoggedIn ? (
      <Component {...rest} />  
    ) : (
      <Navigate to="/not-found" />  
    )
  );
};

export default PrivateRoute;
