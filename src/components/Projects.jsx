
function Projects() {
  const projects = [
    {
      number: "01",
      title: "Job Portal",
      subtitle: "Career Opportunities Platform",
      type: "MEAN STACK",
      color: "blue",
      image: "job-portal.png",
      description:
        "A full-stack job portal application built to help users explore job opportunities and manage their accounts.",
      technologies: [
        "Angular",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
      ],
      features: [
        "User registration and login",
        "Browse job opportunities",
        "Account management",
        "Full-stack MEAN architecture",
      ],
      technicalDetails: [
        { label: "Frontend", value: "Angular" },
        { label: "Backend", value: "Node.js + Express.js" },
        { label: "Database", value: "MongoDB" },
        { label: "Authentication", value: "JWT" },
      ],
      github:
        "https://github.com/ghorpadeaniket067-collab/mean-job-portal",
      live: "https://mean-job-portal.vercel.app/",
    },
    {
      number: "02",
      title: "ShopNest",
      subtitle: "MERN E-commerce Platform",
      type: "MERN STACK",
      color: "purple",
      image: "shopnest.png",
      description:
        "A modern e-commerce application with product browsing, search, cart, wishlist and user authentication.",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "JWT",
      ],
      features: [
        "Browse and search products",
        "Shopping cart functionality",
        "Wishlist functionality",
        "User registration and login",
      ],
      technicalDetails: [
        { label: "Frontend", value: "React.js" },
        { label: "Backend", value: "Node.js + Express.js" },
        { label: "Database", value: "MongoDB + Mongoose" },
        { label: "Authentication", value: "JWT" },
      ],
      github:
        "https://github.com/ghorpadeaniket067-collab/ShopNest",
      live:
        "https://shop-nest-gk8o19hsf-ghorpadeaniket067-collabs-projects.vercel.app/",
    },
    {
      number: "03",
      title: "Food Ordering",
      subtitle: "Responsive Food Ordering Website",
      type: "REACT.JS",
      color: "orange",
      image: "food-ordering.png",
      description:
        "A responsive food ordering website with food browsing, category navigation, cart functionality and client-side data handling.",
      technologies: [
        "React.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "React Router",
        "LocalStorage",
      ],
      features: [
        "Browse food items",
        "Navigate food categories",
        "Cart functionality",
        "Client-side data handling",
      ],
      technicalDetails: [
        { label: "Frontend", value: "React.js" },
        { label: "Language", value: "JavaScript ES6+" },
        { label: "Navigation", value: "React Router" },
        { label: "Storage", value: "LocalStorage" },
      ],
      github:
        "https://github.com/ghorpadeaniket067-collab/food-ordering-frontend",
      live:
        "https://food-ordering-frontend-mocha.vercel.app/",
    },
  ];

  return (
    <section className="projects-page" id="projects">
      <div className="projects-hero">
        <div className="projects-hero-content">
          <p className="section-label">MY PROJECTS</p>

          <h1>
            Things I've <span>Built</span>
          </h1>

          <p className="projects-intro">
            Explore my web development projects, technical
            skills and practical experience with MERN,
            MEAN and modern frontend technologies.
          </p>

          <div className="project-process">
            <span>Plan</span>
            <span>→</span>
            <span>Build</span>
            <span>→</span>
            <span>Test</span>
            <span>→</span>
            <span>Deploy</span>
          </div>
        </div>

        <div className="projects-hero-visual">
          <div className="project-code-window">
            <span>&lt;</span>
            <strong>/&gt;</strong>
          </div>

          <div className="project-visual-tags">
            <span>React</span>
            <span>Angular</span>
            <span>Node.js</span>
            <span>MongoDB</span>
          </div>

          <div className="projects-visual-note">
            Ideas
            <br />
            Into
            <br />
            Reality
          </div>
        </div>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article
            className={`project-card project-${project.color}`}
            key={project.title}
          >
            <div className="project-card-top">
              <span className="project-number">
                {project.number}
              </span>

              <span className="project-type">
                {project.type}
              </span>
            </div>

            <div className="project-preview">
              <img
                src={`/images/projects/${project.image}`}
                alt={`${project.title} project screenshot`}
                loading="lazy"
              />
            </div>

            <div className="project-card-content">
              <h2>{project.title}</h2>
              <h3>{project.subtitle}</h3>
              <p>{project.description}</p>

              <div className="project-showcase-section">
                <h4>Key Features</h4>

                <ul className="project-features">
                  {project.features.map((feature) => (
                    <li key={feature}>
                      <span aria-hidden="true">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="project-showcase-section">
                <h4>Technical Overview</h4>

                <dl className="project-technical-details">
                  {project.technicalDetails.map((detail) => (
                    <div key={detail.label}>
                      <dt>{detail.label}</dt>
                      <dd>{detail.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="project-showcase-section">
                <h4>Technologies Used</h4>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="github-button"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  GitHub ↗
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="live-button"
                  aria-label={`Open ${project.title} live demo`}
                >
                  Live Demo <span>→</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="projects-bottom">
        <div>
          <div className="projects-bottom-icon">♜</div>
          <div>
            <strong>3</strong>
            <span>Featured Projects</span>
            <small>Practical Development</small>
          </div>
        </div>

        <div>
          <div className="projects-bottom-icon">
            &lt;/&gt;
          </div>
          <div>
            <strong>MERN + MEAN</strong>
            <span>Full Stack Development</span>
            <small>Frontend + Backend</small>
          </div>
        </div>

        <div>
          <div className="projects-bottom-icon">◆</div>
          <div>
            <strong>Live</strong>
            <span>Project Demos</span>
            <small>Explore My Work</small>
          </div>
        </div>

        <div>
          <div className="projects-bottom-icon">↗</div>
          <div>
            <strong>Always</strong>
            <span>Learning</span>
            <small>Building Better Solutions</small>
          </div>
        </div>
      </div>

      <div className="projects-final-quote">
        “Code today, a better tomorrow.”
      </div>
    </section>
  );
}

export default Projects;
