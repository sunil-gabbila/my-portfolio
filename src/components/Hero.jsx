// src/components/Hero.jsx
import React from 'react';
import { Link } from 'react-scroll';
import { Github, Linkedin } from 'lucide-react';
import '../styles/hero.css';

const downloadResume = () => {
  const content = [
    'SUNIL GABBILA',
    'JAVA BACKEND DEVELOPER',
    'India | github.com/sunil-gabbila | linkedin.com/in/sunil-gabbila2003',
    '',
    'CAREER OBJECTIVE',
    'Seeking an entry-level Java Developer, Java Backend Developer, or Software Engineer role.',
    '',
    'TECHNICAL SKILLS',
    'Java, Core Java, Spring Boot, Spring Framework, Microservices, REST APIs, Hibernate, JPA,',
    'MySQL, SQL, HTML, CSS, JavaScript, Angular, Git, GitHub, Bitbucket, Jira, Maven, Postman,',
    'Docker, AWS EC2, SourceTree',
    '',
    'SELECTED PROJECTS',
    'FixFlow: Java microservices maintenance platform with identity management, JWT, and role-based access.',
    'Cafe Management System: Angular, Spring Boot, and MySQL application for menus, orders, and billing.',
    'Payment Integration System: Spring Boot microservices integrating Stripe payment APIs.',
    '',
    'TRAINING',
    'Java Developer Trainee Program, KodNest Technologies (2023-2024). Practical work with Java,',
    'Spring Boot, microservices, REST APIs, Git, Bitbucket, Jira, and Agile methodologies.',
    '',
    'EDUCATION',
    'B.E. Mechanical Engineering, 2024',
    '',
    'CERTIFICATION',
    'Java and Python Full Stack Development',
  ];
  const escapePdf = (line) => line.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
  const stream = content.map((line, index) =>
    `BT /F1 9 Tf 48 ${754 - index * 25} Td (${escapePdf(line)}) Tj ET`
  ).join('\n');
  const objects = [
    '<< /Type /Catalog /Pages 2 0 R >>',
    '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
    '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>',
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
    `<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`,
  ];
  let pdf = '%PDF-1.4\n';
  const offsets = [0];
  objects.forEach((object, index) => {
    offsets.push(pdf.length);
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
  });
  const xrefOffset = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  offsets.slice(1).forEach((offset) => {
    pdf += `${String(offset).padStart(10, '0')} 00000 n \n`;
  });
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;

  const url = URL.createObjectURL(new Blob([pdf], { type: 'application/pdf' }));
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Sunil-Gabbila-Java-Backend-Developer.pdf';
  link.click();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
};

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="intro-label">AVAILABLE FOR SOFTWARE DEVELOPMENT OPPORTUNITIES</div>
        <h1 className="main-heading">
          Hi, I'm Sunil Gabbila, <span className="accent">Java Backend Developer.</span>
        </h1>
        <p className="intro-text">
          I'm seeking Java Developer, Java Backend Developer, or Software Engineer opportunities. I enjoy building reliable services with Java and Spring Boot, designing REST APIs, and learning how to make applications scale.
        </p>
        <ul className="roles-list">
          <li>Java Developer</li>
          <li>Spring Boot &amp; Microservices</li>
          <li>REST APIs &amp; SQL</li>
          <li>2024 Graduate</li>
        </ul>
        <div className="hero-buttons">
          <Link to="projects" smooth={true} duration={500} offset={-70} className="btn primary">
            View My Projects
          </Link>
          <button type="button" onClick={downloadResume} className="btn secondary">Download Resume</button>
          <a href="https://github.com/sunil-gabbila" target="_blank" rel="noopener noreferrer" className="btn icon-btn">
            <Github size={20} /> GitHub Profile
          </a>
          <a href="https://www.linkedin.com/in/sunil-gabbila2003" target="_blank" rel="noopener noreferrer" className="btn icon-btn">
            <Linkedin size={20} /> LinkedIn
          </a>
        </div>
      </div>
      <div className="hero-visual">
        {/* Simple terminal simulation */}
        <div className="terminal">
          <div className="terminal-header">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <div className="terminal-body">
            <pre><code>public class BackendDeveloper {'{'}</code></pre>
            <pre><code>  String stack = "Java + Spring Boot";</code></pre>
            <pre><code>  String focus = "Reliable REST APIs";</code></pre>
            <pre><code>{'}'}</code></pre>
            <div className="cursor"></div>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <span></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
