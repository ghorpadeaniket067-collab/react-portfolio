import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/", icon: "⌂" },
    { name: "About", path: "/about", icon: "♙" },
    { name: "Skills", path: "/skills", icon: "</>" },
    { name: "Projects", path: "/projects", icon: "▦" },
    { name: "Experience", path: "/experience", icon: "▣" },
    { name: "Contact", path: "/contact", icon: "✉" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <NavLink to="/" className="logo" onClick={closeMenu}>
        <svg className="logo-mark" viewBox="0 0 70 70" aria-hidden="true">
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1677ff" />
              <stop offset="55%" stopColor="#315fea" />
              <stop offset="100%" stopColor="#8b3df0" />
            </linearGradient>
          </defs>

          <path
            d="M10 57 31 12c2-4 7-4 9 0l20 45"
            fill="none"
            stroke="url(#logoGradient)"
            strokeWidth="9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <path
            d="M25 43 39 30 58 48"
            fill="none"
            stroke="url(#logoGradient)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <span className="logo-divider"></span>

        <span className="logo-text">
          <strong>
            Aniket<span>.</span>
          </strong>
          <small>Full Stack Developer</small>
        </span>
      </NavLink>

      <nav className="nav-links">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <span className="nav-icon">{link.icon}</span>
            {link.name}
          </NavLink>
        ))}
      </nav>

      <div className="navbar-right">
        <div className="navbar-social">
          <a
            href="https://github.com/ghorpadeaniket067-collab"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.72.5.1.68-.22.68-.49v-1.73c-2.78.62-3.37-1.23-3.37-1.23-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.58 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-.2-2.22-1.15-4.56-5.08-4.56-1.12 0-2.04.39-2.76 1.03-.26-.1-1.31-.45-2.72.1 0 0-.28.84 1.05 2.75-.12.85-.18 1.7-.18 2.5 0 0 1.04.32 1.07 3.2 0 0 1.37 1.9 3.73 1.9 0 0 1.13-.02 2.2-.35v1.7c0 .27.18.59.68.49A10.03 10.03 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"
              />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/aniket-ghorpade-0a142a3a3"
            target="_blank"
            rel="noreferrer"
            className="social-icon linkedin-icon"
            aria-label="LinkedIn"
          >
            in
          </a>
        </div>

        <NavLink to="/contact" className="nav-button">
          Let's Talk
          <span>→</span>
        </NavLink>
      </div>

      <button
        className="menu-button"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "×" : "☰"}
      </button>

      {menuOpen && (
        <nav className="mobile-nav">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <span className="nav-icon">{link.icon}</span>
              {link.name}
            </NavLink>
          ))}

          <NavLink
            to="/contact"
            onClick={closeMenu}
            className="mobile-talk-button"
          >
            Let's Talk →
          </NavLink>
        </nav>
      )}
    </header>
  );
}

export default Navbar;