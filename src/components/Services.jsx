const services = [
  {
    number: "01",
    icon: "bi-window",
    title: "Frontend Development",
    description: "Responsive and modern websites using HTML, CSS, JavaScript, React and Bootstrap."
  },
  {
    number: "02",
    icon: "bi-code-slash",
    title: "MERN Development",
    description: "Full-stack web applications using MongoDB, Express.js, React.js and Node.js."
  },
  {
    number: "03",
    icon: "bi-cloud",
    title: "Cloud & DevOps",
    description: "Cloud and DevOps solutions using AWS, Linux, Docker, Git and Terraform."
  }
];

export default function Services() {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="section-number">02 / WHAT I DO</div>

        <h2 className="section-title">
          Development services
          <br />
          <span>for modern businesses.</span>
        </h2>

        <div className="row g-4 mt-4">
          {services.map((service) => (
            <div className="col-lg-4" key={service.number}>
              <div className="service-card">
                <span className="service-number">{service.number}</span>
                <div className="service-icon">
                  <i className={`bi ${service.icon}`}></i>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}