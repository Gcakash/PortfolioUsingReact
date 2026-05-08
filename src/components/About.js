import React from 'react';
import { FaDownload, FaUser, FaCode, FaLightbulb } from 'react-icons/fa';
import './css/About.css';

const About = () => {
  const personalInfo = [
    { label: 'Name', value: 'Er. Akash G C' },
    { label: 'Email', value: 'akashgc2054@gmail.com' },
    { label: 'Phone', value: '9867288*****' },
    { label: 'Location', value: 'Kathmandu, Nepal' },
    { label: 'Experience', value: '3+ Years' },
    { label: 'Freelance', value: 'Available' }
  ];

  const highlights = [
    {
      icon: FaUser,
      title: 'Professional',
      description: 'Dedicated professional with strong work ethics and commitment to excellence.'
    },
    {
      icon: FaCode,
      title: 'Technical',
      description: 'Expert in modern web technologies and best practices for scalable applications.'
    },
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'Creative problem solver with a passion for innovative solutions.'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>

        <div className="about-content">
          <div className="about-text">
          <div className="about-description">
            <h3>Who I Am</h3>
            <p>
              I’m a passionate <strong>.NET Developer</strong> and <strong>Full-Stack Engineer</strong> with 3+ years of 
              experience in scalable web applications using <strong>.NET Core</strong>, <strong>ASP.NET MVC</strong>, 
              <strong>Blazor</strong>, <strong>React</strong>, and MS SQL.
            </p>
            <p>
              I’ve built projects from booking systems to real-time delivery apps. At 
              <strong> CodeBee Pvt. Ltd.</strong>, I led the team behind <em>WallBee</em>, a real-time booking 
              and delivery platform.
            </p>
            <p>
              I also explore <strong>.NET MAUI</strong> for cross-platform apps and hold scholarships in both MSc 
              and BE in Computer Engineering. I value clean code, learning, and solving challenges.
            </p>
            <p>
              Outside coding, I enjoy exploring new tech, contributing to open-source, and sharing knowledge 
              with the developer community.
            </p>
        </div>
            <div className="about-highlights">
              {highlights.map((highlight, index) => (
                <div key={index} className="highlight-item">
                  <div className="highlight-icon">
                    <highlight.icon />
                  </div>
                  <div className="highlight-content">
                    <h4>{highlight.title}</h4>
                    <p>{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-actions">
              <a href="/Akash GC Resume.pdf" className="btn btn-primary" download>
                <FaDownload /> Download Resume
              </a>
            </div>
          </div>

          <div className="about-info">
            <div className="info-card">
              <h3>Personal Information</h3>
              <div className="info-list">
                {personalInfo.map((info, index) => (
                  <div key={index} className="info-item">
                    <span className="info-label">{info.label}:</span>
                    <span className="info-value">{info.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="stats-card">
              <h3>Quick Stats</h3>
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-number">10+</div>
                  <div className="stat-label">Projects Completed</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">3.5+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">10+</div>
                  <div className="stat-label">Happy Clients</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
