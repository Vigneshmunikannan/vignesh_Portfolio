import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { FaExternalLinkAlt } from 'react-icons/fa';
import ProjectData from "./projectdata"
const Projects = () => {
  const navigate = useNavigate();
  const handlenavigate=(project)=>{
    navigate(`/project/${project.id}`, {
      replace: false,
    });
  }
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-cards" >
        {ProjectData.map((project) => (
          <div className="project-card" key={project.id} onClick={()=>{
            handlenavigate(project)
          }}>
            <div className="project-info">
              <h3>{project.title}</h3>
              <img src={project.profile} alt={`${project.id} profile`}>
              </img>
              <ul className="technologies">
                  {project.technologies.map((tech, idx) => (
                    <li key={idx}>{tech}</li>
                  ))}
                </ul>
            </div>
            <div className="project-actions">
                <Link className="project-action" to={`/project/${project.id}`}>
                  <FaExternalLinkAlt /> Explore Project
                </Link>
              </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
