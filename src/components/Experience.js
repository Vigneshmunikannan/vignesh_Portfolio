import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: "SDE(Backend Developer Intern)",
    company: "Vibtree Technologies",
    duration: "Oct 2023 - Jan 2024",
    description: `Developed robust backend systems using Django, significantly enhancing scalability and achieving a 30% improvement in response times.
Successfully integrated APIs, streamlining data flow and improving efficiency by 30%.
Played a key role in creating custom packages and libraries during the internship, ensuring scalable solutions and improving system performance by 30%
`,
  },
  {
    title: "MERN Stack developer",
    company: "Channel B.Tech",
    duration: "July 2023",
    description: `Collaborated with team members during the internship to construct full-stack web applications utilizing the MERN stack and enhancing my skills by 60%.
Crafted responsive and user-friendly interfaces using React, harmonized back-end services with Node.js, and optimized database management with MongoDB, resulting in a 35% increase in user satisfaction and a 45% reduction in data processing time.
Increased application efficiency by 30% through optimized code and modular design.`,
  },
];

function Experience() {
  return (
    <section className="experience">
      <div className="experience-container">
        <h2>Experience</h2>
        <div className="timeline">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.1, delay: index * 0.2 }}
              whileHover={{ scale: 1, boxShadow: "0 6px 12px rgba(0,0,0,0.1)" }}
              className="timeline-item"
            >
              <div className="content">
                <h3>{experience.title}</h3>
                <h5 className="experience-meta">{experience.company} | {experience.duration}</h5>
                <p>{experience.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
