import React, { useRef } from 'react'
import {
  motion,
  MotionConfig,
  useScroll,
  useSpring,
} from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa'
import { HiBadgeCheck } from 'react-icons/hi'
import './Certifications.css'

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

const certs = [
  {
    id: 1,
    icon: <FaHtml5 />,
    title: 'Certificate of HTML',
    issuer: 'Cisco Networking Academy',
    desc: 'Completed a professional certification in Web Development Foundations, covering semantic HTML5 structure, web accessibility standards, clean coding practices, and modern document structure.',
    tags: ['HTML5', 'Accessibility', 'Semantic Markup'],
  },
  {
    id: 2,
    icon: <FaCss3Alt />,
    title: 'Certificate of CSS',
    issuer: 'Cisco Networking Academy',
    desc: 'Completed a professional certification in Advanced Styling and Design, covering responsive web design, Flexbox, Grid layouts, typography, CSS variables, and visual consistency.',
    tags: ['Flexbox', 'Grid', 'Responsive'],
  },
  {
    id: 3,
    icon: <FaJs />,
    title: 'Certificate of JavaScript',
    issuer: 'Cisco Networking Academy',
    desc: 'Completed a professional certification in Programming Foundations with JavaScript, covering DOM manipulation, event handling, asynchronous programming, and dynamic web applications.',
    tags: ['DOM', 'Events', 'Async'],
  },
]

const stats = [
  { value: certs.length + '', label: 'Certifications' },
  { value: 'Cisco', label: 'Networking Academy' },
  { value: 'Web Dev', label: 'Focus Area' },
]

function Certifications() {
  const timelineRef = useRef(null)

  // Timeline line scroll ke saath draw hoti hai
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 80%', 'end 60%'],
  })
  const lineScale = useSpring(scrollYProgress, { stiffness: 100, damping: 25 })

  const handleGlow = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--cx', `${e.clientX - rect.left}px`)
    e.currentTarget.style.setProperty('--cy', `${e.clientY - rect.top}px`)
  }

  return (
    <MotionConfig reducedMotion="user">
      <section className="cert-section" id="certifications">
        <div className="cert-blob cert-blob-1"></div>
        <div className="cert-blob cert-blob-2"></div>

        {/* ================= HEADING ================= */}
        <motion.div
          className="cert-heading"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.span className="cert-tag" variants={fadeUp}>
            My learning
          </motion.span>

          <motion.h1 variants={fadeUp}>
            Certifications &amp;{' '}
            <span className="cert-gradient">Achievements</span>
          </motion.h1>

          <motion.p variants={fadeUp}>
            Professional certifications and continuous learning journey.
          </motion.p>

          <motion.div
            className="cert-underline"
            initial={{ width: 0 }}
            whileInView={{ width: 90 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.5, ease: 'easeOut' }}
          />
        </motion.div>

        {/* ================= TIMELINE ================= */}
        <div className="cert-timeline" ref={timelineRef}>
          <div className="cert-line-track">
            <motion.div
              className="cert-line-fill"
              style={{ scaleY: lineScale }}
            />
          </div>

          {certs.map((c, i) => {
            const side = i % 2 === 0 ? 'left' : 'right'
            return (
              <div className={`cert-row cert-${side}`} key={c.id}>
                {/* Timeline dot */}
                <motion.div
                  className="cert-dot"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                >
                  <span className="cert-dot-pulse"></span>
                </motion.div>

                {/* Card */}
                <motion.div
                  className="cert-card"
                  initial={{
                    opacity: 0,
                    x: side === 'left' ? -60 : 60,
                    filter: 'blur(8px)',
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    filter: 'blur(0px)',
                    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                  }}
                  viewport={{ once: true, amount: 0.25 }}
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 250, damping: 20 }}
                  onMouseMove={handleGlow}
                >
                  <div className="cert-card-top">
                    <div className="cert-icon-box">{c.icon}</div>

                    <span className="cert-verified">
                      <HiBadgeCheck /> Completed
                    </span>
                  </div>

                  <h3>{c.title}</h3>
                  <span className="cert-issuer">{c.issuer}</span>
                  <p>{c.desc}</p>

                  <div className="cert-tags">
                    {c.tags.map((t) => (
                      <span className="cert-skill" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            )
          })}
        </div>

        {/* ================= STATS ================= */}
        <motion.div
          className="cert-stats"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          {stats.map((s) => (
            <motion.div className="cert-stat" key={s.label} variants={fadeUp}>
              <h4>{s.value}</h4>
              <span>{s.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </MotionConfig>
  )
}

export default Certifications