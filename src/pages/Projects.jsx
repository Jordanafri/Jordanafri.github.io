import React from 'react';
import './Projects.css'; // Import the project-specific CSS

const projectData = [
  {
    title: "Simple ToDo App",
    description: "A basic todo list application built with React, allowing users to add, delete, and mark tasks as complete. Utilized useState and useEffect hooks for state management and local storage persistence.",
    repoLink: "https://github.com/yourusername/todo-app",
    image: "todo-app-placeholder.png", // Replace with your image
    technologies: ["React", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Basic Calculator",
    description: "A command-line calculator application written in Python, capable of performing basic arithmetic operations. Implemented using object-oriented principles for clear operation handling.",
    repoLink: "https://github.com/yourusername/calculator",
    image: "calculator-placeholder.png", // Replace with your image
    technologies: ["Python"],
  },
  {
    title: "Personal Blog Website",
    description: "A statically generated blog website created with Next.js, featuring markdown support for content creation. Deployed on Vercel, it showcases my articles and tech insights.",
    repoLink: "https://github.com/yourusername/personal-blog",
    image: "blog-placeholder.png",//replace with your image
    technologies: ["Next.js", "React", "Markdown", "Vercel"],
  },

  // Add more projects here
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>Projects Page</h1>
      <p>Here are some of the projects I've worked on:</p>
      <ul className="projects-list">
        {projectData.map((project, index) => (
          <li key={index} className="project-item">
            <div className="project-details">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-badge">{tech}</span>
                ))}
              </div>
              <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="repo-link">
                GitHub Repository
              </a>
            </div>
            <div className="project-image">
              <img src={project.image} alt={`${project.title} Screenshot`} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;