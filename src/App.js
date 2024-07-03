import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import { Element } from 'react-scroll';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education';
import ProjectDetails from './components/ProjectDetails';
import NotFoundPage from './components/NotFound';
import SocialLinks from './components/Socialicons';
import './App.css';
import Layout from './components/Layout';

const MainLayout = () => (
  <>
    <Element name="home">
      <Hero />
    </Element>
    <Element name="about">
      <About />
    </Element>
    <Element name="skills">
      <Skills />
    </Element>
    <Element name="projects">
      <Projects />
    </Element>
    <Element name="experience">
      <Experience />
    </Element>
    <Element name="education">
      <Education />
    </Element>
    <Element name="contact">
      <Contact />
    </Element>
  </>
);


function App() {

  return (
    <Router>
      <SocialLinks />
      <Routes>
        <Route path="/" element={<Layout><MainLayout /></Layout>} />
        <Route path="/project/:projectId" element={<Layout><ProjectDetails /></Layout>} />
        <Route path="*" element={<Layout><NotFoundPage /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
