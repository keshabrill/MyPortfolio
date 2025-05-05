"use client"

import { useState, useEffect } from "react"
import "./Skills.css"

const Skills = () => {
  const [animateSkills, setAnimateSkills] = useState(false)

  const skills = [
    { name: "HTML", percentage: 90, icon: "fab fa-html5" },
    { name: "CSS", percentage: 85, icon: "fab fa-css3-alt" },
    { name: "PHP", percentage: 75, icon: "fab fa-php" },
    { name: "ReactJS", percentage: 80, icon: "fab fa-react" },
    { name: "GitHub", percentage: 85, icon: "fab fa-github" },
  ]

  const technicalProficiencies = [
    {
      title: "Front-end Development",
      description: "Proficient in creating responsive and interactive user interfaces using modern web technologies.",
    },
    {
      title: "UI/UX Design",
      description: "Skilled in creating user-centered designs that balance aesthetics with functionality.",
    },
    {
      title: "Version Control",
      description: "Experienced with Git and GitHub for collaborative development and project management.",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateSkills(true)
        }
      },
      { threshold: 0.1 },
    )

    const skillsSection = document.querySelector(".skills-section")
    if (skillsSection) {
      observer.observe(skillsSection)
    }

    return () => {
      if (skillsSection) {
        observer.unobserve(skillsSection)
      }
    }
  }, [])

  return (
    <div className="container">
      <h2>Skills</h2>

      <div className="skills-content">
        <div className="skills-list">
          <div className="skills-column">
            {skills.slice(0, 3).map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="skill-info">
                  <div className="skill-name">
                    <i className={skill.icon}></i>
                    <span>{skill.name}</span>
                  </div>
                  <div className="skill-percentage">{skill.percentage}%</div>
                </div>
                <div className="skill-progress">
                  <div
                    className="skill-progress-bar"
                    style={{ width: animateSkills ? `${skill.percentage}%` : "0%" }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="skills-column">
            {skills.slice(3).map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="skill-info">
                  <div className="skill-name">
                    <i className={skill.icon}></i>
                    <span>{skill.name}</span>
                  </div>
                  <div className="skill-percentage">{skill.percentage}%</div>
                </div>
                <div className="skill-progress">
                  <div
                    className="skill-progress-bar"
                    style={{ width: animateSkills ? `${skill.percentage}%` : "0%" }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="technical-proficiency">
          <h3>Technical Proficiency</h3>
          <div className="proficiency-cards">
            {technicalProficiencies.map((proficiency, index) => (
              <div className="proficiency-card" key={index}>
                <h4>{proficiency.title}</h4>
                <p>{proficiency.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
