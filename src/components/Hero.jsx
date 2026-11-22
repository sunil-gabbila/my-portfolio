// src/components/Hero.jsx
import React from 'react';
import { Link } from 'react-scroll';
import { Github } from 'lucide-react';
import '../styles/hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="intro-label">AVAILABLE FOR SOFTWARE DEVELOPMENT OPPORTUNITIES</div>
        <h1 className="main-heading">
          Building <span className="accent">reliable software</span>. Solving real problems.
        </h1>
        <p className="intro-text">
          Hi, I'm Sunil Gabbila — a software developer focused on Java, backend development, problem-solving, and building practical applications.
        </p>
        <ul className="roles-list">
          <li>Software Developer</li>
          <li>Java &amp; Spring Boot</li>
          <li>Backend Development</li>
          <li>Problem Solving</li>
        </ul>
        <div className="hero-buttons">
          <Link to="projects" smooth={true} duration={500} offset={-70} className="btn primary">
            Explore My Work
          </Link>
          <a href="/resume.pdf" download className="btn secondary">Download Resume</a>
          <a href="https://github.com/sunil-gabbila" target="_blank" rel="noopener noreferrer" className="btn icon-btn">
            <Github size={20} /> GitHub Profile
          </a>
        </div>
      </div>
      <div className="hero-visual">
        {/* Simple terminal simulation */}
        <div className="terminal">
          <div className="terminal-header">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <div className="terminal-body">
            <pre><code>git clone https://github.com/sunil-gabbila/portfolio.git</code></pre>
            <pre><code>cd portfolio</code></pre>
            <pre><code>npm install && npm run dev</code></pre>
            <div className="cursor"></div>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <span></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
