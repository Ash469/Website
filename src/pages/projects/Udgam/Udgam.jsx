import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, CheckCircle2, Globe, Sparkles, Layout, Smartphone, Calendar } from 'lucide-react';

const project = {
  roles: [
    { title: 'Technical Project Management', desc: 'Led the digital platform roadmap, coordinating feature requirements for events listings, schedule timelines, and key registers.' },
    { title: 'Interactive Frontend Development', desc: 'Coded modular React layouts, styling with Tailwind CSS and developing interfaces for schedules and speaker showcases.' },
    { title: 'Animation System Design', desc: 'Crafted smooth scroll-reveals, transition timelines, and interactive component animations using GSAP and Framer Motion.' }
  ],
  decisions: [
    {
      decision: 'GSAP + Framer Motion Hybrid Engine',
      reason: 'Leveraged GSAP for performance-critical scroll-triggered background timeline animations and Framer Motion for local component state transitions (modals, drawers, and tabs), creating a polished digital experience.'
    },
    {
      decision: 'React Component Architecture via Vite',
      reason: 'Structured modular components to support dynamic event detail listings. Using Vite enabled fast development refreshes and a highly optimized build bundle for mobile connections during the summit.'
    },
    {
      decision: 'Vercel Pipeline Hosting',
      reason: 'Configured automated previews on pull requests to enable real-time design reviews with summit directors before push to production, keeping deployment fast and reliable.'
    }
  ],
  problems: [
    { problem: 'Static Event Sheets', solution: 'Digitized timelines into interactive daily schedule modules.' },
    { problem: 'Poor Mobile Performance', solution: 'Designed adaptive layouts verified on multiple phone screen widths.' },
    { problem: 'Disjointed Registrations', solution: 'Integrated registration pipeline forms directly into the event views.' },
    { problem: 'Low Visual Engagement', solution: 'Wired key scroll-trigger curves to keep users engaged.' }
  ],
  techMatrix: [
    { area: 'Frontend Library', tech: 'React' },
    { area: 'Build Systems', tech: 'Vite' },
    { area: 'Layout styling', tech: 'Tailwind CSS' },
    { area: 'Timeframe Motion', tech: 'GSAP (ScrollTrigger)' },
    { area: 'Component Transitions', tech: 'Framer Motion' },
    { area: 'Hosting Pipeline', tech: 'Vercel, Git hooks' },
    { area: 'Scripting Language', tech: 'JavaScript' }
  ]
};

