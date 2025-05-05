"use client"

import { useState } from "react"
import "./Achievements.css"

const Achievements = () => {
  const achievements = [
    {
      title: "Civil Service Exam Passer",
      description: "Professional Level (2023)",
      icon: "fas fa-award",
    },
    {
      title: "LinkedIn Certification",
      description: "Web Development Fundamentals",
      icon: "fas fa-certificate",
    },
    {
      title: "Simplilearn Certification",
      description: "UI/UX Design Essentials",
      icon: "fas fa-certificate",
    },
  ]

  const milestones = [
    {
      title: "Project Leadership",
      period: "2022-2023",
      description:
        "Successfully led multiple academic projects, developing strong team management and coordination skills.",
    },
    {
      title: "Skills Development",
      period: "2020-Present",
      description:
        "Continuously expanding technical knowledge through self-learning, online courses, and practical application in projects.",
    },
    {
      title: "Venom Publication",
      period: "2023-2025",
      items: [
        "Layour Designer Department (2023-2024)",
        "Finance Head (2024-2025)",
      ],
    },
  ]

  const stats = [
    { value: "4+", label: "Projects Completed" },
    { value: "5+", label: "Certifications" },
    { value: "500+", label: "Hours of Coding" },
    { value: "5+", label: "Technologies Learned" },
  ]

  const [showCertificates, setShowCertificates] = useState(null)

  const toggleCertificates = (type) => {
    setShowCertificates(showCertificates === type ? null : type)
  }

  return (
    <div className="container">
      <h2>Achievements</h2>

      <div className="achievements-content">
        <div className="certifications">
          <h3>Certifications & Awards</h3>
          <div className="timeline">
            {achievements.map((achievement, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-icon">
                  <i className={achievement.icon}></i>
                </div>
                <div className="timeline-content">
                  <h4>{achievement.title}</h4>
                  <p>{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="certificate-buttons">
            <button className="btn btn-outline" onClick={() => toggleCertificates("linkedin")}>
              View LinkedIn Certificates
            </button>
            <button className="btn btn-outline" onClick={() => toggleCertificates("simplilearn")}>
              View Simplilearn Certificates
            </button>
          </div>

          {showCertificates && (
            <div className="certificates-modal">
              <div className="certificates-content">
                <div className="certificates-header">
                  <h3>{showCertificates === "linkedin" ? "LinkedIn Certificates" : "Simplilearn Certificates"}</h3>
                  <button className="close-btn" onClick={() => setShowCertificates(null)}>
                    <i className="fas fa-times"></i>
                  </button>
                </div>
                <div className="certificates-body">
                  <table className="certificates-table">
                    <thead>
                      <tr>
                        <th>Certificate Title</th>
                        <th>Issue Date</th>
                        <th>Total Hours</th>
                      </tr>
                    </thead>
                    <tbody>
                      {showCertificates === "linkedin" ? (
                        <>
                          <tr>
                            <td>Web Development Fundamentals</td>
                            <td>January 15, 2023</td>
                            <td>8 hours</td>
                          </tr>
                          <tr>
                            <td>JavaScript Essential Training</td>
                            <td>March 22, 2023</td>
                            <td>6 hours</td>
                          </tr>
                          <tr>
                            <td>React.js: Building an Interface</td>
                            <td>May 10, 2023</td>
                            <td>5 hours</td>
                          </tr>
                        </>
                      ) : (
                        <>
                          <tr>
                            <td>UI/UX Design Essentials</td>
                            <td>February 5, 2023</td>
                            <td>12 hours</td>
                          </tr>
                          <tr>
                            <td>Responsive Web Design</td>
                            <td>April 18, 2023</td>
                            <td>10 hours</td>
                          </tr>
                        </>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="milestones">
          <h3>Milestones</h3>
          <div className="milestone-cards">
            {milestones.map((milestone, index) => (
              <div className="milestone-card" key={index}>
                <div className="milestone-header">
                  <h4>{milestone.title}</h4>
                  <span className="milestone-period">{milestone.period}</span>
                </div>
                {milestone.description ? (
                  <p>{milestone.description}</p>
                ) : (
                  <ul className="milestone-list">
                    {milestone.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="achievement-stats">
        {stats.map((stat, index) => (
          <div className="stat-item" key={index}>
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Achievements
