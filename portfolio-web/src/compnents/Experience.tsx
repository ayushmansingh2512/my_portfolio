import React, { useState, useEffect } from 'react';
import PageTransition from './PageTransition';
import CaseStudyView from './CaseStudyView';

export interface CaseStudyData {
  overview: string;
  keyFeatures: string[];
  architecture: string;
  impact: string;
}

export interface Project {
  projectId: number;
  projectName: string;
  badge: string;
  projectImgLink: string;
  projectDescription: string;
  projectLinkGithub: string;
  projectLinkLive: string;
  projectTech: string[];
  caseStudy?: CaseStudyData;
}

const defaultProjects: Project[] = [
  {
    projectId: 1,
    projectName: "Parakh AI — Mock Interview Platform",
    badge: "INTERVIEW SIM",
    projectImgLink: "https://ik.imagekit.io/nzqflh6xv/portfolio/Gemini_Generated_Image_4rwks14rwks14rwk.png?updatedAt=1778336040306",
    projectDescription: "Adaptive behavioral & technical AI mock interview platform with real-time performance analytics, speech-to-text evaluation, and resume skill-gap parsing.",
    projectLinkGithub: "https://github.com/ayushmansingh2512/AI_intervewer",
    projectLinkLive: "https://noodle-lab-parakh-ai.vercel.app/",
    projectTech: ["Python", "FastAPI", "Gemini API", "Whisper STT"],
    caseStudy: {
      overview: "Parakh AI simulates high-fidelity behavioral and technical interviews with real-time cognitive evaluation and automated feedback loops.",
      keyFeatures: [
        "Real-time speech-to-text and adaptive difficulty calibration",
        "Resume parser extracting skill gaps to generate personalized roadmaps",
        "Top 5% globally in Google Developer Groups (GDG) Devpost Challenge"
      ],
      architecture: "Python FastAPI backend connected to Google Gemini API for cognitive analysis and Whisper STT for voice processing.",
      impact: "Empowers job seekers to practice interviews with instant performance feedback."
    }
  },
  {
    projectId: 2,
    projectName: "Brain AI — Multi-Agent Assembly Line",
    badge: "AI SWARM",
    projectImgLink: "https://ik.imagekit.io/nzqflh6xv/portfolio/image.png?updatedAt=1778333890878",
    projectDescription: "High-concurrency Java 17+ multi-agent software assembly line orchestrating specialized developer personas (Architect, Coder, Tester, DevOps) with self-healing repair loops.",
    projectLinkGithub: "https://github.com/ayushmansingh2512/Brain-AI/",
    projectLinkLive: "",
    projectTech: ["Java 17+", "Spring Boot", "Gemini 2.5", "DeepSeek / Llama"],
    caseStudy: {
      overview: "Brain AI is a polyglot developer swarm built in Java 17+ that autonomously executes full-cycle software development.",
      keyFeatures: [
        "28-agent swarm handling database design, code generation, and deployment",
        "Self-repair architecture intercepting build telemetry (up to 10 automated resolution passes)",
        "Deep Academic Research Swarm pipeline generating publication-ready technical papers"
      ],
      architecture: "Thread-safe Java multi-threading engine with APIKeyManager pool rotation and local/cloud hybrid inference.",
      impact: "Automates end-to-end SDLC workflows with human-in-the-loop oversight."
    }
  },
  {
    projectId: 3,
    projectName: "Universal AI Copilot — Knowledge Agent",
    badge: "AI WIDGET",
    projectImgLink: "https://ik.imagekit.io/nzqflh6xv/portfolio/copilot.png",
    projectDescription: "Lightweight 2-line embeddable resume-aware AI assistant widget with autonomous RAG context mapping and prompt isolation.",
    projectLinkGithub: "",
    projectLinkLive: "https://universal-copilot.onrender.com/admin",
    projectTech: ["HTML5", "Vanilla CSS", "HTMX", "Go", "Gemini SDK"],
    caseStudy: {
      overview: "Universal Copilot provides multi-tenant AI assistance via lightweight embeddable widgets with zero client framework overhead.",
      keyFeatures: [
        "2-line HTMX widget embed for website owners",
        "Autonomous RAG engine providing precise contextualization across indexed documents",
        "Ichiban Dark aesthetic chat interface with prompt isolation"
      ],
      architecture: "Go / Spring Boot microservices backed by SQLite document store and zero-overhead client rendering.",
      impact: "Seamlessly integrates context-aware AI chat into external portfolio sites."
    }
  },
  {
    projectId: 4,
    projectName: "KIET LinkedIn Navigator — AI Copywriter",
    badge: "COPYWRITER",
    projectImgLink: "https://ik.imagekit.io/nzqflh6xv/portfolio/linkedInNav.png",
    projectDescription: "AI copywriter & prompt generation suite for recruiting outreach, headline optimization, and OpenCV background photo compositing.",
    projectLinkGithub: "",
    projectLinkLive: "https://linkedinnav.vercel.app/",
    projectTech: ["Spring Boot", "Spring AI", "Gemini SDK", "OpenCV"],
    caseStudy: {
      overview: "KIET LinkedIn Navigator automates professional recruitment copywriting, headline scoring, and visual asset generation.",
      keyFeatures: [
        "Automated outreach message generation tailored for target candidate profiles",
        "Headline optimization engine powered by Gemini AI",
        "OpenCV integration for automated profile photo compositing"
      ],
      architecture: "Spring Boot microservice utilizing Spring AI abstractions and Gemini SDK for text & image orchestration.",
      impact: "Accelerates recruitment workflows and profile branding."
    }
  }
];

