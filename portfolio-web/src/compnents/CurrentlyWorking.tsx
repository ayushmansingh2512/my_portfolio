import React from 'react';

const researchTitle = "Converged Vector DB Architectures in Edge-Cloud Clinical AI";
const researchSummary = "Formulated an air-gapped clinical AI pipeline evaluating Oracle Database 23ai within the Self-Evolving Healthcare Intelligence Framework. Features local SLM de-identification (Llama 3.2 3B), an automated Recursive Self-Improvement (RSI) loop (DeepSeek-R1), and sub-millisecond point-of-care vector matching.";

const CurrentlyWorking: React.FC = () => {
  return (
    <div className="currently-working">
      <h3 className="section-label">Currently Working</h3>
      <div className="inside-working">
        <div className="now-dot"></div>
        <div className="active">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span className="now-label" style={{ 
              fontWeight: 600, 
              color: 'var(--accent)', 
              fontSize: '0.78rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase'
            }}>
              Ongoing Research Paper
            </span>
          </div>
          <p className="now-title" style={{ 
            fontFamily: 'var(--font-heading)',
            fontWeight: 600, 
            fontSize: '1.05rem', 
            color: 'var(--ink)',
            lineHeight: 1.35
          }}>
            {researchTitle}
          </p>
          <p className="now-writing" style={{ fontSize: '0.92rem', color: 'var(--ink-mid)' }}>
            {researchSummary}
          </p>
          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginTop: '0.4rem' }}>
            {["Oracle 23ai", "Llama 3.2 3B", "DeepSeek-R1", "Edge-Cloud AI", "HIPAA Compliance"].map((tag, idx) => (
              <span key={idx} style={{
                fontSize: '0.7rem',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: 'var(--ink-mid)',
                border: '1px solid var(--rule)',
                padding: '0.2rem 0.5rem',
                borderRadius: '4px',
                background: 'var(--chip-bg)'
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentlyWorking;
