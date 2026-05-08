const education = [
  {
    degree: "Master of Computer Applications",
    year: "Sept 2025 - Present",
    institute: "KIET Deemed to be University, Delhi NCR",
    courses: "Web Development, Agentic AI Development, Advanced Java"
  },
  {
    degree: "Bachelor of Computer Applications",
    year: "Sept 2022 - Aug 2025",
    institute: "Deen Dayal Upadhyaya Gorakhpur University, Gorakhpur",
    courses: "Data Structures and Algorithms, OOP, DBMS (SQL), C++"
  }
];

const Education = () => {
  return (
    <section className="education-section">
      <h3 className="section-label">Education</h3>
      <div className="education-list">
        {education.map((item) => (
          <div className="education-entry" key={item.degree}>
            <div className="education-header">
              <span className="education-degree">{item.degree}</span>
              <span className="education-year">{item.year}</span>
            </div>
            <p className="education-inst">{item.institute}</p>
            <p className="education-courses">{item.courses}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
