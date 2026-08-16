const reasons = [
  ["01", "Responsive", "Websites and applications designed to work smoothly across mobile, tablet and desktop devices."],
  ["02", "Modern Design", "Clean interfaces focused on usability, performance and professional presentation."],
  ["03", "Problem Solving", "I focus on understanding the requirement first and then building a practical technical solution."],
  ["04", "Continuous Learning", "I continuously learn new technologies including cloud computing, DevOps and modern web development."]
];

export default function WhyMe() {
  return (
    <section className="section why-section">
      <div className="container">
        <div className="section-number">04 / WHY WORK WITH ME</div>

        <h2 className="section-title">
          Building useful solutions.
          <br />
          <span>Learning every day.</span>
        </h2>

        <div className="row g-4 mt-4">
          {reasons.map(([number, title, description]) => (
            <div className="col-md-6" key={number}>
              <div className="reason-card">
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}