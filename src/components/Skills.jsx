// src/components/Skills.jsx
import React from 'react';
import '../styles/skills.css';
import skillsData from '../data/skills.js';

const Skills = () => {
  return (
    <section id="skills" className="section skills-section page-section">
      <p className="page-kicker">Skills</p>
      <h1 className="page-title">My technical toolkit.</h1>
      {Object.entries(skillsData).map(([category, items]) => (
        <div key={category} className="skill-category">
          <h3 className="category-title">{category}</h3>
          <ul className="skill-list">
            {items.map((skill) => (
              <li key={skill} className="skill-item">{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Skills;
