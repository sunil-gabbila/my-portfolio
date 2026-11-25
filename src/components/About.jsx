// src/components/About.jsx
import React from 'react';
import '../styles/sections.css';

const About = () => {
  return (
    <section id="about" className="section about-section page-section">
      <p className="page-kicker">About</p>
      <h1 className="page-title">A little about me.</h1>
      <p className="section-text">
        I'm a 2024 B.E. Mechanical Engineering graduate building my career in software development. Practical Java Developer Trainee experience introduced me to Java, Spring Boot, microservices, REST APIs, SQL, and collaborative Agile delivery. I'm especially interested in backend engineering and keep learning by applying concepts to working projects.
      </p>
      <div className="about-cards">
        <div className="about-card">
          <h3>Backend Development</h3>
          <p>Developing Java services with Spring Boot, REST APIs, microservices, and relational data.</p>
        </div>
        <div className="about-card">
          <h3>Problem Solving</h3>
          <p>Turning requirements into clear API and service designs, then improving them through practice.</p>
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
