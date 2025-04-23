import React, { useState } from 'react';
import './Projects.css';

const projectData = [
    {
        title: "Ecclesia Art E-Commerce",
        shortDescription: "Full-featured art marketplace with payment processing",
        longDescription: "Built a secure e-commerce platform handling 100+ products with user roles, shopping cart, and PayPal integration. Implemented:",
        features: [
            "Admin dashboard for product management",
            "Role-based authentication system",
            "Responsive design with Bootstrap",
            "SQL Server database with EF Core"
        ],
        repoLink: "https://github.com/Jordanafri/paypal.git",
        images: ["/EccMVC/EccHome.png", "/EccMVC/EccLog.png", "/EccMVC/EccProdDetails.png", "/EccMVC/EccCart.png", "/EccMVC/EccOrder.png", "/EccMVC/EccAdmin.png"],
        technologies: [
            {name: ".NET Core", level: "advanced"},
            {name: "C#", level: "intermediate"},
            {name: "SQL Server", level: "intermediate"},
            {name: "PayPal API", level: "beginner"}
        ],
        impact: "Enabled artist clients to sell work online with secure transactions"
    },
    {
        title: "Ecclesia Art (React/Firebase)",
        shortDescription: "React version with Firebase backend (In Development)",
        longDescription: "Rebuilding the e-commerce platform with React frontend and Firebase backend. Planned features:",
        features: [
            "Firestore database integration",
            "React context for state management",
            "Firebase authentication",
            "Cloud functions for payments"
        ],
        repoLink: "#",
        images: ["/EccReactFireBase/GeminiEcclesia.jpg"],
        technologies: [
            {name: "React", level: "intermediate"},
            {name: "Firebase", level: "beginner"},
            {name: "JavaScript", level: "intermediate"}
        ],
        impact: "Modernizing platform with serverless architecture",
        status: "wip"
    },
    {
        title: "Birthday Reminder App",
        shortDescription: "Android app for tracking birthdays and gift ideas",
        longDescription: "Upcoming native Android app to track contacts' birthdays and gift preferences. Planned features:",
        features: [
            "Local storage of contact info",
            "Birthday notifications",
            "Digital card creation",
            "Gift idea tracking"
        ],
        repoLink: "#",
        images: ["/GeminiBirthday.jpg"],
        technologies: [
            {name: "Android Studio", level: "beginner"},
            {name: "Java", level: "beginner"},
            {name: "SQLite", level: "beginner"}
        ],
        impact: "Helping users remember important dates and gift preferences",
        status: "planned"
    }
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
            <div className="projects-grid">
                {projectData.map((project, index) => (
                    <div key={index} className="project-card" data-status={project.status || "completed"}>
                        <div className="card-header">
                            <h2>{project.title}</h2>
                            <p className="short-desc">{project.shortDescription}</p>
                        </div>
                        
                        <div className="card-image">
                            <img 
                                src={project.images[0]} 
                                alt={getImageAltText(project.images[0])}
                                onClick={() => handleImageClick(project)}
                            />
                        </div>

                        <div className="card-body">
                            <h3>Key Features:</h3>
                            <ul className="feature-list">
                                {project.features.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>

                            <h3>Technologies:</h3>
                            <div className="tech-container">
                                {project.technologies.map((tech, i) => (
                                    <span key={i} className={`tech-badge ${tech.level}`}>
                                        {tech.name}
                                    </span>
                                ))}
                            </div>

                            <p className="impact">{project.impact}</p>
                        </div>

                        <div className="card-footer">
                            <a href={project.repoLink} className="repo-link">
                                View Code
                            </a>
                        </div>
                    </div>
                ))}
            </div>

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
