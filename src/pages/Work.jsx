import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Filter } from 'lucide-react';
import { featuredProjects, additionalProjects, projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const categories = ['All', 'Full-Stack · DevOps · Android', 'Mobile · Backend · Firebase', 'Full-Stack · Client Production', 'Frontend · Event Platform'];
const simpleCats = ['All', 'Full-Stack', 'Mobile', 'Client', 'Frontend'];

export default function Work() {
  return (
    <div style={{ paddingTop: '68px' }}>
      {/* ── Page Header ── */}
      <div style={{ borderBottom: '1px solid var(--border)', padding: '4rem 0 3.5rem' }}>
        <div className="container-site">
          <div className="section-eyebrow">All Work</div>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 4vw, 3.6rem)',
              fontWeight: 900,
              color: 'var(--text-primary)',
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              marginBottom: '1rem',
            }}
          >
            Projects & Case Studies
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.05rem',
              color: 'var(--text-secondary)',
              maxWidth: '520px',
              lineHeight: 1.65,
            }}
          >
            Every project here is real, shipped, and operated in production.
            No tutorials, no demos — engineering with measurable outcomes.
          </p>
        </div>
      </div>

      {/* ── Featured Projects ── */}
      <section className="page-section">
        <div className="container-site">
          <div style={{ marginBottom: '2.5rem', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div className="section-eyebrow">Featured</div>
              <h2 className="section-title" style={{ marginTop: '0.25rem' }}>
                Flagship Systems
              </h2>
            </div>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.05em',
              }}
            >
              {featuredProjects.length} projects
            </span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '1.75rem',
            }}
          >
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} variant="featured" />
            ))}
          </div>
        </div>
      </section>

      {/* ── Additional Work ── */}
      <section
        className="page-section"
        style={{ borderTop: '1px solid var(--border)', background: 'var(--bg-surface)' }}
      >
        <div className="container-site">
          <div style={{ marginBottom: '2.5rem', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div className="section-eyebrow">Additional Work</div>
              <h2 className="section-title" style={{ marginTop: '0.25rem' }}>
                More Projects
              </h2>
            </div>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.05em',
              }}
            >
              {additionalProjects.length} projects
            </span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {additionalProjects.map((project) => (
              <ProjectCard key={project.id} project={project} variant="small" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
