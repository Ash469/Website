import React from 'react';

export default function AboutSectionDesign2() {
  const logos = ['Listex', 'DIXIE DOWNS', 'rogue', 'Perfect', 'CD.PET', 'Travo'];

  return (
    <section className="d2-about-section" id="about2">
      <div className="d2-about-grid">
        <div className="d2-about-tag">✦ About Me</div>

        <div className="d2-about-content">
          <p className="d2-about-bio">
            Hey there, I'm Robin Ahmed — a web developer and UI/UX designer. 
            I bridge the gap between aesthetic brilliance and technical precision. 
            I don't just build sites that look expensive; I build systems designed to scale your business and dominate your niche.
          </p>

          <div className="d2-btn-group">
            <a href="#contact2" className="d2-btn-fill">
              Start a Project <span className="arrow">↗</span>
            </a>
            <a href="#projects2" className="d2-btn-outline">
              View My Work <span className="arrow">↘</span>
            </a>
          </div>
        </div>
      </div>

      {/* Client Logos Bar */}
      <div className="d2-logos-bar">
        {logos.map((logo, index) => (
          <div key={index} className="d2-logo-item">{logo}</div>
        ))}
      </div>
    </section>
  );
}
