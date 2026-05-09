import React, { useState, useEffect } from 'react';

interface Project {
  projectId: number;
  projectName: string;
  projectImgLink: string;
  projectDescription: string;
  projectLinkGithub: string;
  projectLinkLive: string;
  projectTech: string[];
}

const  Experience: React.FC = () => {
	const [projects , setProject] = useState<Project[]>([]);

  useEffect(() => {
    const apiBase = import.meta.env.VITE_API_URL || "http://localhost:8080";

    fetch(`${apiBase}/api/projects`)
      .then((response) => response.json())
      .then((data: Project[]) => setProject([...data].sort((a, b) => b.projectId - a.projectId)))
      .catch((error) => console.error("database connection error" , error));
  },[]);


	return (
		<section className="experience-section">
    <h3 className="section-label">Experience</h3>

      <div className="proj-grid">
        {projects.map((project) => (
          <div className="proj-card" key={project.projectId}>

            {/* Image Handling: Shows the image if a valid link exists, otherwise shows your SVG placeholder */}
            <div className="proj-img-placeholder">
              {project.projectImgLink && project.projectImgLink.startsWith("http") ? (
                <img src={project.projectImgLink} alt={project.projectName} className="proj-img" />
              ) : (
                <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
              )}
            </div>

            <div className="proj-body">
              <p className="proj-name">{project.projectName}</p>
              <p className="proj-desc">{project.projectDescription}</p>

              {/* Nested Map for the Tech Stack Array! */}
              <div className="proj-tech">
                {project.projectTech && project.projectTech.map((techItem:string , index: number) => (
                  <span key={index}>{techItem}</span>
                ))}
              </div>

              <div className="proj-links">
                <a href={project.projectLinkGithub} target="_blank" rel="noreferrer">
                  <svg viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                  GitHub
                </a>
                <a href={project.projectLinkLive} target="_blank" rel="noreferrer">
                  <svg viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  Live
                </a>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
	);
};

export default Experience;


