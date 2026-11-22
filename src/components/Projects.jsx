// src/components/Projects.jsx
import React from 'react';
import ProjectCard from './ProjectCard.jsx';
import projectsData from '../data/projects.js';
import '../styles/projects.css';

const Projects = () => {
  return (
    <section id="projects" className="section projects-section page-section">
      <p className="page-kicker">Projects</p>
      <h1 className="page-title">Things I've built.</h1>
      <p className="section-subtitle">Projects that reflect what I've learned, the problems I've explored, and the applications I've built.</p>
      <div className="projects-grid">
        {projectsData.map((proj) => (
          <ProjectCard key={proj.id} project={proj} />
        ))}
      </div>
      <div className="all-projects">
        <a href="https://github.com/sunil-gabbila" target="_blank" rel="noopener noreferrer" className="btn primary">
          View All Projects on GitHub
        </a>
      </div>
    </section>
  );
};

export default Projects;
