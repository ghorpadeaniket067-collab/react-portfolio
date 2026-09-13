function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <h2>
            Aniket<span>.</span>
          </h2>

          <p>Full Stack Developer</p>
        </div>

        <div className="footer-message">
          <span></span>
          <p>Code. Learn. Build. Repeat.</p>
        </div>

        <div className="footer-social">
          <a
            href="https://github.com/ghorpadeaniket067-collab"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/aniket-ghorpade-0a142a3a3"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>

          <a
            href="mailto:aniketghorpade1860@gmail.com"
            aria-label="Email"
          >
            Email
          </a>
        </div>

        <div className="footer-copy">
          <p>
            © 2026 Aniket Ghorpade. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;