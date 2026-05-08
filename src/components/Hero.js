import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowRight,FaFacebook,FaGlobe } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
import './css/Hero.css';

const Hero = () => {
  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/Gcakash', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/akashgc/', label: 'LinkedIn' },
    { icon: FaFacebook, url: 'https://www.facebook.com/TechShara', label: 'Facebook' },
    { icon: FaGlobe, url: 'https://techshara.com/', label: 'Company' }
  ];


  const startDate = new Date(2022, 1); 
  const now = new Date();

  const diffInMonths =
    (now.getFullYear() - startDate.getFullYear()) * 12 +
    (now.getMonth() - startDate.getMonth());

  const yearsExperience = (diffInMonths / 12).toFixed(1); // 1 decimal place


  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-intro">
              <span className="hero-greeting">Hello there!</span>
              <span className="hero-hand">👋</span>
            </div>
            
            <h1 className="hero-title">
              I'm <span className="highlight">Akash G C</span>
            </h1>
            
            <div className="hero-subtitle-wrapper">
              <h2 className="hero-subtitle">
                <Typewriter
                  options={{
                    strings: [
                      '.NET Developer',
                      'Full Stack Engineer',
                      'Problem Solver',
                      'Tech Enthusiast'
                    ],
                    autoStart: true,
                    loop: true,
                    typeSpeed: 50,
                    backSpeed: 30,
                    backDelay: 2000,
                  }}
                  className="typed-text"
                />
              </h2>
            </div>
            
            <p className="hero-description">
              I build robust, scalable web applications with clean code and modern technologies. 
              Passionate about creating solutions that make an impact.
            </p>
            
            <div className="hero-actions">
                  <button
                    className="btn btn-primary-hero"
                    onClick={() => scrollToSection("projects")}
                  >
                    View My Work
                    <FaArrowRight className="btn-icon" />
                  </button>

                  <button
                    className="btn btn-secondary-hero"
                    onClick={() => scrollToSection("contact")}
                  >
                    Contact Me
                  </button>

                  <div className="hero-social-mobile">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        aria-label={social.label}
                      >
                        <social.icon />
                      </a>
                    ))}
                  </div>
            </div>

          </div>
          
          <div className="hero-image-container">
            <div className="hero-image">
              <img 
                src="/akash.jpg" 
                alt="Akash G C" 
                className="profile-photo"
              />
              <div className="image-highlight"></div>
              <div className="image-dots"></div>
            </div>
            <div className="experience-badge">
              <span>{yearsExperience}+</span>
              <small>Years Experience</small>
           </div>
          </div>
        </div>
        
        <div className="hero-social-desktop">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-hero"
              aria-label={social.label}
            >
              <social.icon />
              <span className="social-label-hero">{social.label}</span>
            </a>
          ))}
        </div>
        
        <div className="scroll-hint">
          <span>Scroll down</span>
          <div className="scroll-line"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;