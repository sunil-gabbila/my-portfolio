// src/components/ProjectCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';




const ProjectCard = ({ project }) => {
  const { title, category, description, technologies, repo, liveDemo } = project;
  const cardTechnologies = technologies ?? Object.values(project.technologyGroups ?? {}).flat().slice(0, 8);
  return (
    <div className="project-card">
      <div className="card-header">
        <h3><Link to={`/project/${project.id}`}>{title}</Link></h3>
        <span className="category">{category}</span>
      </div>
      <p className="description">{description}</p>
      <ul className="tech-list">
        {cardTechnologies.map((tech) => (
          <li key={tech} className="tech-item">{tech}</li>
        ))}
      </ul>
      <div className="card-actions">
        {liveDemo && liveDemo !== "#" && (
          <a href={liveDemo} target="_blank" rel="noopener noreferrer" className="btn primary">
            Live Demo
          </a>
        )}
        {repo && (
          <a href={repo} target="_blank" rel="noopener noreferrer" className="btn secondary">
            Repository
          </a>
        )}
        <Link to={`/project/${project.id}`} className="btn secondary">
          Details
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
