import React from 'react'
import './Contact.css'

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedinIn
} from 'react-icons/fa'

function Contact() {
  return (
    <>
      <div className="contact-heading">
        <h1>Get In Touch</h1>
        <p>Let's discuss your next project or collaboration.</p>
      </div>

      <div className="contact-container">

        {/* Form */}

        <div className="contact-form-box">
          <form className="contact-form">

            <label>Full Name</label>
            <input type="text" placeholder="Name" required />

            <label>Email</label>
            <input type="email" placeholder="Email" required />

            <label>Message</label>
            <textarea placeholder="Message" required></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>
        </div>

        {/* Contact Info */}

        <div className="contact-info">

          <h3>Contact Information</h3>

          <div className="info-item">
            <div className="info-icon">
              <FaEnvelope />
            </div>

            <div>
              <h5>Email</h5>
              <p>abdulrehman@gmail.com</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <FaPhoneAlt />
            </div>

            <div>
              <h5>Phone</h5>
              <p>+92 346 3419974</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <FaMapMarkerAlt />
            </div>

            <div>
              <h5>Location</h5>
              <p>Pakistan</p>
            </div>
          </div>

          <div className="social-section">
            <h5>Connect With Me</h5>

            <div className="social-links">

              <a
                href="https://github.com/abdurehman19"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/abdul-rehman-763b11396/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>

            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default Contact