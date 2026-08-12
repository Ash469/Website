import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { getProject } from '../../data/projects';

const project = getProject('pims');

export default function PIMS() {
  return (
    <div style={{ paddingTop: '68px' }}>
      {/* Hero */}
      <div className="case-study-hero">
        <div className="container-site">
          <Link to="/work" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '2.5rem', transition: 'color 0.2s' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}>
            <ArrowLeft size={14} /> Back to Work
          </Link>

          <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
            <span className="badge-live"><span className="live-dot" />Production</span>
            <span className="badge-orange">Mobile · Backend · Firebase</span>
          </div>

          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.6rem, 5vw, 4.5rem)', fontWeight: 900, color: 'var(--text-primary)', letterSpacing: '-0.03em', lineHeight: 1.0, marginBottom: '0.75rem' }}>
            PIMS / Ease Exit
          </h1>
          <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', color: 'var(--text-secondary)', fontWeight: 500, marginBottom: '2rem', maxWidth: '540px', lineHeight: 1.5 }}>
            Smart Leave Management & Student Verification System
          </p>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <div>
              <div className="metric-number" style={{ fontSize: '2.5rem' }}>2K+</div>
              <div className="metric-label">Downloads</div>
            </div>
            <div style={{ width: '1px', height: '50px', background: 'var(--border)' }} />
            <div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                5-Stage Approval Chain
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.06em', marginTop: '0.2rem' }}>
                Student → Parent → Warden → QR → Guard
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-site">

        {/* Overview */}
        <div className="case-study-section">
          <div className="cs-section-label">Overview</div>
          <h2 className="cs-heading">The Problem It Solved</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }} className="two-col-grid">
            <div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                The existing hostel leave process at IIT Guwahati was entirely manual: paper forms, physical signatures from parents and wardens, and no tracking once a student exited campus. Students could circumvent the system; wardens had no real-time visibility; parents were notified only after the fact if at all.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                PIMS (also deployed as <strong style={{ color: 'var(--text-primary)' }}>Ease Exit</strong>) replaces the entire paper workflow with a digital, multi-stage approval chain that ends in a QR code physically verified at the campus gate.
              </p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.5rem' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--orange)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Tech Stack</div>
              {['Flutter (iOS + Android)', 'Node.js REST API', 'MongoDB + Mongoose', 'Firebase Authentication', 'Google Sign-In', 'FCM Push Notifications', 'Email Notifications', 'QR Code Generation + Scanning'].map((t) => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--orange)', flexShrink: 0 }} />
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Workflow */}
        <div className="case-study-section">
          <div className="cs-section-label">System Workflow</div>
          <h2 className="cs-heading">The Approval Chain</h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '540px', lineHeight: 1.65 }}>
            Every leave request travels through a defined state machine. Each transition triggers a push notification and email to the relevant party.
          </p>
          <div className="workflow-steps" style={{ maxWidth: '560px' }}>
            {project.workflow.map(({ title, desc }, i) => (
              <div key={i} className="workflow-step">
                <div className="workflow-step-num">{i + 1}</div>
                <div className="workflow-step-content">
                  <div className="workflow-step-title">{title}</div>
                  <div className="workflow-step-desc">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* HOD Admin */}
        <div className="case-study-section">
          <div className="cs-section-label">Administrative Layer</div>
          <h2 className="cs-heading">HOD Admin Panel</h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1.75rem', maxWidth: '620px', lineHeight: 1.65 }}>
            The HOD (Head of Department) has a separate administrative panel that sits outside the approval chain. This panel handles:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            {['Student & parent enrollment — adding new users to the system', 'Controlling whether a specific student\'s leave can be approved at all', 'Administrative oversight of all active and historical leave records', 'Managing warden and guard accounts'].map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '1rem 1.25rem', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px' }}>
                <CheckCircle2 size={15} style={{ color: 'var(--orange)', flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Decisions */}
        <div className="case-study-section">
          <div className="cs-section-label">Engineering Decisions</div>
          <h2 className="cs-heading">Key Technical Choices</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {project.engineeringDecisions.map(({ decision, reason }) => (
              <div key={decision} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.5rem 1.75rem', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem', alignItems: 'start' }} className="decision-row">
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--orange)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Decision</div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.35 }}>{decision}</h3>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Rationale</div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>{reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges */}
        <div className="case-study-section">
          <div className="cs-section-label">Challenges</div>
          <h2 className="cs-heading">What Was Hard</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {project.challenges.map((c, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1.1rem 1.25rem', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--orange)', fontWeight: 700, flexShrink: 0, marginTop: '1px' }}>{String(i + 1).padStart(2, '0')}</span>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{c}</p>
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
