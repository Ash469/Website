import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';


export default function NSS() {
  return (
    <div style={{ paddingTop: '68px' }}>
      <div className="case-study-hero">
        <div className="container-site">
          <Link to="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '2.5rem', transition: 'color 0.2s' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}>
            <ArrowLeft size={14} /> Back to Projects
          </Link>

          <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <span className="badge-live"><span className="live-dot" />Production</span>
            <span className="badge-orange">Full-Stack · Google Sheets API</span>
          </div>

          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 900, color: 'var(--text-primary)', letterSpacing: '-0.03em', lineHeight: 1.0, marginBottom: '0.75rem' }}>
            NSS IIT Guwahati
          </h1>
          <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', color: 'var(--text-secondary)', fontWeight: 500, marginBottom: '1rem', maxWidth: '500px', lineHeight: 1.5 }}>
            Official NSS Website & Self-Service Work-Hours Lookup
          </p>
        </div>
      </div>

      <div className="container-site">

        {/* Problem */}
        <div className="case-study-section">
          <div className="cs-section-label">The Problem</div>
          <h2 className="cs-heading">A Simple Friction Point With an Elegant Fix</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }} className="two-col-grid">
            <div>
              <div style={{ background: 'rgba(232,98,42,0.06)', border: '1px solid rgba(232,98,42,0.2)', borderRadius: '10px', padding: '1.25rem 1.5rem', marginBottom: '1.5rem' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--orange)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>Before</div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                  Students who wanted to check their accumulated NSS work hours had to <strong style={{ color: 'var(--text-primary)' }}>contact administrators directly</strong> — email, WhatsApp, or in-person requests. Admins were fielding repetitive individual queries every week.
                </p>
              </div>
              <div style={{ background: 'rgba(74,222,128,0.05)', border: '1px solid rgba(74,222,128,0.15)', borderRadius: '10px', padding: '1.25rem 1.5rem' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--success)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>After</div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                  Students enter their roll number on the NSS website and <strong style={{ color: 'var(--text-primary)' }}>instantly see their hours</strong>. No admin involvement required. This is a self-service product built on top of the Google Sheets the admins already maintain.
                </p>
              </div>
            </div>
            <div>
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.5rem' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--orange)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>How It Works</div>
                {[
                  { step: 'Admin updates', desc: 'NSS coordinator updates the Google Sheet with roll numbers, student info, and work hours' },
                  { step: 'Student visits site', desc: 'Student opens the NSS IIT Guwahati website on any device' },
                  { step: 'Roll number input', desc: 'Student types their roll number into the search field' },
                  { step: 'API call', desc: 'Site queries Google Sheets API — no separate database needed' },
                  { step: 'Results displayed', desc: 'Student sees their name, total hours, and event breakdown instantly' },
                ].map(({ step, desc }, i) => (
                  <div key={i} style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start', padding: '0.75rem 0', borderBottom: i < 4 ? '1px solid var(--border)' : 'none' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--orange)', fontWeight: 700, flexShrink: 0, marginTop: '2px' }}>{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>{step}</div>
                      <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Engineering Decision */}
        <div className="case-study-section">
          <div className="cs-section-label">Engineering Decision</div>
          <h2 className="cs-heading">Why Google Sheets API?</h2>
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.75rem 2rem', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem', alignItems: 'start' }} className="decision-row">
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--orange)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Decision</div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.35 }}>Google Sheets as the data source, no custom database</h3>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Rationale</div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                Administrators were already maintaining records in Google Sheets. Building a separate database would require admins to learn a new interface and introduce a data synchronisation problem. Using the Sheets API directly means the admin workflow is entirely unchanged — they keep updating the spreadsheet they already know, and the website reads from it in real time.
              </p>
            </div>
          </div>
        </div>

        {/* Tech */}
        <div className="case-study-section">
          <div className="cs-section-label">Technology</div>
          <h2 className="cs-heading">Stack</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {['React', 'Node.js', 'Google Sheets API', 'Google OAuth 2.0', 'JavaScript', 'CSS'].map((t) => (
              <span key={t} className="tech-badge" style={{ fontSize: '0.82rem', padding: '0.4rem 0.85rem' }}>{t}</span>
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
