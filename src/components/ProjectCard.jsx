// src/components/ProjectCard.jsx
import React from 'react';
import '../styles/projects.css';

const ProjectCard = ({ project }) => {
  const { title, category, description, technologies, repo, liveDemo } = project;
  return (
    <Link to={`/project/${project.id}`} className="project-link"><div className="project-card">
      <div className="card-header">
        <h3>{title}</h3>
        <span className="category">{category}</span>
      </div>
      <p className="description">{description}</p>
      <ul className="tech-list">
        {technologies.map((tech) => (
          <li key={tech} className="tech-item">{tech}</li>
        ))}
      </ul>
      <div className="card-actions">
        {liveDemo && liveDemo !== "#" && (
          <a href={liveDemo} target="_blank" rel="noopener noreferrer" className="btn primary">
            Live Demo
          </a>
        )}
        <a href={repo} target="_blank" rel="noopener noreferrer" className="btn secondary">
          Repository
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
