import React from 'react'
import './About.css'
import { motion, MotionConfig } from 'framer-motion'
import {
  FaUserTie,
  FaGraduationCap,
  FaLaptopCode,
  FaReact,
  FaJs,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from 'react-icons/fa'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
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

const chipContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
}

const chip = {
  hidden: { opacity: 0, scale: 0.7, y: 15 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 260, damping: 18 },
  },
}

const skills = [
  { icon: <FaReact />, name: 'React.js' },
  { icon: <FaJs />, name: 'JavaScript' },
  { icon: <FaNodeJs />, name: 'Node.js' },
  { icon: <FaHtml5 />, name: 'HTML5' },
  { icon: <FaCss3Alt />, name: 'CSS3' },
  { icon: <FaGitAlt />, name: 'Git' },
]

function About() {
  // Mouse ke saath card ke andar glow
  const handleGlow = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--cx', `${e.clientX - rect.left}px`)
    e.currentTarget.style.setProperty('--cy', `${e.clientY - rect.top}px`)
  }

  return (
    <MotionConfig reducedMotion="user">
      <section className="about-section" id="about">
        <div className="about-blob about-blob-1"></div>
        <div className="about-blob about-blob-2"></div>

        {/* ================= HEADING ================= */}
        <motion.div
          className="about-heading"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.span className="about-tag" variants={fadeUp}>
            Who I am
          </motion.span>

          <motion.h1 variants={fadeUp}>
            About <span className="about-gradient">Me</span>
          </motion.h1>

          <motion.p variants={fadeUp}>
            Get to know more about me and my journey.
          </motion.p>

          <motion.div
            className="about-underline"
            initial={{ width: 0 }}
            whileInView={{ width: 90 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.5, ease: 'easeOut' }}
          />
        </motion.div>

        {/* ================= CARDS ================= */}
        <motion.div
          className="about-container"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="about-card"
            variants={fadeUp}
            whileHover={{ y: -10 }}
            transition={{ type: 'spring', stiffness: 250, damping: 18 }}
            onMouseMove={handleGlow}
          >
            <div className="about-icon-box">
              <FaUserTie className="about-icon" />
            </div>
            <h3>Who I Am</h3>
            <p>
              I'm a Frontend Developer specializing in React.js and modern web
              technologies. I enjoy building responsive, user-friendly and
              visually appealing web applications while continuously learning
              new technologies and improving my problem-solving skills.
            </p>
          </motion.div>

          <motion.div
            className="about-card"
            variants={fadeUp}
            whileHover={{ y: -10 }}
            transition={{ type: 'spring', stiffness: 250, damping: 18 }}
            onMouseMove={handleGlow}
          >
            <div className="about-icon-box">
              <FaGraduationCap className="about-icon" />
            </div>
            <h3>Education</h3>
            <h4>Govt National College</h4>
            <p>Pre Engineering</p>
            <span className="about-date">2024 - 2025</span>
          </motion.div>

          <motion.div
            className="about-card"
            variants={fadeUp}
            whileHover={{ y: -10 }}
            transition={{ type: 'spring', stiffness: 250, damping: 18 }}
            onMouseMove={handleGlow}
          >
            <div className="about-icon-box">
              <FaLaptopCode className="about-icon" />
            </div>
            <h3>Professional Training</h3>
            <h4>Modern Web &amp; App Development</h4>
            <p>Saylani Mass IT Training</p>
          </motion.div>
        </motion.div>

        {/* ================= SKILLS ================= */}
        <motion.div
          className="about-skills"
          variants={chipContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.h3 variants={fadeUp}>Technologies I Work With</motion.h3>

          <div className="about-chips">
            {skills.map((s) => (
              <motion.div
                className="about-chip"
                key={s.name}
                variants={chip}
                whileHover={{ y: -6, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                {s.icon}
                <span>{s.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </MotionConfig>
  )
}

export default About