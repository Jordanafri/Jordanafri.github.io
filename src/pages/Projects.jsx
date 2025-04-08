import React, { useState } from 'react';
import './Projects.css';

const projectData = [
    {
        title: "Ecclesia Art Website - MVC .NET Core",
        description: "An MVC .NET Core web application for an art e-commerce platform, featuring a robust relational database (SQL Server) with a product model and category foreign keys. Implements a repository pattern for data access and a class library structure for separation of concerns. Includes Microsoft Identity scaffolding for user authentication and authorization, supporting admin, customer, and employee roles. Key features include a shopping cart, admin dashboard, and PayPal payment gateway integration. Utilizes various NuGet packages for enhanced functionality and Bootstrap for responsive design.",
        repoLink: "https://github.com/Jordanafri/paypal.git",
        images: ["/EccMVC/EccHome.png", "/EccMVC/EccLog.png", "/EccMVC/EccProdDetails.png", "/EccMVC/EccCart.png", "/EccMVC/EccOrder.png", "/EccMVC/EccAdmin.png"],
        technologies: [".NET Core MVC", "C#", "SQL Server", "Entity Framework Core", "ASP.NET Identity", "PayPal API", "Bootstrap", "HTML", "CSS", "JavaScript"],
    },
    // ... other projects
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [projectImageIndex, setProjectImageIndex] = useState(0);

    const handleImageClick = (project) => {
        setSelectedProject(project);
        setSelectedImageIndex(0);
    };

    const closeImageModal = () => {
        setSelectedProject(null);
    };

    const nextImage = () => {
        if (selectedProject && selectedProject.images) {
            setSelectedImageIndex((prevIndex) => (prevIndex + 1) % selectedProject.images.length);
        }
    };

    const prevImage = () => {
        if (selectedProject && selectedProject.images) {
            setSelectedImageIndex((prevIndex) =>
                prevIndex === 0 ? selectedProject.images.length - 1 : prevIndex - 1
            );
        }
    };

    const nextProjectImage = (project) => {
        setProjectImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
    };

    const prevProjectImage = (project) => {
        setProjectImageIndex((prevIndex) =>
            prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
        );
    };

    const getImageAltText = (imagePath) => {
        // Here you can implement logic to generate alt text based on the image path.
        // For simplicity, we'll use the filename without the path.
        const filename = imagePath.split('/').pop();
        return filename;
    };

    return (
        <div className="projects-container">
            <h1>Projects Page</h1>
            <p>Here are some of the projects I've worked on:</p>
            <ul className="projects-list">
                {projectData.map((project, index) => (
                    <li key={index} className="project-item">
                        <div className="project-image">
                            <button className="project-nav prev" onClick={() => prevProjectImage(project)}>&#10094;</button>
                            <img
                                src={project.images[projectImageIndex]}
                                alt={getImageAltText(project.images[projectImageIndex])} // Use filename as alt.
                                className="carousel-image"
                                onClick={() => handleImageClick(project)}
                            />
                            <button className="project-nav next" onClick={() => nextProjectImage(project)}>&#10095;</button>
                        </div>
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
                    </li>
                ))}
            </ul>

            {selectedProject && (
                <div className="image-modal" onClick={closeImageModal}>
                    <button className="modal-nav prev" onClick={(e) => { e.stopPropagation(); prevImage(); }}>&#10094;</button>
                    <img
                        src={selectedProject.images[selectedImageIndex]}
                        alt={getImageAltText(selectedProject.images[selectedImageIndex])} // use filename as alt.
                        className="modal-image"
                    />
                    <button className="modal-nav next" onClick={(e) => { e.stopPropagation(); nextImage(); }}>&#10095;</button>
                </div>
            )}
        </div>
    );
};

export default Projects;