import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, CheckCircle2, AlertCircle } from 'lucide-react';
const project = {
  role: [
    'Provisioned and maintained AWS EC2 infrastructure',
    'Configured Nginx reverse proxy with SSL termination and caching',
    'Built automated CI/CD deployment pipeline with GitHub Actions',
    'Built and published official Techniche Android app on Google Play',
    'Developed Campus Ambassador (CA) portal & Comedy Night registration',
    'Designed volunteer QR check-in & verification system',
    'Managed database operations and role-based admin controls'
  ],
  links: {
    live: 'https://techniche.org',
    github: 'https://github.com/Ash469'
  },
  engineeringDecisions: [
    {
      decision: 'Nginx caching layer over direct Node.js serving',
      reason: 'Absorbed 95.43% of incoming traffic during peak festival hours, preventing database/backend overload.'
    },
    {
      decision: 'Automated GitHub Actions deployment to EC2',
      reason: 'Reduced release time to under 30 seconds for critical hotfixes during live events.'
    },
    {
      decision: 'QR code verification for volunteer check-ins',
      reason: 'Prevented spoofing and enabled real-time attendance logging across multiple venues.'
    }
  ],
  challenges: [
    'Handling sudden traffic spikes of tens of thousands of concurrent users during popular event releases.',
    'Coordinating zero-downtime updates on live production services while users were actively registering.',
    'Ensuring strict role-based authorization across multiple independent admin sub-systems.'
  ]
};

