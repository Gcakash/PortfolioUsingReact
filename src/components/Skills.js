import React, { useState } from 'react';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaDatabase,
  FaGit, FaDocker, FaAws, FaMicrosoft, FaMobile,
  FaCheckCircle, FaServer
} from 'react-icons/fa';
import { SiDotnet, SiCsharp, SiBlazor, SiMicrosoftsqlserver, SiAzuredevops, Si1Password } from 'react-icons/si';
import './css/Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    backend: {
        name: 'Backend Development',
        skills: [
            { name: 'C#', icon: SiCsharp, level: 95, color: '#178600' },
            { name: 'ASP.NET Core', icon: SiDotnet, level: 90, color: '#512BD4' },
            { name: '.NET Framework', icon: SiDotnet, level: 88, color: '#512BD4' },
            { name: 'ASP.NET MVC', icon: SiDotnet, level: 85, color: '#512BD4' },
            { name: 'Entity Framework', icon: FaDatabase, level: 85, color: '#512BD4' },
            { name: 'MS SQL Server', icon: SiMicrosoftsqlserver, level: 85, color: '#CC2927' },         
            { name: 'Entity Framework Core', icon: SiDotnet, level: 85, color: '#512BD4' },
            { name: 'REST API', icon: FaServer, level: 85, color: '#FF6B6B' },
            { name: 'SOAP', icon: FaServer, level: 75, color: '#FF6B6B' }
        ]
    },
    frontend: {
        name: 'Frontend Development',
        skills: [
            { name: 'Blazor', icon: SiBlazor, level: 85, color: '#512BD4' },
            { name: 'JavaScript', icon: FaJs, level: 80, color: '#F7DF1E' },
            { name: 'React', icon: FaReact, level: 50, color: '#61DAFB' },
            { name: 'HTML5', icon: FaHtml5, level: 90, color: '#E34F26' },
            { name: 'CSS3', icon: FaCss3Alt, level: 85, color: '#1572B6' },
            { name: '.NET MAUI', icon: FaMobile, level: 80, color: '#512BD4' },
        ]
    },
    tools: {
        name: 'Tools & Other',
        skills: [
            { name: 'Git', icon: FaGit, level: 90, color: '#F05032' },
            { name: 'Azure DevOps', icon: SiAzuredevops, level: 85, color: '#0078D7' },
            { name: 'Unit Testing (NUnit)', icon: Si1Password, level: 80, color: '#3B7D3E' }
        ]
    }
};
  const getActiveSkills = () => skillCategories[activeCategory]?.skills || [];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">Technologies I work with</p>
          <p className="section-subtitle">These percentages reflect my personal comfort level with each skill. Even 100% indicates strong proficiency, not complete knowledge</p>
        </div>

        <div className="skills-content">
          <div className="skills-categories">
            {Object.keys(skillCategories).map((category) => (
              <button
                key={category}
                className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {skillCategories[category].name}
              </button>
            ))}
          </div>

          <div className="skills-grid">
            {getActiveSkills().map((skill, index) => (
              <div key={index} className="skill-item" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="skill-icon" style={{ color: skill.color }}>
                  <skill.icon />
                </div>
                <div className="skill-info">
                  <h4 className="skill-name">{skill.name}</h4>
                  <div className="skill-progress">
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ 
                          width: `${skill.level}%`,
                          backgroundColor: skill.color
                        }}
                      ></div>
                    </div>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

         <div className="skills-summary">
            <div className="summary-card">
              <h3>Full-Stack Expertise</h3>
              <p>
                With strong proficiency in both frontend (Blazor, React, JavaScript) and backend 
                (C#, .NET Core, ASP.NET) development, I build complete, scalable solutions. 
                My database skills include SQL Server and Entity Framework, while my cross-platform 
                experience covers .NET MAUI and Xamarin for mobile development.
              </p>
            </div>


            <div className="summary-card">
              <h3>Continuous Growth</h3>
              <p>
                In this rapidly evolving field, I maintain a growth mindset through online courses, 
                tech community engagement, and hands-on experimentation with new technologies. 
                I balance deep specialization in .NET ecosystems with broad awareness of 
                complementary technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
