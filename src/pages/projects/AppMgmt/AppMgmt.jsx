import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Shield, Smartphone, Bell, Layers, Database, Lock } from 'lucide-react';

const project = {
  roles: [
    { title: 'User (Applicant)', desc: 'Registers accounts, waits for admin clearance, submits documents, and tracks real-time status.' },
    { title: 'Administrator', desc: 'Reviews pending registrations, verifies applicant identity, updates application states, and manages catalog logs.' }
  ],
  decisions: [
    {
      decision: 'Admin Onboarding Verification Gate',
      reason: 'Structured a strict access block on user accounts. Upon signup, the account remains disabled in the application router until an administrator manually verifies the profile, blocking spam and unauthenticated submissions.'
    },
    {
      decision: 'Cloud Firestore Real-Time Sync',
      reason: 'Utilized Firestore snapshot listeners on the client. Any status update performed by an administrator is pushed to the client view instantly, avoiding repeated API polling overhead.'
    },
    {
      decision: 'FCM Direct Notification Pipelines',
      reason: 'Integrated Firebase Cloud Messaging to dispatch automated alerts on status transitions (Under Review, Approved, Rejected) ensuring users stay updated immediately.'
    }
  ],
  problems: [
    { problem: 'Manual Intake Processing', solution: 'Digitized paper forms into clean mobile application pipelines.' },
    { problem: 'Spam Account Registration', solution: 'Deployed a mandatory pending-state verification gate for all signups.' },
    { problem: 'Status Check Delays', solution: 'Created real-time listeners to push application updates without page refreshes.' },
    { problem: 'Communication Overhead', solution: 'Wired FCM triggers directly to database state changes.' }
  ],
  techMatrix: [
    { area: 'Mobile Development', tech: 'Flutter, Dart' },
    { area: 'Authentication Engine', tech: 'Firebase Authentication' },
    { area: 'Real-Time Database', tech: 'Cloud Firestore' },
    { area: 'Notification System', tech: 'Firebase Cloud Messaging (FCM)' },
    { area: 'Version Control', tech: 'Git, GitHub' },
    { area: 'Architecture Pattern', tech: 'Role-Based Access Control (RBAC)' }
  ]
};

export default function AppMgmt() {
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
            <span className="badge-live"><span className="live-dot" />Completed</span>
            <span className="badge-orange">Mobile · Workflow Automation · Firebase</span>
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
            Application Management System
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
            A secure role-based workflow system that digitalizes and automates multi-departmental application submission, verification, and status monitoring.
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
              { value: 'Verified', label: 'Onboarding Gate' },
              { value: 'Real-Time', label: 'Firestore Sync' },
              { value: 'Role-Based', label: 'Access Control' },
              { value: 'FCM', label: 'Push Notifications' }
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
            <div className="cs-section-label">System Operations</div>
            <h2 className="cs-heading" style={{ fontSize: '1.75rem', marginBottom: '1.25rem' }}>Workflow Automation for Multi-role Intake</h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
              Managing admissions, approvals, or resource requests across organization departments is traditionally blocked by slow paper trails and notification gaps. Unverified registrants can easily submit duplicate or invalid entries.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
              This platform structures the entire sequence into a gated digital system. Users sign up and wait in a verification queue. Once approved, they submit applications that administrators audit. Live database triggers push progress logs directly to their dashboard.
            </p>
          </div>

          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <Lock size={16} style={{ color: 'var(--orange)' }} />
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800 }}>Onboarding Verification Gate</h3>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1rem' }}>
              Registration does not grant system permissions automatically. Accounts pass through a strict gate:
            </p>
            {['Pushes account to Pending verification queue', 'Blocks application form route rendering', 'Requires manual admin verification override', 'Unlocks secure dashboard components upon approval'].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.4rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                <CheckCircle2 size={13} style={{ color: 'var(--orange)' }} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* VERIFICATION FLOW DIAGRAM */}
        <div className="case-study-section">
          <div className="cs-section-label">Verification Gate</div>
          <h2 className="cs-heading">onboarding Access Pipeline</h2>
          
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '2rem', marginTop: '1.5rem' }}>
            <pre className="arch-diagram" style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', overflowX: 'auto' }}>{`  User Registers Account
           │
           ▼
  [ Pending Verification State ]
           │
     (Admin Audit)
     ┌─────┴──────────┐
     ▼                ▼
  [ APPROVED ]     [ REJECTED ]
     │                │
  Access Granted   Account Blocked`}</pre>
          </div>
        </div>

        {/* ACCESS CONTROL */}
        <div className="case-study-section">
          <div className="cs-section-label">Role Access</div>
          <h2 className="cs-heading">Separation of Permissions</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '2.5rem', marginTop: '1.5rem' }} className="two-col-grid">
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
                <Shield size={18} style={{ color: 'var(--orange)' }} />
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800 }}>Role Access Map</h3>
              </div>
              <pre className="arch-diagram" style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>{`                  Authenticated Account
                            │
               ┌────────────┴────────────┐
               ▼                         ▼
            [ USER ]                  [ ADMIN ]
               │                         │
         • Submit applications     • Audit accounts
         • Track status updates    • Edit application states
         • Read personal history   • Dispatch status alerts`}</pre>
            </div>

            <div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1rem' }}>
                Data isolation rules are enforced directly at the server queries level. Users are constrained to retrieving documents containing their personal UID, preventing data leakage across applicants.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                Administrators query broad scopes, allowing them to look up, filter, and modify pending records across all organizational departments.
              </p>
            </div>
          </div>
        </div>

        {/* DATA ARCHITECTURE MAP */}
        <div className="case-study-section">
          <div className="cs-section-label">Data Architecture</div>
          <h2 className="cs-heading">Firebase Infrastructure Model</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginTop: '1.5rem' }}>
            {[
              {
                title: 'Firebase Auth',
                desc: 'Controls secure sign-up, session preservation, and JWT verification blocks.',
                icon: <Smartphone size={16} style={{ color: 'var(--orange)' }} />
              },
              {
                title: 'Firestore collections',
                desc: 'Houses data schemas: Users, Applications, and State Log records.',
                icon: <Database size={16} style={{ color: 'var(--orange)' }} />
              },
              {
                title: 'Real-Time Sync',
                desc: 'Drives instant UI card changes through snapshot query streams.',
                icon: <Layers size={16} style={{ color: 'var(--orange)' }} />
              },
              {
                title: 'FCM Alerts',
                desc: 'Sends background notification warnings on status updates.',
                icon: <Bell size={16} style={{ color: 'var(--orange)' }} />
              }
            ].map((node, idx) => (
              <div key={idx} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  {node.icon}
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-primary)' }}>{node.title}</h4>
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{node.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SOLVED PROBLEMS */}
        <div className="case-study-section">
          <div className="cs-section-label">Solutions Overview</div>
          <h2 className="cs-heading">Operational Fixes</h2>
          
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
