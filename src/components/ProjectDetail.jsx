// src/components/ProjectDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import projectsData from '../data/projects.js';
import '../styles/projectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => String(p.id) === id);

  if (!project) {
    return (
      <div className="project-detail">
        <h2>Project not found</h2>
        <Link to="/projects" className="btn primary">Back to Projects</Link>
      </div>
    );
  }

  const { title, category, description, features, technologies, repo, liveDemo } = project;

  return (
    <section className="project-detail">
      <h2>{title}</h2>
      <p className="category">{category}</p>
      <p className="description">{description}</p>
      <h3>Features</h3>
      <ul className="features-list">
        {features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
      <h3>Technologies</h3>
      <ul className="tech-list">
        {technologies.map((tech) => (
          <li key={tech} className="tech-item">{tech}</li>
        ))}
      </ul>
      <div className="actions">
        {liveDemo && liveDemo !== "#" && (
          <a href={liveDemo} target="_blank" rel="noopener noreferrer" className="btn primary">Live Demo</a>
        )}
        <a href={repo} target="_blank" rel="noopener noreferrer" className="btn secondary">Repository</a>
        <Link to="/projects" className="btn secondary">Back to Projects</Link>
      </div>
    </section>
  );
};

export default ProjectDetail;
