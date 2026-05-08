import React, { useState } from 'react';

// Define our types for better safety
type SkillCategory =
  | 'Languages'
  | 'AI Tools'
  | 'Databases & DevOps'
  | 'Architecture & Auth'
  | 'Developer & AI Tools';

interface SkillData {
  desc: string;
  chips: string[];
}

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<SkillCategory>('Languages');

  const skillMap: Record<SkillCategory, SkillData> = {
    'Languages': {
      desc: "Programming languages and core technologies",
      chips: [
        "Java (JavaFX, JDBC, Multi-threading)",
        "Python (FastAPI)",
        "JavaScript (React.js, Vite)",
        "SQL",
        "Bash",
        "PowerShell"
      ]
    },
    'AI Tools': {
      desc: "Agentic workflows, LLM integration, and AI tooling",
      chips: [
        "Multi-Agent Orchestration",
        "LLM Integration (Google Gemini)",
        "Computer Vision (OpenCV)",
        "NLP/Parsing (PyPDF2)",
        "STT/TTS"
      ]
    },
    'Databases & DevOps': {
      desc: "Data stores, deployment, and delivery",
      chips: ["Oracle XE", "Git", "Docker", "Vercel", "Render"]
    },
    'Architecture & Auth': {
      desc: "System architecture and security patterns",
      chips: [
        "JWT",
        "OAuth 2.0",
        "API Key Failover/Rotation",
        "Exponential Backoff",
        "Role-Based System Architecture"
      ]
    },
    'Developer & AI Tools': {
      desc: "Developer productivity and AI tools",
      chips: [
        "Google Antigravity",
        "Cursor",
        "Gemini CLI",
        "Neovim",
        "Postman",
        "Google Colab"
      ]
    },
    
  };

  return (
    <section className="skills-section">
      <h3 className="section-label">Skills</h3>

      {/* Radio Filter Logic */}
      <div className="skill-filter">
        {(Object.keys(skillMap) as SkillCategory[]).map((cat) => (
          <React.Fragment key={cat}>
            <input 
              type="radio" 
              id={cat} 
              name="skill-tab" 
              checked={activeTab === cat}
              onChange={() => setActiveTab(cat)}
            />
            <label htmlFor={cat}>{cat}</label>
          </React.Fragment>
        ))}
      </div>

      {/* Dynamic Content Panel */}
      <div className="skill-panel">
        <p className="skill-panel-desc">{skillMap[activeTab].desc}</p>
        <div className="skill-chips">
          {skillMap[activeTab].chips.map((chip) => (
            <span key={chip} className="chip">{chip}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;