interface ExperienceProps {
  onSelectProject?: (project: Project) => void;
}

const Experience: React.FC<ExperienceProps> = ({ onSelectProject }) => {
  const [projects, setProjects] = useState<Project[]>(defaultProjects);
  const [localSelectedProject, setLocalSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const apiBase = import.meta.env.VITE_API_URL || "http://localhost:8080";

    fetch(`${apiBase}/api/projects`)
      .then((response) => response.json())
      .then((data: Project[]) => {
        if (data && data.length > 0) {
          const updated = defaultProjects.map((def) => {
            const apiMatch = data.find(p => p.projectId === def.projectId || p.projectName.toLowerCase().includes(def.projectName.toLowerCase().split(' ')[0]));
            if (apiMatch) {
              return {
                ...def,
                projectLinkGithub: apiMatch.projectLinkGithub || def.projectLinkGithub,
                projectLinkLive: apiMatch.projectLinkLive !== undefined ? apiMatch.projectLinkLive : def.projectLinkLive
              };
            }
            return def;
          });
          setProjects(updated);
        }
      })
      .catch((error) => {
        console.log("Using static resume project fallback data", error);
      });
  }, []);

  const handleCardClick = (project: Project) => {
    if (onSelectProject) {
      onSelectProject(project);
    } else {
      setLocalSelectedProject(project);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCloseCaseStudy = () => {
    setLocalSelectedProject(null);
  };

  return (
    <section className="experience-section">
      <PageTransition triggerKey={localSelectedProject ? `case-study-${localSelectedProject.projectId}` : 'projects-grid'}>
        {localSelectedProject ? (
          <CaseStudyView project={localSelectedProject} onClose={handleCloseCaseStudy} />
        ) : (
          <>
            <h3 className="section-label">Selected Projects</h3>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.88rem',
              color: 'var(--ink-light)',
              marginBottom: '1.4rem',
              marginTop: '-1rem'
            }}>
              Click any card to trigger transition animation & open its case study.
            </p>

            <div className="proj-grid">
              {projects.map((project) => (
                <div 
                  className="proj-card" 
                  key={project.projectId}
                  onClick={() => handleCardClick(project)}
                >
                  <div className="proj-img-wrapper">
                    <span className="proj-badge">{project.badge}</span>
                    <div className="proj-img-overlay"></div>
                    <img 
                      src={project.projectImgLink} 
                      alt={project.projectName} 
                      className="proj-img" 
                    />
                  </div>

                  <div className="proj-body">
                    <div className="proj-header">
                      <p className="proj-name">{project.projectName}</p>
                      <span className="proj-arrow">↗</span>
                    </div>
                    
                    <p className="proj-desc">{project.projectDescription}</p>

                    <div className="proj-tech">
                      {project.projectTech && project.projectTech.map((techItem: string, index: number) => (
                        <span key={index}>{techItem}</span>
                      ))}
                    </div>

                    <div className="proj-footer">
                      <span className="proj-case-cta">
                        Case Study →
                      </span>

                      <div className="proj-links" onClick={(e) => e.stopPropagation()}>
                        {project.projectLinkGithub && (
                          <a href={project.projectLinkGithub} target="_blank" rel="noreferrer">
                            <svg viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                            GitHub
                          </a>
                        )}
                        {project.projectLinkLive && (
                          <a href={project.projectLinkLive} target="_blank" rel="noreferrer">
                            <svg viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                            Live
                          </a>
                        )}
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </PageTransition>
    </section>
  );
};

export default Experience;
