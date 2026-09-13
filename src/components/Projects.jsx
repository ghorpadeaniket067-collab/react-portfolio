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
        "A full-stack job portal application with user authentication, job opportunities and account management.",
      technologies: [
        "Angular",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
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
      github:
        "https://github.com/ghorpadeaniket067-collab/ShopNest",
      live:
        "https://shop-nest-gk8o19hsf-ghorpadeaniket067-collabs-projects.vercel.app/",
    },
    {
      number: "03",
      title: "Food Ordering",
      subtitle: "Food Ordering Website",
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
            Things I've<span>Built</span>
          </h1>

          <p className="projects-intro">
            A collection of practical web applications built
            using MERN, MEAN and modern frontend technologies.
            Each project helped me improve my development
            and problem-solving skills.
          </p>

          <div className="project-process">
            <span>Build</span>
            <span>→</span>
            <span>Test</span>
            <span>→</span>
            <span>Deploy</span>
            <span>→</span>
            <span>Learn</span>
          </div>
        </div>

        <div className="projects-hero-visual">
          <div className="project-code-window">
            <span>&lt;</span>
            <strong>/&gt;</strong>
          </div>

          <div className="project-visual-tags">
            <span>Build</span>
            <span>Test</span>
            <span>Deploy</span>
            <span>Learn</span>
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
              />
            </div>

            <div className="project-card-content">
              <h2>{project.title}</h2>

              <h3>{project.subtitle}</h3>

              <p>{project.description}</p>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="github-button"
                >
                  <span>●</span>
                  GitHub ↗
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="live-button"
                >
                  Live Demo
                  <span>→</span>
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
            <strong>Real World</strong>
            <span>Applications</span>
            <small>Learning Through Building</small>
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