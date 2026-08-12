import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const workflow = [
  { title: 'Registration', desc: 'User creates an account with email/password or Google Sign-In via Firebase Auth.' },
  { title: 'Admin Verification', desc: 'Account is flagged as pending. Admin reviews and verifies the user before any application access.' },
  { title: 'Application Submission', desc: 'Verified users submit applications with required details. Each application enters the pending queue.' },
  { title: 'Status Tracking', desc: 'Users see live status (Pending → Under Review → Approved / Rejected) via Firestore real-time listeners.' },
  { title: 'Admin Action', desc: 'Admin reviews applications, updates status, and adds notes. Changes propagate to the user\'s view instantly.' },
  { title: 'Notifications', desc: 'FCM push notification sent to the user on each status change.' },
];

export default function AppMgmt() {
  return (
    <div style={{ paddingTop: '68px' }}>
      <div className="case-study-hero">
        <div className="container-site">
          <Link to="/work" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '2.5rem', transition: 'color 0.2s' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}>
            <ArrowLeft size={14} /> Back to Work
          </Link>
          <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <span className="badge-orange">Mobile · Flutter · Firebase</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 900, color: 'var(--text-primary)', letterSpacing: '-0.03em', lineHeight: 1.0, marginBottom: '0.75rem' }}>
            Application Management System
          </h1>
          <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', color: 'var(--text-secondary)', fontWeight: 500, maxWidth: '480px', lineHeight: 1.5 }}>
            Flutter / Firebase Application Workflow System — registration through approval
          </p>
        </div>
      </div>

      <div className="container-site">
        <div className="case-study-section">
          <div className="cs-section-label">System Workflow</div>
          <h2 className="cs-heading">Application Lifecycle</h2>
          <div className="workflow-steps" style={{ maxWidth: '560px' }}>
            {workflow.map(({ title, desc }, i) => (
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

        <div className="case-study-section">
          <div className="cs-section-label">Key Design Choice</div>
          <h2 className="cs-heading">Admin Verification Gate</h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '600px' }}>
            New users cannot access the application system until an administrator verifies their account. This verification gate prevents spam submissions and ensures that only legitimate applicants enter the pipeline — a critical requirement for any gated application process.
          </p>
        </div>

        <div className="case-study-section">
          <div className="cs-section-label">Stack</div>
          <h2 className="cs-heading">Technologies</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {['Flutter', 'Dart', 'Firebase Auth', 'Firestore', 'FCM', 'Real-time Listeners', 'Role-Based Access'].map((t) => (
              <span key={t} className="tech-badge" style={{ fontSize: '0.82rem', padding: '0.4rem 0.85rem' }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
