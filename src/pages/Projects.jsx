import React, { useState, useEffect, useRef } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projectsData';

const FILTERS = ['All', 'Web', 'Mobile', 'Backend', 'ML / Data', 'DevOps'];

// Self-contained scroll-reveal wrapper component
function RevealItem({ children, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(domRef.current);
        }
      });
    }, { threshold: 0.1 });

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: 'opacity, transform'
      }}
    >
      {children}
    </div>
  );
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState('All');

  // Filter projects by category
  const filteredProjects = activeTab === 'All'
    ? projects
    : projects.filter(p => p.categories.includes(activeTab));

  return (
    <div style={{ paddingTop: '68px', minHeight: '100vh', backgroundColor: 'var(--bg)' }}>
      {/* Page Header (Super Compact Spacing) */}
      <div style={{ borderBottom: '1px solid var(--border)', padding: '2.5rem 0 1.75rem' }}>
        <div className="container-site">
          <div className="section-eyebrow" style={{ marginBottom: '0.5rem' }}>Inventory</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <h1
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: 900,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.05,
                  marginBottom: '0.5rem',
                }}
              >
                Engineering <span className="text-gradient-orange">Showcase</span>
              </h1>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem',
                  color: 'var(--text-secondary)',
                  maxWidth: '560px',
                  lineHeight: 1.5,
                }}
              >
                A compact catalogue of production platforms, distributed systems, mobile products, and machine learning models.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main content with filters and grid */}
      <section className="page-section" style={{ padding: '2rem 0 4rem' }}>
        <div className="container-site">
          {/* Filters Row */}
          <div 
            className="flex flex-wrap gap-2 mb-8 border-b border-border pb-4 overflow-x-auto"
          >
            {FILTERS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`tab-pill-button ${activeTab === tab ? 'active' : ''}`}
                style={{
                  padding: '0.45rem 1.1rem',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  border: '1px solid',
                  borderColor: activeTab === tab ? 'var(--orange)' : 'var(--border)',
                  backgroundColor: activeTab === tab ? 'var(--orange-dim)' : 'transparent',
                  color: activeTab === tab ? 'var(--text-primary)' : 'var(--text-secondary)',
                  borderRadius: '30px',
                  cursor: 'pointer',
                  minHeight: '38px',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== tab) {
                    e.currentTarget.style.borderColor = 'var(--text-muted)';
                    e.currentTarget.style.color = 'var(--text-primary)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== tab) {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.color = 'var(--text-secondary)';
                  }
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Grid Layout */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => {
              const displayIndex = String(index + 1).padStart(2, '0');
              // stagger delay based on row position for initial render
              const delay = (index % 3) * 100;
              
              return (
                <RevealItem key={project.id} delay={delay}>
                  <div style={{ position: 'relative', height: '100%' }} className="project-card-wrapper">
                    {/* Top index number */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '1.25rem',
                        right: '1.5rem',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        color: 'rgba(232, 98, 42, 0.25)',
                        zIndex: 2,
                        pointerEvents: 'none'
                      }}
                    >
                      #{displayIndex}
                    </div>
                    <ProjectCard project={project} variant="featured" />
                  </div>
                </RevealItem>
              );
            })}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div style={{ padding: '4rem 0', textAlign: 'center', color: 'var(--text-secondary)' }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>// No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
