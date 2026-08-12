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
import ProjectCard from '../components/ProjectCard';
import domainExpansionSound from '../../domainExpansion.mp3';
import domainImage from '../../domain.png';

const projects = [
  {
    id: 'techniche',
    slug: 'techniche',
    name: 'Techniche',
    tagline: 'Full-Stack · DevOps · Android',
    category: 'Web & Platforms',
    status: 'live',
    shortDesc: 'Production event technology ecosystem for IIT Guwahati\'s annual technical festival.',
    metrics: [{ value: '81K+', label: 'Visitors' }, { value: '2.3M', label: 'Requests' }],
    tech: ['AWS EC2', 'Nginx', 'Docker', 'React', 'Node.js', 'Flutter'],
    featured: true
  },
  {
    id: 'pims',
    slug: 'pims',
    name: 'PIMS / Ease Exit',
    tagline: 'Mobile · Backend · Firebase',
    category: 'Mobile',
    status: 'live',
    shortDesc: 'Smart leave management and student verification system with multi-stage approval workflow.',
    metrics: [{ value: '2K+', label: 'Downloads' }],
    tech: ['Flutter', 'Node.js', 'MongoDB', 'Firebase'],
    featured: true
  },
  {
    id: 'lotus-traders',
    slug: 'lotus-traders',
    name: 'Lotus Traders Machinery',
    tagline: 'Full-Stack · Next.js',
    category: 'Web & Platforms',
    status: 'live',
    shortDesc: 'Construction machinery catalogue and B2B enquiry routing platform for a real client.',
    metrics: [{ value: '150+', label: 'Products' }],
    tech: ['Next.js', 'React', 'TypeScript', 'MongoDB'],
    featured: true
  },
  {
    id: 'nss',
    slug: 'nss',
    name: 'NSS IIT Guwahati',
    tagline: 'Full-Stack · Google Sheets API',
    category: 'Web & Platforms',
    status: 'live',
    shortDesc: 'Official NSS website with a self-service work-hours lookup system for students.',
    metrics: [{ value: 'Real-time', label: 'Lookup' }],
    tech: ['React', 'Node.js', 'Google Sheets API'],
    featured: true
  }
];

