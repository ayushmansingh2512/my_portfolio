import React, { useState } from 'react';
import type { Project } from './Experience';

interface CaseStudyViewProps {
  project: Project;
  onClose: () => void;
}

const brainScreenshots = [
  {
    url: "https://ik.imagekit.io/nzqflh6xv/portfolio/Brain/reasearchmode.png",
    title: "Academic Research Mode",
    desc: "Multi-agent paper synthesis pipeline with LaTeX math rendering and Swiss PDF compilation."
  },
  {
    url: "https://ik.imagekit.io/nzqflh6xv/portfolio/Brain/gemini%20coding%20mode",
    title: "Gemini Coding Mode",
    desc: "JavaFX Isometric Dark UI executing multi-agent software assembly line with real-time log streaming."
  },
  {
    url: "https://ik.imagekit.io/nzqflh6xv/portfolio/Brain/localModel.png",
    title: "Local Model Mode (Ollama)",
    desc: "100% air-gapped local SLM execution (llama3, mistral, codellama) via HTTP daemon."
  },
  {
    url: "https://ik.imagekit.io/nzqflh6xv/portfolio/Brain/reactInk.png",
    title: "React / Ink Terminal CLI (brain-cli)",
    desc: "Interactive CLI interface with mascot banners, live timers, and single-select menus."
  }
];

const linkinScreenshots = [
  {
    url: "https://ik.imagekit.io/nzqflh6xv/portfolio/LinkedIn%20AI/photoEditor.png",
    title: "Professional PFP Studio",
    desc: "Neural background removal via U²-Net with 60 FPS interactive HTML5 canvas repositioning."
  },
  {
    url: "https://ik.imagekit.io/nzqflh6xv/portfolio/LinkedIn%20AI/HeadlineGenrater.png",
    title: "AI Branding Copywriter",
    desc: "Role-tailored headline suite generating Classic, Value-Driven, and Achiever styles under strict character bounds."
  },
  {
    url: "https://ik.imagekit.io/nzqflh6xv/portfolio/LinkedIn%20AI/ProjectSummery.png",
    title: "Project Summarizer & Resume Auditor",
    desc: "Apache PDFBox resume text extraction and project bullet-point optimization under 450 characters."
  }
];

