export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <h3>Shrihari<span>.</span></h3>
            <p>MERN Stack Developer & Cloud Engineer Aspirant</p>
          </div>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <hr />

        <div className="footer-bottom">
          <p>© 2026 Shrihari Tone. All rights reserved.</p>
          <div>
            <a href="https://github.com/shreetone" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/shrihari-tone-470788256" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}