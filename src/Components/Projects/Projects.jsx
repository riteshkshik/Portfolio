import React, { useEffect, useState } from "react";
import "./Projects.css";
import theme_pattern from "../../assets/theme_pattern.svg";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchGitHubProjects = async () => {
      const username = "riteshkshik";
      const response = await fetch(
        `https://api.github.com/users/${username}/repos`
      );
      const repositories = await response.json();
      setProjects(repositories);
    };

    fetchGitHubProjects();
  }, []);

  return (
    <div id="projects" className="open-source-projects">
      <div className="open-source-projects-title">
        <h1>Open Source Projects</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="projects-container">
        {projects.map((repo) => (
          <div key={repo.id} className="project-card">
            <div className="project-card-top">
              <h3>{repo.name}</h3>
              <p>{repo.description || "No description available."}</p>
            </div>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
