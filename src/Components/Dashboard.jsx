import React, { useEffect, useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/Dashboard.css";
import { motion } from "framer-motion";
import MapImg from "../assets/photos/Map.jpg";
import Menu from "./Menu";
import GuidePopup from "./GuidePopup";
import { ThemeContext } from "./ThemeContext"; 
import darkMap from "../assets/photos/Map.jpg";
import lightMap from "../assets/photos/Map-lightmode.jpg"; 


const chartPoints = [
  { name: "Quiddittch-Pitch", label: "", top: "30%", left: "22%" },
  { name: "Graveyard1", label: "", top: "55%", left: "21.5%" },
  { name: "Graveyard2", label: "", top: "85%", left: "20.5%" },
  { name: "Snaps-Cave1", label: "", top: "47%", left: "34.5%" },
  { name: "Black-Lake", label: "", top: "69%", left: "29.5%" },
  { name: "Intrance-TH-Dungeon", label: "", top: "94%", left: "41%"},
  { name: "Classroom-Area1", label: "", top: "97%", left: "72%" },
  { name: "Classroom-Area2", label: "", top: "86%", left: "90%" },
  { name: "Snaps-Cave2", label: "", top: "50%", left: "91%" },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false); 
  const [rememberMe, setRememberMe] = useState(false); 
  const mapRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.removeItem('token'); 
      navigate('/LoginTimeout'); 
    }, 60000);  
    return () => clearTimeout(timer);  
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && !localStorage.getItem("popupSeen")) {
      setShowPopup(true); 
    }
  }, []);

  const { theme } = useContext(ThemeContext); 
const currentMap = theme === "dark" ? darkMap : lightMap;


  const handleClosePopup = () => {
    localStorage.setItem("popupSeen", "true");
    setShowPopup(false); 
  };

  const handleRemember = (value) => {
    setRememberMe(value);
  };

  const handleClick = (chartName) => {
    navigate(`/chart/${chartName}`);
  };

  const getPointStyle = (point) => {
    if (mapRef.current) {
      const mapWidth = mapRef.current.offsetWidth;
      const mapHeight = mapRef.current.offsetHeight;

      const top = (parseFloat(point.top) / 100) * mapHeight;
      const left = (parseFloat(point.left) / 100) * mapWidth;

      return {
        top: `${top}px`,
        left: `${left}px`,
      };
    }
    return { top: point.top, left: point.left }; 
  };

  return (
    <div className="dashboard-container">
      {showPopup && <GuidePopup onClose={handleClosePopup} onRemember={handleRemember} rememberMe={rememberMe} />}
      <Menu />
      <motion.img
      src={currentMap}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      alt="Hogwarts Map"
      className="dashboard-map hogwarts-map"
      ref={mapRef}
    />

      {chartPoints.map((point) => (
        <motion.button
          key={point.name}
          className="map-point"
          style={getPointStyle(point)} 
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleClick(point.name)}
        >
          {point.label}
        </motion.button>
      ))}
    </div>
  );
};

export default Dashboard;
