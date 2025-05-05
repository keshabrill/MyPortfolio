import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import "./Navbar.css"

const Navbar = ({ scrollY, darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const sections = document.querySelectorAll(".section")
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, observerOptions)

    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : ""
  }, [isMenuOpen])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      closeMenu()
    }
  }

  const navLinks = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "achievements", label: "Achievements" },
    { id: "projects", label: "Projects" },
    { id: "experiences", label: "Experiences" },
    {
      id: "blog",
      label: "Blog",
      external: true,
      url: "https://keshaeductourblog.netlify.app",
    },
    { id: "contact", label: "Contact" },
  ]

  return (
    <motion.nav
      className={`navbar ${scrollY > 50 ? "navbar-scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container navbar-container">
        <motion.div className="navbar-logo" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <a href="#hero" onClick={() => scrollToSection("hero")}>
            {/* Add logo text or image here if needed */}
          </a>
        </motion.div>

        <div className="navbar-actions">
          <motion.button
            className="theme-toggle"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
          >
            {darkMode ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
          </motion.button>

          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            <span className={`menu-icon ${isMenuOpen ? "open" : ""}`}></span>
          </button>
        </div>

        <div className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <motion.li key={link.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href={link.external ? link.url : `#${link.id}`}
                  className={activeSection === link.id ? "active" : ""}
                  onClick={() => {
                    if (!link.external) scrollToSection(link.id)
                  }}
                  target={link.external ? "_blank" : "_self"}
                  rel={link.external ? "noopener noreferrer" : undefined}
                >
                  {link.label}
                </a>
              </motion.li>
            ))}
          </ul>

          <motion.a
            href="/Kesha-Resume.pdf"
            className="btn btn-primary navbar-resume-btn"
            download="Kesha-Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Resume
          </motion.a>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
