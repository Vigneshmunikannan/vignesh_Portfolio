import React from 'react';
import { motion } from 'framer-motion';
function Hero() {
  return (
    <section className="hero">
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        
        <h2>Full Stack Developer</h2>
       <div>
       <h1>Hello, <span className='name'>I'm Vignesh</span></h1>
       </div>
        {/* <p>Welcome to my portfolio</p> */}
        
      </motion.div>
    </section>
  );
}

export default Hero;
