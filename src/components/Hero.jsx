function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-badge">
          <span></span>
          Available for opportunities
        </div>

        <p className="hero-small-title">
          FULL STACK DEVELOPER
        </p>

        <h1>
          Hi, I'm <span>Aniket.</span>
        </h1>

        <h2>
          Building clean and modern
          <br />
          web experiences.
        </h2>

        <p className="hero-description">
          I'm a passionate Full Stack Developer focused
          on building responsive, user-friendly web
          applications using React, Angular, Node.js,
          Express.js and MongoDB.
        </p>

        <div className="hero-buttons">
          <a href="/projects" className="primary-button">
            View My Work
            <span className="button-arrow">↗</span>
          </a>

          <a
            href="/Aniket-Ghorpade-Resume.pdf"
            className="secondary-button"
            download="Aniket-Ghorpade-Resume.pdf"
          >
            Download CV
            <span className="button-arrow">↓</span>
          </a>
        </div>

        <div className="hero-social">
          <a
            href="https://github.com/ghorpadeaniket067-collab"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/aniket-ghorpade-0a142a3a3"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>

      <div className="hero-image-container">
        <div className="hero-orbit orbit-one"></div>
        <div className="hero-orbit orbit-two"></div>

        <span className="orbit-dot dot-one"></span>
        <span className="orbit-dot dot-two"></span>

        <div className="hero-circle"></div>

        <div className="hero-image">
          <img
            src="/images/profile.jpg"
            alt="Aniket Ghorpade"
          />
        </div>

        <div className="floating-card card-one">
          <div className="floating-icon">⚛</div>

          <div>
            <strong>React + Node</strong>
            <span>Full Stack Development</span>
          </div>
        </div>

        <div className="floating-card card-two">
          <div className="floating-icon">&lt;/&gt;</div>

          <div>
            <strong>Clean Code</strong>
            <span>Simple & Scalable</span>
          </div>
        </div>

        <div className="hero-note">
          <span>✦</span>
          Always learning,
          <br />
          always building.
        </div>

        <div className="hero-dots"></div>
      </div>

      <div className="hero-bottom">
        <div className="hero-stat">
          <div className="hero-stat-icon">◇</div>

          <div>
            <strong>5+</strong>
            <span>Technologies</span>
            <p>Frontend, Backend & More</p>
          </div>
        </div>

        <div className="hero-stat">
          <div className="hero-stat-icon">ϟ</div>

          <div>
            <strong>6+</strong>
            <span>Projects Built</span>
            <p>Practical Development</p>
          </div>
        </div>

        <div className="hero-stat">
          <div className="hero-stat-icon target-icon">◎</div>

          <div>
            <strong>Always</strong>
            <span>Learning</span>
            <p>Improving Every Day</p>
          </div>
        </div>

        <div className="hero-stat">
          <div className="hero-stat-icon">☆</div>

          <div>
            <strong>Open</strong>
            <span>To Opportunities</span>
            <p>Let's Build Together</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;