export default function Udgam() {
  return (
    <div style={{ paddingTop: '68px', minHeight: '100vh', backgroundColor: 'var(--bg)', color: 'var(--text-primary)' }}>
      
      {/* HERO SECTION */}
      <div className="case-study-hero">
        <div className="container-site">
          <Link
            to="/projects"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              textDecoration: 'none',
              marginBottom: '2rem',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            <ArrowLeft size={13} />
            Back to Projects
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
            <span className="badge-live"><span className="live-dot" />Production / Complete</span>
            <span className="badge-orange">Frontend · Event Platform · Animation</span>
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              fontWeight: 900,
              color: 'var(--text-primary)',
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              marginBottom: '0.75rem',
            }}
          >
            Udgam 2025
          </h1>

          <p
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.15rem',
              color: 'var(--text-secondary)',
              fontWeight: 500,
              marginBottom: '2rem',
              maxWidth: '650px',
              lineHeight: 1.55,
            }}
          >
            The official web platform and interactive portal for IIT Guwahati's annual entrepreneurship summit, serving thousands of digital event discoverers.
          </p>

          {/* Metrics Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '1px',
              background: 'var(--border)',
              borderRadius: '12px',
              overflow: 'hidden',
              maxWidth: '800px',
            }}
          >
            {[
              { value: 'Production', label: 'Summit Platform' },
              { value: 'GSAP', label: 'Animation Library' },
              { value: 'Vite', label: 'Build Platform' },
              { value: 'Vercel', label: 'Hosting Deploy' }
            ].map(({ value, label }) => (
              <div
                key={label}
                style={{ background: 'var(--bg-card)', padding: '1.5rem' }}
              >
                <div className="metric-number" style={{ fontSize: '1.85rem', color: 'var(--orange-light)' }}>{value}</div>
                <div className="metric-label" style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-primary)', marginTop: '0.25rem' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-site" style={{ padding: '0 0 6rem' }}>
        
        {/* OVERVIEW & PROBLEM */}
        <div className="case-study-section two-col-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '3.5rem' }}>
          <div>
            <div className="cs-section-label">Web Platforms</div>
            <h2 className="cs-heading" style={{ fontSize: '1.75rem', marginBottom: '1.25rem' }}>Interactive Digital Showcase</h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
              Udgam is a premier entrepreneurship summit. A static landing page cannot capture the scale of workshops, keynote events, and competitions, nor process active registrations.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
              This platform bridges standard event details with a high-fidelity visual experience. Built with React and optimized with Tailwind, the platform utilizes scroll-bound animations to drive engagement, keeping timetables and registrations fully responsive.
            </p>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
              <a href="https://udgam-nine.vercel.app" className="btn btn-primary" target="_blank" rel="noreferrer">
                Live Website <ArrowUpRight size={15} />
              </a>
              <a href="https://github.com/Ash469/udgam" className="btn btn-secondary" target="_blank" rel="noreferrer">
                GitHub Repo <ArrowUpRight size={15} />
              </a>
            </div>
          </div>

          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <Layout size={16} style={{ color: 'var(--orange)' }} />
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800 }}>Visitor Funnel Flow</h3>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1rem' }}>
              The landing page funnels traffic toward key event registration points:
            </p>
            {['Discover summit announcements', 'Explore specific workshops', 'Inspect timetables', 'Submit registration metrics', 'Access guidelines'].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.4rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                <CheckCircle2 size={13} style={{ color: 'var(--orange)' }} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FLOW CHART DIAGRAM */}
        <div className="case-study-section">
          <div className="cs-section-label">User Journey</div>
          <h2 className="cs-heading">Summit Engagement Pipeline</h2>
          
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '2rem', marginTop: '1.5rem' }}>
            <pre className="arch-diagram" style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', overflowX: 'auto' }}>{`  Discover Summit landing ──→ Explore Events list ──→ View Details Modal
                                                                    │
                                                            Check Timetable
                                                                    ▼
  Event Participation ←── Participant registration ←── Select schedule slots`}</pre>
          </div>
        </div>

        {/* ROLES & SECTIONS */}
        <div className="case-study-section">
          <div className="cs-section-label">My Contribution</div>
          <h2 className="cs-heading">Technical Scopes</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginTop: '1.5rem' }}>
            {project.roles.map((role, idx) => (
              <div key={idx} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <Sparkles size={16} style={{ color: 'var(--orange)' }} />
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-primary)' }}>{role.title}</h4>
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>{role.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FRONTEND ANIMATION SYSTEM */}
        <div className="case-study-section">
          <div className="cs-section-label">Animation Framework</div>
          <h2 className="cs-heading">Hybrid Motion System</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '2.5rem', marginTop: '1.5rem' }} className="two-col-grid">
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
                <Calendar size={18} style={{ color: 'var(--orange)' }} />
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800 }}>Motion Engines</h3>
              </div>
              <pre className="arch-diagram" style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>{`  GSAP (ScrollTrigger)
  • Scroll-bound parallax backgrounds
  • Entrance reveal staggering
  • Timeline keyframe controls
  
  Framer Motion
  • Modal overlay scale adjustments
  • Dynamic tab indicator slides
  • Sidebar navigation sweeps`}</pre>
            </div>

            <div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1rem' }}>
                Combining GSAP and Framer Motion resolved performance demands. GSAP handled heavy scroll actions with negligible thread blocking, while Framer Motion managed component state triggers natively.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                Every transition was designed to enhance visual rhythm, establishing a premium look fit for a regional entrepreneurship summit.
              </p>
            </div>
          </div>
        </div>

        {/* SOLVED PROBLEMS */}
        <div className="case-study-section">
          <div className="cs-section-label">Solutions Overview</div>
          <h2 className="cs-heading">Frontend Enhancements</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginTop: '1.5rem' }}>
            {project.problems.map((p, idx) => (
              <div key={idx} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.5rem' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--orange)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Problem Space</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{p.problem}</div>
                <div style={{ width: '20px', height: '1px', background: 'var(--border)', marginBottom: '0.75rem' }} />
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Architecture Fix</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{p.solution}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ENGINEERING DECISIONS */}
        <div className="case-study-section">
          <div className="cs-section-label">Engineering Decisions</div>
          <h2 className="cs-heading">Key Technical Choices</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
            {project.decisions.map((d, i) => (
              <div
                key={i}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  display: 'grid',
                  gridTemplateColumns: '1fr 2fr',
                  gap: '2rem',
                  alignItems: 'start'
                }}
                className="decision-row"
              >
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--orange)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Decision Choice</div>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.35 }}>{d.decision}</h4>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Rationale & Impact</div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{d.reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TECHNOLOGY MATRIX */}
        <div className="case-study-section">
          <div className="cs-section-label">Technologies</div>
          <h2 className="cs-heading">Engine & Tooling Matrix</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
            {project.techMatrix.map((item, idx) => (
              <div key={idx} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px', padding: '1.25rem' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', fontWeight: 600, color: 'var(--orange)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                  {item.area}
                </div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                  {item.tech}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .two-col-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .decision-row { grid-template-columns: 1fr !important; gap: 1rem !important; }
        }
      `}</style>
    </div>
  );
}
