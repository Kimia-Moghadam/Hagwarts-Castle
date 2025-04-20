// Loading.jsx
import React from 'react';
import { Spin } from 'antd';
import '../CSS/Loading.css'

const Loading = () => {
  return (
    <div style={loaderStyle}>
      <span class="loader"></span>
    </div>
  );
};

const loaderStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  zIndex: 10000, 
};

export default Loading;
