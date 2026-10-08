import React, { useState } from 'react'
import { motion, AnimatePresence, MotionConfig } from 'framer-motion'
import javascript from '../assets/js.png'
import typescript from '../assets/type.png'
import html from '../assets/html.jpeg'
import react from '../assets/react.png'
import Node from '../assets/node.png'
import Fire from '../assets/fire.png'
import Css from '../assets/css.png'
import Boot from '../assets/boot.jpeg'
import Ghithub from '../assets/ghithub.png'
import './Skills.css'

const categories = ['All', 'Languages', 'Frontend', 'Backend', 'Tools']

const skills = [
  { name: 'JavaScript', img: javascript, category: 'Languages', desc: 'Core language of the web' },
  { name: 'TypeScript', img: typescript, category: 'Languages', desc: 'Typed, scalable JavaScript' },
  { name: 'HTML', img: html, category: 'Frontend', desc: 'Semantic page structure' },
  { name: 'CSS', img: Css, category: 'Frontend', desc: 'Modern, responsive styling' },
  { name: 'React', img: react, category: 'Frontend', desc: 'Component-based UI library' },
  { name: 'Bootstrap', img: Boot, category: 'Frontend', desc: 'Rapid responsive layouts' },
  { name: 'Node.js', img: Node, category: 'Backend', desc: 'JavaScript runtime for servers' },
  { name: 'Firebase', img: Fire, category: 'Backend', desc: 'Auth, database and hosting' },
  { name: 'GitHub', img: Ghithub, category: 'Tools', desc: 'Version control and teamwork' },
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

function Skills() {
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All' ? skills : skills.filter((s) => s.category === active)

  const handleGlow = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--cx', `${e.clientX - rect.left}px`)
    e.currentTarget.style.setProperty('--cy', `${e.clientY - rect.top}px`)
  }

  return (
    <MotionConfig reducedMotion="user">
      <section className="skills-section" id="skills">
        <div className="skills-blob skills-blob-1"></div>
        <div className="skills-blob skills-blob-2"></div>

        {/* ================= HEADING ================= */}
        <motion.div
          className="skills-heading"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.span className="skills-tag" variants={fadeUp}>
            My toolkit
          </motion.span>

          <motion.h1 variants={fadeUp}>
            Skills &amp; <span className="skills-gradient">Technologies</span>
          </motion.h1>

          <motion.p variants={fadeUp}>
            Tools and technologies I use to build modern web applications.
          </motion.p>

          <motion.div
            className="skills-underline"
            initial={{ width: 0 }}
            whileInView={{ width: 90 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.5, ease: 'easeOut' }}
          />
        </motion.div>

        {/* ================= FILTER TABS ================= */}
        <motion.div
          className="skills-tabs"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              className={`skills-tab ${active === cat ? 'is-active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {active === cat && (
                <motion.span
                  layoutId="skills-pill"
                  className="skills-pill"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="skills-tab-text">{cat}</span>
            </button>
          ))}
        </motion.div>

        {/* ================= CARDS ================= */}
        <div className="skills-container">
          <AnimatePresence mode="popLayout">
            {filtered.map((skill, i) => (
              <motion.div
                key={skill.name}
                className="skill-card"
                layout
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.5,
                    delay: i * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }}
                viewport={{ once: true, amount: 0.1 }}
                exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
                whileHover={{ y: -10 }}
                transition={{ type: 'spring', stiffness: 250, damping: 20 }}
                onMouseMove={handleGlow}
              >
                <span className="skill-category">{skill.category}</span>

                <div className="skill-icon-box">
                  <img src={skill.img} alt={skill.name} />
                </div>

                <h3>{skill.name}</h3>
                <p>{skill.desc}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>
    </MotionConfig>
  )
}

export default Skills