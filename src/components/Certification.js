import React from 'react';
import { useState } from 'react';
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt,FaTimes ,FaExpand } from 'react-icons/fa';
import './css/Experience.css';

const Certification = () => {


  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const certifications = [
    {
      name: 'ASP.NET MVC Certification',
      issuer: 'MindLuster',
      year: '2023',
      image: '/img/Certificate/AspNetMvc.jpg'
    },
    {
      name: 'Digital Marketing Fundamentals',
      issuer: 'Google',
      year: '2023',
      image: '/img/Certificate/DigitalMarketing.jpg'
    },
    {
      name: 'jQuery Development Certificate',
      issuer: 'Great Learning',
      year: '2023',
      image: '/img/Certificate/JQuery.jpg'
    },
    {
      name: 'SQL Basics Certification',
      issuer: 'HackerRank',
      year: '2023',
      image: '/img/Certificate/SqlBasic.jpg'
    },
    {
      name: 'Python Data Analysis Training',
      issuer: 'School of Economic Policy Studies',
      year: '2023',
      image: '/img/Certificate/PythonDataAnalysis.jpg'
    },
    {
      name: 'HTML & CSS Development Training',
      issuer: 'Robotic Club of LEC',
      year: '2019',
      image: '/img/Certificate/HtmlCss.jpg'
    },
    {
      name: 'CAN Tech Challenge Award',
      issuer: 'Computer Association Nepal',
      year: '2018',
      image: '/img/Certificate/CAN.jpg'
    },
    {
      name: 'Anchoring & Journalism Training',
      issuer: 'Anchor Association Nepal',
      year: '2014',
      image: '/img/Certificate/AnchoringRadio.jpg'
    },
    {
      name: 'LEC Robotics Club Secretary',
      issuer: 'Robotic Club of LEC',
      year: '2019',
      image: '/img/Certificate/SecretoryRB.jpg'
    }
  ];
  
  

  return (
    <section id="certifications" className="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">My Learning journey</p>
        </div>

        <div className="experience-content">
          <div className="certifications-section">
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="certification-card" data-aos="fade-up" data-aos-delay={index * 100}>
                  {cert.image && (
                    <div 
                      className="cert-image-container" 
                      onClick={() => openModal(cert.image)}
                    >
                      <img 
                        src={cert.image} 
                        alt={cert.name} 
                        className="cert-image"
                        loading="lazy"
                      />
                      <div className="image-overlay">
                        <FaExpand className="expand-icon" />
                      </div>
                    </div>
                  )}
                  <div className="cert-content">
                    <i className="cert-icon">{cert.icon}</i> {/* Optional icon */}
                    <h4 className="cert-name">{cert.name}</h4>
                    <p className="cert-issuer">{cert.issuer}</p>
                    <span className="cert-year">{cert.year}</span>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="cert-modal-overlay" onClick={closeModal}>
          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="cert-modal-close" onClick={closeModal}>
              <FaTimes />
            </button>
            <img 
              src={selectedImage} 
              alt="Certificate" 
              className="cert-modal-image"
            />
          </div>
        </div>
      )}

    </section>
  );
};

export default Certification;
