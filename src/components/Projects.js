import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaEye } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'TechShara - A Complete Digital Solution',
      description: 'A full-stack business solution platform developed with .NET Core and React. It includes user authentication, role-based access control, service management, blogging, and a modern responsive UI for showcasing digital services.',
      image: '/img/TechShara.png',
      category: 'fullstack',
      technologies: ['React', '.NET Core', 'C#', 'Entity Framework', 'Identity'],
      github: 'https://github.com/Gcakash',
      live: 'https://techshara.com/',
      featured: true
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'A personal portfolio website to showcase my skills, projects, and experience. Built with HTML, CSS, and Bootstrap, it is fully responsive and optimized for performance with a clean and modern design.',
      image: '/img/Portfolio.png',
      category: 'frontend',
      technologies: ['Bootstrap', 'HTML', 'CSS','JavaScript'],
      github: 'https://github.com/Gcakash',
      live: 'https://akashgc.com.np',
      featured: true
    },
    {
      id: 3,
      title: 'Advance Tourism Guide',
      description: 'A tourism management system built with .NET Framework and Entity Framework, designed to provide travel information, guides, and destination management. It includes booking features and interactive content with JavaScript, HTML, and CSS.',
      image: '/img/VisitNepal.jpg',
      category: 'fullstack',
      technologies: ['.NET Framework', 'HTML', 'CSS', 'C#', 'Entity Framework', 'JavaScript'],
      github: 'https://github.com/Gcakash/AdvanceTourismGuide',
      live: '',
      featured: false
    },
  ];
  

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">Some of my recent work</p>
        </div>

        <div className="projects-content">

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className={`project-card ${project.featured ? 'featured' : ''}`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="project-image">
                  <div className="placeholder-image">
                  <img 
              src={project.image} 
              alt={project.title}  
              className="project-image"
            />
                  </div>
                  <div className="project-overlay">
                    <div className="project-actions">

                      
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="action-btn preview"
                        title="View Code"
                      >
                        <FaGithub />
                      </a>
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="action-btn live"
                        title="Live Demo"
                      >
                        <FaExternalLinkAlt />
                      </a>
                      {/* <button className="action-btn preview" title="Preview">
                        <FaEye />
                      </button> */}
                    </div>
                  </div>
                  {project.featured && (
                    <div className="featured-badge">Featured</div>
                  )}
                </div>

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="projects-cta">
            <p>Interested in working together?</p>
            <a href="#contact" className="btn btn-primary">Let's Talk</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
