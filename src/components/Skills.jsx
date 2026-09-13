function Skills() {
  const skillGroups = [
    {
      title: "Frontend Development",
      description: "Building responsive and modern user interfaces.",
      icon: "▣",
      skills: [
        ["HTML5", "95%", "5"],
        ["CSS3", "90%", "3"],
        ["JavaScript", "85%", "JS"],
        ["React.js", "80%", "⚛"],
        ["Angular", "75%", "A"],
        ["Bootstrap", "80%", "B"],
      ],
    },
    {
      title: "Backend Development",
      description: "Building server-side applications and APIs.",
      icon: "⚙",
      skills: [
        ["Node.js", "85%", "N"],
        ["Express.js", "80%", "ex"],
        ["REST APIs", "80%", "API"],
        ["JWT", "75%", "JWT"],
        ["Authentication", "70%", "✓"],
      ],
    },
    {
      title: "Database Management",
      description: "Working with NoSQL and relational databases.",
      icon: "▤",
      skills: [
        ["MongoDB", "85%", "◆"],
        ["Mongoose", "80%", "M"],
        ["MySQL", "70%", "SQL"],
      ],
    },
    {
      title: "Tools & Others",
      description: "Tools used to develop, test and deploy applications.",
      icon: "⚒",
      skills: [
        ["Git", "90%", "◆"],
        ["GitHub", "85%", "●"],
        ["Postman", "80%", "P"],
        ["VS Code", "90%", "VS"],
        ["npm", "80%", "npm"],
        ["Vercel", "75%", "▲"],
      ],
    },
  ];

  const otherSkills = [
    "TypeScript",
    "ES6+",
    "Axios",
    "Nodemon",
    "React Router",
    "Responsive Design",
  ];

  return (
    <section className="skills-page" id="skills">
      <div className="skills-hero">
        <div className="skills-hero-content">
          <p className="section-label">MY SKILLS</p>

          <h1>
            Technologies I
            <span>Work With</span>
          </h1>

          <p className="skills-intro">
            I have hands-on experience with modern web
            technologies to build responsive, scalable and
            user-friendly applications. I am always excited
            to learn new tools and improve my skills.
          </p>

          <div className="skills-process">
            <div>
              <span className="process-icon">ϟ</span>
              <div>
                <strong>Learn</strong>
                <small>New Technologies</small>
              </div>
            </div>

            <div>
              <span className="process-icon">&lt;/&gt;</span>
              <div>
                <strong>Build</strong>
                <small>Real Projects</small>
              </div>
            </div>

            <div>
              <span className="process-icon">▥</span>
              <div>
                <strong>Improve</strong>
                <small>Every Day</small>
              </div>
            </div>
          </div>
        </div>

        <div className="skills-hero-visual">
          <div className="skills-code-card">
            <div className="code-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="code-window">
              <span>&lt;</span>
              <strong>/&gt;</strong>
            </div>
          </div>

          <div className="skills-visual-note">
            <strong>Code</strong>
            <strong>Build</strong>
            <strong>Grow</strong>
            <strong>Repeat</strong>
          </div>

          <div className="skills-quote">
            <span>●</span>
            <p>
              Turning ideas into
              <br />
              real-world solutions.
            </p>
          </div>
        </div>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.title}>
            <div className="skill-card-title">
              <div className="skill-icon">{group.icon}</div>

              <div>
                <h2>{group.title}</h2>
                <p>{group.description}</p>
              </div>
            </div>

            <div className="skill-progress-list">
              {group.skills.map(([name, level, icon]) => (
                <div className="skill-progress" key={name}>
                  <div className="skill-progress-content">
                    <span className="tech-icon">{icon}</span>

                    <div className="skill-progress-main">
                      <div className="skill-progress-top">
                        <span>{name}</span>
                        <strong>{level}</strong>
                      </div>

                      <div className="progress-track">
                        <div
                          className="progress-bar"
                          style={{ width: level }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {group.title === "Database Management" && (
              <div className="skill-card-message">
                <span>▤</span>

                <div>
                  <strong>Data drives better decisions.</strong>
                  <small>Build. Store. Scale.</small>
                </div>
              </div>
            )}
          </article>
        ))}
      </div>

      <div className="other-skills">
        <p className="section-label">OTHER SKILLS</p>

        <div className="other-skills-list">
          {otherSkills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </div>

      <div className="skills-bottom">
        <div className="skills-bottom-item">
          <div className="skills-bottom-icon">◇</div>

          <div>
            <strong>5+</strong>
            <span>Core Technologies</span>
            <small>Frontend, Backend & More</small>
          </div>
        </div>

        <div className="skills-bottom-item">
          <div className="skills-bottom-icon">&lt;/&gt;</div>

          <div>
            <strong>MERN + MEAN</strong>
            <span>Full Stack Development</span>
            <small>Hands-on Experience</small>
          </div>
        </div>

        <div className="skills-bottom-item">
          <div className="skills-bottom-icon">♜</div>

          <div>
            <strong>6+</strong>
            <span>Projects Built</span>
            <small>Real World Applications</small>
          </div>
        </div>

        <div className="skills-bottom-item">
          <div className="skills-bottom-icon">↗</div>

          <div>
            <strong>Always</strong>
            <span>Learning</span>
            <small>Exploring New Technologies</small>
          </div>
        </div>
      </div>

      <div className="skills-final-quote">
        “Skills make you employable. Attitude makes you unstoppable.”
      </div>
    </section>
  );
}

export default Skills;