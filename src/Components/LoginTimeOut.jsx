import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/LoginTimeout.css';  

const LoginTimeout = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/'); 
  };

  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-message">Oops! Time out , you need to login again</p>
        <button className="notfound-button" onClick={goHome}>Go Back to Login Page</button>
      </div>
    </div>
  );
};

export default LoginTimeout;
