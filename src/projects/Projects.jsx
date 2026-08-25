import React from 'react'
import Market from '../assets/market.png'
import Nexcent from '../assets/nexcent.png'
import Rentcar from '../assets/rentcar.png'
import Ring from '../assets/ring.png'
import Maintain from '../assets/maintain.png'
import Ecommerce from '../assets/ecommerce.png'
import './Projects.css'

function Projects() {
  return (
    <>
      <div className="projects-heading">
        <h1>Big Projects</h1>
      </div>

      <div className="projects-container">

        {/* MainTain IQ */}
        <div className="project-card">
          <a
            href="https://maintain-iq-ai-powered-qr-maintenan-ten.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Maintain} alt="MainTain IQ" />

            <div className="badge-container">
              <span className="project-badge">React</span>
              <span className="project-badge">Firebase</span>
              <span className="project-badge">AI</span>
              <span className="project-badge">QR Scanner</span>
            </div>

            <h2>MainTain IQ</h2>

            <p>
              An AI-powered maintenance management platform with QR code
              scanning, Firebase authentication, real-time asset tracking,
              and an intuitive dashboard for managing maintenance operations
              efficiently.
            </p>
          </a>
        </div>

         <div className="project-card">
          <a
            href="https://full-stack-assigement.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Ecommerce} alt="E-commerce Platform" />

            <div className="badge-container">
              <span className="project-badge">Full Stack</span>
              <span className="project-badge">Frontend</span>
              <span className="project-badge">Backend</span>
              <span className="project-badge">MongoDB</span>
            </div>

            <h2>E-commerce Platform</h2>

            <p>
              A modern e-commerce platform built with React and MongoDB,
              featuring a sleek design, intuitive user interface, and seamless
              shopping experience.
            </p>
          </a>
        </div>

        {/* Marketplace */}
        <div className="project-card">
          <a
            href="https://mymarketplacewebsite.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Market} alt="Marketplace" />

            <div className="badge-container">
              <span className="project-badge">React</span>
              <span className="project-badge">Firebase</span>
              <span className="project-badge">Authentication</span>
              <span className="project-badge">Responsive</span>
            </div>

            <h2>Marketplace - E-commerce Platform</h2>

            <p>
              A responsive e-commerce marketplace built with React and MongoDB,
              featuring a sleek design, intuitive user interface, and seamless
              shopping experience.
            </p>
          </a>
        </div>

        {/* Nexcent */}
        <div className="project-card">
          <a
            href="https://clonefigma.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Nexcent} alt="Nexcent" />

            <div className="badge-container">
              <span className="project-badge">HTML5</span>
              <span className="project-badge">CSS3</span>
              <span className="project-badge">JavaScript</span>
              <span className="project-badge">Responsive</span>
            </div>

            <h2>Nexcent - Business Landing Page</h2>

            <p>
              A modern and fully responsive business landing page developed
              using HTML, CSS, and JavaScript with a clean interface,
              engaging layout, and optimized user experience.
            </p>
          </a>
        </div>

        {/* RentCar */}
        <div className="project-card">
          <a
            href="https://dainty-pony-d52426.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Rentcar} alt="RentCar" />

            <div className="badge-container">
              <span className="project-badge">HTML5</span>
              <span className="project-badge">CSS3</span>
              <span className="project-badge">JavaScript</span>
              <span className="project-badge">Responsive</span>
            </div>

            <h2>RentCar - Car Rental Platform</h2>

            <p>
              A responsive car rental website showcasing modern vehicle
              listings, booking sections, and a user-friendly interface
              designed for a seamless browsing experience.
            </p>
          </a>
        </div>

        {/* Ring */}
        <div className="project-card">
          <a
            href="https://rehman-e-commerce-web.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Ring} alt="Ring Store" />

            <div className="badge-container">
              <span className="project-badge">HTML5</span>
              <span className="project-badge">CSS3</span>
              <span className="project-badge">JavaScript</span>
              <span className="project-badge">E-commerce</span>
            </div>

            <h2>Ring - Jewelry Store</h2>

            <p>
              A modern jewelry e-commerce website featuring elegant product
              showcases, responsive layouts, and an engaging shopping
              experience built with HTML, CSS, and JavaScript.
            </p>
          </a>
        </div>

      </div>
    </>
  )
}

export default Projects