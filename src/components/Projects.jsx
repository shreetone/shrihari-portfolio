const projects = [
  {
    number: "01",
    category: "MERN PROJECT",
    title: "CNG Buddy",
    description:
      "A CNG slot booking application designed to help users find CNG stations and book available slots.",
    technologies: "React • Node.js • Express • MongoDB",

    // Put your actual project URL here
    link: "https://github.com/yourusername/cng-buddy",
  },

  {
    number: "02",
    category: "WEB DEVELOPMENT",
    title: "Real Estate Website",
    description:
      "A responsive property platform where users can explore houses and properties available for rent or purchase.",
    technologies: "HTML • CSS • JavaScript • React",

    // Put your actual project URL here
    link: "https://github.com/yourusername/real-estate",
  },

  {
    number: "03",
    category: "CLOUD / DEVOPS",
    title: "AWS Cloud Project",
    description:
      "A cloud project demonstrating AWS infrastructure, EC2, IAM, S3, CloudWatch and deployment concepts.",
    technologies: "AWS • Linux • Git • Terraform",

    // Put your actual project URL here
    link: "https://github.com/yourusername/aws-project",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">

      <div className="container">

        {/* Section number */}

        <div className="section-number">
          03 / MY WORK
        </div>


        {/* Heading */}

        <h2 className="projects-title">
          Selected
          <br />
          <span>projects.</span>
        </h2>


        {/* Project Cards */}

        <div className="projects-grid">

          {projects.map((project) => (

            <div
              className="project-card"
              key={project.number}
            >

              {/* Project number */}

              <div className="project-number">
                PROJECT {project.number}
              </div>


              {/* Category */}

              <div className="project-category">
                {project.category}
              </div>


              {/* Title */}

              <h3>
                {project.title}
              </h3>


              {/* Description */}

              <p className="project-description">
                {project.description}
              </p>


              {/* Technologies */}

              <p className="project-tech">
                {project.technologies}
              </p>


              {/* Bottom */}

              <div className="project-footer">

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Project

                  <span>
                    ↗
                  </span>

                </a>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}