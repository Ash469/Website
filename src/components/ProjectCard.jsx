import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

/**
 * ProjectCard
 * variant: 'featured' | 'small'
 */
export default function ProjectCard({ project, variant = 'featured' }) {
  const { slug, id, name, tagline, category, tech = [], metrics = [], shortDesc, status } = project;
  const caseStudyPath = `/projects/${slug || id}`;

  if (variant === 'small') {
    return (
      <Link to={caseStudyPath} className="card" style={{ display: 'block', padding: '1.5rem', textDecoration: 'none' }}>
        {/* Category */}
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            marginBottom: '0.6rem',
          }}
        >
          {category}
        </div>

        {/* Name */}
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.15rem',
            fontWeight: 800,
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em',
            marginBottom: '0.5rem',
          }}
        >
          {name}
        </h3>

        {/* Tagline */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.875rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.55,
            marginBottom: '1rem',
          }}
        >
          {tagline}
        </p>

        {/* Tech */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
          {tech.slice(0, 4).map((t) => (
            <span key={t} className="tech-badge">{t}</span>
          ))}
          {tech.length > 4 && (
            <span className="tech-badge">+{tech.length - 4}</span>
          )}
        </div>

        {/* CTA */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontFamily: 'var(--font-heading)',
            fontSize: '0.8rem',
            fontWeight: 600,
            color: 'var(--orange)',
          }}
        >
          View Case Study
          <ArrowUpRight size={14} />
        </div>
      </Link>
    );
  }

  // Featured variant
  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Top accent bar */}
      <div
        style={{
          height: '3px',
          background: 'linear-gradient(90deg, var(--orange), var(--gold))',
          flexShrink: 0,
        }}
      />

      {/* Header */}
      <div
        style={{
          padding: '2rem 2rem 1.5rem',
          background: 'linear-gradient(160deg, var(--bg-elevated), var(--bg-card))',
          borderBottom: '1px solid var(--border)',
        }}
      >
        {/* Category + Status */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '1rem',
            flexWrap: 'wrap',
            gap: '0.5rem',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
            }}
          >
            {category}
          </span>
          {status === 'production' && (
            <span className="badge-live">
              <span className="live-dot" />
              Production
            </span>
          )}
        </div>

        {/* Name */}
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)',
            fontWeight: 800,
            color: 'var(--text-primary)',
            letterSpacing: '-0.025em',
            marginBottom: '0.5rem',
            lineHeight: 1.1,
          }}
        >
          {name}
        </h3>

        {/* Tagline */}
        <p
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '0.95rem',
            fontWeight: 500,
            color: 'var(--text-secondary)',
            lineHeight: 1.5,
          }}
        >
          {tagline}
        </p>
      </div>

      {/* Body */}
      <div style={{ padding: '1.75rem 2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Metrics row */}
        {metrics.length > 0 && (
          <div
            style={{
              display: 'flex',
              gap: '1.5rem',
              flexWrap: 'wrap',
              marginBottom: '1.5rem',
              paddingBottom: '1.5rem',
              borderBottom: '1px solid var(--border)',
            }}
          >
            {metrics.map(({ value, label }) => (
              <div key={label}>
                <div className="metric-number" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}>
                  {value}
                </div>
                <div className="metric-label">{label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Description */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.92rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.65,
            marginBottom: '1.5rem',
            flex: 1,
          }}
        >
          {shortDesc}
        </p>

        {/* Tech */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1.75rem' }}>
          {tech.map((t) => (
            <span key={t} className="tech-badge">{t}</span>
          ))}
        </div>

        {/* CTA */}
        <Link to={caseStudyPath} className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
          View Case Study
          <ArrowUpRight size={15} />
        </Link>
      </div>
    </div>
  );
}
