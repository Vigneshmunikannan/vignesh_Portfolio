import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaAws, FaDocker, FaWordpress, FaShopify, FaPython, FaJava,FaPlug,FaBoxOpen,FaServer,FaSlack ,FaJira,FaTools,FaCode,FaShieldAlt,FaNetworkWired } from 'react-icons/fa';
import { SiTailwindcss, SiBootstrap, SiMongodb, SiDjango, SiVisualstudiocode, SiGithub, SiCanva, SiPostman, SiGooglecloud, SiVultr, } from 'react-icons/si';

function Skills() {
  return (
    <section className="skills">
      <motion.div 
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>Skills</h2>
        <div className="skills-list">
          <ul>
            <li><FaHtml5 /> HTML</li>
            <li><FaCss3Alt /> CSS</li>
            <li><FaJs /> JavaScript</li>
            <li><FaReact /> React.js</li>
            <li><SiTailwindcss /> Tailwind CSS</li>
            <li><SiBootstrap /> Bootstrap</li>
            <li><FaNodeJs /> Node.js</li>
            <li><SiDjango /> Django</li>
            <li><SiMongodb /> MongoDB</li>
            <li><FaDatabase /> SQL</li>
            <li><SiVisualstudiocode /> Visual Studio Code</li>
            <li><SiGithub /> GitHub</li>
            <li><SiPostman /> Postman</li>
            <li><SiGooglecloud /> Google Cloud</li>
            <li><FaAws /> AWS</li>
            <li><FaDocker /> Docker</li>
            <li><SiVultr /> VPS Server</li>
            <li><FaWordpress /> WordPress</li>
            <li><FaShopify /> Shopify</li>
            <li><FaPython /> Python</li>
            <li><FaJava /> Java</li>
            <li><SiCanva /> Canva</li>
            <li><FaPlug /> API Integrations</li>
            <li><FaBoxOpen /> Package Development</li>
            <li><FaServer /> Express.js</li>
            <li><FaDatabase /> SQLite</li>
            <li><FaSlack /> Slack</li>
            <li><FaJira /> Jira</li>
            <li><FaNetworkWired /> DNS Management</li>
            <li><FaTools /> Unit Testing</li>
            <li><FaCode /> Data Structures & Algorithms</li>
            <li><FaShieldAlt /> Object-Oriented Programming (OOPs)</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;
