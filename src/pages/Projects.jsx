import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCodeBranch, FaServer, FaDatabase, FaReact, FaFire } from 'react-icons/fa';
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
        repoLink: "https://github.com/ElishaRaJa/EcclesiaArts-Backup-",
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
        title: "Anchored in Christ (Client Work)",
        shortDescription: "Static React e-commerce site for Christian merchandise startup (In Development)",
        longDescription: "Developed a marketing website for a Christian merchandise business with React and React Router. Future plans include Firebase integration and payment processing.",
        status: "wip",
        features: [
            "React-based static website",
            "React Router for navigation",
            "Product showcase sections",
            "Mission/vision presentation",
            "Planned: Firebase integration",
            "Planned: Online payment system"
        ],
        repoLink: "https://github.com/anchoredinchristpmb/anchoredinchristpmb",
        liveLink: "https://anchoredinchristpmb.github.io/anchoredinchristpmb/",
        images: [
            "/AnchoredinChrist/Home(LandingPage).png",
            "/AnchoredinChrist/ProductsPage.png",
            "/AnchoredinChrist/Vision&Mission.png",
            "/AnchoredinChrist/Footer.png"
        ],
        technologies: [
            {name: "React", level: "intermediate"},
            {name: "React Router", level: "intermediate"},
            {name: "GitHub Pages", level: "intermediate"}
        ],
        impact: "Helping a startup business establish online presence with zero hosting costs",
        clientInfo: {
            name: "Anchored in Christ",
            mission: "To glorify Jesus Christ through Christian merchandise and personalized faith-based gifts",
            vision: "To be a nationally recognized retail presence spreading the Gospel"
        },
        isClientWork: true
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
            <h1>Projects & Client Work</h1>
            <p>Here are some of my personal projects and client work:</p>
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
                                        {tech.name === 'React' && <FaReact />}
                                        {tech.name === 'Firebase' && <FaFire />}
                                        {tech.name === '.NET Core' && <FaServer />}
                                        {tech.name === 'SQL Server' && <FaDatabase />}
                                        {tech.name === 'C#' && <FaCodeBranch />}
                                        {tech.name}
                                    </span>
                                ))}
                            </div>

                            <p className="impact">{project.impact}</p>
                        </div>

                        <div className="card-footer">
                            {project.isClientWork ? (
                                <>
                                    <a href={project.repoLink} className="repo-link" target="_blank" rel="noreferrer">
                                        <FaGithub /> View Code
                                    </a>
                                    <a href={project.liveLink} className="repo-link" target="_blank" rel="noreferrer">
                                        <FaExternalLinkAlt /> View Live
                                    </a>
                                </>
                            ) : (
                                <a href={project.repoLink} className="repo-link" target="_blank" rel="noreferrer">
                                    View Code
                                </a>
                            )}
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
