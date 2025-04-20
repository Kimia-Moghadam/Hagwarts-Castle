import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../CSS/Login.css';
import Loading from './Loading'; 

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Both fields are required!');
      return;
    }

    setLoading(true);
    setError('');


    navigate('/auth');

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)); 

      const response = await fetch('http://localhost:3001/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token); 
        localStorage.removeItem('popupSeen'); 
      

        setTimeout(() => {
          navigate('/dashboard');
        }, 2000);
      } else {
        setError("Login Failed : Username or Password is incorrect");
      }      

    } catch (error) {
      setError('There was a problem connecting to the server.');
      navigate('/');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='bodyclass'>
    <div className="login-container">
      <div className="login-card">
        <h1 className="First">Login to Hogwarts </h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-input-material">
            <input
              type="text"
              name="username"
              id="username"
              placeholder=" "
              autoComplete="off"
              className="form-control-material"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="username">Username</label>
          </div>
          <div className="form-input-material">
            <input
              type="password"
              name="password"
              id="password"
              placeholder=" "
              autoComplete="off"
              className="form-control-material"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password">Password</label>
          </div>
          {error && <div className="error-message">{error}</div>}
          <button type="submit" className="btn btn-primary btn-ghost" disabled={loading}>
            {loading ? 'Loading...' : 'Login'}
          </button>
        </form>
      </div>
      {loading && <Loading />}
    </div>
    </div>
  );
};

export default Login;
