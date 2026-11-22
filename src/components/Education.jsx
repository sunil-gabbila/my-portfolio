import React from 'react';
import experienceData from '../data/experience.js';
import '../styles/sections.css';

const Education = () => {
  return (
    <section id="education" className="section experience-section page-section">
      <p className="page-kicker">Education</p>
      <h1 className="page-title">Academic foundation.</h1>
      <p className="section-subtitle">The engineering background behind my approach to structured and practical software work.</p>
      <div className="timeline">
        {experienceData.education.map((item, index) => (
          <article className="timeline-item" key={index}>
            <div className="timeline-content">
              <span className="period">{item.period}</span>
              <h2>{item.degree}</h2>
              <h3>{item.field}</h3>
              <p className="institution">{item.institution}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Education;
