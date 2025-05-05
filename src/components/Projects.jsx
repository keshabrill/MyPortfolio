"use client"

import { useState } from "react"
import "./Projects.css"

const Projects = () => {
  const mainProjects = [
    {
      title: "BidWave",
      description: "An Auction bidding ecommerce project",
      role: "UI Designer",
      team: "Franz Valdez, Milbert Falcasantos",
      image: "/bidwave.png",
      github: "github.com/kishabrill/bidwave",
      demo: "bidwaveAuction.com",
    },
    {
      title: "One Zamboanga",
      description: "An Evacuation Center Management System",
      role: "Project Manager, Documentation",
      team: "Mark Larenz Tabo-tabo, Jondino Rodrigo",
      image: "/oz.jpg",
      github: "#",
      demo: "#",
    },
    {
      title: "PokeClash",
      description: "Mini Pokemon Game App with Battle Simulation",
      role: "Tester, UI Designer",
      team: "John Fredrick Lim",
      image: "/pokeclash.jpg",
      github: "#",
      demo: "#",
    },
    {
      title: "To Do List App",
      description: "A to do list app that organizes things",
      role: "Project Manager",
      team: "John Fredrick Lim",
      image: "/todo.jpg",
      github: "#",
      demo: "#",
    },
  ]

  const otherProjects = [
    
  ]

  const [currentProject, setCurrentProject] = useState(0)

  const nextProject = () => {
    setCurrentProject((prev) => (prev === mainProjects.length - 1 ? 0 : prev + 1))
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev === 0 ? mainProjects.length - 1 : prev - 1))
  }

  return (
    <div className="container">
      <h2>Projects</h2>

      <div className="main-project">
        <div className="project-slider">
          <div className="project-image">
            <img
              src={mainProjects[currentProject].image || "/placeholder.svg"}
              alt={mainProjects[currentProject].title}
            />
          </div>

          <div className="project-info">
            <h3>{mainProjects[currentProject].title}</h3>
            <p className="project-description">{mainProjects[currentProject].description}</p>
            <div className="project-details">
              <p>
                <strong>Role:</strong> {mainProjects[currentProject].role}
              </p>
              <p>
                <strong>Team:</strong> {mainProjects[currentProject].team}
              </p>
            </div>
            <div className="project-links">
              <a
                href={mainProjects[currentProject].github}
                className="btn btn-outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i> GitHub
              </a>
              <a
                href={mainProjects[currentProject].demo}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-external-link-alt"></i> Live Demo
              </a>
            </div>
          </div>
        </div>

        <div className="slider-controls">
          <button className="slider-btn" onClick={prevProject}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <div className="slider-dots">
            {mainProjects.map((_, index) => (
              <button
                key={index}
                className={`slider-dot ${currentProject === index ? "active" : ""}`}
                onClick={() => setCurrentProject(index)}
                aria-label={`Go to project ${index + 1}`}
              ></button>
            ))}
          </div>
          <button className="slider-btn" onClick={nextProject}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>

      <div className="other-projects">
        <h3></h3>
        <div className="project-cards">
          {otherProjects.map((project, index) => (
            <div className="project-card" key={index}>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, i) => (
                  <span className="tech-tag" key={i}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-card-links">
                <a href={project.github} className="card-link" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i> Code
                </a>
                <a href={project.demo} className="card-link" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-external-link-alt"></i> Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
