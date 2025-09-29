import React from "react";
import "../styles/Projects.css";
const Projects = () => {
  const projects = [
    {
      id: 1,
      icon: "fas fa-briefcase",
      title: "Skill Bridge - Job Portal",
      description:
        "A comprehensive job portal connecting job seekers with employers. Features real-time chat using Socket.IO, resume upload with Cloudinary, job posting and application tracking, CV builder tool, and admin review dashboard.",
      tech: ["React.js", "Node.js", "MongoDB", "Socket.IO", "Cloudinary"],
      link: "#",
    },
    {
      id: 2,
      icon: "fas fa-hospital",
      title: "MediSyncX - Hospital Management",
      description:
        "A cloud-based hospital management system for all hospitals. Includes everything in a single platform like patient management, appointment booking, medical records, billing, pharmacy, laboratory, and reporting system.",
      tech: ["React.js", "Node.js", "MongoDB", "Express.js", "AWS"],
      link: "#",
    },
    {
      id: 3,
      icon: "fas fa-tools",
      title: "Servify - Service Platform",
      description:
        "A platform where users can request different services like plumbing, electrical work, cleaning, etc. Service providers can browse job postings and apply. Includes rating system, payment integration, and real-time tracking.",
      tech: ["React.js", "Node.js", "MongoDB", "Payment Gateway", "Maps API"],
      link: "#",
    },
    {
      id: 4,
      icon: "fas fa-chart-line",
      title: "Expecio - Expense Tracker",
      description:
        "A simple expense tracking web application where you can add your expenses monthly or daily and get detailed reports, charts, budget analysis, and financial insights to manage your finances better.",
      tech: ["React.js", "Node.js", "MongoDB", "Chart.js", "PDF Export"],
      link: "#",
    },
    {
      id: 5,
      icon: "fas fa-mobile-alt",
      title: "AuraPlay - Streaming App",
      description:
        "A streaming mobile application like Rave where users register and watch movies together with different persons by creating watch parties. Features real-time synchronization, chat, and social interactions.",
      tech: ["Flutter", "Dart", "Firebase", "WebRTC", "Video APIs"],
      link: "#",
    },
    {
      id: 6,
      icon: "fas fa-globe",
      title: "Portfolio Website",
      description:
        "A responsive portfolio website built with modern web technologies, featuring smooth animations, contact forms, project showcases, and optimal performance across all devices with MERN stack integration.",
      tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="section">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <i className={project.icon}></i>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.link} className="btn">
                <span>View Project</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;