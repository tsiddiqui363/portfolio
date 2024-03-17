import React, { useState } from "react";
import { Link } from 'react-scroll';
import "./Navbar.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">My Portfolio</div>
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {/* Icon for menu (e.g., hamburger icon) */}
      </div>
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
        <li><Link to="about" smooth={true} duration={500}>About</Link></li>
        <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
        <li><Link to="resume" smooth={true} duration={500}>Resume</Link></li>
        <li><Link to="socials" smooth={true} duration={500}>Socials</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
