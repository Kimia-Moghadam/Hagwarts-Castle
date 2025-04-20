import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/NotFound.css'; 

const NotFound = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/'); 
  };

  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-message">Oops! The page you're looking for doesn't exist.</p>
        <button className="notfound-button" onClick={goHome}>Go Back to Login Page</button>
      </div>
    </div>
  );
};

export default NotFound;
