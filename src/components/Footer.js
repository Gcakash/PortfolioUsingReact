import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaHeart, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isHovered, setIsHovered] = useState(false);
  
  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/Gcakash', label: 'GitHub', color: '#6e5494' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/akashgc', label: 'LinkedIn', color: '#0077b5' },
    { icon: FaFacebook, url: 'https://twitter.com/techshara', label: 'Facebook', color: '#4267B2' },
    { icon: FaEnvelope, url: 'mailto:akashgc2054@gmail.com', label: 'Email', color: '#EA4335' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-wave">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
      
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Er. Akash G C</h3>
            <p className="footer-description">
              .NET Full Stack Developer passionate about creating innovative web solutions 
              and turning ideas into reality through clean, efficient code.
            </p>
            <div className="footer-tagline">
              <span>Building digital experiences</span>
              <div className="tagline-underline"></div>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Navigation</h4>
            <ul className="footer-links">
              <li><a href="#home" onClick={scrollToTop} className="footer-link">Home</a></li>
              <li><a href="#about" className="footer-link">About</a></li>
              <li><a href="#experience" className="footer-link">Experience</a></li>
              <li><a href="#skills" className="footer-link">Skills</a></li>
              <li><a href="#projects" className="footer-link">Projects</a></li>
              <li><a href="#gallery" className="footer-link">Gallery</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Let's Connect</h4>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.label}
                  style={{ '--hover-color': social.color }}
                  onMouseEnter={() => setIsHovered(index)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <social.icon />
                  <span className="social-tooltip">{social.label}</span>
                </a>
              ))}
            </div>
            <div className="footer-newsletter">
              <p>Want to discuss a project?</p>
              <a href="mailto:akashgc2054@gmail.com" className="contact-button">
                Get In Touch
              </a>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>
              © {currentYear} Akash G C. All rights reserved. Crafted with{' '}
              <FaHeart className="heart-icon" /> using React.
            </p>
          </div>     
        </div>
      </div>
    </footer>
  );
};

export default Footer;