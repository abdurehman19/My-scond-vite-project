import React from 'react'
import './Home.css'
import MyImage from '../assets/My (2).jpeg'
import { TypeAnimation } from 'react-type-animation'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
  useReducedMotion,
} from 'framer-motion'
import {
  FaLinkedin,
  FaGithub,
  FaReact,
  FaNodeJs,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from 'react-icons/fa'
import { HiArrowDown, HiArrowRight } from 'react-icons/hi'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

const techStack = [
  { icon: <FaReact />, name: 'React' },
  { icon: <FaJs />, name: 'JavaScript' },
  { icon: <FaNodeJs />, name: 'Node.js' },
  { icon: <FaHtml5 />, name: 'HTML5' },
  { icon: <FaCss3Alt />, name: 'CSS3' },
  { icon: <FaGitAlt />, name: 'Git' },
]

function Home() {
  const reduceMotion = useReducedMotion()

  /* ---------- Scroll progress + parallax ---------- */
  const { scrollYProgress, scrollY } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 })
  const blobY1 = useTransform(scrollY, [0, 600], [0, 120])
  const blobY2 = useTransform(scrollY, [0, 600], [0, -100])

  /* ---------- 3D tilt on image ---------- */
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [12, -12]), {
    stiffness: 150,
    damping: 15,
  })
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), {
    stiffness: 150,
    damping: 15,
  })

  const handleTilt = (e) => {
    if (reduceMotion) return
    const rect = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const resetTilt = () => {
    mx.set(0)
    my.set(0)
  }

  /* ---------- Mouse spotlight ---------- */
  const handleSpotlight = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX: progress }} />

      <section className="home-section" onMouseMove={handleSpotlight}>
        <div className="spotlight" />
        <motion.div className="blob blob-1" style={{ y: blobY1 }} />
        <motion.div className="blob blob-2" style={{ y: blobY2 }} />

        <div className="home">
          {/* ================= LEFT CONTENT ================= */}
          <motion.div
            className="home-content"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.span className="status-badge" variants={item}>
              <span className="status-dot"></span>
              Available for opportunities
            </motion.span>

            <motion.h1 variants={item}>
              Hi, I'm <span className="gradient-text">Abdul Rehman</span>
            </motion.h1>

            <motion.h2 variants={item}>
              <TypeAnimation
                sequence={[
                  'React Developer',
                  2000,
                  'Frontend Developer',
                  2000,
                  'Backend Developer',
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </motion.h2>

            <motion.p variants={item}>
              I'm a Frontend Developer specializing in React.js and modern web
              technologies. I enjoy building responsive, user-friendly, and
              visually appealing web applications that provide seamless user
              experiences. Through hands-on projects, I have gained experience
              working with React, JavaScript, Context API, and modern UI
              development practices. I am constantly learning new technologies,
              improving my problem-solving skills, and creating projects that
              transform ideas into real-world solutions. My goal is to grow as a
              Full-Stack Developer while contributing to impactful and
              innovative digital products.
            </motion.p>

            <motion.div className="btn-group" variants={item}>
              <a href="#contact">
                <motion.button
                  className="primary-btn"
                  whileHover={{ y: -4, scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                >
                  Contact Me
                  <HiArrowRight className="btn-arrow" />
                </motion.button>
              </a>

              <a href="#projects">
                <motion.button
                  className="secondary-btn"
                  whileHover={{ y: -4, scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                >
                  View Projects
                </motion.button>
              </a>
            </motion.div>

            <motion.div className="social-links" variants={item}>
              <motion.a
                href="https://www.linkedin.com/in/abdul-rehman-763b11396/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                whileHover={{ y: -6, rotate: -6, scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
              >
                <FaLinkedin />
              </motion.a>

              <motion.a
                href="https://github.com/abdurehman19"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                whileHover={{ y: -6, rotate: 6, scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
              >
                <FaGithub />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* ================= RIGHT IMAGE ================= */}
          <motion.div
            className="home-image"
            initial={{ opacity: 0, scale: 0.85, x: 60 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="image-wrapper"
              onMouseMove={handleTilt}
              onMouseLeave={resetTilt}
              style={{
                rotateX: reduceMotion ? 0 : rotateX,
                rotateY: reduceMotion ? 0 : rotateY,
                transformPerspective: 900,
              }}
            >
              <div className="image-ring"></div>
              <img src={MyImage} alt="Abdul Rehman" />

              <motion.div
                className="float-badge badge-react"
                animate={{ y: [0, -14, 0], rotate: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <FaReact />
              </motion.div>

              <motion.div
                className="float-badge badge-node"
                animate={{ y: [0, -14, 0], rotate: [0, -6, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.6,
                }}
              >
                <FaNodeJs />
              </motion.div>

              <motion.div
                className="float-badge badge-js"
                animate={{ y: [0, -14, 0], rotate: [0, 6, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1.2,
                }}
              >
                <FaJs />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* ================= TECH MARQUEE ================= */}
        <motion.div
          className="marquee"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="marquee-track">
            {[...techStack, ...techStack, ...techStack, ...techStack].map(
              (tech, i) => (
                <div className="marquee-item" key={i}>
                  {tech.icon}
                  <span>{tech.name}</span>
                </div>
              )
            )}
          </div>
        </motion.div>

        <motion.a
          href="#projects"
          className="scroll-down"
          aria-label="Scroll down"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <HiArrowDown />
        </motion.a>
      </section>
    </>
  )
}

export default Home