export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container">

        <div className="row align-items-center hero-row">

          {/* LEFT SIDE */}
          <div className="col-lg-7">

            <p className="hello-text">
              Hello, I'm Shrihari
            </p>

            <h1 className="hero-title">
              I build websites
              <br />
              that <span>help</span>
              <br />
              <span>businesses grow.</span>
            </h1>

            <p className="hero-description">
              I'm a MERN Stack Developer and MCA student from Pune,
              creating modern, responsive and user-friendly websites
              and applications for businesses and individuals.
            </p>


            {/* HERO BUTTONS */}
            <div className="hero-buttons">

              {/* VIEW WORK */}
              <a
                href="#projects"
                className="primary-btn"
              >
                View My Work
                <i className="bi bi-arrow-right"></i>
              </a>


              {/* HIRE ME */}
              <a
                href="#contact"
                className="secondary-btn"
              >
                Hire Me
              </a>


              {/* DOWNLOAD RESUME */}
              <a
                href="/Shrihari-Tone-Resume.pdf"
                download="Shrihari-Tone-Resume.pdf"
                className="resume-btn"
              >
                <i className="bi bi-download"></i>
                Resume
              </a>

            </div>


            {/* SOCIAL LINKS */}
            <div className="hero-social">

              <a
                href="https://github.com/shreetone"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/shrihari-tone-470788256"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

            </div>

          </div>


          {/* RIGHT SIDE */}
          <div className="col-lg-5">

            <div className="hero-image-wrapper">

              <div className="photo-placeholder">

                <img
                  src="/profile.jpg"
                  alt="Shrihari Tone"
                />

                <div className="photo-fallback">

                  <i className="bi bi-person-fill"></i>

                  <span>
                    Add your photo as public/profile.jpg
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}