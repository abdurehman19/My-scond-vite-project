import React from 'react'
import './Certifications.css'

import { FaHtml5, FaCss3Alt, FaJs, FaLanguage } from "react-icons/fa";

function Certifications() {
  return (
    <section className="certifications-section">

      <div className="cert-heading">
        <h1>Certifications & Achievements</h1>
        <p>Professional certifications and continuous learning journey.</p>
      </div>

      <div className="certification-item">
        <div className="cert-icon">
          <FaHtml5 />
        </div>

        <div className="cert-content">
          <h3>Certificate of HTML</h3>
          <h5>Cisco Networking Academy</h5>

          <p>
            Completed a professional certification in Web Development
            Foundations, covering semantic HTML5 structure, web accessibility
            standards, clean coding practices, and modern document structure.
          </p>
        </div>
      </div>

      <div className="certification-item">
        <div className="cert-icon">
          <FaCss3Alt />
        </div>

        <div className="cert-content">
          <h3>Certificate of CSS</h3>
          <h5>Cisco Networking Academy</h5>

          <p>
            Completed a professional certification in Advanced Styling and
            Design, covering responsive web design, Flexbox, Grid layouts,
            typography, CSS variables, and visual consistency.
          </p>
        </div>
      </div>

      <div className="certification-item">
        <div className="cert-icon">
          <FaJs />
        </div>

        <div className="cert-content">
          <h3>Certificate of JavaScript</h3>
          <h5>Cisco Networking Academy</h5>

          <p>
            Completed a professional certification in Programming Foundations
            with JavaScript, covering DOM manipulation, event handling,
            asynchronous programming, and dynamic web applications.
          </p>
        </div>
      </div>

      {/* <div className="certification-item">
        <div className="cert-icon">
          <FaLanguage />
        </div>

        <div className="cert-content">
          <h3>English Language Certificate</h3>
          <h5>Duolingo</h5>

          <p>
            Completed a professional certification in English Language
            Proficiency, covering professional writing, reading comprehension,
            active listening, and spoken communication.
          </p>
        </div>
      </div> */}

    </section>
  )
}

export default Certifications