export const CaseStudyView: React.FC<CaseStudyViewProps> = ({ project, onClose }) => {
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  
  const isBrainAi = project.projectName.toLowerCase().includes("brain");
  const isLinkinAi = project.projectName.toLowerCase().includes("linkedin") || project.projectName.toLowerCase().includes("linkin");
  const isParakhAi = project.projectName.toLowerCase().includes("parakh") || project.projectName.toLowerCase().includes("interview");
  const isCopilotAi = project.projectName.toLowerCase().includes("copilot") || project.projectName.toLowerCase().includes("universal") || project.projectName.toLowerCase().includes("uvico");

  const activeBrainScreenshots = [
    {
      url: project.projectImgLink || "https://ik.imagekit.io/nzqflh6xv/portfolio/image.png?updatedAt=1778333890878",
      title: "Hero Cover Banner — Main Overview",
      desc: "Brain AI Desktop GUI running in Isometric Dark mode alongside terminal UI."
    },
    ...brainScreenshots
  ];

  const activeLinkinScreenshots = [
    {
      url: project.projectImgLink || "https://ik.imagekit.io/nzqflh6xv/portfolio/linkedInNav.png",
      title: "Hero Cover Banner — Main Overview",
      desc: "LinkinAI Branding Suite & Resume Auditor Platform Cover."
    },
    ...linkinScreenshots
  ];

  return (
    <div className="case-study-wrapper" style={{ 
      maxWidth: '880px', 
      margin: '0 auto', 
      paddingTop: '2rem', 
      paddingBottom: '5rem' 
    }}>
      {/* Top Bar with Back Button */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <button 
          onClick={onClose}
          className="back-btn"
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--rule)',
            color: 'var(--ink)',
            padding: '0.6rem 1.3rem',
            borderRadius: '8px',
            cursor: 'pointer',
            fontFamily: 'var(--font-heading)',
            fontSize: '0.88rem',
            letterSpacing: '0.06em',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'all 0.25s ease'
          }}
        >
          <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" fill="none" strokeWidth="2.2">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Projects
        </button>

        <span style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '0.78rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--accent)',
          background: 'var(--chip-bg)',
          padding: '0.35rem 0.8rem',
          borderRadius: '20px',
          border: '1px solid var(--rule)'
        }}>
          {project.badge || "TECHNICAL CASE STUDY"}
        </span>
      </div>

      {/* Main Header Card */}
      <div className="case-study-hero" style={{
        border: '1px solid var(--rule)',
        borderRadius: '16px',
        overflow: 'hidden',
        background: 'var(--bg-card)',
        marginBottom: '2.5rem'
      }}>
        <div style={{ padding: '2rem 2.2rem' }}>
          <h1 style={{ 
            fontFamily: 'var(--font-heading)', 
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', 
            fontWeight: 700,
            marginBottom: '0.6rem',
            color: 'var(--ink)',
            lineHeight: 1.2
          }}>
            {project.projectName}
          </h1>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.08rem',
            lineHeight: 1.7,
            color: 'var(--accent)',
            marginBottom: '1.2rem',
            fontWeight: 500
          }}>
            {isCopilotAi
              ? "Universal AI Copilot (uvico) — Multi-Tenant Self-Serve AI Chatbot Engine"
              : isParakhAi 
              ? "Next-Gen Technical Interviewing & Automated Hiring Platform (AppInfoEdge / Noodle Lab)"
              : isBrainAi 
              ? "An Autonomous Multi-Agent Assembly Line & Academic Research Swarm"
              : isLinkinAi 
              ? "AI-Powered LinkedIn Branding Suite & Intelligent Resume Auditor"
              : project.projectDescription}
          </p>

          <div style={{ 
            display: 'flex', 
            gap: '1.5rem', 
            flexWrap: 'wrap',
            paddingTop: '1rem',
            borderTop: '1px solid var(--rule)',
            fontSize: '0.86rem',
            color: 'var(--ink-mid)'
          }}>
            <div><strong>Author & Creator:</strong> Ayushman Singh</div>
            <div><strong>Architecture:</strong> {
              isCopilotAi ? "Go (1.22+) + SQLite (WAL Mode) + HTMX + Gemini 2.5 + Docker" :
              isParakhAi ? "React 19 + Python FastAPI + PostgreSQL (Neon) + Gemini AI + OpenCV" :
              isLinkinAi ? "Spring Boot 3 + FastAPI PyTorch + React + Gemini AI" :
              "Multi-Agent Swarm, Desktop GUI & React/Ink CLI"
            }</div>
          </div>

          <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap', marginTop: '1.2rem' }}>
            {(isCopilotAi ? [
              "Go 1.22+", "SQLite (WAL Mode)", "Google Gemini 2.5", "AES-256 GCM", "HTMX", "Docker", "Render"
            ] : isParakhAi ? [
              "React 19", "FastAPI", "Google Gemini 2.5", "OpenCV", "WebSockets", "Neon PostgreSQL", "Tailwind CSS v4", "Brevo API"
            ] : isLinkinAi ? [
              "Spring Boot 3", "React 18", "FastAPI", "PyTorch (U²-Net)", "OpenCV 4.9", "Gemini 2.5 Flash", "Apache PDFBox", "ImageKit CDN"
            ] : isBrainAi ? [
              "Java 17", "JavaFX", "Embedded H2 DB", "Gemini 2.5 SDK", "React/Ink CLI", "Local Ollama LLMs", "Oracle 23ai Vector DB", "Python PDF Compiler"
            ] : project.projectTech).map((tech, idx) => (
              <span key={idx} style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.74rem',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: 'var(--ink-mid)',
                border: '1px solid var(--rule)',
                padding: '0.28rem 0.65rem',
                borderRadius: '6px',
                background: 'var(--chip-bg)'
              }}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* UNIVERSAL AI COPILOT DETAILED TECHNICAL CASE STUDY CONTENT */}
      {isCopilotAi ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          
          {/* Single Main Card Photo Display */}
          {project.projectImgLink && (
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--rule)',
              borderRadius: '16px',
              overflow: 'hidden',
              padding: '1.5rem'
            }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', color: 'var(--ink)', marginBottom: '1rem' }}>
                📷 Universal AI Copilot (uvico) Overview
              </h3>
              <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--rule)', background: '#0e0f11' }}>
                <img 
                  src={project.projectImgLink} 
                  alt={project.projectName}
                  style={{ width: '100%', maxHeight: '480px', objectFit: 'cover', display: 'block' }}
                />
              </div>
            </div>
          )}

          {/* Executive Summary */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--rule)',
            borderRadius: '16px',
            padding: '2rem'
          }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', color: 'var(--ink)', marginBottom: '0.8rem' }}>
              📌 Executive Summary & Resume Overview
            </h2>
            <p style={{ color: 'var(--ink-mid)', fontSize: '0.98rem', lineHeight: 1.8 }}>
              Universal AI Copilot (<code style={{ color: 'var(--accent)' }}>uvico</code>) is a lightweight, high-performance Micro-SaaS backend designed to allow developers, creators, and organizations to deploy context-aware, document-backed AI chatbots on any website with a single 2-line HTMX or iFrame snippet.
            </p>
            <p style={{ color: 'var(--ink-mid)', fontSize: '0.98rem', lineHeight: 1.8, marginTop: '0.8rem' }}>
              Designed and engineered from scratch to overcome traditional RAG complexity, high vector-database hosting costs, security risks (unencrypted API keys), and heavy frontend build requirements.
            </p>
          </div>

          {/* Key Technical Achievements */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--rule)',
            borderRadius: '16px',
            padding: '2rem'
          }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', color: 'var(--ink)', marginBottom: '1rem' }}>
              🎯 Key Technical Achievements
            </h2>
            <ul style={{ paddingLeft: '1.4rem', color: 'var(--ink-mid)', fontSize: '0.95rem', lineHeight: 1.85 }}>
              <li><strong>Multi-Tenant Micro-SaaS Architecture:</strong> Architected in Go and SQLite enabling instant AI chatbot deployment via a 2-line HTMX embed code (&lt;60s onboarding time).</li>
              <li><strong>Zero-Trust Security Model:</strong> AES-256 GCM encryption at rest for user-provided Gemini API keys and isolated tenant security PINs to prevent data tampering.</li>
              <li><strong>SQL-Driven RAG Pipeline:</strong> Native PDF/Markdown text extraction with keyword-indexed SQLite retrieval strategy (~500ms response latency).</li>
              <li><strong>Ultralight Memory Footprint:</strong> SQLite Write-Ahead Logging (WAL) mode and Go concurrency routines achieving an idle memory footprint of &lt;30 MB RAM.</li>
              <li><strong>Zero-Framework Luxury UI ("Ichiban Aesthetic"):</strong> Smooth CSS cubic-bezier expanding animations and HTMX dynamic DOM swapping without React or npm bundle overhead.</li>
            </ul>
          </div>

          {/* Technical Challenges & Solutions Table */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--rule)',
            borderRadius: '16px',
            padding: '2rem'
          }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', color: 'var(--ink)', marginBottom: '1rem' }}>
              🛠️ Engineering Challenges & Solved Matrix
            </h2>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', color: 'var(--ink-mid)' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--rule)', textAlign: 'left' }}>
                    <th style={{ padding: '0.75rem', fontFamily: 'var(--font-heading)', color: 'var(--ink)', width: '35%' }}>Engineering Challenge</th>
                    <th style={{ padding: '0.75rem', fontFamily: 'var(--font-heading)', color: 'var(--ink)' }}>How It Was Solved</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--rule)' }}>
                    <td style={{ padding: '0.75rem', fontWeight: '600', color: 'var(--accent)' }}>Cross-Tenant API Key Security</td>
                    <td style={{ padding: '0.75rem' }}>Implemented Go <code style={{ color: 'var(--accent)' }}>crypto/aes</code> GCM 256-bit encryption with dynamic nonces. Keys are encrypted at rest in SQLite and decrypted in-memory only during API requests.</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--rule)' }}>
                    <td style={{ padding: '0.75rem', fontWeight: '600', color: 'var(--accent)' }}>Fast & Low-Cost Context RAG</td>
                    <td style={{ padding: '0.75rem' }}>Replaced expensive external vector databases with an in-database text-chunking and keyword-indexed SQLite retrieval strategy, paired with Gemini 2.5 Flash.</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--rule)' }}>
                    <td style={{ padding: '0.75rem', fontWeight: '600', color: 'var(--accent)' }}>Zero Frontend Build Dependencies</td>
                    <td style={{ padding: '0.75rem' }}>Served self-contained HTMX-driven widget HTML directly from Go backend. Site owners paste 2 lines of code without needing React, Webpack, or npm installations.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '0.75rem', fontWeight: '600', color: 'var(--accent)' }}>High Concurrent Throughput</td>
                    <td style={{ padding: '0.75rem' }}>Enabled SQLite <code style={{ color: 'var(--accent)' }}>PRAGMA journal_mode=WAL</code> (Write-Ahead Logging), allowing concurrent read queries during background document parsing.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* System Architecture & Data Flow */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--rule)',
            borderRadius: '16px',
            padding: '2rem'
          }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', color: 'var(--ink)', marginBottom: '1rem' }}>
              🏗️ System Architecture & Data Flow
            </h2>

            <pre style={{
              background: '#0e0f11',
              border: '1px solid var(--rule)',
              borderRadius: '10px',
              padding: '1.2rem',
              color: '#f0eee9',
              fontFamily: 'monospace',
              fontSize: '0.82rem',
              overflowX: 'auto',
              marginBottom: '1.2rem'
            }}>
{`                                  ┌───────────────────────────┐
                                  │   Universal Copilot UI    │
                                  │   http://localhost:8080   │
                                  └─────────────┬─────────────┘
                                                │
                         ┌─────────────────────┴─────────────────────┐
                         │                                           │
             App ID: "ayushman_portfolio"                App ID: "city_hospital"
             Passcode: "ayushman@123"                    Passcode: "hospital@456"
                         │                                           │
                         ▼                                           ▼
          ┌─────────────────────────────┐             ┌─────────────────────────────┐
          │ SQLite: Knowledge Asset 1   │             │ SQLite: Knowledge Asset 2   │
          │ Encrypted Gemini Key 1      │             │ Encrypted Gemini Key 2      │
          └─────────────────────────────┘             └─────────────────────────────┘`}
            </pre>

            <ol style={{ paddingLeft: '1.4rem', color: 'var(--ink-mid)', fontSize: '0.93rem', lineHeight: 1.8 }}>
              <li><strong>1. Admin Onboarding Layer:</strong> Admin uploads a <code style={{ color: 'var(--accent)' }}>.pdf</code> resume or pastes Markdown details.</li>
              <li><strong>2. Document Ingestion Engine:</strong> Native PDF text extraction occurs on upload, splitting content into tagged chunks stored in <code style={{ color: 'var(--accent)' }}>knowledge_assets</code>.</li>
              <li><strong>3. Embed Serving Engine:</strong> Serving <code style={{ color: 'var(--accent)' }}>/copilot/embed?app_id=XXX</code> loads a floating action widget with a 2-stage animated state machine.</li>
              <li><strong>4. Chat Execution Layer:</strong> Incoming user messages query SQLite context, assemble the context-augmented prompt, and call Gemini 2.5 Flash REST API securely.</li>
            </ol>
          </div>

          {/* System Design Interview Talking Points */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--rule)',
            borderRadius: '16px',
            padding: '2rem'
          }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', color: 'var(--ink)', marginBottom: '1rem' }}>
              💡 System Design Interview Talking Points
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div style={{ border: '1px solid var(--rule)', borderRadius: '10px', padding: '1.2rem', background: 'var(--chip-bg)' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', color: 'var(--ink)', fontSize: '0.98rem', marginBottom: '0.4rem' }}>
                  Q: Why Go instead of Python or Node.js for an AI backend?
                </h4>
                <p style={{ color: 'var(--ink-mid)', fontSize: '0.9rem', lineHeight: 1.7, fontStyle: 'italic' }}>
                  "Python is great for AI model training, but for serving high-concurrency micro-SaaS backends, Go provides vastly superior execution speed, native concurrency with goroutines, a single compiled binary, and an extremely low memory footprint (&lt;30 MB RAM vs 200MB+ in Node/Python)."
                </p>
              </div>

              <div style={{ border: '1px solid var(--rule)', borderRadius: '10px', padding: '1.2rem', background: 'var(--chip-bg)' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', color: 'var(--ink)', fontSize: '0.98rem', marginBottom: '0.4rem' }}>
                  Q: How did you handle API key security and multi-tenancy?
                </h4>
                <p style={{ color: 'var(--ink-mid)', fontSize: '0.9rem', lineHeight: 1.7, fontStyle: 'italic' }}>
                  "I implemented strict multi-tenant isolation in SQLite using app_id foreign keys and PIN protection (app_passcode). To protect user Gemini keys, I used AES-256 GCM authenticated encryption with crypto-random nonces. Keys are never stored in plain text and are decrypted in memory strictly for the duration of the API call."
                </p>
              </div>

              <div style={{ border: '1px solid var(--rule)', borderRadius: '10px', padding: '1.2rem', background: 'var(--chip-bg)' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', color: 'var(--ink)', fontSize: '0.98rem', marginBottom: '0.4rem' }}>
                  Q: Why choose SQLite over PostgreSQL + pgvector?
                </h4>
                <p style={{ color: 'var(--ink-mid)', fontSize: '0.9rem', lineHeight: 1.7, fontStyle: 'italic' }}>
                  "For single-binary deployment and micro-SaaS efficiency, SQLite in WAL mode handles thousands of read requests per second with microsecond local access times. It eliminates database server networking overhead, simplifies Docker containerization, and costs $0 to host."
                </p>
              </div>
            </div>
          </div>

          {/* Quantifiable Resume Summary */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--rule)',
            borderRadius: '16px',
            padding: '2rem'
          }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', color: 'var(--ink)', marginBottom: '0.8rem' }}>
              📊 Quantifiable Resume Summary
            </h2>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', fontSize: '0.9rem', color: 'var(--ink-mid)' }}>
              <div><strong>Primary Languages:</strong> Go (1.22+), HTML5/CSS3, SQL, Python</div>
              <div><strong>Core Stack:</strong> SQLite (WAL), Gemini 2.5 Flash, AES-256 GCM, HTMX, Docker, Render</div>
            </div>
          </div>

        </div>
      ) : isParakhAi ? (
        /* PARAKH AI DETAILED TECHNICAL CASE STUDY CONTENT */
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          
          {/* Single Main Card Photo Display */}
          {project.projectImgLink && (
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--rule)',
              borderRadius: '16px',
              overflow: 'hidden',
              padding: '1.5rem'
            }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', color: 'var(--ink)', marginBottom: '1rem' }}>
                📷 Parakh AI Platform Overview
              </h3>
              <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--rule)', background: '#0e0f11' }}>
                <img 
                  src={project.projectImgLink} 
                  alt={project.projectName}
                  style={{ width: '100%', maxHeight: '480px', objectFit: 'cover', display: 'block' }}
                />
              </div>
            </div>
          )}

          {/* Executive Summary */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--rule)',
            borderRadius: '16px',
            padding: '2rem'
          }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', color: 'var(--ink)', marginBottom: '0.8rem' }}>
              📌 Executive Summary
            </h2>
            <p style={{ color: 'var(--ink-mid)', fontSize: '0.98rem', lineHeight: 1.8 }}>
              Modern recruitment processes are often bogged down by manual resume screening, inefficient initial technical screens, high interviewer fatigue, and lack of scalable integrity monitoring for remote candidates.
            </p>
            <p style={{ color: 'var(--ink-mid)', fontSize: '0.98rem', lineHeight: 1.8, marginTop: '0.8rem' }}>
              Parakh AI (AppInfoEdge / Noodle Lab) is an end-to-end, dual-portal AI hiring platform designed to revolutionize candidate evaluation and enterprise recruitment. Powered by Google Gemini LLMs, OpenCV Computer Vision, FastAPI, React 19, and Serverless PostgreSQL (Neon), the platform seamlessly connects candidates looking to prepare and hone their skills with enterprise recruiters requiring scalable, automated, and proctored technical evaluations.
            </p>
          </div>

          {/* Problem Statement & Dual-Portal Ecosystem */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--rule)',
            borderRadius: '16px',
            padding: '2rem'
          }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', color: 'var(--ink)', marginBottom: '1rem' }}>
              🎯 Problem Statement & Dual-Portal Ecosystem
            </h2>

            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', color: 'var(--accent)', marginBottom: '0.4rem' }}>
              The Recruitment Bottlenecks
            </h3>
            <ul style={{ paddingLeft: '1.4rem', color: 'var(--ink-mid)', fontSize: '0.93rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              <li><strong>Resume Overload:</strong> Enterprise hiring teams receive hundreds of resumes per job posting, making manual screening error-prone and time-consuming.</li>
              <li><strong>High Cost of Human Technical Screens:</strong> Senior engineers spend dozens of hours conducting initial technical interviews.</li>
              <li><strong>Proctoring Integrity in Remote Assessments:</strong> Virtual interviews suffer from cheating, proxy candidates, and unmonitored off-screen assistance.</li>
              <li><strong>Candidate Preparation Gap:</strong> Job seekers lack realistic, real-time voice and text mock technical interviews with actionable feedback.</li>
            </ul>

            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', color: 'var(--accent)', marginBottom: '0.4rem' }}>
              Dual-Ecosystem Platform Vision
            </h3>
            <ul style={{ paddingLeft: '1.4rem', color: 'var(--ink-mid)', fontSize: '0.93rem', lineHeight: 1.8 }}>
              <li><strong>B2C Candidate Portal:</strong> Practice platform with AI voice/text interviews, automated CV auditing, and AI-generated interview roadmaps.</li>
              <li><strong>B2B Enterprise Hiring Suite:</strong> Automated candidate interview scheduling, batch CV shortlisting against JDs, real-time WebSocket video proctoring with automated cheating evidence emails, and AI candidate scoring.</li>
            </ul>
          </div>

          {/* Key Modules & Feature Deep-Dive */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--rule)',
            borderRadius: '16px',
            padding: '2rem'
          }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', color: 'var(--ink)', marginBottom: '1rem' }}>
              🚀 Key Modules & Feature Deep-Dive
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div style={{ border: '1px solid var(--rule)', borderRadius: '10px', padding: '1.2rem', background: 'var(--chip-bg)' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', color: 'var(--accent)', fontSize: '1rem', marginBottom: '0.4rem' }}>
                  1. 🎤 Conversational Voice & Text AI Interview Engine
                </h4>
                <p style={{ color: 'var(--ink-mid)', fontSize: '0.92rem', lineHeight: 1.75 }}>
                  Generates domain-specific interview questions with dynamic AI follow-ups evaluating response depth before moving forward. Uses browser Web MediaRecorder API coupled with server-side speech recognition (<code style={{ color: 'var(--accent)' }}>SpeechRecognition</code>, <code style={{ color: 'var(--accent)' }}>pydub</code>, <code style={{ color: 'var(--accent)' }}>gTTS</code>, Google Cloud TTS) for fluid voice interactions.
                </p>
              </div>

              <div style={{ border: '1px solid var(--rule)', borderRadius: '10px', padding: '1.2rem', background: 'var(--chip-bg)' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', color: 'var(--accent)', fontSize: '1rem', marginBottom: '0.4rem' }}>
                  2. 👁️ Live Computer Vision Proctoring & Anti-Cheat System
                </h4>
                <p style={{ color: 'var(--ink-mid)', fontSize: '0.92rem', lineHeight: 1.75 }}>
                  Streams candidate webcam frames over low-latency WebSockets. Applies OpenCV <code style={{ color: 'var(--accent)' }}>CascadeClassifier</code> face tracking continuously. If face absence exceeds 10 seconds, the backend encodes the captured frame as a JPEG screenshot and immediately dispatches an alert email with breach evidence to the recruiter via Brevo API.
                </p>
              </div>

              <div style={{ border: '1px solid var(--rule)', borderRadius: '10px', padding: '1.2rem', background: 'var(--chip-bg)' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', color: 'var(--accent)', fontSize: '1rem', marginBottom: '0.4rem' }}>
                  3. 📄 Enterprise AI Batch Resume Screening Engine
                </h4>
                <p style={{ color: 'var(--ink-mid)', fontSize: '0.92rem', lineHeight: 1.75 }}>
                  Bulk parses candidate resumes (.pdf & .docx via PyPDF2 and python-docx). Asynchronously evaluates resumes via Gemini (<code style={{ color: 'var(--accent)' }}>asyncio.gather</code>), ranking candidates by match score (0-100%) across Skills, Experience, and Education into Strong, Potential, or No Match.
                </p>
              </div>

              <div style={{ border: '1px solid var(--rule)', borderRadius: '10px', padding: '1.2rem', background: 'var(--chip-bg)' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', color: 'var(--accent)', fontSize: '1rem', marginBottom: '0.4rem' }}>
                  4. 📝 CV Auditor & 🗺️ Career Roadmap Generator
                </h4>
                <p style={{ color: 'var(--ink-mid)', fontSize: '0.92rem', lineHeight: 1.75 }}>
                  Assesses technical competency matrices and industry formatting standards while converting candidate goal inputs into structured 5-7 step preparation roadmaps with curated study resources.
                </p>
              </div>
            </div>
          </div>

          {/* System Architecture & Tech Stack Matrix */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--rule)',
            borderRadius: '16px',
            padding: '2rem'
          }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', color: 'var(--ink)', marginBottom: '1rem' }}>
              🛠️ Tech Stack & Database Architecture
            </h2>

            <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', color: 'var(--ink-mid)' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--rule)', textAlign: 'left' }}>
                    <th style={{ padding: '0.75rem', fontFamily: 'var(--font-heading)', color: 'var(--ink)' }}>Layer</th>
                    <th style={{ padding: '0.75rem', fontFamily: 'var(--font-heading)', color: 'var(--ink)' }}>Technologies</th>
                    <th style={{ padding: '0.75rem', fontFamily: 'var(--font-heading)', color: 'var(--ink)' }}>Key Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--rule)' }}>
                    <td style={{ padding: '0.75rem', fontWeight: '600', color: 'var(--accent)' }}>Frontend Core</td>
                    <td style={{ padding: '0.75rem' }}>React 19, Vite, Tailwind CSS v4, Framer Motion</td>
                    <td style={{ padding: '0.75rem' }}>Single-page app with glassmorphism UI & micro-animations</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--rule)' }}>
                    <td style={{ padding: '0.75rem', fontWeight: '600', color: 'var(--accent)' }}>Backend API</td>
                    <td style={{ padding: '0.75rem' }}>Python, FastAPI, Uvicorn, WebSockets</td>
                    <td style={{ padding: '0.75rem' }}>High-performance async API & real-time video stream server</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--rule)' }}>
                    <td style={{ padding: '0.75rem', fontWeight: '600', color: 'var(--accent)' }}>Database</td>
                    <td style={{ padding: '0.75rem' }}>PostgreSQL (Neon Serverless SSL), SQLAlchemy</td>
                    <td style={{ padding: '0.75rem' }}>Relational storage for users, companies, interviews, & results</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--rule)' }}>
                    <td style={{ padding: '0.75rem', fontWeight: '600', color: 'var(--accent)' }}>AI & Vision</td>
                    <td style={{ padding: '0.75rem' }}>Google Gemini 2.5 Flash, OpenCV (cv2)</td>
                    <td style={{ padding: '0.75rem' }}>Candidate evaluation, follow-up generation, & face tracking</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '0.75rem', fontWeight: '600', color: 'var(--accent)' }}>Email & Alerts</td>
                    <td style={{ padding: '0.75rem' }}>Brevo (Sendinblue) API</td>
                    <td style={{ padding: '0.75rem' }}>OTP codes, interview invites, and proctoring breach alerts</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', color: 'var(--accent)', marginBottom: '0.4rem' }}>
              Key Engineering Solutions
            </h3>
            <ul style={{ paddingLeft: '1.4rem', color: 'var(--ink-mid)', fontSize: '0.93rem', lineHeight: 1.8 }}>
              <li><strong>Cloud Serverless Postgres Pooling:</strong> Configured <code style={{ color: 'var(--accent)' }}>pool_recycle=300</code> and <code style={{ color: 'var(--accent)' }}>pool_pre_ping=True</code> in <code style={{ color: 'var(--accent)' }}>backend/database.py</code> to eliminate Neon idle timeouts.</li>
              <li><strong>Resilient Multi-Model LLM Fallback:</strong> Dynamic fallback chain (<code style={{ color: 'var(--accent)' }}>gemini-2.5-flash</code> → <code style={{ color: 'var(--accent)' }}>gemini-2.0-flash</code> → <code style={{ color: 'var(--accent)' }}>gemini-1.5-flash</code>) guaranteeing 99.9% uptime.</li>
              <li><strong>Async Resume Screening:</strong> Leveraged <code style={{ color: 'var(--accent)' }}>asyncio.gather</code> yielding &gt;80% screening latency reduction.</li>
            </ul>
          </div>

          {/* Impact Results */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--rule)',
            borderRadius: '16px',
            padding: '2rem'
          }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', color: 'var(--ink)', marginBottom: '1rem' }}>
              📈 Impact & Business Results
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
              <div style={{ border: '1px solid var(--rule)', borderRadius: '10px', padding: '1.2rem', textAlign: 'center', background: 'var(--chip-bg)' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--accent)', fontWeight: 700 }}>85%</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--ink-mid)', marginTop: '0.2rem' }}>Reduction in Screening Time</div>
              </div>
              <div style={{ border: '1px solid var(--rule)', borderRadius: '10px', padding: '1.2rem', textAlign: 'center', background: 'var(--chip-bg)' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--accent)', fontWeight: 700 }}>70%</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--ink-mid)', marginTop: '0.2rem' }}>Decrease in Human Vetting Hours</div>
              </div>
              <div style={{ border: '1px solid var(--rule)', borderRadius: '10px', padding: '1.2rem', textAlign: 'center', background: 'var(--chip-bg)' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--accent)', fontWeight: 700 }}>100%</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--ink-mid)', marginTop: '0.2rem' }}>Remote Proctoring Integrity</div>
              </div>
            </div>
          </div>

        </div>
      ) : isLinkinAi ? (
        /* LINKIN AI DETAILED TECHNICAL CASE STUDY CONTENT */
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          
          {/* Screenshot Showcase Gallery */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--rule)',
            borderRadius: '16px',
            overflow: 'hidden',
            padding: '1.5rem'
          }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', color: 'var(--ink)', marginBottom: '1rem' }}>
              📷 System Screenshots & Modules Showcase
            </h3>

            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--rule)', marginBottom: '1rem', background: '#0e0f11' }}>
              <img 
                src={activeLinkinScreenshots[activeImageIndex < activeLinkinScreenshots.length ? activeImageIndex : 0].url} 
                alt={activeLinkinScreenshots[activeImageIndex < activeLinkinScreenshots.length ? activeImageIndex : 0].title}
                style={{ width: '100%', maxHeight: '460px', objectFit: 'contain', display: 'block' }}
              />
            </div>

            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.92rem', color: 'var(--accent)', fontWeight: 600, marginBottom: '0.3rem' }}>
              {activeLinkinScreenshots[activeImageIndex < activeLinkinScreenshots.length ? activeImageIndex : 0].title}
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.86rem', color: 'var(--ink-mid)', marginBottom: '1.2rem' }}>
              {activeLinkinScreenshots[activeImageIndex < activeLinkinScreenshots.length ? activeImageIndex : 0].desc}
            </p>

            {/* Thumbnail Selectors */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.6rem' }}>
              {activeLinkinScreenshots.map((img, idx) => (
                <div 
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  style={{
                    border: activeImageIndex === idx ? '2px solid var(--accent)' : '1px solid var(--rule)',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    opacity: activeImageIndex === idx ? 1 : 0.6,
                    transition: 'all 0.2s ease',
                    height: '65px',
                    background: '#000'
                  }}
                >
                  <img src={img.url} alt={img.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          </div>

          {/* Section 1: Project At A Glance */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--rule)',
            borderRadius: '16px',
            padding: '2rem'
          }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', color: 'var(--ink)', marginBottom: '1rem' }}>
              📌 1. Project At A Glance
            </h2>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', color: 'var(--ink-mid)' }}>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--rule)' }}>
                    <td style={{ padding: '0.75rem', fontWeight: '600', color: 'var(--accent)', width: '30%' }}>Project Type</td>
                    <td style={{ padding: '0.75rem' }}>Full-Stack Web Application (Microservices & Decoupled Architecture)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--rule)' }}>
                    <td style={{ padding: '0.75rem', fontWeight: '600', color: 'var(--accent)' }}>Target Audience</td>
                    <td style={{ padding: '0.75rem' }}>University Students, Job Seekers, Freshers, and Industry Professionals</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--rule)' }}>
                    <td style={{ padding: '0.75rem', fontWeight: '600', color: 'var(--accent)' }}>Core Architecture</td>
                    <td style={{ padding: '0.75rem' }}>React (Vite) + Java Spring Boot 3 + FastAPI PyTorch Daemon + Google Gemini AI</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--rule)' }}>
                    <td style={{ padding: '0.75rem', fontWeight: '600', color: 'var(--accent)' }}>Deployment Stack</td>
                    <td style={{ padding: '0.75rem' }}>Vercel (Frontend edge) + Hugging Face Spaces (Dockerized Spring Boot + FastAPI) + ImageKit CDN</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '0.75rem', fontWeight: '600', color: 'var(--accent)' }}>Key Highlights</td>
                    <td style={{ padding: '0.75rem' }}>Priority-based hybrid computer vision fallback, raw binary HTTP/1.1 streaming, zero-latency HTML5 Canvas repositioning, Spring AI DTO schema validation, auto-keep-alive cron polling</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 2: Problem Statement & Solution */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--rule)',
            borderRadius: '16px',
            padding: '2rem'
          }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', color: 'var(--ink)', marginBottom: '1rem' }}>
              🎯 2. Problem Statement & Market Opportunity
            </h2>

            <p style={{ color: 'var(--ink-mid)', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: '0.8rem' }}>
              In today's competitive job market, candidates frequently struggle to stand out on platforms like LinkedIn:
            </p>
            <ul style={{ paddingLeft: '1.4rem', color: 'var(--ink-mid)', fontSize: '0.93rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              <li><strong>Ineffective Personal Branding:</strong> Over 70% of student profiles use default headlines like "Student at XYZ University", failing to match recruiter search filters.</li>
              <li><strong>Visual Friction:</strong> Profiles with professional headshots receive 21x more profile views and 9x more connection requests. However, studio photography is expensive.</li>
              <li><strong>Character & Formatting Constraints:</strong> Cold outreach notes have strict limits (&lt;300 characters), while project descriptions often exceed readable thresholds.</li>
              <li><strong>Resume-to-Profile Misalignment:</strong> Candidates struggle to translate lengthy PDF resumes into concise, high-impact headlines and about sections.</li>
            </ul>

            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', color: 'var(--accent)', marginBottom: '0.6rem' }}>
              The LinkinAI Solution
            </h3>
            <ul style={{ paddingLeft: '1.4rem', color: 'var(--ink-mid)', fontSize: '0.93rem', lineHeight: 1.8 }}>
              <li><strong>Neural & Computer Vision PFP Studio:</strong> Automatic portrait background removal paired with interactive, client-side canvas positioning over professional templates.</li>
              <li><strong>Structured AI Copywriting Engine:</strong> Role-tailored headline generation, bio writing, and project summary optimization under strict character limits.</li>
              <li><strong>PDF Resume Parsing & Auditing:</strong> Instant text extraction and structural analysis powered by Apache PDFBox and Gemini 2.5 Flash.</li>
              <li><strong>Custom Cold Outreach Creator:</strong> Persona- and channel-aware messaging tailored for alumni and hiring managers.</li>
            </ul>
          </div>

          {/* Section 4: Technical Challenges & Engineering Solutions */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--rule)',
            borderRadius: '16px',
            padding: '2rem'
          }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', color: 'var(--ink)', marginBottom: '1rem' }}>
              ⚡ 4. Technical Challenges & Engineering Solutions
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', color: 'var(--accent)', marginBottom: '0.4rem' }}>
                  Challenge 1: Neural Network Segmentation Latency & HTTP/2 Payload Drop Bug
                </h3>
                <p style={{ color: 'var(--ink-mid)', fontSize: '0.93rem', lineHeight: 1.75, marginBottom: '0.6rem' }}>
                  <strong>The Issue:</strong> Streaming raw portrait uploads to the Python FastAPI daemon (rembg) via Java's HttpClient triggered HTTP/2 connection upgrades. Under Uvicorn's HTTP/2 implementation, renegotiations silently dropped the request body (0 bytes received).
                </p>
                <p style={{ color: 'var(--ink-mid)', fontSize: '0.93rem', lineHeight: 1.75, marginBottom: '0.6rem' }}>
                  <strong>Engineering Solution:</strong> Enforced HTTP/1.1 explicitly, replaced multipart with raw octet-stream byte serialization (reducing RAM allocation by 40%), and added a Java <code style={{ color: 'var(--accent)' }}>Semaphore(2)</code> concurrency throttle to prevent CPU starvation.
                </p>

                <pre style={{
                  background: '#0e0f11',
                  border: '1px solid var(--rule)',
                  borderRadius: '10px',
                  padding: '1.2rem',
                  color: '#f0eee9',
                  fontFamily: 'monospace',
                  fontSize: '0.85rem',
                  overflowX: 'auto'
                }}>
{`// HTTP/1.1 enforcement and binary streaming in Spring Boot (ImageGenerationService.java)
HttpClient client = HttpClient.newBuilder()
    .version(HttpClient.Version.HTTP_1_1)
    .connectTimeout(Duration.ofSeconds(10))
    .build();

HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("http://127.0.0.1:8000/remove-bg"))
    .header("Content-Type", "application/octet-stream")
    .POST(HttpRequest.BodyPublishers.ofByteArray(imageBytes))
    .build();`}
                </pre>
              </div>

              <div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', color: 'var(--accent)', marginBottom: '0.4rem' }}>
                  Challenge 2: Priority-Based Hybrid Computer Vision Pipeline (Primary + GrabCut Fallback)
                </h3>
                <p style={{ color: 'var(--ink-mid)', fontSize: '0.93rem', lineHeight: 1.75 }}>
                  Designed a dual-stage pipeline: attempt FastAPI rembg call first; if it times out, fall back seamlessly to an optimized OpenCV GrabCut segmentation pipeline (downscaling input to 600px max dimension for execution under 1.5s, 5% margin boundary rectangle, and 5x5 Gaussian edge smoothing).
                </p>
              </div>

              <div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', color: 'var(--accent)', marginBottom: '0.4rem' }}>
                  Challenge 3: Zero-Latency Interactive Canvas Composition
                </h3>
                <p style={{ color: 'var(--ink-mid)', fontSize: '0.93rem', lineHeight: 1.75 }}>
                  Offloaded image repositioning, scaling, and template swaps to client-side HTML5 Canvas double-buffering (<code style={{ color: 'var(--accent)' }}>PhotoEditor.jsx</code>), producing smooth 60 FPS re-renders without server roundtrips.
                </p>
              </div>

              <div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', color: 'var(--accent)', marginBottom: '0.4rem' }}>
                  Challenge 4: Free-Tier Container Sleep Mitigation (Auto-Keep-Alive Engine)
                </h3>
                <p style={{ color: 'var(--ink-mid)', fontSize: '0.93rem', lineHeight: 1.75 }}>
                  Engineered an internal self-ping scheduler (<code style={{ color: 'var(--accent)' }}>KeepAliveService.java</code>) executing an asynchronous GET request every 12 minutes (<code style={{ color: 'var(--accent)' }}>@Scheduled(cron = "0 */12 * * * *")</code>) to keep Hugging Face container instances warm continuously.
                </p>
              </div>
            </div>
          </div>

          {/* Section 6: Performance Benchmarks & Impact Results */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--rule)',
            borderRadius: '16px',
            padding: '2rem'
          }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', color: 'var(--ink)', marginBottom: '1rem' }}>
              📊 6. Performance Benchmarks & Impact Results
            </h2>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', color: 'var(--ink-mid)' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--rule)', textAlign: 'left' }}>
                    <th style={{ padding: '0.75rem', fontFamily: 'var(--font-heading)', color: 'var(--ink)' }}>Metric</th>
                    <th style={{ padding: '0.75rem', fontFamily: 'var(--font-heading)', color: 'var(--ink)' }}>Before Optimization</th>
                    <th style={{ padding: '0.75rem', fontFamily: 'var(--font-heading)', color: 'var(--ink)' }}>After Engineering</th>
                    <th style={{ padding: '0.75rem', fontFamily: 'var(--font-heading)', color: 'var(--ink)' }}>Improvement</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--rule)' }}>
                    <td style={{ padding: '0.75rem', fontWeight: '600', color: 'var(--accent)' }}>Backend Deployment Speed</td>
                    <td style={{ padding: '0.75rem' }}>~8 minutes (Monolithic build)</td>
                    <td style={{ padding: '0.75rem' }}>~2.5 minutes (Decoupled Docker + HF)</td>
                    <td style={{ padding: '0.75rem', fontWeight: '600', color: 'var(--accent)' }}>3.2x Faster Build Time</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--rule)' }}>
                    <td style={{ padding: '0.75rem', fontWeight: '600', color: 'var(--accent)' }}>PFP Repositioning Latency</td>
                    <td style={{ padding: '0.75rem' }}>~1,200ms (Server roundtrips)</td>
                    <td style={{ padding: '0.75rem' }}>~16ms (Client HTML5 Canvas)</td>
                    <td style={{ padding: '0.75rem', fontWeight: '600', color: 'var(--accent)' }}>98.6% Latency Cut (60 FPS)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--rule)' }}>
                    <td style={{ padding: '0.75rem', fontWeight: '600', color: 'var(--accent)' }}>OpenCV Fallback Runtime</td>
                    <td style={{ padding: '0.75rem' }}>~4.5s (Full resolution)</td>
                    <td style={{ padding: '0.75rem' }}>~1.1s (600px Downscale)</td>
                    <td style={{ padding: '0.75rem', fontWeight: '600', color: 'var(--accent)' }}>4x Execution Acceleration</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--rule)' }}>
                    <td style={{ padding: '0.75rem', fontWeight: '600', color: 'var(--accent)' }}>LLM Parsing Error Rate</td>
                    <td style={{ padding: '0.75rem' }}>~14% (Raw Markdown Regex)</td>
                    <td style={{ padding: '0.75rem' }}>0% (Spring AI DTO Schema)</td>
                    <td style={{ padding: '0.75rem', fontWeight: '600', color: 'var(--accent)' }}>100% Reliability</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '0.75rem', fontWeight: '600', color: 'var(--accent)' }}>Container Warm-up Uptime</td>
                    <td style={{ padding: '0.75rem' }}>Intermittent 45s cold starts</td>
                    <td style={{ padding: '0.75rem' }}>100% active state (KeepAlive)</td>
                    <td style={{ padding: '0.75rem', fontWeight: '600', color: 'var(--accent)' }}>Zero Cold Starts</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 7: Real-World Transformation Examples */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--rule)',
            borderRadius: '16px',
            padding: '2rem'
          }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', color: 'var(--ink)', marginBottom: '1rem' }}>
              📈 7. Real-World Transformation Examples
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div style={{ border: '1px solid var(--rule)', borderRadius: '10px', padding: '1.2rem', background: 'var(--chip-bg)' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', color: 'var(--ink)', fontSize: '1rem', marginBottom: '0.5rem' }}>
                  1. Headline Optimization
                </h4>
                <p style={{ color: '#e57373', fontSize: '0.88rem', fontFamily: 'monospace', marginBottom: '0.4rem' }}>
                  ❌ BEFORE: "Student at KIET Ghaziabad | CSE"
                </p>
                <p style={{ color: '#81c784', fontSize: '0.88rem', fontFamily: 'monospace' }}>
                  ✅ AFTER (LinkinAI Achiever Style): "Full-Stack Engineer | Java, Spring Boot, React | Built High-Conforming Microservices | CSE Undergrad @ KIET"
                </p>
              </div>

              <div style={{ border: '1px solid var(--rule)', borderRadius: '10px', padding: '1.2rem', background: 'var(--chip-bg)' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', color: 'var(--ink)', fontSize: '1rem', marginBottom: '0.5rem' }}>
                  2. Project Summary Optimization (Under 450 Chars)
                </h4>
                <p style={{ color: '#e57373', fontSize: '0.88rem', fontFamily: 'monospace', marginBottom: '0.4rem' }}>
                  ❌ BEFORE: "I built a web app using React and Spring Boot for LinkedIn profile editing. It removes backgrounds and generates bios with AI."
                </p>
                <p style={{ color: '#81c784', fontSize: '0.88rem', fontFamily: 'monospace' }}>
                  ✅ AFTER: "Engineered LinkinAI, a microservice-based personal branding platform using Spring Boot 3, React, and Gemini 2.5 Flash. Integrated a FastAPI PyTorch daemon for U²-Net background removal and OpenCV for live compositing. Built a PDF resume auditor yielding 100% schema-validated feedback."
                </p>
              </div>
            </div>
          </div>

          {/* Section 8: Key Lessons & Roadmap */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--rule)',
            borderRadius: '16px',
            padding: '2rem'
          }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', color: 'var(--ink)', marginBottom: '0.8rem' }}>
              💡 Key Lessons Learned & Future Roadmap
            </h2>
            <ul style={{ paddingLeft: '1.4rem', color: 'var(--ink-mid)', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '1rem' }}>
              <li><strong>Protocol Rigidity:</strong> HTTP_1_1 explicit protocol enforcement prevents silent payload truncation when calling PyTorch Uvicorn daemons.</li>
              <li><strong>Hybrid Graceful Degradation:</strong> Pairing PyTorch U²-Net neural models with classical OpenCV GrabCut algorithms guarantees zero service downtime.</li>
              <li><strong>Structured Generative AI:</strong> Enforcing Spring AI DTO schema validation eliminates raw string parsing exceptions in production.</li>
            </ul>
          </div>

        </div>
      ) : isBrainAi ? (
        /* BRAIN AI CASE STUDY */
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          
          {/* Screenshot Showcase Gallery */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--rule)',
            borderRadius: '16px',
            overflow: 'hidden',
            padding: '1.5rem'
          }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', color: 'var(--ink)', marginBottom: '1rem' }}>
              📷 System Interface & Execution Screenshots
            </h3>

            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--rule)', marginBottom: '1rem', background: '#0e0f11' }}>
              <img 
                src={activeBrainScreenshots[activeImageIndex < activeBrainScreenshots.length ? activeImageIndex : 0].url} 
                alt={activeBrainScreenshots[activeImageIndex < activeBrainScreenshots.length ? activeImageIndex : 0].title}
                style={{ width: '100%', maxHeight: '460px', objectFit: 'contain', display: 'block' }}
              />
            </div>

            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.92rem', color: 'var(--accent)', fontWeight: 600, marginBottom: '0.3rem' }}>
              {activeBrainScreenshots[activeImageIndex < activeBrainScreenshots.length ? activeImageIndex : 0].title}
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.86rem', color: 'var(--ink-mid)', marginBottom: '1.2rem' }}>
              {activeBrainScreenshots[activeImageIndex < activeBrainScreenshots.length ? activeImageIndex : 0].desc}
            </p>

            {/* Thumbnail Selectors */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0.6rem' }}>
              {activeBrainScreenshots.map((img, idx) => (
                <div 
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  style={{
                    border: activeImageIndex === idx ? '2px solid var(--accent)' : '1px solid var(--rule)',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    opacity: activeImageIndex === idx ? 1 : 0.6,
                    transition: 'all 0.2s ease',
                    height: '60px',
                    background: '#000'
                  }}
                >
                  <img src={img.url} alt={img.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          </div>

          {/* Executive Summary */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--rule)',
            borderRadius: '16px',
            padding: '2rem'
          }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', color: 'var(--ink)', marginBottom: '0.8rem' }}>
              Executive Summary
            </h2>
            <p style={{ color: 'var(--ink-mid)', fontSize: '0.98rem', lineHeight: 1.8 }}>
              Brain AI is a state-of-the-art, fully autonomous agentic platform designed to bridge the gap between high-level human intent and complex software/academic engineering. Built primarily in modern Java (Java 17) with an isometric dark UI, embedded relational and vector storage, local model execution via Ollama, and a React/Ink interactive terminal interface (<code style={{ color: 'var(--accent)' }}>brain-cli</code>), Brain AI transforms plain-language prompts into either fully compiled, native software applications or publication-grade academic research papers.
            </p>
            <p style={{ color: 'var(--ink-mid)', fontSize: '0.98rem', lineHeight: 1.8, marginTop: '0.8rem' }}>
              Unlike single-prompt wrapper tools, Brain AI operates as a Multi-Agent Assembly Line and Academic Research Swarm. It orchestrates specialized AI agents (Architect, Coder, Tester, DevOps, Extractor, Theorist, Diagrammer) using parallel execution pools, intelligent multi-key rate-limit rotation, local model execution via Ollama, enterprise vector search via Oracle 23ai, recursive self-repair loops, and automated native OS packaging (jpackage/WiX).
            </p>
          </div>

          {/* Section 1: Problem Statement & Research Context */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--rule)',
            borderRadius: '16px',
            padding: '2rem'
          }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', color: 'var(--ink)', marginBottom: '1rem' }}>
              1. Problem Statement & Research Context
            </h2>

            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', color: 'var(--accent)', marginBottom: '0.4rem' }}>
              1.1 The Software Engineering Bottleneck
            </h3>
            <p style={{ color: 'var(--ink-mid)', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: '0.8rem' }}>
              Single-prompt LLM code generation often suffers from:
            </p>
            <ul style={{ paddingLeft: '1.4rem', color: 'var(--ink-mid)', fontSize: '0.93rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              <li><strong>Context Window Exhaustion:</strong> Large projects overload prompt windows, leading to hallucinations or truncated outputs.</li>
              <li><strong>Lack of Validation & Feedback:</strong> Code generated in a single pass frequently contains syntax errors, missing dependencies, or import mismatches requiring manual intervention.</li>
              <li><strong>API Rate Limiting & Cloud Dependency:</strong> Complex multi-file generation triggers HTTP 429 rate limits or fails when internet connectivity is restricted.</li>
            </ul>

            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', color: 'var(--accent)', marginBottom: '0.4rem' }}>
              1.2 The Academic Synthesis Gap
            </h3>
            <p style={{ color: 'var(--ink-mid)', fontSize: '0.95rem', lineHeight: 1.75 }}>
              Generating publication-grade academic papers requires far more than drafting prose: synthesizing deep theoretical mathematical formulas, Big-O computational bounds, formulating novel algorithms (e.g., addressing Differential Privacy Noise vs. Accuracy trade-offs and DP-SGD minority bias), and verifying verbatim uniqueness via plagiarism audits.
            </p>
          </div>

          {/* Section 2: Research & Theoretical Breakthroughs */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--rule)',
            borderRadius: '16px',
            padding: '2rem'
          }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', color: 'var(--ink)', marginBottom: '1rem' }}>
              2. Research & Theoretical Breakthroughs
            </h2>

            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', color: 'var(--accent)', marginBottom: '0.4rem' }}>
              2.1 The Academic Swarm Architecture
            </h3>
            <p style={{ color: 'var(--ink-mid)', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: '1rem' }}>
              Brain AI features a dedicated 5-stage Academic Research Swarm (Extractor, Theorist, Diagrammer, Audit Meta-Reviewer, PDF Compiler).
            </p>

            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', color: 'var(--accent)', marginBottom: '0.4rem' }}>
              2.2 Privacy-Preserving Swarms & Algorithmic Fairness
            </h3>
            <p style={{ color: 'var(--ink-mid)', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: '0.8rem' }}>
              <strong>DP-SGD Bias Resolution:</strong> Standard Differential Privacy (DP-SGD) clips underrepresented gradients aggressively. Brain AI introduced Asynchronous Agentic Forward-Forward (AAFF) swarms coupled with Capsule Routing-by-Agreement to perturb noise locally without destroying minority class feature representations.
            </p>
            <p style={{ color: 'var(--ink-mid)', fontSize: '0.95rem', lineHeight: 1.75 }}>
              <strong>Local Goodness Functions:</strong> Decouples network layers to eliminate global backpropagation locking in distributed agent swarms.
            </p>
          </div>

          {/* Section 4: Terminal UI Architecture: brain-cli (React + Ink) */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--rule)',
            borderRadius: '16px',
            padding: '2rem'
          }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', color: 'var(--ink)', marginBottom: '1rem' }}>
              4. Terminal UI Architecture: brain-cli (React + Ink)
            </h2>
            <p style={{ color: 'var(--ink-mid)', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: '1rem' }}>
              Beyond the JavaFX desktop GUI, Brain AI features a high-performance terminal UI (<code style={{ color: 'var(--accent)' }}>brain-cli/cli.jsx</code> and <code style={{ color: 'var(--accent)' }}>brain-cli/api.js</code>) built using React for CLI (Ink).
            </p>
            
            <ul style={{ paddingLeft: '1.4rem', color: 'var(--ink-mid)', fontSize: '0.93rem', lineHeight: 1.8 }}>
              <li><strong>Interactive Workflow Selector (SingleSelect):</strong> Custom React component handling terminal arrow key navigation (<code style={{ color: 'var(--accent)' }}>upArrow</code>, <code style={{ color: 'var(--accent)' }}>downArrow</code>) and selection (<code style={{ color: 'var(--accent)' }}>return</code>) for workflow modes (Autopilot, Incremental, Fix Mode).</li>
              <li><strong>Active Stopwatch Component (Stopwatch):</strong> Real-time timer tracking total agent execution time down to the second.</li>
              <li><strong>Node API Bridge (api.js):</strong> Communicates with the core agent service, providing live streaming of key pool states, project creation, and system prompt resolution.</li>
            </ul>
          </div>

          {/* Section 5: Local Model & Enterprise Vector Storage Infrastructure */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--rule)',
            borderRadius: '16px',
            padding: '2rem'
          }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', color: 'var(--ink)', marginBottom: '1rem' }}>
              5. Local Model & Enterprise Vector Infrastructure
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', color: 'var(--accent)', marginBottom: '0.4rem' }}>
                  5.1 Local Model Execution (OllamaService.java)
                </h3>
                <p style={{ color: 'var(--ink-mid)', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: '0.6rem' }}>
                  <code style={{ color: 'var(--accent)' }}>OllamaService.java</code> allows Brain AI to operate completely offline without transmitting proprietary data to external cloud APIs via local HTTP daemon (<code style={{ color: 'var(--accent)' }}>http://localhost:11434/api/chat</code>).
                </p>

                <pre style={{
                  background: '#0e0f11',
                  border: '1px solid var(--rule)',
                  borderRadius: '10px',
                  padding: '1.2rem',
                  color: '#f0eee9',
                  fontFamily: 'monospace',
                  fontSize: '0.85rem',
                  overflowX: 'auto'
                }}>
{`// Ollama Local Execution Snippet (OllamaService.java)
ObjectNode options = mapper.createObjectNode();
options.put("temperature", 0.1);
options.put("top_p", 0.9);
options.put("repeat_penalty", 1.05);
root.set("options", options);`}
                </pre>
              </div>

              <div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', color: 'var(--accent)', marginBottom: '0.4rem' }}>
                  5.2 Enterprise Vector Search (OracleVectorService.java)
                </h3>
                <p style={{ color: 'var(--ink-mid)', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: '0.6rem' }}>
                  Manages semantic embedding storage and vector similarity queries using Oracle Database 23ai's native <code style={{ color: 'var(--accent)' }}>VECTOR</code> column datatype and cosine distance search.
                </p>

                <pre style={{
                  background: '#0e0f11',
                  border: '1px solid var(--rule)',
                  borderRadius: '10px',
                  padding: '1.2rem',
                  color: '#f0eee9',
                  fontFamily: 'monospace',
                  fontSize: '0.85rem',
                  overflowX: 'auto'
                }}>
{`-- Oracle 23ai Cosine Similarity Vector Search SQL
SELECT doc_key, content, VECTOR_DISTANCE(embedding, VECTOR(?), COSINE) AS distance 
FROM brain_vectors ORDER BY distance ASC FETCH FIRST ? ROWS ONLY;`}
                </pre>
              </div>
            </div>
          </div>

          {/* Section 6: Visual Design System: Isometric Dark */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--rule)',
            borderRadius: '16px',
            padding: '2rem'
          }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', color: 'var(--ink)', marginBottom: '1rem' }}>
              6. Visual Design System: Isometric Dark
            </h2>
            <p style={{ color: 'var(--ink-mid)', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: '1rem' }}>
              Brain AI features a dedicated visual design specification utilizing 3D perspective transforms (<code style={{ color: 'var(--accent)' }}>perspective(600px) rotateX(6deg)</code>), tactile socket micro-interactions, and inset code terminal screens with glowing warm orange accents.
            </p>

            <pre style={{
              background: '#0e0f11',
              border: '1px solid var(--rule)',
              borderRadius: '10px',
              padding: '1.2rem',
              color: '#f0eee9',
              fontFamily: 'monospace',
              fontSize: '0.85rem',
              overflowX: 'auto'
            }}>
{`:root {
  --font-title: 'American Typewriter', 'Courier New', monospace;
  --font-body:  'Satoshi', 'Inter', sans-serif;
  --bg:         #0e0f11;
  --panel:      #17181b;
  --edge-top:   #2a2d31;
  --edge-side:  #08090a;
  --accent:     #ff7a45; /* Warm Vibrant Orange */
  --accent-dark:#b8481a;
  --text:       #f0eee9;
  --radius:     10px;
  --depth:      6px;
}`}
            </pre>
          </div>

          {/* Section 7: Core Class Breakdown */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--rule)',
            borderRadius: '16px',
            padding: '2rem'
          }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', color: 'var(--ink)', marginBottom: '1rem' }}>
              7. System Architecture & Core Class Breakdown
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ border: '1px solid var(--rule)', borderRadius: '10px', padding: '1.2rem', background: 'var(--chip-bg)' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', color: 'var(--accent)', fontSize: '1rem', marginBottom: '0.3rem' }}>
                  1. MainApp.java (Application Bootstrap)
                </h4>
                <p style={{ color: 'var(--ink-mid)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  Entry point for JavaFX desktop app. Sets custom window icons and stylesheets, enforces corporate proxy fallbacks (<code style={{ color: 'var(--accent)' }}>System.setProperty("java.net.useSystemProxies", "true")</code>), and checks API key hierarchy precedence.
                </p>
              </div>

              <div style={{ border: '1px solid var(--rule)', borderRadius: '10px', padding: '1.2rem', background: 'var(--chip-bg)' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', color: 'var(--accent)', fontSize: '1rem', marginBottom: '0.3rem' }}>
                  2. MainController.java (The Nerve Center)
                </h4>
                <p style={{ color: 'var(--ink-mid)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  Orchestrates thread execution, agent workflows, and regex code extraction. Uses JavaFX background <code style={{ color: 'var(--accent)' }}>Task&lt;Void&gt;</code> threads to prevent UI freezing, leverages a <code style={{ color: 'var(--accent)' }}>BlockingQueue&lt;String&gt;</code> consultation lock for human-in-the-loop oversight, and parallelizes code generation via ExecutorService pools.
                </p>
              </div>

              <div style={{ border: '1px solid var(--rule)', borderRadius: '10px', padding: '1.2rem', background: 'var(--chip-bg)' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', color: 'var(--accent)', fontSize: '1rem', marginBottom: '0.3rem' }}>
                  3. APIKeyManager.java (High-Availability Key Pool)
                </h4>
                <p style={{ color: 'var(--ink-mid)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  Provides thread-safe multi-key round-robin rotation, automatic failover, and rate-limit cooling. When an API key hits HTTP 429, it enters a 65-second cooling window while traffic smoothly routes to sibling keys. Permanently purges 401/403 forbidden keys.
                </p>
              </div>

              <div style={{ border: '1px solid var(--rule)', borderRadius: '10px', padding: '1.2rem', background: 'var(--chip-bg)' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', color: 'var(--accent)', fontSize: '1rem', marginBottom: '0.3rem' }}>
                  4. DatabaseConnection.java (Embedded H2 Engine)
                </h4>
                <p style={{ color: 'var(--ink-mid)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  Manages persistent storage for projects, execution logs, and agent prompt templates using embedded H2 (<code style={{ color: 'var(--accent)' }}>jdbc:h2:~/.brainai/brainai_db</code> with <code style={{ color: 'var(--accent)' }}>AUTO_SERVER=TRUE</code> for simultaneous DBeaver / H2 Web Console inspection).
                </p>
              </div>
            </div>
          </div>

          {/* Section 8: Build Engineering & DevOps Innovation */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--rule)',
            borderRadius: '16px',
            padding: '2rem'
          }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', color: 'var(--ink)', marginBottom: '1rem' }}>
              8. Build Engineering & DevOps Innovation
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <h4 style={{ fontFamily: 'var(--font-heading)', color: 'var(--accent)', fontSize: '1.05rem', marginBottom: '0.3rem' }}>
                  Overcoming Windows 8,191-Character Command Line Limit
                </h4>
                <p style={{ color: 'var(--ink-mid)', fontSize: '0.93rem', lineHeight: 1.75 }}>
                  Passing dozens of Java source files directly to javac crashes Windows Command Prompt. Brain AI dynamically generates a <code style={{ color: 'var(--accent)' }}>sources.txt</code> manifest and executes:
                </p>
                <div style={{ background: '#0e0f11', padding: '0.7rem 1rem', borderRadius: '6px', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--accent)', marginTop: '0.4rem' }}>
                  javac -d build\classes @sources.txt
                </div>
              </div>

              <div style={{ marginTop: '0.5rem' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', color: 'var(--accent)', fontSize: '1.05rem', marginBottom: '0.3rem' }}>
                  Standalone Native Bundling (jpackage & WiX)
                </h4>
                <p style={{ color: 'var(--ink-mid)', fontSize: '0.93rem', lineHeight: 1.75 }}>
                  Packages Java applications into standalone Windows <code style={{ color: 'var(--accent)' }}>.exe</code> installers complete with trimmed JRE modules (<code style={{ color: 'var(--accent)' }}>--add-modules java.desktop,java.base</code>) and WiX Toolset MSI installer wizards.
                </p>
              </div>
            </div>
          </div>

          {/* Section 9: Key Achievements & Metrics Table */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--rule)',
            borderRadius: '16px',
            padding: '2rem'
          }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', color: 'var(--ink)', marginBottom: '1rem' }}>
              9. Key System Metrics & Achievements
            </h2>

            <div style={{ overflowX: 'auto' }}>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '0.9rem',
                color: 'var(--ink-mid)'
              }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--rule)', textAlign: 'left' }}>
                    <th style={{ padding: '0.75rem', fontFamily: 'var(--font-heading)', color: 'var(--ink)' }}>Category</th>
                    <th style={{ padding: '0.75rem', fontFamily: 'var(--font-heading)', color: 'var(--ink)' }}>Metric / Feature</th>
                    <th style={{ padding: '0.75rem', fontFamily: 'var(--font-heading)', color: 'var(--ink)' }}>Engineering Benefit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--rule)' }}>
                    <td style={{ padding: '0.75rem', fontWeight: '600', color: 'var(--accent)' }}>Resilience</td>
                    <td style={{ padding: '0.75rem' }}>65s Rate-Limit Cooldown</td>
                    <td style={{ padding: '0.75rem' }}>Completely eliminates HTTP 429 failures across long code generations.</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--rule)' }}>
                    <td style={{ padding: '0.75rem', fontWeight: '600', color: 'var(--accent)' }}>Local Models</td>
                    <td style={{ padding: '0.75rem' }}>Native Ollama Integration</td>
                    <td style={{ padding: '0.75rem' }}>Enables 100% offline, privacy-preserving LLM execution (llama3, mistral, codellama).</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--rule)' }}>
                    <td style={{ padding: '0.75rem', fontWeight: '600', color: 'var(--accent)' }}>Enterprise RAG</td>
                    <td style={{ padding: '0.75rem' }}>Oracle 23ai Vector Search</td>
                    <td style={{ padding: '0.75rem' }}>Performs sub-second cosine similarity search over codebase embeddings (VECTOR_DISTANCE).</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--rule)' }}>
                    <td style={{ padding: '0.75rem', fontWeight: '600', color: 'var(--accent)' }}>CLI Flexibility</td>
                    <td style={{ padding: '0.75rem' }}>React / Ink Terminal UI</td>
                    <td style={{ padding: '0.75rem' }}>Rich interactive CLI with mascot banners, live timers, and single-select menus.</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--rule)' }}>
                    <td style={{ padding: '0.75rem', fontWeight: '600', color: 'var(--accent)' }}>Autonomy</td>
                    <td style={{ padding: '0.75rem' }}>Up to 10 Self-Repair Loops</td>
                    <td style={{ padding: '0.75rem' }}>Fixes missing imports, syntax errors, and type mismatches without user intervention.</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--rule)' }}>
                    <td style={{ padding: '0.75rem', fontWeight: '600', color: 'var(--accent)' }}>Speed</td>
                    <td style={{ padding: '0.75rem' }}>Parallel Sub-Task Thread Pool</td>
                    <td style={{ padding: '0.75rem' }}>Reduces multi-file project generation time by ~60%.</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--rule)' }}>
                    <td style={{ padding: '0.75rem', fontWeight: '600', color: 'var(--accent)' }}>Portability</td>
                    <td style={{ padding: '0.75rem' }}>Embedded H2 (AUTO_SERVER)</td>
                    <td style={{ padding: '0.75rem' }}>Zero external database dependencies; supports concurrent external SQL inspection.</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--rule)' }}>
                    <td style={{ padding: '0.75rem', fontWeight: '600', color: 'var(--accent)' }}>Academic</td>
                    <td style={{ padding: '0.75rem' }}>Research Swarm & Audit</td>
                    <td style={{ padding: '0.75rem' }}>Produces 20+ page publication-grade PDFs with formal mathematical notation.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 10: Summary & Conclusion */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--rule)',
            borderRadius: '16px',
            padding: '2rem'
          }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', color: 'var(--ink)', marginBottom: '0.8rem' }}>
              10. Summary & Conclusion
            </h2>
            <p style={{ color: 'var(--ink-mid)', fontSize: '0.98rem', lineHeight: 1.8 }}>
              Brain AI stands out as a unified, highly resilient platform designed by Ayushman Singh. By synthesizing autonomous multi-agent software assembly lines, React/Ink terminal interfaces, offline Ollama models, Oracle 23ai vector DBs, isometric dark design systems, embedded relational storage, and an academic research swarm, Brain AI redefines what desktop and CLI agent frameworks can achieve.
            </p>
          </div>

        </div>
      ) : (
        /* DEFAULT CASE STUDY VIEW FOR OTHER PROJECTS */
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          background: 'var(--bg-card)',
          border: '1px solid var(--rule)',
          borderRadius: '16px',
          padding: '2rem'
        }}>
          {project.projectImgLink && (
            <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '1rem', border: '1px solid var(--rule)' }}>
              <img src={project.projectImgLink} alt={project.projectName} style={{ width: '100%', maxHeight: '420px', objectFit: 'cover' }} />
            </div>
          )}

          {project.caseStudy && (
            <>
              <div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', color: 'var(--ink)', marginBottom: '0.5rem' }}>
                  Project Overview
                </h3>
                <p style={{ color: 'var(--ink-mid)', fontSize: '0.98rem', lineHeight: 1.75 }}>
                  {project.caseStudy.overview}
                </p>
              </div>

              <div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', color: 'var(--ink)', marginBottom: '0.6rem' }}>
                  Key Features & Architectural Highlights
                </h3>
                <ul style={{ paddingLeft: '1.2rem', color: 'var(--ink-mid)', fontSize: '0.95rem', lineHeight: 1.8 }}>
                  {project.caseStudy.keyFeatures.map((feat, idx) => (
                    <li key={idx} style={{ marginBottom: '0.4rem' }}>{feat}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', color: 'var(--ink)', marginBottom: '0.5rem' }}>
                  Technical Architecture
                </h3>
                <p style={{ color: 'var(--ink-mid)', fontSize: '0.98rem', lineHeight: 1.75 }}>
                  {project.caseStudy.architecture}
                </p>
              </div>
            </>
          )}

          <div style={{
            marginTop: '1rem',
            padding: '1rem 1.2rem',
            borderRadius: '8px',
            border: '1px dashed var(--rule)',
            background: 'var(--chip-bg)',
            fontSize: '0.88rem',
            color: 'var(--ink-light)',
            fontStyle: 'italic',
            textAlign: 'center'
          }}>
            ⚡ Full deep-dive technical metrics loaded from project repository.
          </div>
        </div>
      )}
    </div>
  );
};

export default CaseStudyView;
