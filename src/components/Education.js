import React from 'react';
import { motion } from 'framer-motion';

function Education() {
  return (
    <section className="education">
      <motion.div 
        className="education-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>Education</h2>
        <div className="education-cards">
          <motion.div 
            className="education-card"
            whileHover={{ scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <h3>Bachelor of Technology in CSBS</h3>
            <p>Sri Eshwar College of Engineering</p>
            <span>8.28 (till 5th sem) | Expected: 2025</span>
          </motion.div>
          <motion.div 
            className="education-card"
            whileHover={{ scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <h3>Higher Secondary Education</h3>
            <p>Sri Santha Vidyalaya Matric Hr. Sec School</p>
            <span>88% | 2019 - 2021</span>
          </motion.div>
          <motion.div 
            className="education-card"
            whileHover={{ scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <h3>SSLC</h3>
            <p>Siddhartha Matriculation Hr. Sec School</p>
            <span>85% | 2018 - 2019</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Education;