const techStack = [
  { category: 'Infrastructure', items: ['AWS EC2', 'Nginx', 'Docker', 'Let\'s Encrypt SSL', 'Cloudflare DNS'] },
  { category: 'CI/CD', items: ['GitHub Actions', 'SSH Deploy', 'Shell Scripts'] },
  { category: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs', 'JWT', 'RBAC'] },
  { category: 'Frontend', items: ['React', 'Vite', 'JavaScript'] },
  { category: 'Mobile', items: ['Flutter', 'Dart', 'Android'] },
  { category: 'Data Storage', items: ['MongoDB', 'Mongoose'] },
];

export default function Techniche() {
  return (
    <div style={{ paddingTop: '68px' }}>

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <div className="case-study-hero">
        <div className="container-site">
          <Link
            to="/projects"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              color: 'var(--text-muted)',
              textDecoration: 'none',
              marginBottom: '2.5rem',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            <ArrowLeft size={14} />
            Back to Projects
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
            <span className="badge-live"><span className="live-dot" />Production</span>
            <span className="badge-orange">Full-Stack · DevOps · Android</span>
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.6rem, 5vw, 4.5rem)',
              fontWeight: 900,
              color: 'var(--text-primary)',
              letterSpacing: '-0.03em',
              lineHeight: 1.0,
              marginBottom: '1rem',
            }}
          >
            Techniche
          </h1>

          <p
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.2rem',
              color: 'var(--text-secondary)',
              fontWeight: 500,
              marginBottom: '2.5rem',
              maxWidth: '560px',
              lineHeight: 1.5,
            }}
          >
            Production Event Technology Platform for IIT Guwahati's Annual Technical Festival
          </p>

          {/* Key metrics */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '1px',
              background: 'var(--border)',
              borderRadius: '12px',
              overflow: 'hidden',
              maxWidth: '700px',
            }}
          >
            {[
              { value: '81.56K', label: 'Unique Visitors' },
              { value: '2.3M', label: 'Total Requests' },
              { value: '95.43%', label: 'Cached Traffic' },
              { value: '1.5K+', label: 'Android Downloads' },
            ].map(({ value, label }) => (
              <div
                key={label}
                style={{ background: 'var(--bg-card)', padding: '1.5rem 1.25rem' }}
              >
                <div className="metric-number" style={{ fontSize: '2rem' }}>{value}</div>
                <div className="metric-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-site">

        {/* ══════════════════════════════════════
            OVERVIEW
        ══════════════════════════════════════ */}
        <div className="case-study-section">
          <div className="cs-section-label">Overview</div>
          <h2 className="cs-heading">What I Built</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }} className="two-col-grid">
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
              Techniche is IIT Guwahati's annual technical festival — one of the largest in Asia. Managing the technology for a festival at this scale means handling tens of thousands of concurrent visitors, coordinating real-time logistics for hundreds of volunteers, managing registrations across dozens of events, and keeping multiple production systems running reliably during a high-stakes 4-day window.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
              I managed the <strong style={{ color: 'var(--text-primary)' }}>entire technology stack</strong> — from provisioning the AWS infrastructure to deploying the Android app to the Play Store. This involved multiple production websites, backend services, event-specific administration portals, a Campus Ambassador (CA) portal, a volunteer QR verification system, and the official Techniche Android application.
            </p>
          </div>
        </div>

        {/* ══════════════════════════════════════
            MY ROLE
        ══════════════════════════════════════ */}
        <div className="case-study-section">
          <div className="cs-section-label">My Role</div>
          <h2 className="cs-heading">Role & Duration</h2>
          <div style={{ marginBottom: '1.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--orange)' }}>
            Nov 2024 – Present
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="two-col-grid">
            {project.role.map((r, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  padding: '1rem 1.25rem',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '10px',
                }}
              >
                <CheckCircle2 size={16} style={{ color: 'var(--orange)', flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                  {r}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════
            INFRASTRUCTURE ARCHITECTURE
        ══════════════════════════════════════ */}
        <div className="case-study-section">
          <div className="cs-section-label">Technical Architecture</div>
          <h2 className="cs-heading">Infrastructure Overview</h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }} className="two-col-grid">
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  marginBottom: '0.75rem',
                  letterSpacing: '0.08em',
                }}
              >
                SYSTEM ARCHITECTURE
              </div>
              <pre
                className="arch-diagram"
                style={{ fontSize: '0.8rem' }}
              >{`<span class="arch-highlight">Users / Mobile App</span>
        ↓
  Cloudflare DNS
        ↓
<span class="arch-highlight">Nginx Reverse Proxy</span>
  SSL Termination
        ↓
  ┌─────────────────────┐
  │    AWS EC2           │
  │                     │
  │  ┌──────┐ ┌───────┐ │
  │  │ Web  │ │Backend│ │
  │  └──────┘ └───────┘ │
  │  ┌──────┐ ┌───────┐ │
  │  │  CA  │ │ Event │ │
  │  │Portal│ │ Admin │ │
  │  └──────┘ └───────┘ │
  │  ┌──────┐ ┌───────┐ │
  │  │ QR   │ │Android│ │
  │  │ Scan │ │  APIs │ │
  │  └──────┘ └───────┘ │
  └─────────────────────┘
          ↓
       MongoDB`}</pre>
            </div>

            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  marginBottom: '0.75rem',
                  letterSpacing: '0.08em',
                }}
              >
                CI/CD PIPELINE
              </div>
              <pre className="arch-diagram">{`Developer pushes code
        ↓
  GitHub PR Review
        ↓
 Merge to main branch
        ↓
  GitHub Actions CI
  ┌─────────────────┐
  │  Run tests      │
  │  Build assets   │
  └─────────────────┘
        ↓
  SSH into EC2
        ↓
  Pull latest changes
  Docker compose up
        ↓
  Zero-downtime
  Production Deploy
  
  ⚡ ~30 seconds total`}</pre>
            </div>
          </div>

          <div
            style={{
              background: 'rgba(232,98,42,0.06)',
              border: '1px solid rgba(232,98,42,0.2)',
              borderRadius: '10px',
              padding: '1.25rem 1.5rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.75rem',
            }}
          >
            <AlertCircle size={16} style={{ color: 'var(--orange)', flexShrink: 0, marginTop: '2px' }} />
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              The automated CI/CD pipeline reduced deployment time from ~10 minutes of manual SSH work to under 30 seconds — critical when pushing hotfixes during the live festival window.
            </p>
          </div>
        </div>

        {/* ══════════════════════════════════════
            LINKS & SCREENSHOTS
        ══════════════════════════════════════ */}
        <div className="case-study-section">
          <div className="cs-section-label">Visuals & Links</div>
          <h2 className="cs-heading">Screenshots & Links</h2>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
            <a href={project.links.live} className="btn btn-primary" target="_blank" rel="noreferrer">
              Live Project <ArrowUpRight size={16} />
            </a>
            <a href={project.links.github} className="btn btn-secondary" target="_blank" rel="noreferrer">
              GitHub <ArrowUpRight size={16} />
            </a>
          </div>
          <div style={{
            width: '100%',
            height: '400px',
            background: 'var(--bg-card)',
            border: '1px dashed var(--border)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem'
          }}>
            [ Screenshots Placeholder ]
          </div>
        </div>

        {/* ══════════════════════════════════════
            PRODUCTION SCALE
        ══════════════════════════════════════ */}
        <div className="case-study-section">
          <div className="cs-section-label">Results</div>
          <h2 className="cs-heading">Production Scale</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
            {[
              { value: '81,560', label: 'Unique Visitors', desc: 'During and around the festival window' },
              { value: '2.3M', label: 'Total HTTP Requests', desc: 'Across all production applications' },
              { value: '95.43%', label: 'Cache Hit Rate', desc: 'Nginx + HTTP caching layers absorbing traffic' },
              { value: '1,500+', label: 'Android Installs', desc: 'Official Techniche app on Google Play Store' },
            ].map(({ value, label, desc }) => (
              <div
                key={label}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  padding: '1.75rem 1.5rem',
                }}
              >
                <div className="metric-number">{value}</div>
                <div className="metric-label" style={{ marginTop: '0.5rem' }}>{label}</div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.5rem', lineHeight: 1.5 }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════
            EVENT SYSTEMS
        ══════════════════════════════════════ */}
        <div className="case-study-section">
          <div className="cs-section-label">Key Features</div>
          <h2 className="cs-heading">Event Systems Built</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {[
              {
                title: 'CA Portal',
                desc: 'Campus Ambassador application system with status tracking, document submission, and administrative review dashboard.',
              },
              {
                title: 'Comedy Night Registration',
                desc: 'Event-specific registration management with capacity controls, attendee tracking, and admin panel for entry management.',
              },
              {
                title: 'GHM Registration',
                desc: 'Great Himalayas Marathon registration with admin management, participant tracking, and leaderboard functionality.',
              },
              {
                title: 'Volunteer QR System',
                desc: 'QR-based volunteer check-in and verification. Each volunteer gets a unique QR; team leaders scan to verify identity and log attendance in real time.',
              },
              {
                title: 'RBAC Admin Access',
                desc: 'Role-based access control across all admin panels. Different admin roles (event heads, coordinators, core) have scoped access to their relevant systems.',
              },
              {
                title: 'Android Application',
                desc: 'Fan voting, navigation, Comedy Night registration, GHM leaderboard, and general event information. Published on Google Play Store with 1.5K+ installs.',
              },
            ].map(({ title, desc }) => (
              <div
                key={title}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--border-orange)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
                  <span style={{ display: 'block', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--orange)', flexShrink: 0 }} />
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {title}
                  </h3>
                </div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════
            ENGINEERING DECISIONS
        ══════════════════════════════════════ */}
        <div className="case-study-section">
          <div className="cs-section-label">Engineering Decisions</div>
          <h2 className="cs-heading">Key Technical Choices</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {project.engineeringDecisions.map(({ decision, reason }) => (
              <div
                key={decision}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  padding: '1.5rem 1.75rem',
                  display: 'grid',
                  gridTemplateColumns: '1fr 2fr',
                  gap: '2rem',
                  alignItems: 'start',
                }}
                className="decision-row"
              >
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--orange)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                    Decision
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.35 }}>
                    {decision}
                  </h3>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                    Rationale
                  </div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                    {reason}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════
            CHALLENGES
        ══════════════════════════════════════ */}
        <div className="case-study-section">
          <div className="cs-section-label">Challenges</div>
          <h2 className="cs-heading">What Was Hard</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {project.challenges.map((c, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  padding: '1.1rem 1.25rem',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '10px',
                }}
              >
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--orange)', fontWeight: 700, flexShrink: 0, marginTop: '1px' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {c}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════
            TECH STACK
        ══════════════════════════════════════ */}
        <div className="case-study-section">
          <div className="cs-section-label">Technology Stack</div>
          <h2 className="cs-heading">Tools & Technologies</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
            {techStack.map(({ category, items }) => (
              <div
                key={category}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '10px',
                  padding: '1.25rem',
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', fontWeight: 600, color: 'var(--orange)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.85rem' }}>
                  {category}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {items.map((item) => (
                    <span key={item} style={{ fontFamily: 'var(--font-heading)', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .two-col-grid { grid-template-columns: 1fr !important; }
          .decision-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
