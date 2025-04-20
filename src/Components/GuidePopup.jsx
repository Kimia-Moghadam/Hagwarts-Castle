import React, { useState } from "react";
import "../CSS/GuidePopup.css";

const GuidePopup = ({ onClose, onRemember, rememberMe }) => {
  const handleRememberChange = () => {
    const newRememberMe = !rememberMe;  
    onRemember(newRememberMe); 
    localStorage.setItem("remember", newRememberMe.toString()); 
  };

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <h2 className="popup-title">Welcome to the Magic HAGWARTS Map</h2>
        <p className="popup-message">
          Click on the glowing circles to discover the magical places and enjoy the adventure!
        </p>
        <div className="popup-actions">
          <label className="popup-checkbox-label">
            <input
              className="popup-checkbox"
              type="checkbox"
              checked={rememberMe}
              onChange={handleRememberChange}
            />
            Don't show this again
          </label>
          <div className="popup-buttons">
            <button className="popup-button confirm-button " onClick={onClose}>
              Got it!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuidePopup;
