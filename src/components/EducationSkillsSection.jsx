import React from 'react';

export default function EducationSkillsSection() {
  const skills = [
    'WEB DESIGN', 'UI/UX DESIGN', 'FIGMA', 'FRAMER',
    'ADOBE XD', 'PHOTOSHOP', 'WEBFLOW', 'HTML / CSS',
    'JAVASCRIPT', 'GSAP ANIMATION', 'SEO BASICS'
  ];

  const processSteps = [
    { num: '01', title: 'DISCOVER', desc: 'Understanding goals, audience, and project requirements.' },
    { num: '02', title: 'IDEATE', desc: 'Planning, wireframing, and creating the right concept.' },
    { num: '03', title: 'DESIGN', desc: 'Crafting visual design with a focus on user experience.' },
    { num: '04', title: 'DEVELOP', desc: 'Building fast, responsive, and high-performing websites.' },
    { num: '05', title: 'DELIVER', desc: 'Testing, optimizing, and launching with perfection.' }
  ];

  return (
    <section className="section-wrapper" id="experience">
      <div className="info-grid">
        {/* Left Column: Education & Skills */}
        <div className="info-col">
          <h3 className="col-title">EDUCATION & SKILLS</h3>

          <div className="sub-label">EDUCATION</div>
          <div className="edu-item">
            <div className="edu-degree">B.Sc. in Visual Communication Design</div>
            <div className="edu-meta">
              <span>Binus University</span>
              <span>2018 - 2022</span>
            </div>
          </div>
          <div className="edu-item">
            <div className="edu-degree">UI/UX Design Certification</div>
            <div className="edu-meta">
              <span>Google Career Certificates</span>
              <span>2023</span>
            </div>
          </div>

          <div className="skills-container">
            <div className="sub-label">SKILLS</div>
            <div className="skills-pills-grid">
              {skills.map((skill, index) => (
                <span key={index} className="skill-pill">{skill}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Middle Column: Work Process */}
        <div className="info-col">
          <h3 className="col-title">WORK PROCESS</h3>
          <div className="process-timeline">
            {processSteps.map((step) => (
              <div key={step.num} className="process-step">
                <div className="step-number">{step.num}</div>
                <div className="step-content">
                  <div className="step-title">{step.title}</div>
                  <div className="step-desc">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Crimson Quote Card */}
        <div className="info-col">
          <div className="quote-card">
            <div>
              <div className="quote-mark">“</div>
              <p className="quote-text">
                Good design is not just how it looks, but how it works.
              </p>
              <div className="quote-signature">Rayhan</div>
            </div>

            <div className="quote-cta">
              LET'S CREATE SOMETHING GREAT TOGETHER. ✦
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
