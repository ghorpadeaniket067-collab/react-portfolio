function About() {
  return (
    <section className="about-page" id="about">
      <div className="about-hero">
        <div className="about-intro">
          <p className="section-label">
            GET TO KNOW ME
          </p>

          <h1>
            About <span>Me</span>
          </h1>

          <p className="about-lead">
            I'm Aniket Ghorpade, a passionate Full Stack
            Developer from Pune who enjoys building clean,
            responsive and user-friendly web applications.
          </p>

          <div className="about-buttons">
            <a
              href="/Aniket-Ghorpade-Resume.pdf"
              className="primary-button"
              download="Aniket-Ghorpade-Resume.pdf"
            >
              Download CV
              <span>↓</span>
            </a>

            <a
              href="/contact"
              className="secondary-button"
            >
              Let's Talk
              <span>→</span>
            </a>
          </div>
        </div>

        <div className="about-photo-area">
          <div className="about-photo-ring ring-one"></div>
          <div className="about-photo-ring ring-two"></div>

          <div className="about-photo">
            <img
              src="/images/profile.jpg"
              alt="Aniket Ghorpade"
            />
          </div>

          <span className="about-photo-dot dot-one"></span>
          <span className="about-photo-dot dot-two"></span>

          <div className="about-photo-card">
            <strong>Full Stack</strong>
            <span>MERN + MEAN</span>
          </div>
        </div>
      </div>

      <div className="about-content">
        <div className="about-story">
          <p className="section-label">
            MY JOURNEY
          </p>

          <h2>
            Building web experiences with
            <span> passion & purpose.</span>
          </h2>

          <p>
            My core technologies include React.js,
            Angular, JavaScript, Node.js, Express.js
            and MongoDB. I also work with Git, GitHub,
            Postman and REST APIs.
          </p>

          <p>
            As a fresher, I'm looking for an entry-level
            opportunity where I can apply my skills,
            work on real-world projects and continue
            growing as a professional developer.
          </p>
        </div>

        <div className="about-details">
          <div className="about-detail-card">
            <span>NAME</span>
            <strong>Aniket Ghorpade</strong>
          </div>

          <div className="about-detail-card">
            <span>LOCATION</span>
            <strong>Pune, Maharashtra</strong>
          </div>

          <div className="about-detail-card">
            <span>EDUCATION</span>
            <strong>BCA</strong>
          </div>

          <div className="about-detail-card">
            <span>ROLE</span>
            <strong>Full Stack Developer</strong>
          </div>
        </div>
      </div>

      <div className="about-stats">
        <div>
          <strong>5+</strong>
          <span>Technologies</span>
        </div>

        <div>
          <strong>6+</strong>
          <span>Projects Built</span>
        </div>

        <div>
          <strong>MERN</strong>
          <span>Full Stack</span>
        </div>

        <div>
          <strong>∞</strong>
          <span>Learning Mindset</span>
        </div>
      </div>
    </section>
  );
}

export default About;