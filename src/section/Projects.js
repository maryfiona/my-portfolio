
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('https://api.example.com/projects')
      .then(response => setProjects(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <React.Fragment>
      {projects.map((project, index) => (
        <div key={index}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p>Technologies: {project.technologies}</p>
          <img src={project.image} alt={project.title} />
          {project.demoLink && <a href={project.demoLink}>Demo</a>}
          {project.sourceCodeLink && <a href={project.sourceCodeLink}>Source Code</a>}
          {project.role && <p>Role: {project.role}</p>}
        </div>
      ))}
    </React.Fragment>
  );
}

export default Projects;
