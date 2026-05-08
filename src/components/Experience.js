import React from 'react';
import { useState } from 'react';
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt,FaTimes ,FaExpand } from 'react-icons/fa';
import './css/Experience.css';

const Experience = () => {


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






  const workExperience = [
    {
      title: 'Senior Software Engineer',
      company: 'CodeBee Technology',
      period: 'March 2023 - Present (2 years 6 months)',
      location: 'Kathmandu, Bägmați, Nepal',
      description: [
        'Worked on WallBee Booking & Delivery System, managing bookings, deliveries, and real-time tracking features',
        'Designed and developed new modules, APIs, and third-party integrations to meet client requirements',
        'Led a team of developers, conducting code reviews, monitoring progress, and managing deliverables',
        'Developed WOWFIT Web and Mobile Application and WallBee Support System'
      ],
      technologies: ['C#', 'ASP.NET Core 7/8', '.NET Framework', 'ASP.NET MVC 4.5', 'Blazor', 'JavaScript', 'HTML', 'CSS', 'MAUI', 'MS SQL', 'NUnit Testing', 'REST API', 'SOAP']
    },
    {
      title: 'Founder & Full-Stack Developer',
      company: 'TechShara',
      period: 'June 2025 - Present (3 months)',
      location: 'Nepal',
      description: [
        'Founded TechShara as a digital platform to empower tech learners and support businesses with scalable IT solutions',
        'Design, develop, and manage https://techshara.com with React.js frontend and .NET Core 8 backend',
        'Create and share free tech tutorials (C#, .NET, React, Python, AI)',
        'Offer services in web/app development, branding, video production, and IT consulting'
      ],
      technologies: ['React.js', '.NET Core 8', 'REST APIs', 'Repository Pattern', 'Middleware', 'Identity Authentication']
    },
    {
      title: 'Dotnet Developer',
      company: 'TechBit Nepal',
      period: 'May 2022 - February 2023 (10 months)',
      location: 'Kathmandu, Bägmați, Nepal',
      description: [
        'Developed a food delivery platform using .NET, enabling secure payments and real-time order tracking',
        'Implemented restaurant management features for seamless operations'
      ],
      technologies: ['.NET', 'Payment Integration', 'Real-time Tracking', 'Restaurant Management Systems']
    },
    {
      title: 'DotNet Developer Intern',
      company: 'M&R SOLUTION',
      period: 'January 2020 - March 2020 (3 months)',
      location: 'Kathmandu, Bägmați, Nepal',
      description: [
        'Worked on accounting software using .NET, enabling financial management and reporting',
        'Implemented automation features for accounting processes'
      ],
      technologies: ['.NET', 'Accounting Software', 'Financial Reporting', 'Automation']
    },
    {
      title: 'Part-time Lecturer & Department Coordinator',
      company: 'Kathmandu Institute of Technology',
      period: 'April 2020 - January 2024 (3 years 10 months)',
      location: 'Kathmandu, Bägmați, Nepal',
      description: [
        'Taught C Programming, C++, .NET Technologies, Software Engineering, DSA, and Web Technologies to undergraduate students',
        'Guided students in major and minor projects, ensuring practical application of theoretical concepts',
        'Assisted in curriculum development, academic coordination, and student mentorship',
        'Organized workshops and seminars to enhance technical and problem-solving skills'
      ],
      technologies: ['C', 'C++', '.NET', 'Software Engineering', 'Data Structures', 'Algorithms', 'Web Technologies']
    },
    {
      title: 'Part-time Lecturer',
      company: 'Khovpa Engineering College',
      period: 'November 2020 - January 2022 (1 year 3 months)',
      location: 'Bhaktapur, Bägmați, Nepal',
      description: [
        'Taught computer science and programming concepts to engineering students',
        'Mentored students in practical application of software development principles'
      ],
      technologies: ['Programming Fundamentals', 'Software Development', 'Computer Science Concepts']
    }
  ];
  
  const education = [
    {
      degree: 'MSc in Computer Science & Engineering',
      school: 'Pokhara University-NCIT',
      period: '2023',
      location: 'Lalitpur,Nepal',
      description: 'Full scholarship holder specializing in advanced computer science concepts'
    },
    {
      degree: 'Bachelor of Computer Engineering',
      school: 'Pokhara University-LEC',
      period: '2015 - 2019',
      location: 'Butwal,Nepal',
      description: 'Full scholarship holder,Comprehensive study of computer engineering principles and applications'
    },
    {
      degree: '+2 Science (Science Stream)',
      school: 'NEB - Kalika HS School',
      period: '2013 - 2015',
      location: 'Butwal, Nepal',
      description: 'Completed Higher Secondary Education in the Science stream (Physics, Chemistry, Mathematics) with a full scholarship and strong academic performance.'
    }
  ];


  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-subtitle">My professional journey</p>
        </div>

        <div className="experience-content">
          <div className="experience-section">
            <h3 className="section-subtitle">
              <FaBriefcase /> Work Experience
            </h3>
            <div className="timeline">
              {workExperience.map((job, index) => (
                <div key={index} className="timeline-item" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="job-header">
                      <h4 className="job-title">{job.title}</h4>
                      <div className="job-meta">
                        <span className="company">
                          <FaBriefcase /> {job.company}
                        </span>
                        <span className="period">
                          <FaCalendarAlt /> {job.period}
                        </span>
                        <span className="location">
                          <FaMapMarkerAlt /> {job.location}
                        </span>
                      </div>
                    </div>
                    <ul className="job-description">
                      {job.description.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                    <div className="job-technologies">
                      {job.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="experience-section">
            <h3 className="section-subtitle">
              <FaGraduationCap /> Education
            </h3>
            <div className="timeline">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="timeline-marker education"></div>
                  <div className="timeline-content">
                    <h4 className="degree">{edu.degree}</h4>
                    <div className="education-meta">
                      <span className="school">{edu.school}</span>
                      <span className="period">{edu.period}</span>
                      <span className="location">{edu.location}</span>
                    </div>
                    <p className="education-description">{edu.description}</p>
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

export default Experience;
