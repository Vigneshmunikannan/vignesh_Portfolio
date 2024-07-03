import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from "../images/logo.png"
import {useNavigate} from "react-router-dom"
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  const handlenavigate = (event) => {
      navigate(`/`, {
        state: event.target.id,
        replace: false,
      });
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
          <li><Link className="nav-item" to="/" smooth={true} duration={500} onClick={(e)=>{
           toggleNav()
           handlenavigate(e)
          }}>Home</Link></li>
          <li><Link className="nav-item" to="about" smooth={true} duration={500} onClick={(e)=>{
           toggleNav()
           handlenavigate(e)
          }} name="about" id="about">About</Link></li>
          <li><Link  className="nav-item" to="skills" smooth={true} duration={500} onClick={(e)=>{
           toggleNav()
           handlenavigate(e)
          }} name="skills" id="skills">Skills</Link></li>
          <li><Link  className="nav-item" to="experience" smooth={true} duration={500} onClick={(e)=>{
           toggleNav()
           handlenavigate(e)
          }} name="experience" id="experience">Experience</Link></li>
          <li><Link  className="nav-item" to="projects" smooth={true} duration={500} onClick={(e)=>{
           toggleNav()
           handlenavigate(e)
          }} name="projects" id="projects">Projects</Link></li>
          <li><Link  className="nav-item" to="education" smooth={true} duration={500} onClick={(e)=>{
           toggleNav()
           handlenavigate(e)
          }} name="education" id="education">Education</Link></li>
          <li><Link  className="nav-item" to="contact" smooth={true} duration={500} onClick={(e)=>{
           toggleNav()
           handlenavigate(e)
          }} name="contact" id="contact">Contact</Link></li>
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
