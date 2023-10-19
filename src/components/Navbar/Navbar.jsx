import "./navbar.css";
import Switch from "@mui/material/Switch";
import { useState } from "react";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const handleTheme = (e) => {
    setIsDark(e.target.checked);
  };
  return (
    <div className="navbar">
      <div className="logo">Image Gallery</div>
      <div className="nav">
        <ul className="nav-list">
          <li className="nav-item">Explore</li>
          <li className="nav-item">Collection</li>
          <li className="nav-item">Community</li>
        </ul>
      </div>
      <div className="theme-cta">
        <span className="theme-mode">Dark Mode</span>
        <Switch checked={isDark} onChange={handleTheme} color="default" />
      </div>
    </div>
  );
}
