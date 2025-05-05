"use client"

import { useEffect, useRef } from "react"
import Typed from "typed.js"
import { motion } from "framer-motion"
import "./Hero.css"

const Hero = () => {
  const typedRef = useRef(null)
  const typedInstanceRef = useRef(null)

  useEffect(() => {
    if (typedRef.current) {
      typedInstanceRef.current = new Typed(typedRef.current, {
        strings: ["I am Kesha", "I am UI Designer"],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1000,
        startDelay: 500,
        loop: true,
      })
    }

    return () => {
      if (typedInstanceRef.current) {
        typedInstanceRef.current.destroy()
      }
    }
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }
  

  return (
    <div className="container hero-container">
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">
            Hello there! <br />
            <span className="hero-typed" ref={typedRef}></span>
          </h1>
          <p className="hero-description">
            An aspiring and passionate front-end developer and graphic designer from Western Mindanao State University.
          </p>
          <div className="hero-social">
            <motion.a
              href="https://facebook.com/quecia.mae.brilliantes"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fab fa-facebook-f"></i>
            </motion.a>
            <motion.a
              href="https://linkedin.com/queciabrilliantes"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fab fa-linkedin-in"></i>
            </motion.a>
            <motion.a
              href="https://instagram.com/kisha_brill/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fab fa-instagram"></i>
            </motion.a>
            <motion.a
              href="mailto:qb202100795@wmsu.edu.ph"
              className="social-icon"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fas fa-envelope"></i>
            </motion.a>
            <motion.a
              href="https://github.com/keshabrill/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fab fa-github"></i>
            </motion.a>
        
          </div>
          <motion.button
            className="btn btn-primary hero-cta"
            onClick={scrollToAbout}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore
          </motion.button>
        </motion.div>
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="profile-image">
            <img src="/profile.jpg" alt="Keshabrill" />
          </div>
        </motion.div>
      </div>
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          repeatDelay: 0.5,
        }}
      >
        <i className="fas fa-chevron-down"></i>
      </motion.div>
    </div>
  )
}

export default Hero
