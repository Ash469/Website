import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function ExperienceSection() {
  const experiences = [
    {
      role: 'Senior Full-Stack Software Engineer',
      company: 'TechPulse Systems',
      period: '2024 — PRESENT',
      bullets: [
        'Architected microservices backend serving 150k+ daily active users using Node.js, PostgreSQL, and Redis caching.',
        'Reduced frontend initial page load time by 42% and achieved 98/100 Google Lighthouse score.',
        'Mentored junior engineers and led migration to CI/CD automated deployment pipelines.'
      ]
    },
    {
      role: 'Full-Stack Developer',
      company: 'InnovateTech Solutions',
      period: '2022 — 2024',
      bullets: [
        'Built 12+ high-performance web applications using React, TypeScript, Express, and TailwindCSS.',
        'Implemented secure Stripe payment webhooks and OAuth2 authentication flows.',
        'Wrote automated Jest and Cypress test suites achieving 88%+ code coverage across microservices.'
      ]
    },
    {
      role: 'Frontend Engineering Intern',
      company: 'Apex Digital Studio',
      period: '2021 — 2022',
      bullets: [
        'Converted high-fidelity Figma mockups into responsive, accessible React UI components.',
        'Implemented interactive Canvas and scroll-driven CSS keyframe animations.',
        'Collaborated closely with product managers and designers in Agile sprint cycles.'
      ]
    }
  ];

  return (
    <section className="page-section" id="experience">
      <div className="section-title-head">
        <span className="section-tag-label">// 02. CAREER HISTORY</span>
        <h2 className="section-main-title">Engineering Timeline</h2>
      </div>

      <div className="timeline-vertical-line">
        {experiences.map((exp, idx) => (
          <div key={idx} className="timeline-entry-card">
            <div className="exp-head-row">
              <div>
                <h3 className="exp-title-role">{exp.role}</h3>
                <div className="exp-company-name">{exp.company}</div>
              </div>
              <span className="exp-period-badge">{exp.period}</span>
            </div>

            <ul className="exp-bullet-list">
              {exp.bullets.map((bullet, bIdx) => (
                <li key={bIdx} className="exp-bullet-row">
                  <CheckCircle2 size={16} className="bullet-icon" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
