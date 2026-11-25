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

  const {
    title,
    category,
    description,
    features,
    technologies,
    technologyGroups,
    responsibilities,
    recognition,
    repo,
    liveDemo
  } = project;

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
      {responsibilities && (
        <section className="detail-section">
          <h3>Responsibilities</h3>
          <ul className="responsibilities-list">
            {responsibilities.map((responsibility) => (
              <li key={responsibility}>{responsibility}</li>
            ))}
          </ul>
        </section>
      )}
      <section className="detail-section">
        <h3>Technology Stack</h3>
        {technologyGroups ? (
          <div className="technology-groups">
            {Object.entries(technologyGroups).map(([group, items]) => (
              <div className="technology-group" key={group}>
                <h4>{group}</h4>
                <ul className="tech-list">
                  {items.map((tech) => (
                    <li key={tech} className="tech-item">{tech}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <ul className="tech-list">
            {technologies.map((tech) => (
              <li key={tech} className="tech-item">{tech}</li>
            ))}
          </ul>
        )}
      </section>
      {recognition && (
        <section className="detail-section recognition">
          <h3>Recognition</h3>
          <p>{recognition}</p>
        </section>
      )}
      <div className="actions">
        {liveDemo && liveDemo !== "#" && (
          <a href={liveDemo} target="_blank" rel="noopener noreferrer" className="btn primary">Live Demo</a>
        )}
        {repo && (
          <a href={repo} target="_blank" rel="noopener noreferrer" className="btn secondary">Repository</a>
        )}
        <Link to="/projects" className="btn secondary">Back to Projects</Link>
      </div>
    </section>
  );
};

export default ProjectDetail;
