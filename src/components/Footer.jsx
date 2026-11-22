// src/components/Footer.jsx
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import '../styles/footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Designed &amp; Built by Sunil Gabbila</p>
        <div className="footer-icons">
          <a href="https://github.com/sunil-gabbila" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/sunil-gabbila" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="mailto:sunil.gabbila@example.com" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
        <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Back to top
        </button>
        <p className="footer-note">Building, learning, and improving — one commit at a time. © {year}</p>
      </div>
    </footer>
  );
};

export default Footer;
