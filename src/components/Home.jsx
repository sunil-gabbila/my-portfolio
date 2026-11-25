// src/components/Home.jsx
import React from 'react';
import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';
import About from './About.jsx';
import Skills from './Skills.jsx';
import Projects from './Projects.jsx';
import Experience from './Experience.jsx';
import Education from './Education.jsx';
import Certifications from './Certifications.jsx';
import GithubSection from './GithubSection.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';

const Home = () => (
  <div className="app">
    <Navbar />
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <GithubSection />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default Home;
