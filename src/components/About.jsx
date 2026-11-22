// src/components/About.jsx
import React from 'react';
import '../styles/sections.css';

const About = () => {
  return (
    <section id="about" className="section about-section page-section">
      <p className="page-kicker">About</p>
      <h1 className="page-title">A little about me.</h1>
      <p className="section-text">
        I'm a Mechanical Engineering graduate transitioning into software development, with a strong interest in building backend systems and practical applications. I work with Java, Spring Boot, REST APIs, databases, and modern development tools. I enjoy understanding how applications work behind the scenes, solving programming problems, and continuously improving my engineering skills.
      </p>
      <div className="about-cards">
        <div className="about-card">
          <h3>Backend Development</h3>
          <p>Building backend applications using Java, Spring Boot, REST APIs, and database integration.</p>
        </div>
        <div className="about-card">
          <h3>Problem Solving</h3>
          <p>Practicing DSA, exploring optimized approaches, and improving logical thinking.</p>
        </div>
        <div className="about-card">
          <h3>Continuous Learning</h3>
          <p>Exploring new technologies, building projects, and improving development skills.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
