import React from 'react';
import { Layout, Server, Database } from 'lucide-react';

export default function SkillsSection() {
  const skillMeters = [
    { name: 'React.js / Next.js / TypeScript', percent: 95 },
    { name: 'Node.js / Express / REST & GraphQL', percent: 92 },
    { name: 'Python / FastAPI / Async Engines', percent: 88 },
    { name: 'PostgreSQL / Prisma / Redis Caching', percent: 86 },
    { name: 'Docker / AWS (S3, Lambda) / CI/CD', percent: 84 },
    { name: 'TailwindCSS / CSS Architecture / Canvas', percent: 90 }
  ];

  const categories = [
    {
      title: 'FRONTEND ARCHITECTURE',
      icon: <Layout size={18} />,
      skills: ['React.js', 'TypeScript', 'Next.js', 'JavaScript (ES6+)', 'TailwindCSS', 'HTML5 / CSS3', 'Zustand / Redux', 'Canvas API', 'Framer Motion']
    },
    {
      title: 'BACKEND & MICROSERVICES',
      icon: <Server size={18} />,
      skills: ['Node.js', 'Express.js', 'Python', 'FastAPI', 'REST APIs', 'GraphQL', 'Microservices', 'WebSockets', 'OAuth2 / JWT']
    },
    {
      title: 'DATABASES, CLOUD & DEVOPS',
      icon: <Database size={18} />,
      skills: ['PostgreSQL', 'MongoDB', 'Redis Caching', 'Prisma ORM', 'AWS (S3, Lambda)', 'Docker Containers', 'Git & GitHub Actions', 'CI/CD Pipelines', 'Vite / Webpack']
    }
  ];

  return (
    <section className="page-section" id="skills">
      <div className="section-title-head">
        <span className="section-tag-label">// 03. TECHNICAL CAPABILITIES</span>
        <h2 className="section-main-title">Skills & Tech Stack Matrix</h2>
      </div>

      {/* Visual Proficiency Progress Meters */}
      <div className="skills-meter-box">
        <h3 className="meter-heading">// CORE COMPETENCY PROFICIENCY</h3>
        <div className="meter-grid-layout">
          {skillMeters.map((meter, idx) => (
            <div key={idx} className="meter-item-card">
              <div className="meter-label-row">
                <span className="meter-skill-name">{meter.name}</span>
                <span className="meter-skill-percent">{meter.percent}%</span>
              </div>
              <div className="meter-track-line">
                <div 
                  className="meter-fill-line" 
                  style={{ width: `${meter.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categorized Pills */}
      <div className="skills-cards-grid" style={{ marginTop: '3.5rem' }}>
        {categories.map((cat, idx) => (
          <div key={idx} className="skill-category-box">
            <h3 className="category-header-title">
              {cat.icon}
              <span>{cat.title}</span>
            </h3>
            <div className="skill-tags-flex">
              {cat.skills.map((s, sIdx) => (
                <span key={sIdx} className="skill-pill-item">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
