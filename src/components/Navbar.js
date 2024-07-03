import React, { useState,useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from "../images/logo.png"
import { scroller} from 'react-scroll';
import {useLocation} from "react-router-dom"
function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const stateData = location.state;
  const scrollToElement = (elementName) => {
    scroller.scrollTo(elementName, {
      smooth: true,
      duration: 500,
      offset: -50, // Optional offset if you have a fixed header
    });
  };
  useEffect(() => {
    if (stateData) { // Check what stateData contains
      // Ensure stateData is the correct identifier (like an id) of the element
      scrollToElement(stateData);
    }
  }, [stateData]);
  
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt='logo' />
        </div>
        <div className="navbar-icon" onClick={toggleNav}>
          {isOpen ? '' : <FaBars />}
        </div>
        <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
          <li><Link className="nav-item" to='home' smooth={true} duration={500} onClick={toggleNav}>Home</Link></li>
          <li><Link className="nav-item" to="about" smooth={true} duration={500} onClick={toggleNav}>About</Link></li>
          <li><Link  className="nav-item" to="skills" smooth={true} duration={500} onClick={toggleNav}>Skills</Link></li>
          <li><Link  className="nav-item" to="experience" smooth={true} duration={500} onClick={toggleNav}>Experience</Link></li>
          <li><Link  className="nav-item" to="projects" smooth={true} duration={500} onClick={toggleNav}>Projects</Link></li>
          <li><Link  className="nav-item" to="education" smooth={true} duration={500} onClick={toggleNav}>Education</Link></li>
          <li><Link  className="nav-item" to="contact" smooth={true} duration={500} onClick={toggleNav}>Contact</Link></li>
          <li>
          {isOpen && (
          <div className="close-icon" onClick={toggleNav}>
            <FaTimes />
          </div>
        )}
          </li>
        </ul>
        
      </div>
    </nav>
  );
}

export default Navbar;
