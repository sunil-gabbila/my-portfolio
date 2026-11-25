// src/components/Contact.jsx
import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import '../styles/contact.css';

const Contact = () => {
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL?.trim();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, success, error
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) newErrors.email = 'Invalid email format';
    if (!form.subject.trim()) newErrors.subject = 'Subject is required';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    if (!contactEmail) {
      setStatus('unconfigured');
      return;
    }
    const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailto;
    setStatus('success');
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="section contact-section page-section">
      <p className="page-kicker">Contact</p>
      <h1 className="page-title">Let's build something meaningful.</h1>
      <p className="section-subtitle">I'm always open to opportunities, collaborations, and conversations around software development.</p>
      <div className="contact-cards">
        <div className="contact-card">
          <h3>Email</h3>
          {contactEmail ? <a href={`mailto:${contactEmail}`}>{contactEmail}</a> : <span>Set up via VITE_CONTACT_EMAIL</span>}
        </div>
        <div className="contact-card">
          <h3>GitHub</h3>
          <a href="https://github.com/sunil-gabbila" target="_blank" rel="noopener noreferrer">github.com/sunil-gabbila</a>
        </div>
        <div className="contact-card">
            <h3>LinkedIn</h3>
            <a href="https://www.linkedin.com/in/sunil-gabbila2003" target="_blank" rel="noopener noreferrer">linkedin.com/in/sunil-gabbila2003</a>
          </div>
          <div className="contact-card">
            <h3>Location</h3>
            <span><MapPin size={16} /> India</span>
        </div>
      </div>
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={form.name} onChange={handleChange} />
          {errors.name && <span className="error-msg">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={form.email} onChange={handleChange} />
          {errors.email && <span className="error-msg">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" value={form.subject} onChange={handleChange} />
          {errors.subject && <span className="error-msg">{errors.subject}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={5} value={form.message} onChange={handleChange} />
          {errors.message && <span className="error-msg">{errors.message}</span>}
        </div>
        <button type="submit" className="btn primary">Say Hello →</button>
        {status === 'success' && <p className="success-msg">Your email client should open now.</p>}
        {status === 'unconfigured' && <p className="error-msg">Email delivery is not configured yet. Please contact me through LinkedIn.</p>}
      </form>
    </section>
  );
};

export default Contact;
