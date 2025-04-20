import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';
import '../CSS/Menu.css';
import { Sun, Moon } from 'lucide-react';

const Menu = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className={`menu-container ${theme}`}>
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="http://localhost:5173/chart/Quiddittch-Pitch">Most Seen Item</Link>
        </li>
        <li>
          <Link to="/dashboard/Story">Story About This Map</Link>
        </li>
        <li>
          <Link to="/dashboard/Credit">Credit</Link>
        </li>
        <li>
          <Link to="/Comments">Comments</Link>
        </li>
        <li className="buton" onClick={handleLogout}>Logout</li>
        <li className="theme-toggle" style={{marginLeft:'55px'}} onClick={toggleTheme}>
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </li>
      </ul>
    </div>
  );
};

export default Menu;
