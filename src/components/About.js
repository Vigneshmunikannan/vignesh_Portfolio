import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../images/profile.jpeg'; // Replace with your image path

function About() {
  return (
    <section className="about">
      <motion.div
        className="about-content"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="about-image">
          <img src={profileImage} alt="About Me" />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>Hello! I'm Vignesh M, a passionate Full Stack Web Developer currently pursuing a Bachelor of Technology in Computer Science and Business Systems at Sri Eshwar College of Engineering, with a CGPA of 8.28 up to my 5th semester. I have gained significant experience through internships and freelancing projects, specializing in Node.js, Express, MongoDB, React.js, React MUI, and Tailwind CSS. My work focuses on creating efficient, scalable web applications with responsive and user-friendly interfaces. Additionally, I have experience with Django, SQL, and deploying applications on VPS servers. My coding skills are recognized on platforms like LeetCode, SkillRack, and HackerRank, where I have achieved notable rankings. I am committed to continuous learning, holding certifications in web development, data structures, and Java programming. My aim is to leverage my skills to develop impactful web applications that enhance user experiences. Beyond coding, I enjoy mountain trekking, meditation,solo travel and spending time in silence with nature, which helps me stay balanced and focused.</p>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
