// src/components/GithubSection.jsx
import React, { useEffect, useState } from 'react';
import '../styles/github.css';

const GithubSection = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const username = 'sunil-gabbila';

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
        if (!response.ok) throw new Error('GitHub API error');
        const data = await response.json();
        setRepos(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  return (
    <section id="github" className="section github-section page-section">
      <p className="page-kicker">GitHub</p>
      <h1 className="page-title">More code. Less talk.</h1>
      <p className="section-subtitle">
        Most of my learning happens by building, experimenting, and pushing code.
      </p>
      <div className="github-profile">
        <a href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer" className="github-link">
          <img src={`https://github.com/${username}.png?size=100`} alt="GitHub avatar" className="avatar" />
          <span>{username}</span>
        </a>
      </div>
      {loading && <p>Loading repositories...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && (
        <div className="repo-grid">
          {repos.map((repo) => (
            <div key={repo.id} className="repo-card">
              <h3 className="repo-name"><a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a></h3>
              {repo.description && <p className="repo-desc">{repo.description}</p>}
              <div className="repo-meta">
                {repo.language && <span className="language">{repo.language}</span>}
                <span className="stars">★ {repo.stargazers_count}</span>
                <span className="forks">⊞ {repo.forks_count}</span>
                <span className="updated">{new Date(repo.updated_at).toLocaleDateString()}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default GithubSection;
