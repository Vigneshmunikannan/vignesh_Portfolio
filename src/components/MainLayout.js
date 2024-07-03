import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Element, scroller } from 'react-scroll';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Education from './Education';
import Contact from './Contact';

const MainLayout = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get('section');

    if (section) {
      scroller.scrollTo(section, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
      });
    }
  }, [location]);

  return (
    <>
      <Element name="home" id="home">
        <Hero />
      </Element>
      <Element name="about" id="about">
        <About />
      </Element>
      <Element name="skills" id="skills">
        <Skills />
      </Element>
      <Element name="experience" id="experience">
        <Experience />
      </Element>
      <Element name="projects" id="projects">
        <Projects />
      </Element>
      <Element name="education" id="education">
        <Education />
      </Element>
      <Element name="contact" id="contact">
        <Contact />
      </Element>
    </>
  );
};

export default MainLayout;
