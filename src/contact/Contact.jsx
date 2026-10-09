import React, { useState } from 'react'
import { motion, AnimatePresence, MotionConfig } from 'framer-motion'
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedinIn,
  FaUser,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
  FaRegCopy,
  FaCheck,
} from 'react-icons/fa'
import './Contact.css'

/* 
  Formspree endpoint yahan paste karo, e.g. 'https://formspree.io/f/xxxxxxxx'
  Khali chhodo to form email app (mailto) khol dega.
*/
const FORM_ENDPOINT = ''
const MY_EMAIL = 'abdulrehman@gmail.com'

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

const infoItems = [
  {
    key: 'email',
    icon: <FaEnvelope />,
    label: 'Email',
    value: MY_EMAIL,
    href: `mailto:${MY_EMAIL}`,
    copy: true,
  },
  {
    key: 'phone',
    icon: <FaPhoneAlt />,
    label: 'Phone',
    value: '+92 346 3419974',
    href: 'tel:+923463419974',
    copy: true,
  },
  {
    key: 'location',
    icon: <FaMapMarkerAlt />,
    label: 'Location',
    value: 'Pakistan',
  },
]

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [copied, setCopied] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (status === 'success' || status === 'error') setStatus('idle')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Endpoint set nahi hai to mailto fallback
    if (!FORM_ENDPOINT) {
      const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
      const body = encodeURIComponent(
        `${form.message}\n\nName: ${form.name}\nEmail: ${form.email}`
      )
      window.location.href = `mailto:${MY_EMAIL}?subject=${subject}&body=${body}`
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const handleCopy = async (key, value) => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(key)
      setTimeout(() => setCopied(''), 1800)
    } catch {
      /* clipboard block ho to chup chap ignore */
    }
  }

  const handleGlow = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--cx', `${e.clientX - rect.left}px`)
    e.currentTarget.style.setProperty('--cy', `${e.clientY - rect.top}px`)
  }

  return (
    <MotionConfig reducedMotion="user">
      <section className="contact-section" id="contact">
        <div className="contact-blob contact-blob-1"></div>
        <div className="contact-blob contact-blob-2"></div>

        {/* ================= HEADING ================= */}
        <motion.div
          className="contact-heading"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.span className="contact-tag" variants={fadeUp}>
            Contact
          </motion.span>

          <motion.h1 variants={fadeUp}>
            Get In <span className="contact-gradient">Touch</span>
          </motion.h1>

          <motion.p variants={fadeUp}>
            Let's discuss your next project or collaboration.
          </motion.p>

          <motion.div
            className="contact-underline"
            initial={{ width: 0 }}
            whileInView={{ width: 90 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.5, ease: 'easeOut' }}
          />
        </motion.div>

        {/* ================= CONTENT ================= */}
        <div className="contact-container">
          {/* ---------- FORM ---------- */}
          <motion.div
            className="contact-form-box"
            initial={{ opacity: 0, x: -60, filter: 'blur(8px)' }}
            whileInView={{
              opacity: 1,
              x: 0,
              filter: 'blur(0px)',
              transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
            }}
            viewport={{ once: true, amount: 0.2 }}
            onMouseMove={handleGlow}
          >
            <h3 className="contact-box-title">Send me a message</h3>
            <p className="contact-box-sub">
              Fill the form and I'll get back to you as soon as possible.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-field">
                <label htmlFor="name">Full Name</label>
                <div className="contact-input-wrap">
                  <FaUser className="contact-input-icon" />
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="email">Email</label>
                <div className="contact-input-wrap">
                  <FaEnvelope className="contact-input-icon" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="message">Message</label>
                <div className="contact-input-wrap contact-textarea-wrap">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    required
                  ></textarea>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {status === 'success' && (
                  <motion.div
                    key="success"
                    className="contact-alert contact-success"
                    initial={{ opacity: 0, y: 10, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <FaCheckCircle /> Message sent! I'll reply to you soon.
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    key="error"
                    className="contact-alert contact-error"
                    initial={{ opacity: 0, y: 10, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <FaExclamationCircle /> Something went wrong. Please try
                    again or email me directly.
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                type="submit"
                className="contact-submit"
                disabled={status === 'sending'}
                whileHover={status === 'sending' ? {} : { y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 300, damping: 18 }}
              >
                {status === 'sending' ? (
                  <>
                    <span className="contact-spinner"></span> Sending...
                  </>
                ) : (
                  <>
                    Send Message <FaPaperPlane className="contact-send-icon" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* ---------- INFO ---------- */}
          <motion.div
            className="contact-info"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div className="contact-status" variants={fadeUp}>
              <span className="contact-status-dot"></span>
              Available for freelance &amp; job opportunities
            </motion.div>

            <motion.h3 className="contact-info-title" variants={fadeUp}>
              Contact Information
            </motion.h3>

            {infoItems.map((item) => {
              const Wrapper = item.href ? motion.a : motion.div
              return (
                <Wrapper
                  key={item.key}
                  className="contact-item"
                  variants={fadeUp}
                  whileHover={{ x: 8 }}
                  transition={{ type: 'spring', stiffness: 250, damping: 20 }}
                  {...(item.href ? { href: item.href } : {})}
                >
                  <div className="contact-item-icon">{item.icon}</div>

                  <div className="contact-item-text">
                    <h5>{item.label}</h5>
                    <p>{item.value}</p>
                  </div>

                  {item.copy && (
                    <button
                      type="button"
                      className={`contact-copy ${
                        copied === item.key ? 'is-copied' : ''
                      }`}
                      aria-label={`Copy ${item.label}`}
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        handleCopy(item.key, item.value)
                      }}
                    >
                      {copied === item.key ? <FaCheck /> : <FaRegCopy />}
                    </button>
                  )}
                </Wrapper>
              )
            })}

            <motion.div className="contact-social" variants={fadeUp}>
              <h5>Connect With Me</h5>

              <div className="contact-social-links">
                <motion.a
                  href="https://github.com/abdurehman19"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  whileHover={{ y: -6, rotate: 6, scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                >
                  <FaGithub />
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/abdul-rehman-763b11396/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  whileHover={{ y: -6, rotate: -6, scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                >
                  <FaLinkedinIn />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  )
}

export default Contact