// src/components/Navbar.jsx
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { Github, Linkedin } from 'lucide-react';
import '../styles/navbar.css';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Experience', to: 'experience' },
    { name: 'Education', to: 'education' },
    { name: 'Certifications', to: 'certifications' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <NavLink to="/" className="logo" onClick={() => setMobileOpen(false)}>Sunil Gabbila</NavLink>
      <div className={`nav-links ${mobileOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <ScrollLink
            key={link.to}
            to={link.to}
            href={`#${link.to}`}
            spy
            smooth
            duration={500}
            offset={-72}
            activeClass="active"
            onClick={() => setMobileOpen(false)}
            className="nav-link"
          >
            {link.name}
          </ScrollLink>
        ))}
        <div className="nav-icons">
          <a href="https://github.com/sunil-gabbila" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="icon-link">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/sunil-gabbila2003" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="icon-link">
            <Linkedin size={20} />
          </a>
        </div>
      </div>
      <button className="hamburger" onClick={() => setMobileOpen((open) => !open)} aria-label="Menu">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </nav>
  );
};

export default Navbar;
