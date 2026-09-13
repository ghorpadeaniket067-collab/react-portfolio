function Experience() {
  const technologies = [
    "React.js",
    "Angular",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT",
    "Git & GitHub",
    "Postman",
  ];

  const approachSteps = [
    {
      number: "01",
      title: "Learn",
      description: "Understand new concepts and technologies.",
      icon: "♧",
      className: "learn",
    },
    {
      number: "02",
      title: "Build",
      description: "Create practical projects and solve real problems.",
      icon: "</>",
      className: "build",
    },
    {
      number: "03",
      title: "Improve",
      description: "Learn from every project and keep getting better.",
      icon: "▥",
      className: "improve",
    },
  ];

  return (
    <section className="experience-page" id="experience">
      {/* Hero Section */}
      <div className="experience-hero">
        <div className="experience-hero-content">
          <p className="section-label">MY EXPERIENCE</p>

          <h1>
            Learning & Growing
            <span>Every Day.</span>
          </h1>

          <p className="experience-intro">
            I believe every experience, project and challenge helps me grow as
            a developer. I am always eager to learn new technologies, build
            practical solutions and improve my skills.
          </p>
        </div>

        <div className="experience-hero-visual">
          <div className="learning-card learn-card">
            <span className="learning-icon">▣</span>
            <div>
              <strong>Learn</strong>
              <small>New Technologies</small>
            </div>
          </div>

          <div className="learning-card build-card">
            <span className="learning-icon">&lt;/&gt;</span>
            <div>
              <strong>Build</strong>
              <small>Real Projects</small>
            </div>
          </div>

          <div className="learning-card improve-card">
            <span className="learning-icon">▥</span>
            <div>
              <strong>Improve</strong>
              <small>Every Day</small>
            </div>
          </div>

          <div className="experience-code-card">
            <span>&lt;</span>
            <strong>/&gt;</strong>
          </div>

          <div className="experience-note">
            Better
            <br />
            Developers
            <br />
            Build
            <br />
            Brighter
            <br />
            Futures!
          </div>
        </div>
      </div>

      {/* Main Experience Area */}
      <div className="experience-main">
        {/* Professional Experience */}
        <div className="professional-experience">
          <div className="experience-section-heading">
            <div className="experience-heading-icon purple-icon">▣</div>

            <div>
              <h2>Professional Experience</h2>
              <p>My learning journey in the real world</p>
            </div>
          </div>

          <div className="experience-timeline">
            <div className="timeline-side">
              <span className="timeline-dot">●</span>
              <span className="timeline-line"></span>
            </div>

            <div className="experience-date">
              <strong>
                Apr 2025
                <br />— Jan 2026
              </strong>

              <span>9 Months</span>
            </div>

            <article className="experience-card">
              <div className="experience-card-header">
                <div>
                  <h3>Full Stack Developer Trainee</h3>

                  <p className="experience-company">
                    <span>⌖</span>
                    The Full Stack Guru, Pune
                  </p>
                </div>

                <span className="training-badge">Training</span>
              </div>

              <p className="experience-description">
                Completed full stack development training with hands-on
                projects and practical exposure to modern web technologies.
              </p>

              <div className="experience-points">
                <p>
                  <span>✓</span>
                  Developed multiple web applications using React.js and
                  Angular.
                </p>

                <p>
                  <span>✓</span>
                  Worked on backend development with Node.js and Express.js.
                </p>

                <p>
                  <span>✓</span>
                  Gained experience with MongoDB and database integration.
                </p>

                <p>
                  <span>✓</span>
                  Built and deployed real-world projects.
                </p>

                <p>
                  <span>✓</span>
                  Learned best practices like Git, API integration and
                  deployment.
                </p>
              </div>

              <div className="technology-section">
                <h4>Technologies Used</h4>

                <div className="experience-technologies">
                  {technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* My Approach */}
        <aside className="experience-approach">
          <div className="experience-section-heading">
            <div className="experience-heading-icon blue-icon">◎</div>

            <div>
              <h2>My Approach</h2>
              <p>How I learn, build and grow</p>
            </div>
          </div>

          <div className="approach-list">
            {approachSteps.map((step) => (
              <div
                className={`approach-card approach-${step.className}`}
                key={step.number}
              >
                <div className="approach-number">{step.number}</div>

                <div className="approach-content">
                  <strong>{step.title}</strong>
                  <p>{step.description}</p>
                </div>

                <div className="approach-icon">{step.icon}</div>
              </div>
            ))}
          </div>

          <div className="experience-quote-card">
            <span className="quote-mark">“</span>

            <p>
              Small steps every day
              <br />
              lead to big results.
            </p>

            <span className="quote-line"></span>
          </div>
        </aside>
      </div>

      {/* Bottom Stats */}
      <div className="experience-bottom">
        <div className="experience-stat">
          <div className="stat-icon blue-stat">♙</div>

          <div>
            <strong>9 Months</strong>
            <span>Training Duration</span>
            <small>Apr 2025 — Jan 2026</small>
          </div>
        </div>

        <div className="experience-stat">
          <div className="stat-icon purple-stat">&lt;/&gt;</div>

          <div>
            <strong>Full Stack</strong>
            <span>Development</span>
            <small>MERN + MEAN</small>
          </div>
        </div>

        <div className="experience-stat">
          <div className="stat-icon green-stat">▥</div>

          <div>
            <strong>6+</strong>
            <span>Projects Built</span>
            <small>Hands-on Experience</small>
          </div>
        </div>

        <div className="experience-stat">
          <div className="stat-icon orange-stat">★</div>

          <div>
            <strong>Always</strong>
            <span>Learning</span>
            <small>New Technologies</small>
          </div>
        </div>
      </div>

      {/* Final Quote */}
      <div className="experience-final-quote">
        <span>“Experience is the best teacher.”</span>
        <i></i>
      </div>
    </section>
  );
}

export default Experience;