import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

/**
 * ProjectCard
 * variant: 'featured' | 'small'
 */
export default function ProjectCard({ project, variant = 'featured' }) {
  const { slug, id, name, tagline, category, categories = [], tech = [], metrics = [], shortDesc, status } = project;
  const caseStudyPath = `/projects/${slug || id}`;
  const displayCategory = category || (categories.length > 0 ? categories.join(' · ') : '');

  // Helper to render status badges with distinct colors matching design tokens
  const renderStatusBadge = () => {
    if (!status) return null;
    
    const normalizedStatus = status.toLowerCase();
    
    if (normalizedStatus === 'production') {
      return (
        <span className="badge-live" style={{ borderColor: '#4ADE80', color: '#4ADE80' }}>
          <span className="live-dot" style={{ backgroundColor: '#4ADE80' }} />
          Production
        </span>
      );
    }
    if (normalizedStatus === 'completed') {
      return (
        <span className="badge-live" style={{ borderColor: '#60A5FA', color: '#60A5FA' }}>
          Completed
        </span>
      );
    }
    if (normalizedStatus === 'ongoing' || normalizedStatus === 'currently building') {
      return (
        <span className="badge-live" style={{ borderColor: 'var(--gold)', color: 'var(--gold)' }}>
          <span className="live-dot" style={{ backgroundColor: 'var(--gold)', animation: 'pulse 1.5s infinite' }} />
          Currently Building
        </span>
      );
    }
    if (normalizedStatus === 'archived') {
      return (
        <span className="badge-live" style={{ borderColor: '#9CA3AF', color: '#9CA3AF' }}>
          Archived
        </span>
      );
    }
    if (normalizedStatus === 'freelance') {
      return (
        <span className="badge-live" style={{ borderColor: '#C084FC', color: '#C084FC' }}>
          Freelance
        </span>
      );
    }
    if (normalizedStatus === 'experimental') {
      return (
        <span className="badge-live" style={{ borderColor: '#F472B6', color: '#F472B6' }}>
          Experimental
        </span>
      );
    }
    
    return (
      <span className="badge-live">
        {status}
      </span>
    );
  };

  if (variant === 'small') {
    return (
      <Link to={caseStudyPath} className="card" style={{ display: 'block', padding: '1.5rem', textDecoration: 'none' }}>
        {/* Category + Status */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
            }}
          >
            {displayCategory}
          </div>
          {renderStatusBadge()}
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
          View Details
          <ArrowUpRight size={14} />
        </div>
      </Link>
    );
  }
  // Featured variant
  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
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
        className="p-5 sm:p-7"
        style={{
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
            marginBottom: '0.85rem',
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
            {displayCategory}
          </span>
          {renderStatusBadge()}
        </div>

        {/* Name */}
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.3rem, 2.5vw, 1.85rem)',
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
            fontSize: '0.9rem',
            fontWeight: 500,
            color: 'var(--text-secondary)',
            lineHeight: 1.5,
          }}
        >
          {tagline}
        </p>
      </div>

      {/* Body */}
      <div className="p-5 sm:p-7" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Metrics row */}
        {metrics.length > 0 && (
          <div
            style={{
              display: 'flex',
              gap: '1.25rem',
              flexWrap: 'wrap',
              marginBottom: '1.25rem',
              paddingBottom: '1.25rem',
              borderBottom: '1px solid var(--border)',
            }}
          >
            {metrics.map(({ value, label }) => (
              <div key={label}>
                <div className="metric-number" style={{ fontSize: 'clamp(1.3rem, 2.5vw, 2rem)' }}>
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
            fontSize: '0.9rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            marginBottom: '1.25rem',
            flex: 1,
          }}
        >
          {shortDesc}
        </p>

        {/* Tech */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
          {tech.map((t) => (
            <span key={t} className="tech-badge">{t}</span>
          ))}
        </div>

        {/* CTA */}
        <Link to={caseStudyPath} className="btn btn-primary" style={{ alignSelf: 'flex-start', minHeight: '40px' }}>
          View Details
          <ArrowUpRight size={15} />
        </Link>
      </div>
    </div>
  );
}
