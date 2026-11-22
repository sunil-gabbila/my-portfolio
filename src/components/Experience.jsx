// src/components/Experience.jsx
import React from 'react';
import '../styles/sections.css';
import experienceData from '../data/experience.js';

const Experience = () => {
  const { experience } = experienceData;
  return (
    <section id="experience" className="section experience-section page-section">
      <p className="page-kicker">Experience</p>
      <h1 className="page-title">My journey so far.</h1>
      <div className="timeline">
        {experience.map((item, idx) => (
          <div key={idx} className="timeline-item">
            <div className="timeline-content">
              <h3>{item.title} @ {item.company}</h3>
              <span className="period">{item.period}</span>
              <ul>
                {item.responsibilities.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
