import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function BullMQ() {
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
            <span className="badge-live">Completed / Deployed</span>
            <span className="badge-orange">Backend · Distributed Systems</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 900, color: 'var(--text-primary)', letterSpacing: '-0.03em', lineHeight: 1.0, marginBottom: '0.75rem' }}>
            Bulk Email BullMQ Runner
          </h1>
          <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', color: 'var(--text-secondary)', fontWeight: 500, maxWidth: '480px', lineHeight: 1.5 }}>
            Distributed asynchronous background email pipeline processing large CSV transaction logs.
          </p>
        </div>
      </div>

      <div className="container-site">
        <div className="case-study-section">
          <div className="cs-section-label">Context</div>
          <h2 className="cs-heading">Scale & SMTP Limits</h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '600px' }}>
            Sending bulk email requires reliable scheduling, rate limiting, SMTP provider rotation, and queue recovery to prevent server blocklists. This system parses bulk user records, schedules concurrent background jobs via BullMQ, and processes mailing dynamically with round-robin SMTP server rotation.
          </p>
        </div>

        <div className="case-study-section">
          <div className="cs-section-label">System Performance</div>
          <h2 className="cs-heading">Architecture and UI</h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '600px', marginBottom: '1.5rem' }}>
            Leverages Redis-backed BullMQ to coordinate job queues. Admins monitor active, delayed, and failed tasks in real-time through the integrated Bull Board dashboard, ensuring total transparency on mail queue status.
          </p>
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.5rem', maxWidth: '600px' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--orange)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Key Metrics</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-primary)' }}>100+</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Downloads / System Usage</div>
              </div>
              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-primary)' }}>Redis</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Event Store & Lock Manager</div>
              </div>
            </div>
          </div>
        </div>

        <div className="case-study-section">
          <div className="cs-section-label">Stack</div>
          <h2 className="cs-heading">Technologies</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {['BullMQ', 'Redis', 'Node.js', 'Nodemailer', 'SMTP Rotation', 'CSV Processing', 'Bull Board Dashboard'].map((t) => (
              <span key={t} className="tech-badge" style={{ fontSize: '0.82rem', padding: '0.4rem 0.85rem' }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
