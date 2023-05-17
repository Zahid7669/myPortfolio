import React from 'react';
import projectData from '../data/projects.js';
import '../assets/styles/Portfolio.css'; // assume you have a JSON file with project data

function Portfolio() {
  return (
    <div className="portfolio-container">
      <h2 className="section-heading">Portfolio</h2>
      <div className="project-gallery">
        {projectData.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                )}
                {project.codeLink && (
                  <a href={project.codeLink} target="_blank" rel="noreferrer">
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
