import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Github,
  Linkedin,
  FileText,
  ExternalLink,
  ArrowUpRight,
  Server,
  Smartphone,
  Globe,
  Database,
} from 'lucide-react';
import { featuredProjects, additionalProjects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import domainExpansionSound from '../../domainExpansion.mp3';
import domainImage from '../../domain.png';

/* ── Hero metrics ── */
const heroMetrics = [
  { value: '81K+', label: 'Unique Visitors', sub: 'Techniche production' },
  { value: '2.3M', label: 'Requests Served', sub: 'Peak festival traffic' },
  { value: '95%+', label: 'Cached Traffic', sub: 'Nginx + HTTP caching' },
  { value: '2K+', label: 'PIMS Downloads', sub: 'Active student installs' },
  { value: '1.5K+', label: 'Android Downloads', sub: 'Play Store installs' },
  { value: '150+', label: 'Products Managed', sub: 'Lotus Traders catalogue' },
];

/* ── Capability pillars ── */
const pillars = [
  {
    icon: <Globe size={20} />,
    title: 'Web & Frontend',
    desc: 'React, Next.js, Vite, TypeScript — production sites with real traffic',
  },
  {
    icon: <Server size={20} />,
    title: 'Backend & Infrastructure',
    desc: 'Node.js, MongoDB, AWS EC2, Nginx, Docker, CI/CD pipelines',
  },
  {
    icon: <Smartphone size={20} />,
    title: 'Mobile',
    desc: 'Flutter apps with Firebase — cross-platform, shipped to Play Store',
  },
  {
    icon: <Database size={20} />,
    title: 'Data & ML',
    desc: 'Python, EDA, feature engineering, model training — building in parallel',
  },
];

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const audioRef = useRef(null);

  return (
    <div>
      {/* ══════════════════════════════════════════════════
          HERO (STATIC + GOJO HOVER)
      ══════════════════════════════════════════════════ */}
      <section className="hero-section">
        <div className="container-site" style={{ position: 'relative', zIndex: 1 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              gap: '4rem',
              alignItems: 'center',
              paddingTop: '3.5rem',
              paddingBottom: '4rem',
            }}
            className="hero-grid"
          >
            {/* ── Left: Text ── */}
            <div style={{ maxWidth: '580px' }}>
              <h1
                className="heading-premium name-brand"
                style={{
                  fontSize: 'clamp(3rem, 5.5vw, 5.5rem)',
                  color: 'var(--text-primary)',
                  marginBottom: '0.5rem',
                }}
              >
                Ayush
                <br />
                <span className="text-gradient-orange">Shandilya</span>
              </h1>
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                  fontWeight: 600,
                  color: 'var(--text-secondary)',
                  letterSpacing: '-0.01em',
                  marginBottom: '1.5rem',
                  lineHeight: 1.3,
                }}
              >
                Software Engineer & Technical Product Builder
              </div>

              {/* Supporting statement */}
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1.05rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  maxWidth: '520px',
                  marginBottom: '1.75rem',
                }}
              >
                I build and deploy production web, mobile, backend, and cloud
                systems. Every project on this site is real, shipped, and
                measured.
              </p>


              {/* Metrics */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '1.5rem',
                  paddingTop: '1.75rem',
                  borderTop: '1px solid var(--border-warm)',
                }}
              >
                {heroMetrics.map((m, idx) => (
                  <div key={idx}>
                    <div
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.65rem',
                        fontWeight: 800,
                        color: 'var(--orange-light)',
                        marginBottom: '0.1rem',
                      }}
                    >
                      {m.value}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                      }}
                    >
                      {m.label}
                    </div>
                    <div
                      style={{
                        fontSize: '0.7rem',
                        color: 'var(--text-muted)',
                      }}
                    >
                      {m.sub}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right: Portrait (Gojo Hover) ── */}
            <div 
              className="hero-portrait-wrap hide-mobile"
              onMouseEnter={() => {
                setIsHovered(true);
                if (audioRef.current) {
                  audioRef.current.currentTime = 0;
                  audioRef.current.play().catch(e => console.log('Audio play failed:', e));
                }
              }}
              onMouseLeave={() => {
                setIsHovered(false);
                if (audioRef.current) {
                  audioRef.current.pause();
                  audioRef.current.currentTime = 0;
                }
              }}
              style={{ cursor: 'crosshair' }}
            >
              <div
                style={{
                  width: '420px',
                  height: '520px',
                  borderRadius: '20px',
                  overflow: 'visible',
                  border: '1px solid var(--border-warm)',
                  position: 'relative',
                  boxShadow: '0 24px 60px rgba(0,0,0,0.6), 0 0 30px rgba(232,98,42,0.08)',
                }}
              >
                {/* Audio and Image for hover effect */}
                <audio ref={audioRef} src={domainExpansionSound} preload="auto" />
                
                <img
                  src={isHovered ? domainImage : "/image2.png"}
                  alt="Ayush Shandilya"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    borderRadius: '20px',
                    transition: 'all 0.3s ease',
                    filter: isHovered ? 'contrast(1.2) saturate(1.2)' : 'none',
                  }}
                />
                
                {/* Overlay caption */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(to top, rgba(12,10,8,0.95) 0%, transparent 100%)',
                    padding: '1.5rem 1.25rem 1.25rem',
                    borderRadius: '0 0 20px 20px',
                    transition: 'opacity 0.3s ease',
                    opacity: isHovered ? 0 : 1, // Hide caption when domain expansion triggers
                  }}
                >
                  <div
                    className="name-brand"
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      color: 'var(--text-primary)',
                    }}
                  >
                    Ayush Shandilya
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: 'var(--orange-light)',
                      marginTop: '0.2rem',
                    }}
                  >
                    B.Tech · IIT Guwahati
                  </div>
                </div>

                {/* Domain Expansion Text Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    paddingBottom: '2.5rem',
                    borderRadius: '20px',
                    background: 'rgba(0,0,0,0.4)',
                    opacity: isHovered ? 1 : 0,
                    transition: 'opacity 0.3s ease',
                    pointerEvents: 'none',
                  }}
                >
                  <div 
                    style={{
                      fontFamily: "'Jujutsu Kaisen', sans-serif",
                      fontSize: '2rem',
                      fontWeight: 900,
                      color: 'white',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      textShadow: '0 0 20px rgba(139, 92, 246, 0.8), 0 0 40px rgba(139, 92, 246, 0.6)',
                      transform: isHovered ? 'scale(1)' : 'scale(0.8)',
                      transition: 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                      textAlign: 'center',
                    }}
                  >
                    DOMAIN EXPANSION
                  </div>
                </div>

                {/* Expanding Links on Hover */}
                {/* Resume Link (Top Center) */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: isHovered ? 'translate(-50%, -300px)' : 'translate(-50%, -50%)',
                  opacity: isHovered ? 1 : 0,
                  transition: 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.1s',
                  pointerEvents: isHovered ? 'auto' : 'none',
                  zIndex: 10,
                }}>
                  <a href="#" className="domain-link" target="_blank" rel="noreferrer">
                    <FileText size={22} />
                    <span className="domain-link-text">Resume</span>
                  </a>
                </div>

                {/* GitHub Link (Left Edge) */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: isHovered ? 'translate(-260px, -50px)' : 'translate(-50%, -50%)',
                  opacity: isHovered ? 1 : 0,
                  transition: 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.2s',
                  pointerEvents: isHovered ? 'auto' : 'none',
                  zIndex: 10,
                }}>
                  <a href="https://github.com/ash469" className="domain-link" target="_blank" rel="noreferrer">
                    <Github size={22} />
                    <span className="domain-link-text">GitHub</span>
                  </a>
                </div>

                {/* LinkedIn Link (Right Edge) */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: isHovered ? 'translate(204px, -50px)' : 'translate(-50%, -50%)',
                  opacity: isHovered ? 1 : 0,
                  transition: 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s',
                  pointerEvents: isHovered ? 'auto' : 'none',
                  zIndex: 10,
                }}>
                  <a href="https://linkedin.com/in/ayush-shandilya" className="domain-link" target="_blank" rel="noreferrer">
                    <Linkedin size={22} />
                    <span className="domain-link-text">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          FEATURED WORK
      ══════════════════════════════════════════════════ */}
      <section className="page-section">
        <div className="container-site">
          {/* Section head */}
          <div style={{ marginBottom: '3rem' }}>
            <div className="section-eyebrow">Selected Work</div>
            <h2 className="section-title">
              Shipped Systems,{' '}
              <span className="text-gradient-orange">Real Evidence</span>
            </h2>
            <p className="section-subtitle">
              Three flagship projects — each built, deployed, and operating in production.
            </p>
          </div>

          {/* Featured grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '1.75rem',
              marginBottom: '2rem',
            }}
          >
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} variant="featured" />
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
            <Link to="/work" className="btn btn-secondary">
              View All Projects
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          MORE WORK
      ══════════════════════════════════════════════════ */}
      <section
        className="page-section"
        style={{ borderTop: '1px solid var(--border)', background: 'var(--bg-surface)' }}
      >
        <div className="container-site">
          <div style={{ marginBottom: '2.5rem' }}>
            <div className="section-eyebrow">More Work</div>
            <h2 className="section-title">Additional Projects</h2>
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

      {/* ══════════════════════════════════════════════════
          CAPABILITY PILLARS
      ══════════════════════════════════════════════════ */}
      <section className="page-section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container-site">
          <div style={{ marginBottom: '2.5rem' }}>
            <div className="section-eyebrow">Engineering Scope</div>
            <h2 className="section-title">What I Build</h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {pillars.map(({ icon, title, desc }) => (
              <div
                key={title}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  transition: 'border-color 0.2s, transform 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-orange)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'rgba(232,98,42,0.1)',
                    border: '1px solid rgba(232,98,42,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--orange)',
                    marginBottom: '1rem',
                  }}
                >
                  {icon}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '0.5rem',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                  }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          CTA FOOTER SECTION
      ══════════════════════════════════════════════════ */}
      <section
        style={{
          borderTop: '1px solid var(--border)',
          padding: '5rem 0',
          background: 'var(--bg-surface)',
          textAlign: 'center',
        }}
      >
        <div className="container-site">
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--orange)',
              marginBottom: '1.25rem',
            }}
          >
            Open to Opportunities
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              fontWeight: 800,
              color: 'var(--text-primary)',
              letterSpacing: '-0.025em',
              marginBottom: '1rem',
              lineHeight: 1.1,
            }}
          >
            Let's build something together
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              marginBottom: '2.5rem',
              maxWidth: '440px',
              margin: '0 auto 2.5rem',
            }}
          >
            Actively seeking SDE, data engineering, and product-oriented roles
            for 2025 placement.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary">
              Get In Touch
              <ArrowRight size={16} />
            </Link>
            <Link to="/work" className="btn btn-secondary">
              Browse Work
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            padding-top: 3rem !important;
          }
        }
        @media (max-width: 768px) {
          .metrics-bar-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .metrics-bar-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
