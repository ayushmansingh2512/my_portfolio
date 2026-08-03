import { useState, useEffect } from "react";
import Header from "./compnents/Header";
import SectionDivider from "./compnents/SectionDivider";
import CurrentlyWorking from "./compnents/CurrentlyWorking";
import Experience, { type Project } from "./compnents/Experience";
import Skills from "./compnents/Skills";
import Education from "./compnents/Education";
import Footer from "./compnents/Footer";
import PageTransition from "./compnents/PageTransition";
import CaseStudyView from "./compnents/CaseStudyView";

const App = () => {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [dark, setDark] = useState<boolean>(prefersDark);
  const [activeCaseStudy, setActiveCaseStudy] = useState<Project | null>(null);

  useEffect(() => {
    if ((window as any).htmx) {
      (window as any).htmx.process(document.body);
    }
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    if (dark) {
      html.classList.add("dark");
      html.classList.remove("light");
    } else {
      html.classList.add("light");
      html.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div>
      {/* Floating theme toggle */}
      <button
        className="theme-toggle"
        onClick={() => setDark((d) => !d)}
        aria-label="Toggle dark / light mode"
        title={dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        {dark ? "☀️" : "🌙"}
      </button>

      <PageTransition triggerKey={activeCaseStudy ? `case-study-${activeCaseStudy.projectId}` : 'main-portfolio-page'}>
        {activeCaseStudy ? (
          /* FULL-SCREEN CASE STUDY VIEW — ONLY CASE STUDY CONTENT AND BACK BUTTON ARE VISIBLE */
          <CaseStudyView 
            project={activeCaseStudy} 
            onClose={() => setActiveCaseStudy(null)} 
          />
        ) : (
          /* HOME PORTFOLIO VIEW */
          <>
            <Header />
            <SectionDivider />
            <CurrentlyWorking />
            <SectionDivider />
            <Experience onSelectProject={setActiveCaseStudy} />
            <SectionDivider />
            <Skills />
            <SectionDivider />
            <Education />
            <SectionDivider />
            <Footer />
          </>
        )}
      </PageTransition>
    </div>
  );
};

export default App;
