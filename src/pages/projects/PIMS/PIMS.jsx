import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Shield, QrCode, Mail, Smartphone, Users, Lock } from 'lucide-react';
import easeExitPng from './easeExit.png';

const project = {
  roles: [
    { title: 'Student', desc: 'Initiates request, selects dates, tracks approval lifecycle, and accesses time-locked QR codes.' },
    { title: 'Parent', desc: 'Acts as step-one approval authority; receives notifications via FCM and transactional emails.' },
    { title: 'Warden', desc: 'Provides institutional oversight; verifies student status and authorizes final gate passes.' },
    { title: 'Security Guard', desc: 'Scans secure QR exit pass at campus gate checkpoints to record exit/entry timestamps.' }
  ],
  decisions: [
    {
      decision: 'Cryptographically-Signed QR Tokens',
      reason: 'Generated time-sensitive, HMAC-signed JSON web tokens encoded inside QR codes. Security guards scanned passes that the backend verified for integrity, timestamps, and single-use permissions to block screenshot sharing and unauthorized reuse.'
    },
    {
      decision: 'Dual-Channel Notification Pipeline',
      reason: 'Integrated Firebase Cloud Messaging (FCM) for real-time mobile push events alongside transactional Node.js nodemailer SMTP scripts to guarantee parent alerts regardless of active app installs.'
    },
    {
      decision: 'Administrative Hold Restrictions',
      reason: 'Programmed strict database locks in MongoDB to override the normal approval machine. Administrative heads (HODs) could flag specific student profiles to restrict leave approvals due to academic or behavioral terms.'
    }
  ],
  problems: [
    { problem: 'Manual Paper Approvals', solution: 'Designed a digital, automated 5-stage approval state machine.' },
    { problem: 'Gate Verification Friction', solution: 'Implemented digital QR exit pass generation verified via Guard application scanner.' },
    { problem: 'Parent Alerts Latency', solution: 'Deployed dual-channel FCM and SMTP email triggers on every state transition.' },
    { problem: 'Security Impersonation', solution: 'Configured Firebase Auth + JWT signature verification for client-server APIs.' }
  ],
  techMatrix: [
    { area: 'Mobile Client', tech: 'Flutter, Dart' },
    { area: 'Backend Engine', tech: 'Node.js, Express, REST APIs' },
    { area: 'Database Storage', tech: 'MongoDB, Mongoose ORM' },
    { area: 'Identity & Tokens', tech: 'Firebase Auth, Google Sign-In, JWT' },
    { area: 'Alert Delivery', tech: 'Firebase Cloud Messaging (FCM), Email SMTP' },
    { area: 'Security & Gate', tech: 'HMAC QR generation, Native camera scanning' }
  ]
};

export default function PIMS() {
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
            <span className="badge-live"><span className="live-dot" />Active Deployment</span>
            <span className="badge-orange">Mobile · Workflow Automation · Backend</span>
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
            PIMS / Ease Exit
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
            Automated hostel leave management system deployed at Prasad Institute of Medical Sciences (Lucknow), replacing manual paper records with secure verification workflows.
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
              { value: '2,000+', label: 'Active Users / Installs' },
              { value: '5 Stages', label: 'Approval Machine' },
              { value: '4 Roles', label: 'Gated Personas' },
              { value: '2 Channels', label: 'FCM + SMTP Alerts' }
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
            <div className="cs-section-label">Institutional Operations</div>
            <h2 className="cs-heading" style={{ fontSize: '1.75rem', marginBottom: '1.25rem' }}>Digitalizing Campus Exit Passflows</h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
              Hostel leave approval workflows were traditionally dependent on manual entries and hardcopy signatures from parents and administrators. This process created extreme verification friction at security gates and had no reliable telemetry once students left campus.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
              Ease Exit resolves this bottleneck by implementing a mobile and backend ecosystem. Students request permissions via Flutter, which routes through parents and wardens for cryptographic verification, producing time-locked QR codes verified directly at security points.
            </p>
          </div>

          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <Lock size={16} style={{ color: 'var(--orange)' }} />
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800 }}>Admin restrictions</h3>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1rem' }}>
              The system features policy overrides. Administrative authorities (HODs) can lock specific user roles from triggering standard exit workflows:
            </p>
            {['Gated administrative locks', 'Audit log registries', 'Parent-warden linkage controls', 'Guard account configurations'].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.4rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                <CheckCircle2 size={13} style={{ color: 'var(--orange)' }} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* WORKFLOW STATE MACHINE */}
        <div className="case-study-section">
          <div className="cs-section-label">State Machine</div>
          <h2 className="cs-heading">The 5-Stage Approval Machine</h2>
          
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '2rem', marginTop: '1.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={easeExitPng} alt="The 5-Stage Approval Machine Diagram" style={{ width: '100%', maxWidth: '600px', height: 'auto', opacity: 0.85 }} />
          </div>
        </div>

        {/* USER ROLES */}
        <div className="case-study-section">
          <div className="cs-section-label">Operational Roles</div>
          <h2 className="cs-heading">Platform Personas</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginTop: '1.5rem' }}>
            {project.roles.map((role, idx) => (
              <div key={idx} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <Users size={16} style={{ color: 'var(--orange)' }} />
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-primary)' }}>{role.title}</h4>
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>{role.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SOLVED PROBLEMS */}
        <div className="case-study-section">
          <div className="cs-section-label">Engineering Solutions</div>
          <h2 className="cs-heading">Challenges Solved</h2>
          
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
          <h2 className="cs-heading">Trade-offs & Security Details</h2>

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
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Rationale & Security</div>
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
