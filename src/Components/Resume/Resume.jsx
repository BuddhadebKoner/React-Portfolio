import React from 'react'
import './Resume.css'

export default function Resume() {
  return (
    <div className="resume-container">
      <div className="header-section">
        <h1 className="name">John Doe</h1>
        <p className="job-title">Web Developer</p>
      </div>
      <div className="education-section">
        <h2 className="section-title">Education</h2>
        <ul className="education-list">
          <li className="education-item">Bachelor of Science in Computer Science</li>
          <li className="education-item">University of ABC, 2015-2019</li>
        </ul>
      </div>
      <div className="experience-section">
        <h2 className="section-title">Experience</h2>
        <ul className="experience-list">
          <li className="experience-item">Junior Web Developer</li>
          <li className="experience-item">XYZ Company, 2019-2021</li>
          <li className="responsibilities-title">Responsibilities:</li>
          <ul className="responsibilities-list">
            <li className="responsibility-item">Developed and maintained company websites</li>
            <li className="responsibility-item">Collaborated with team members on various projects</li>
          </ul>
        </ul>
      </div>
      <div className="skills-section">
        <h2 className="section-title">Skills</h2>
        <ul className="skills-list">
          <li className="skill-item">HTML5</li>
          <li className="skill-item">CSS3</li>
          <li className="skill-item">JavaScript</li>
          <li className="skill-item">React.js</li>
          <li className="skill-item">Node.js</li>
          <li className="skill-item">SQL</li>
        </ul>
      </div>
      <div className="contact-section">
        <h2 className="section-title">Contact</h2>
        <ul className="contact-list">
          <li className="contact-item">Email: john.doe@example.com</li>
          <li className="contact-item">Phone: +1234567890</li>
          <li className="contact-item">LinkedIn: linkedin.com/in/johndoe</li>
        </ul>
      </div>
    </div>
  );


}
