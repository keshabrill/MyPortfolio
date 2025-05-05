import "./Experiences.css"

const Experiences = () => {
  const experiences = [
    {
      title: "Capstone Project",
      description:
        "Led the development of ViaJe, an automated notification mobile app for commuters. Managed project timelines, conducted testing, and prepared comprehensive documentation.",
      icon: "fas fa-code",
      date: "2023",
      skills: ["Project Management", "Mobile Development", "Documentation", "Testing"],
    },
    {
      title: "Software Engineering Project",
      description:
        "Developed Lines Hub, an online sales and inventory system. Coordinated team efforts, implemented testing protocols, and created detailed documentation for the system.",
      icon: "fas fa-briefcase",
      date: "2022",
      skills: ["Software Development", "Database Design", "UI/UX", "Testing"],
    },
    {
      title: "Team Collaboration",
      description:
        "Worked with diverse teams on multiple projects, developing strong communication and leadership skills. Learned to effectively delegate tasks and manage project resources.",
      icon: "fas fa-users",
      date: "2021-Present",
      skills: ["Team Leadership", "Communication", "Problem Solving", "Time Management"],
    },
  ]

  const learnings = [
    {
      title: "Project Management",
      description:
        "Developed skills in planning, organizing, and managing resources to successfully complete project goals and objectives.",
    },
    {
      title: "Team Collaboration",
      description:
        "Learned to work effectively in diverse teams, communicate clearly, and leverage each member's strengths.",
    },
    {
      title: "Technical Documentation",
      description:
        "Gained experience in creating comprehensive documentation that effectively communicates technical concepts.",
    },
  ]

  return (
    <div className="container">
      <h2>Experiences</h2>

      <div className="experiences-list">
        {experiences.map((experience, index) => (
          <div className="experience-card" key={index}>
            <div className="experience-icon">
              <i className={experience.icon}></i>
            </div>
            <div className="experience-content">
              <div className="experience-header">
                <h3>{experience.title}</h3>
                <div className="experience-date">
                  <i className="far fa-calendar-alt"></i>
                  <span>{experience.date}</span>
                </div>
              </div>
              <p className="experience-description">{experience.description}</p>
              <div className="experience-skills">
                {experience.skills.map((skill, i) => (
                  <span className="skill-tag" key={i}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="key-learnings">
        <h3>Key Learnings</h3>
        <div className="learnings-grid">
          {learnings.map((learning, index) => (
            <div className="learning-card" key={index}>
              <h4>{learning.title}</h4>
              <p>{learning.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experiences
