export default function About() {
  const skills = [
    "HTML", "CSS", "JavaScript", "Bootstrap", "React",
    "Node.js", "Express.js", "MongoDB", "AWS", "Linux",
    "Git", "GitHub", "Docker", "Terraform"
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-number">01 / ABOUT ME</div>

        <div className="row g-5">
          <div className="col-lg-6">
            <h2 className="section-title">
              Turning ideas into
              <br />
              <span>digital experiences.</span>
            </h2>
          </div>

          <div className="col-lg-6">
            <p className="section-text">
              I'm Shrihari Tone, a web developer and MCA student from Pune.
              I enjoy building clean, responsive and practical websites and
              applications that solve real-world problems.
            </p>
            <p className="section-text">
              My current focus is MERN Stack Development, Cloud Computing
              and DevOps. I am continuously improving my skills in React,
              Node.js, MongoDB, AWS, Linux, Docker and Terraform.
            </p>
            <p className="section-text">
              My goal is to become a professional Cloud Engineer while
              building strong full-stack development skills.
            </p>
          </div>
        </div>

        <div className="skills-wrapper">
          <h3>My Skills</h3>
          <div className="skills-list">
            {skills.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}