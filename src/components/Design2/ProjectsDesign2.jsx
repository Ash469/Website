import React from 'react';

export default function ProjectsDesign2() {
  const projects = [
    {
      id: 1,
      title: "Lawyer Alexander's Landing Page",
      desc: "Designed To Turn Visitors Into Consultation Bookings.",
      tag: "Web Design",
      brandText: "Alexander // Legal Guidance",
      theme: "card-cream-light"
    },
    {
      id: 2,
      title: "KeyPharma Company's Trava Product Website",
      desc: "Built To Guide Customers From Discovery To Purchase.",
      tag: "Web Development",
      brandText: "Trava // Health App",
      theme: "card-blue-dark"
    },
    {
      id: 3,
      title: "Hebrew Marketing Agency's Website",
      desc: "Showcases services and attracts new business clients.",
      tag: "Web Development",
      brandText: "Hebrew Marketing // Digital",
      theme: "card-green-dark"
    },
    {
      id: 4,
      title: "Robert's Legal Landing Page",
      desc: "Converts first-time visitors into legal leads.",
      tag: "Web Design",
      brandText: "Robert // Legal Solutions",
      theme: "card-dark-slate"
    }
  ];

  return (
    <section className="d2-projects-section" id="projects2">
      <div className="d2-projects-header">
        <span className="d2-section-tag">✦ Some Recent Projects</span>
        <h2 className="d2-section-title">Selected Work That Delivers Results</h2>
      </div>

      <div className="d2-projects-grid">
        {projects.map((proj) => (
          <div key={proj.id} className="d2-project-card">
            <div className={`d2-card-preview ${proj.theme}`}>
              <div className="d2-preview-watermark">{proj.brandText}</div>
            </div>

            <div className="d2-card-body">
              <h3 className="d2-card-title">{proj.title}</h3>
              <p className="d2-card-desc">{proj.desc}</p>
              <span className="d2-card-tag">{proj.tag}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
