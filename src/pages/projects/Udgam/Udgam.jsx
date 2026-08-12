import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Udgam() {
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
            <span className="badge-orange">Frontend · Event Platform</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 900, color: 'var(--text-primary)', letterSpacing: '-0.03em', lineHeight: 1.0, marginBottom: '0.75rem' }}>
            Udgam 2025
          </h1>
          <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', color: 'var(--text-secondary)', fontWeight: 500, maxWidth: '480px', lineHeight: 1.5 }}>
            Official Entrepreneurship Summit Website — IIT Guwahati
          </p>
        </div>
      </div>

      <div className="container-site">
        <div className="case-study-section">
          <div className="cs-section-label">Overview</div>
          <h2 className="cs-heading">What It Is</h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.75, maxWidth: '680px', marginBottom: '2rem' }}>
            The official website for Udgam 2025, IIT Guwahati's annual entrepreneurship summit. The brief required a premium event experience — polished animations, crisp information architecture, and fast load across devices. Built with React, Vite, Tailwind CSS, and animated with GSAP and Framer Motion.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            {[
              { title: 'Event Listings', desc: 'All summit events with schedule, venue, and registration details.' },
              { title: 'Registration Flow', desc: 'Participant registration for individual events and the summit as a whole.' },
              { title: 'Speaker Showcase', desc: 'Featured speaker profiles with bio and session information.' },
              { title: 'GSAP Animations', desc: 'Scroll-triggered reveals, timeline animations, and section transitions.' },
              { title: 'Framer Motion', desc: 'Page-level transitions and interactive component animations.' },
              { title: 'Fully Responsive', desc: 'Designed and tested across desktop, tablet, and mobile viewports.' },
            ].map(({ title, desc }) => (
              <div key={title} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.5rem', transition: 'border-color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--border-orange)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--orange)', display: 'block' }} />
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>{title}</h3>
                </div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="case-study-section">
          <div className="cs-section-label">Stack</div>
          <h2 className="cs-heading">Technologies</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {['React', 'Vite', 'Tailwind CSS', 'GSAP', 'Framer Motion', 'JavaScript', 'Responsive CSS'].map((t) => (
              <span key={t} className="tech-badge" style={{ fontSize: '0.82rem', padding: '0.4rem 0.85rem' }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
