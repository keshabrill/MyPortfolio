"use client"

import { motion } from "framer-motion"
import "./About.css"

const About = () => {
  const interests = [
    { icon: "fas fa-sun", name: "Sunsets" },
    { icon: "fas fa-plane", name: "Travel & Exploring Places" },
    { icon: "fas fa-book", name: " Reading Books" },
    { icon: "fas fa-book", name: " Netflix Series" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="container">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>

      <div className="about-content">
        <motion.div
          className="about-info"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3>Quecia Mae R. Brilliantes</h3>
          <div className="about-details">
            <p>BS Information Technology</p>
            <p>Western Mindanao State University</p>
          </div>

          <div className="about-bio">
            <p>
              I am continuously honing my skills to become a skilled Front-end Developer and UI/UX Designer, blending
              creativity with functionality to create meaningful user experiences.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="about-interests"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3>Hobbies</h3>
          <div className="interests-grid">
            {interests.map((interest, index) => (
              <motion.div
                className="interest-card"
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)" }}
              >
                <i className={interest.icon}></i>
                <span>{interest.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