/* ── Hero metrics ── */
const heroMetrics = [
  { value: '81K+', label: 'Visitors' },
  { value: '2.3M', label: 'Requests' },
  { value: '2K+', label: 'Downloads' },
  { value: '150+', label: 'Products' },
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
          HERO (U-SHAPE LAYOUT, DARK THEME)
      ══════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: 'var(--bg)', minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '68px', overflow: 'hidden' }}>
        <div className="container-site" style={{ maxWidth: '1400px', margin: '0 auto', width: '100%', padding: '0 2rem' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '3rem', alignItems: 'center' }} className="hero-grid">
            
            {/* ── Left: Typography ── */}
            <div style={{ zIndex: 10 }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', fontWeight: 500 }}>
                Hey. I'm Ayush,
              </div>
              <h1 style={{ color: 'var(--text-primary)', lineHeight: 1.1, marginBottom: '2rem' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.0rem, 4.0vw, 5.0rem)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
                  A SOFTWARE
                </div>
                <div style={{ fontFamily: 'serif', fontStyle: 'italic', fontSize: 'clamp(3rem, 5.5vw, 6.5rem)', fontWeight: 400, letterSpacing: '-0.02em', marginLeft: '1rem', marginTop: '-0.5rem', marginBottom: '-0.5rem', color: 'var(--orange-light)' }}>
                  & Systems
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.0rem, 4.0vw, 5.0rem)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
                  ENGINEER
                </div>
              </h1>
              
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '400px', marginBottom: '2.5rem' }}>
                Building robust products, platforms and infrastructure that handle real traffic, scale effectively, and deliver results.
              </p>

              <Link to="/contact" style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '1rem', 
                backgroundColor: 'var(--text-primary)', 
                color: 'var(--bg)', 
                padding: '0.6rem 0.6rem 0.6rem 1.75rem', 
                borderRadius: '50px', 
                textDecoration: 'none',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '0.05em',
                transition: 'transform 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                CONTACT ME
                <span style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  width: '38px', 
                  height: '38px', 
                  backgroundColor: 'var(--orange)', 
                  color: 'white', 
                  borderRadius: '50%' 
                }}>
                  <ArrowRight size={18} />
                </span>
              </Link>
            </div>

            {/* ── Center: U-Shape Portrait ── */}
            <div style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
              <div style={{ 
                width: '450px', 
                height: '550px', 
                backgroundColor: 'var(--bg-card)', 
                border: '1px solid var(--border-warm)',
                borderRadius: '0 0 250px 250px', 
                overflow: 'hidden',
                position: 'relative',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                boxShadow: '0 24px 60px rgba(0,0,0,0.6)'
              }}>
                <img 
                  src="/hero.png" 
                  alt="Ayush Shandilya" 
                  style={{ 
                    width: '120%', 
                    height: 'auto', 
                    objectFit: 'contain',
                    objectPosition: 'bottom center',
                    transform: 'translateY(5%)'
                  }} 
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/image2.png';
                  }}
                />
              </div>
            </div>

            {/* ── Right: Stats ── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', textAlign: 'center', zIndex: 10 }}>
              {heroMetrics.map((m, idx) => (
                <div key={idx}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 900, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                    {m.value}
                  </div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    {m.label}
                  </div>
                </div>
              ))}
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
            <div className="section-eyebrow">Selected Projects</div>
            <h2 className="section-title">
              Shipped Systems,{' '}
              <span className="text-gradient-orange">Real Evidence</span>
            </h2>
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
            {projects.filter(p => ['techniche', 'pims', 'lotus-traders', 'nss'].includes(p.id)).map((project) => (
              <ProjectCard key={project.id} project={project} variant="featured" />
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
            <Link to="/projects" className="btn btn-secondary">
              View All Projects
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          EXPERIENCE PREVIEW
      ══════════════════════════════════════════════════ */}
      <section
        className="page-section"
        style={{ borderTop: '1px solid var(--border)', background: 'var(--bg-surface)' }}
      >
        <div className="container-site">
          <div style={{ marginBottom: '2.5rem' }}>
            <div className="section-eyebrow">Career & Leadership</div>
            <h2 className="section-title">Experience Preview</h2>
          </div>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            A mix of professional client work and technical leadership roles at IIT Guwahati.
          </p>
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Link to="/experience" className="btn btn-secondary">
              View Experience Details <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SKILLS PREVIEW
      ══════════════════════════════════════════════════ */}
      <section className="page-section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container-site">
          <div style={{ marginBottom: '2.5rem' }}>
            <div className="section-eyebrow">Capabilities</div>
            <h2 className="section-title">Skills Overview</h2>
          </div>
          <p style={{ color: 'var(--text-secondary)' }}>
            <strong>Languages:</strong> C++ · Python · JavaScript · TypeScript · Dart · SQL<br/>
            <strong>Frontend:</strong> React · Next.js · Tailwind CSS<br/>
            <strong>Backend:</strong> Node.js · Express · REST APIs<br/>
            <strong>Cloud & Infra:</strong> AWS · Docker · Nginx · CI/CD
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          CURRENTLY
      ══════════════════════════════════════════════════ */}
      <section className="page-section" style={{ borderTop: '1px solid var(--border)', background: 'var(--bg-surface)' }}>
        <div className="container-site">
          <div style={{ marginBottom: '2.5rem' }}>
            <div className="section-eyebrow">Now</div>
            <h2 className="section-title">Currently</h2>
          </div>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', marginBottom: '1.5rem', lineHeight: '1.7' }}>
            Preparing for software engineering placements at IIT Guwahati, while building deeper expertise in machine learning and data systems.
          </p>
          <ul style={{ color: 'var(--text-secondary)', listStyleType: 'disc', paddingLeft: '1.5rem', lineHeight: '2' }}>
            <li><strong>Currently building:</strong> Groundwater Prediction System</li>
            <li><strong>Currently learning:</strong> ML / System Design / Kubernetes</li>
          </ul>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          CTA FOOTER SECTION
      ══════════════════════════════════════════════════ */}
      <section
        style={{
          borderTop: '1px solid var(--border)',
          padding: '5rem 0',
          background: 'var(--bg)',
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
            Let's build something.
          </h2>
          <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2.5rem' }}>
            <Link to="/contact" className="nav-link" style={{ fontWeight: 600 }}>Email</Link>
            <span style={{ color: 'var(--border-warm)' }}>·</span>
            <a href="https://linkedin.com/in/ayush-shandilya" className="nav-link" target="_blank" rel="noreferrer" style={{ fontWeight: 600 }}>LinkedIn</a>
            <span style={{ color: 'var(--border-warm)' }}>·</span>
            <a href="https://github.com/ash469" className="nav-link" target="_blank" rel="noreferrer" style={{ fontWeight: 600 }}>GitHub</a>
            <span style={{ color: 'var(--border-warm)' }}>·</span>
            <a href="#" className="nav-link" target="_blank" rel="noreferrer" style={{ fontWeight: 600 }}>Resume</a>
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
