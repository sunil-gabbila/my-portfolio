import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import '../styles/overview.css';

const Overview = () => {
  const destinations = [
    { number: '01', title: 'About', text: 'My path into software and how I work.', to: '/about' },
    { number: '02', title: 'Skills', text: 'Languages, backend tools, and engineering fundamentals.', to: '/skills' },
    { number: '03', title: 'Projects', text: 'Applications and experiments built around real problems.', to: '/projects' },
    { number: '04', title: 'Experience', text: 'Internship experience and professional responsibilities.', to: '/experience' },
    { number: '05', title: 'Education', text: 'Academic background and technical foundations.', to: '/education' },
  ];

  return (
    <div className="overview-page">
      <section className="overview-hero">
        <div className="overview-copy">
          <p className="availability"><span></span> Available for opportunities</p>
          <h1>Sunil Gabbila</h1>
          <p className="overview-role">Java Developer <span>/</span> Backend Engineer</p>
          <p className="overview-intro">
            I build reliable backend applications with Java and Spring Boot, turning practical problems into clear, maintainable software.
          </p>
          <div className="overview-actions">
            <Link className="action-primary" to="/projects">Explore projects <ArrowRight size={18} /></Link>
            <Link className="action-secondary" to="/contact">Get in touch <Mail size={18} /></Link>
          </div>
          <div className="overview-socials">
            <a href="https://github.com/sunil-gabbila" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={19} /></a>
            <a href="https://www.linkedin.com/in/sunil-gabbila" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={19} /></a>
            <span><MapPin size={16} /> India</span>
          </div>
        </div>
        <div className="overview-focus" aria-label="Core focus">
          <p>Core focus</p>
          <div className="focus-list">
            <span>Java</span>
            <span>Spring Boot</span>
            <span>REST APIs</span>
            <span>MySQL</span>
          </div>
          <div className="focus-index">01 <i></i> 05</div>
        </div>
      </section>

      <section className="overview-directory">
        <div className="directory-heading">
          <p>Portfolio</p>
          <h2>Explore the work</h2>
        </div>
        <div className="directory-grid">
          {destinations.map((item) => (
            <Link key={item.to} to={item.to} className="directory-card">
              <span className="directory-number">{item.number}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
              <ArrowRight className="directory-arrow" size={20} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Overview;
