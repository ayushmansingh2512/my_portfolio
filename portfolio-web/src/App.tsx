import { useState, useEffect } from "react";
import Header from "./compnents/Header";
import SectionDivider from "./compnents/SectionDivider";
import CurrentlyWorking from "./compnents/CurrentlyWorking";
import Experience from "./compnents/Experience";
import Skills from "./compnents/Skills";
import Education from "./compnents/Education";
import Footer from "./compnents/Footer";

const App = () => {
  // Detect initial preference from OS
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [dark, setDark] = useState<boolean>(prefersDark);

  // Apply / remove .dark and .light classes on <html>
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

      <Header />
      <SectionDivider />
      <CurrentlyWorking />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Education />
      <SectionDivider />
      <Footer />
    </div>
  );
};

export default App;
