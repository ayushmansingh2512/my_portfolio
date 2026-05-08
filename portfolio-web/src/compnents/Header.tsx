import React from 'react';
import cv from '../assets/CV/ayushman_singh.pdf';

const name: string = "Ayushman Singh";

interface LinkItem {
  label: string;
  icon: React.ReactNode;
  url: string;
  isDownlable: boolean;
}

const info: string[] = [
  "FULL-STACK DEVELOPER",
  "AI INTEGRATION ENGINEER",
  "DELHI NCR"
];

const tagline: string = info.join(" · ");

const about: string = "I build AI-powered systems and full-stack products — from multi-agent SDLC pipelines to voice-driven hiring platforms. Currently pursuing my MCA at KIET while shipping real tools that sit at the intersection of Java, Python, and large language models.";

const links: LinkItem[] = [
  {
    label: "Gmail",
    icon: (<svg viewBox="0 0 24 24"> <rect x="2" y="4" width="20" height="16" rx="2" /> <path d="m2 7 10 7 10-7" /> </svg>),
    url: "mailto:ayushmansingh2512@gmail.com",
    isDownlable: false
  },
  {
    label: "Github",
    icon: (<svg viewBox="0 0 24 24"> <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /> </svg>),
    url: "https://github.com/ayushmansingh2512/",
    isDownlable: false
  },
  {
    label: "LinkedIn",
    icon: (<svg viewBox="0 0 24 24"> <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /> <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /> </svg>),
    url: "https://www.linkedin.com/in/ayushmansingh2512/",
    isDownlable: false,
  },
{
    label: "LeetCode",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
        <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.833s.513 2.851 1.494 3.833l4.332 4.363c.981.981 2.336 1.495 3.832 1.495s2.851-.514 3.833-1.495l2.609-2.636c.514-.514.496-1.365-.039-1.9-.535-.535-1.386-.553-1.9-.038zm-1.076-5.488H5.909c-.727 0-1.316.59-1.316 1.316s.589 1.316 1.316 1.316h9.117c.727 0 1.316-.589 1.316-1.316s-.589-1.316-1.316-1.316z"/>
      </svg>
    ),
    url: "https://leetcode.com/u/ayushmansingh2512/",
    isDownlable: false
  },
  {
    label: "Download CV",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
    url: cv,
    isDownlable: true
  }
];

const Header: React.FC = () => {
  const linkedItem = links.map((link: LinkItem, index: number) => {
    const isExternal = link.url.startsWith("http");
    const linkClassName = link.isDownlable ? "cv-btn" : "link-item";

    return (
      <a
        key={index}
        href={link.url}
        className={linkClassName}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
        download={link.isDownlable ? "ayushman_singh_cv" : undefined}
      >
        <span>{link.icon}</span>
        <span>{link.label}</span>
      </a>
    );
  });

  return (
    <header className="header">
      <h1 className="name">{name}</h1>
      <p className="tagline">{tagline}</p>
      <p className="bio">{about}</p>
      <nav className="links">
        {linkedItem}
      </nav>
    </header>
  );
};

export default Header;
