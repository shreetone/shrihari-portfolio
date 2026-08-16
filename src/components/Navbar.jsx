import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <nav className="portfolio-navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <a
          href="#home"
          className="navbar-logo"
          onClick={close}
        >
          <img
            src="/logo.png"
            alt="Shrihari Logo"
          />

          <span>
            Shrihari<span className="blue-dot">.</span>
          </span>
        </a>


        {/* MOBILE MENU */}
        <button
          className="mobile-menu"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <i
            className={`bi ${
              open ? "bi-x-lg" : "bi-list"
            }`}
          ></i>
        </button>


        {/* NAVIGATION */}
        <div
          className={`navbar-content ${
            open ? "active" : ""
          }`}
        >

          <ul className="navbar-links">

            <li>
              <a
                href="#home"
                onClick={close}
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                onClick={close}
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#services"
                onClick={close}
              >
                Services
              </a>
            </li>

            <li>
              <a
                href="#projects"
                onClick={close}
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={close}
              >
                Contact
              </a>
            </li>

          </ul>

        </div>

      </div>
    </nav>
  );
}