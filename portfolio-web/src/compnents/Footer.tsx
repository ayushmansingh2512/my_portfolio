const Footer = () => {
  return (
    <section className="contact-cta">
      <h3 className="section-label">Let's Connect</h3>
      <p className="contact-cta-line">
        Let's build something →{' '}
        <a href="mailto:ayushmansingh2512@gmail.com">ayushmansingh2512@gmail.com</a>
      </p>
      <nav className="contact-social">
        <a href="https://github.com/ayushmansingh2512" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://linkedin.com/in/ayushmansingh2512" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href="https://ayushman-singh-portfolio.vercel.app" target="_blank" rel="noreferrer">
          Portfolio
        </a>
        <a href="tel:+916388529263">+91 6388529263</a>
      </nav>
      <footer className="footer">
        <span className="footer-name">Ayushman Singh</span>
        <span className="footer-note">Delhi NCR · 2026</span>
      </footer>
    </section>
  );
};

export default Footer;
