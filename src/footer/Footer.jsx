import React from 'react'
import { motion, MotionConfig } from 'framer-motion'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { HiArrowUp } from 'react-icons/hi'
import './Footer.css'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  {
    label: 'LinkedIn',
    icon: <FaLinkedinIn />,
    href: 'https://www.linkedin.com/in/abdul-rehman-763b11396/',
    rotate: -6,
  },
  {
    label: 'GitHub',
    icon: <FaGithub />,
    href: 'https://github.com/abdurehman19',
    rotate: 6,
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <MotionConfig reducedMotion="user">
      <footer className="footer">
        <div className="footer-glow footer-glow-1"></div>
        <div className="footer-glow footer-glow-2"></div>

        <motion.div
          className="footer-inner"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* ================= TOP ================= */}
          <div className="footer-top">
            <motion.div className="footer-brand" variants={fadeUp}>
              <h1>
                Abdul <span className="footer-gradient">Rehman</span>
              </h1>
              <h5>Full Stack Developer</h5>
              <p>
                Building responsive, user-friendly web applications with React
                and modern web technologies.
              </p>
            </motion.div>

            <motion.div className="footer-nav" variants={fadeUp}>
              <h4>Quick Links</h4>
              <div className="footer-links">
                {links.map((l) => (
                  <a href={l.href} key={l.label}>
                    {l.label}
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div className="footer-connect" variants={fadeUp}>
              <h4>Connect</h4>
              <div className="footer-social">
                {socials.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    whileHover={{ y: -6, rotate: s.rotate, scale: 1.08 }}
                    whileTap={{ scale: 0.92 }}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.hr className="footer-divider" variants={fadeUp} />

          {/* ================= BOTTOM ================= */}
          <motion.div className="footer-bottom" variants={fadeUp}>
            <p>
              &copy; {new Date().getFullYear()} Abdul Rehman. All rights
              reserved.
            </p>

            <motion.button
              type="button"
              className="footer-top-btn"
              onClick={scrollToTop}
              aria-label="Back to top"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: 'spring', stiffness: 300, damping: 18 }}
            >
              <HiArrowUp />
            </motion.button>
          </motion.div>
        </motion.div>
      </footer>
    </MotionConfig>
  )
}

export default Footer