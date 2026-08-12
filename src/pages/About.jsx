import React from 'react';
import { Github, Linkedin, Mail, MapPin, GraduationCap, Code2, Cpu, Users } from 'lucide-react';

const skills = {
  'Web & Frontend': ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Vite', 'HTML/CSS'],
  'Backend & APIs': ['Node.js', 'Express.js', 'REST APIs', 'JWT', 'Authentication'],
  'Mobile': ['Flutter', 'Dart', 'Android', 'Firebase', 'FCM'],
  'Infrastructure': ['AWS EC2', 'Nginx', 'Docker', 'CI/CD', 'GitHub Actions'],
  'Databases': ['MongoDB', 'Firestore', 'MongoDB Atlas', 'Mongoose'],
  'Data & ML': ['Python', 'scikit-learn', 'pandas', 'numpy', 'Jupyter', 'EDA'],
};

const leadership = [
  {
    role: 'Web & App Team — Techniche IIT Guwahati',
    desc: 'Managed the complete technology stack for IIT Guwahati\'s annual technical festival — AWS infrastructure, multiple production applications, admin systems, and Android app.',
  },
  {
    role: 'NSS IIT Guwahati Website',
    desc: 'Built the official NSS portal including the Google Sheets–integrated self-service work-hours lookup tool.',
  },
  {
    role: 'Udgam 2025 — Entrepreneurship Summit',
    desc: 'Developed the official website for IIT Guwahati\'s annual entrepreneurship summit.',
  },
];

export default function About() {
  return (
    <div style={{ paddingTop: '68px' }}>
      {/* Header */}
      <div style={{ borderBottom: '1px solid var(--border)', padding: '5rem 0 4rem' }}>
        <div className="container-site">
          <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '4rem', alignItems: 'center' }} className="about-header-grid">
            {/* Portrait */}
            <div style={{ width: '200px', height: '220px', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--border-warm)', flexShrink: 0, boxShadow: '0 16px 40px rgba(0,0,0,0.5)' }}>
              <img src="/image1.png" alt="Ayush Shandilya" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
            </div>

            {/* Text */}
            <div>
              <div className="section-eyebrow">About</div>
              <h1 className="name-brand" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 900, color: 'var(--text-primary)', marginBottom: '1.25rem' }}>
                Ayush Shandilya
              </h1>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-heading)', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <GraduationCap size={16} style={{ color: 'var(--orange)' }} />
                  B.Tech · IIT Guwahati · 4th Year
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-heading)', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <MapPin size={16} style={{ color: 'var(--orange)' }} />
                  Guwahati, Assam
                </div>
              </div>

              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.75, maxWidth: '560px', marginBottom: '1.25rem' }}>
                I'm a 4th-year B.Tech student at IIT Guwahati with a focus on software engineering. I build production systems — real applications that are deployed, operated, and used by real people.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.75, maxWidth: '560px' }}>
                My work spans web, backend, mobile, cloud infrastructure, and data/ML. I care about technical depth, product thinking, and measurable outcomes — not just writing code.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-site">

        {/* Focus Areas */}
        <section className="page-section" style={{ borderBottom: '1px solid var(--border)' }}>
          <div className="section-eyebrow">Focus</div>
          <h2 className="section-title" style={{ marginBottom: '2rem' }}>What I Work On</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
            {[
              { icon: <Code2 size={18} />, title: 'Software Engineering', desc: 'Production systems in web, backend, and mobile. AWS, Node.js, React, Flutter — shipped and measured.' },
              { icon: <Cpu size={18} />, title: 'Data & Machine Learning', desc: 'Applied ML for real problem domains. Python, scikit-learn, feature engineering, model selection.' },
              { icon: <Users size={18} />, title: 'Technical Product', desc: 'I think about users, workflows, and product decisions — not just implementation. Systems should solve real problems.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.5rem', transition: 'border-color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--border-orange)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}>
                <div style={{ width: '38px', height: '38px', borderRadius: '9px', background: 'rgba(232,98,42,0.1)', border: '1px solid rgba(232,98,42,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--orange)', marginBottom: '1rem' }}>
                  {icon}
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Skills */}
        <section className="page-section" style={{ borderBottom: '1px solid var(--border)' }}>
          <div className="section-eyebrow">Skills</div>
          <h2 className="section-title" style={{ marginBottom: '2rem' }}>Technical Experience</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px', padding: '1.25rem' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', fontWeight: 600, color: 'var(--orange)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.85rem' }}>
                  {category}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {items.map((item) => (
                    <span key={item} className="tech-badge">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership */}
        <section className="page-section">
          <div className="section-eyebrow">Leadership</div>
          <h2 className="section-title" style={{ marginBottom: '2rem' }}>Selected Responsibilities</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border)', borderRadius: '12px', overflow: 'hidden' }}>
            {leadership.map(({ role, desc }) => (
              <div key={role} style={{ background: 'var(--bg-card)', padding: '1.5rem' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>{role}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-header-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </div>
  );
}
