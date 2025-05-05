"use client"

import { useState, useEffect } from "react"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Achievements from "./components/Achievements"
import Projects from "./components/Projects"
import Experiences from "./components/Experiences"
import Blog from "./components/Blog"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"
import BackgroundAnimation from "./components/BackgroundAnimation"
import { AnimatePresence } from "framer-motion"
import "./App.css"

function App() {
  const [scrollY, setScrollY] = useState(0)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    // Check for user's preferred color scheme
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    setDarkMode(prefersDark)
    document.body.classList.toggle("dark-mode", prefersDark)

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.body.classList.toggle("dark-mode")
  }

  return (
    <AnimatePresence>
      <div className="app">
        <Navbar scrollY={scrollY} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main>
          <section id="hero" className="section hero-section">
            <BackgroundAnimation />
            <Hero />
          </section>

          <section id="about" className="section about-section">
            <About />
          </section>

          <section id="skills" className="section skills-section">
            <Skills />
          </section>

          <section id="achievements" className="section achievements-section">
            <Achievements />
          </section>

          <section id="projects" className="section projects-section">
            <Projects />
          </section>

          <section id="experiences" className="section experiences-section">
            <Experiences />
          </section>

          <section id="contact" className="section contact-section">
            <Contact />
          </section>
        </main>

        <Footer />
        <ScrollToTop scrollY={scrollY} />
      </div>
    </AnimatePresence>
  )
}

export default App
