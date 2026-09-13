function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const message = form.message.value;

    const mailSubject = encodeURIComponent(subject);
    const mailBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    window.location.href =
      `mailto:aniketghorpade1860@gmail.com?subject=${mailSubject}&body=${mailBody}`;
  };

  const contactDetails = [
    {
      icon: "@",
      title: "Email",
      value: "aniketghorpade1860@gmail.com",
      note: "Feel free to drop an email anytime",
      className: "email",
    },
    {
      icon: "☎",
      title: "Phone",
      value: "+91 93228 46359",
      note: "Available for calls and WhatsApp",
      className: "phone",
    },
    {
      icon: "⌖",
      title: "Location",
      value: "Pune, Maharashtra, India",
      note: "Open to remote and on-site opportunities",
      className: "location",
    },
  ];

  const highlights = [
    {
      icon: "▣",
      title: "Open to Work",
      text: "Excited for new opportunities",
      className: "blue",
    },
    {
      icon: "</>",
      title: "Full Stack Developer",
      text: "MERN + MEAN",
      className: "purple",
    },
    {
      icon: "★",
      title: "Passionate",
      text: "About Building Solutions",
      className: "green",
    },
    {
      icon: "⌖",
      title: "Pune, India",
      text: "Available for Remote & On-site Roles",
      className: "orange",
    },
  ];

  return (
    <section className="contact-page" id="contact">
      {/* Hero */}
      <div className="contact-hero">
        <div className="contact-hero-content">
          <p className="section-label">GET IN TOUCH</p>

          <h1>
            Let's Work
            <span>Together.</span>
          </h1>

          <p className="contact-intro">
            I'm always open to discussing new opportunities, exciting
            projects or just a friendly chat about technology. Feel free
            to reach out, I'll get back to you as soon as possible!
          </p>
        </div>

        <div className="contact-hero-visual">
          <div className="connect-card">
            <span>↗</span>
            <strong>Let's<br />Connect</strong>
          </div>

          <div className="contact-paper-plane">➤</div>

          <div className="contact-opportunity opportunity-blue">
            <span>▣</span>
            New Opportunities
          </div>

          <div className="contact-opportunity opportunity-green">
            <span>♧</span>
            Exciting Projects
          </div>

          <div className="contact-opportunity opportunity-purple">
            <span>♟</span>
            Friendly Conversations
          </div>

          <p className="contact-note">
            Great<br />
            Ideas<br />
            Start<br />
            with a<br />
            Message!
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="contact-content">
        <div className="contact-info-card">
          <div className="contact-card-heading">
            <div className="contact-heading-icon purple-icon">
              ➤
            </div>

            <div>
              <h2>Contact Information</h2>
              <p>Let's connect through any of these platforms</p>
            </div>
          </div>

          <div className="contact-details">
            {contactDetails.map((item) => (
              <div className="contact-detail" key={item.title}>
                <div className={`contact-detail-icon ${item.className}`}>
                  {item.icon}
                </div>

                <div>
                  <strong>{item.title}</strong>
                  <a
                    href={
                      item.title === "Email"
                        ? "mailto:aniketghorpade1860@gmail.com"
                        : item.title === "Phone"
                          ? "tel:+919322846359"
                          : undefined
                    }
                  >
                    {item.value}
                  </a>
                  <small>{item.note}</small>
                </div>
              </div>
            ))}
          </div>

          <div className="contact-social-section">
            <h3>Connect With Me</h3>

            <div className="contact-social-buttons">
              <a
                href="https://github.com/ghorpadeaniket067-collab"
                target="_blank"
                rel="noreferrer"
                className="github-contact"
              >
                ●
                <span>GitHub</span>
                <b>→</b>
              </a>

              <a
                href="https://www.linkedin.com/in/aniket-ghorpade-0a142a3a3"
                target="_blank"
                rel="noreferrer"
                className="linkedin-contact"
              >
                in
                <span>LinkedIn</span>
                <b>→</b>
              </a>
            </div>

            <p>Check out my projects and professional journey</p>
          </div>
        </div>

        {/* Message Form */}
        <form className="contact-form-card" onSubmit={handleSubmit}>
          <div className="contact-card-heading">
            <div className="contact-heading-icon blue-icon">
              ✉
            </div>

            <div>
              <h2>Send a Message</h2>
              <p>I'll get back to you as soon as possible</p>
            </div>
          </div>

          <div className="contact-form-row">
            <div className="contact-form-group">
              <label htmlFor="name">
                Your Name <span>*</span>
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="contact-form-group">
              <label htmlFor="email">
                Your Email <span>*</span>
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div className="contact-form-group">
            <label htmlFor="subject">
              Subject <span>*</span>
            </label>

            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="What's this about?"
              required
            />
          </div>

          <div className="contact-form-group">
            <label htmlFor="message">
              Message <span>*</span>
            </label>

            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>

          <button type="submit" className="contact-submit">
            <span>➤</span>
            Send Message
            <b>→</b>
          </button>
        </form>
      </div>

      {/* Highlights */}
      <div className="contact-bottom">
        {highlights.map((item) => (
          <div className="contact-highlight" key={item.title}>
            <div className={`highlight-icon ${item.className}`}>
              {item.icon}
            </div>

            <div>
              <strong>{item.title}</strong>
              <span>{item.text}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Final Quote */}
      <div className="contact-final-quote">
        <span>"Let's build something amazing together."</span>
        <i></i>
      </div>
    </section>
  );
}

export default Contact;