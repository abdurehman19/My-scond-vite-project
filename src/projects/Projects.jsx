import React, { useState } from 'react'
import { motion, AnimatePresence, MotionConfig } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { HiArrowRight } from 'react-icons/hi'
import { FiExternalLink } from 'react-icons/fi'
import Market from '../assets/market.png'
import Nexcent from '../assets/nexcent.png'
import Rentcar from '../assets/rentcar.png'
import Ring from '../assets/ring.png'
import Maintain from '../assets/maintain.png'
import Ecommerce from '../assets/ecommerce.png'
import './Projects.css'

const categories = ['All', 'Full Stack', 'React', 'HTML & CSS']

const projects = [
  {
    id: 1,
    title: 'MainTain IQ',
    img: Maintain,
    link: 'https://maintain-iq-ai-powered-qr-maintenan-ten.vercel.app/',
    category: 'React',
    featured: true,
    tags: ['React', 'Firebase', 'AI', 'QR Scanner'],
    desc: 'An AI-powered maintenance management platform with QR code scanning, Firebase authentication, real-time asset tracking, and an intuitive dashboard for managing maintenance operations efficiently.',
  },
  {
    id: 2,
    title: 'E-commerce Platform',
    img: Ecommerce,
    link: 'https://full-stack-assigement.vercel.app/',
    category: 'Full Stack',
    tags: ['Full Stack', 'Frontend', 'Backend', 'MongoDB'],
    desc: 'A modern e-commerce platform built with React and MongoDB, featuring a sleek design, intuitive user interface, and seamless shopping experience.',
  },
  {
    id: 3,
    title: 'Marketplace Platform',
    img: Market,
    link: 'https://mymarketplacewebsite.netlify.app/',
    category: 'React',
    tags: ['React', 'Firebase', 'Authentication', 'Responsive'],
    desc: 'A responsive e-commerce marketplace built with React and Firebase, featuring user authentication, a sleek design, and a seamless shopping experience.',
  },
  {
    id: 4,
    title: 'Nexcent - Landing Page',
    img: Nexcent,
    link: 'https://clonefigma.netlify.app/',
    category: 'HTML & CSS',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
    desc: 'A modern and fully responsive business landing page developed using HTML, CSS, and JavaScript with a clean interface, engaging layout, and optimized user experience.',
  },
  {
    id: 5,
    title: 'RentCar - Car Rental',
    img: Rentcar,
    link: 'https://dainty-pony-d52426.netlify.app/',
    category: 'HTML & CSS',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
    desc: 'A responsive car rental website showcasing modern vehicle listings, booking sections, and a user-friendly interface designed for a seamless browsing experience.',
  },
  {
    id: 6,
    title: 'Ring - Jewelry Store',
    img: Ring,
    link: 'https://rehman-e-commerce-web.netlify.app/',
    category: 'HTML & CSS',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'E-commerce'],
    desc: 'A modern jewelry e-commerce website featuring elegant product showcases, responsive layouts, and an engaging shopping experience built with HTML, CSS, and JavaScript.',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

function Projects() {
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All' ? projects : projects.filter((p) => p.category === active)

  const handleGlow = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--cx', `${e.clientX - rect.left}px`)
    e.currentTarget.style.setProperty('--cy', `${e.clientY - rect.top}px`)
  }

  return (
    <MotionConfig reducedMotion="user">
      <section className="projects-section" id="projects">
        <div className="projects-blob projects-blob-1"></div>
        <div className="projects-blob projects-blob-2"></div>

        {/* ================= HEADING ================= */}
        <motion.div
          className="projects-heading"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.span className="projects-tag" variants={fadeUp}>
            My work
          </motion.span>

          <motion.h1 variants={fadeUp}>
            Featured <span className="projects-gradient">Projects</span>
          </motion.h1>

          <motion.p variants={fadeUp}>
            Real-world projects where I turned ideas into working products.
          </motion.p>

          <motion.div
            className="projects-underline"
            initial={{ width: 0 }}
            whileInView={{ width: 90 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.5, ease: 'easeOut' }}
          />
        </motion.div>

        {/* ================= FILTER TABS ================= */}
        <motion.div
          className="projects-tabs"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              className={`projects-tab ${active === cat ? 'is-active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {active === cat && (
                <motion.span
                  layoutId="projects-pill"
                  className="projects-pill"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="projects-tab-text">{cat}</span>
            </button>
          ))}
        </motion.div>

        {/* ================= CARDS ================= */}
        <div className="projects-container">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.a
                key={p.id}
                className="project-card"
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                layout
                initial={{ opacity: 0, y: 50, scale: 0.92 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.6,
                    delay: i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }}
                viewport={{ once: true, amount: 0.1 }}
                exit={{ opacity: 0, scale: 0.85, transition: { duration: 0.2 } }}
                whileHover={{ y: -10 }}
                transition={{ type: 'spring', stiffness: 250, damping: 20 }}
                onMouseMove={handleGlow}
              >
                {/* Image */}
                <div className="project-image">
                  <img src={p.img} alt={p.title} />

                  <span className="project-number">
                    {String(p.id).padStart(2, '0')}
                  </span>

                  {p.featured && (
                    <span className="project-featured">Featured</span>
                  )}

                  <div className="project-overlay">
                    <span className="project-demo-btn">
                      Live Demo <FiExternalLink />
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="project-body">
                  <div className="project-badges">
                    {p.tags.map((t) => (
                      <span className="project-badge" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <h2>{p.title}</h2>
                  <p>{p.desc}</p>

                  <span className="project-link">
                    View Live <HiArrowRight className="project-link-arrow" />
                  </span>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>

        {/* ================= GITHUB CTA ================= */}
        <motion.div
          className="projects-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p>Want to see more of my code?</p>
          <motion.a
            href="https://github.com/abdurehman19"
            target="_blank"
            rel="noopener noreferrer"
            className="projects-cta-btn"
            whileHover={{ y: -4, scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 300, damping: 18 }}
          >
            <FaGithub /> Visit my GitHub
          </motion.a>
        </motion.div>
      </section>
    </MotionConfig>
  )
}

export default Projects