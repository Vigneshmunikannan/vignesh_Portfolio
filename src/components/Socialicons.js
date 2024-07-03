import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const SocialLinks = () => {
    return (
        <div className="social-links-container">
            <a href="https://github.com/Vigneshmunikannan" target="_blank" rel="noopener noreferrer">
                <FaGithub className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/vignesh-m-25909b237" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="social-icon" />
            </a>
            <a href="https://leetcode.com/u/vigneshmunikannan/" target="_blank" rel="noopener noreferrer">
                <SiLeetcode className="social-icon" />
            </a>
            <a href="mailto:vigneshmunikannan@gmail.com" target="_blank" rel="noopener noreferrer">
                <FaEnvelope className="social-icon" />
            </a>
            <a href="https://instagram.com/vigneshm_12" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="social-icon" />
            </a>
        </div>
    );
};

export default SocialLinks;
