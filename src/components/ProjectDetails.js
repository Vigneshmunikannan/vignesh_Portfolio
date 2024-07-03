import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import ProjectData from './projectdata';

const ProjectDetails = () => {
    const { projectId } = useParams();
    const project = ProjectData.find((p) => p.id === parseInt(projectId));

    const [isFullscreen, setIsFullscreen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);

    const handleImageClick = (image) => {
        setCurrentImage(image);
        setIsFullscreen(true);
    };

    const closeFullscreen = () => {
        setIsFullscreen(false);
        setCurrentImage(null);
    };

    if (!project) {
        return (
            <div className="project-not-found">
                <h2>Project Not Found</h2>
                <p>It looks like the project you're looking for doesn't exist.</p>
                <div className="not-found-animation"></div>
                <Link to="/" className="return-button">Return to Home</Link>
            </div>
        );
    }

    return (
        <div className="project-details">
            <h2>{project.title}</h2>
            <div className="project-images">
                {project.images?.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Project ${index + 1}`}
                        onClick={() => handleImageClick(image)}
                    />
                ))}
            </div>

            {isFullscreen && (
                <div className="fullscreen-overlay">
                    <div className="fullscreen-content">
                        <FaTimes className="close-icon2" onClick={closeFullscreen} />
                        <img src={currentImage} alt="Fullscreen" />
                    </div>
                </div>
            )}

            <div className="project-details-content">
                <h3>Technology Stack</h3>
                <ul className="technologies">
                    {project.technologies.map((tech, idx) => (
                        <li key={idx}>{tech}</li>
                    ))}
                </ul>

                <div className="project-description">
                    <h3>Description</h3>
                    <ul>
                        {project.description.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>
                </div>

                <p><strong>Role:</strong> {project.role}</p>

                <div className="project-links">
                    {project.frontendCode && (
                        <a href={project.frontendCode} target="_blank" rel="noopener noreferrer">
                            Frontend Code
                        </a>
                    )}
                    {project.backendCode && (
                        <a href={project.backendCode} target="_blank" rel="noopener noreferrer">
                            Backend Code
                        </a>
                    )}
                    {project.demoLink && (
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                            Live Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
