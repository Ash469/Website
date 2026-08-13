import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, CheckCircle2, Shield, Settings, Server, GitBranch, RefreshCw, Layers } from 'lucide-react';
import techSvg from './tech.svg?raw';
import technicheSvg from './techniche.svg?raw';

const project = {
  roles: [
    { title: 'DevOps Head', period: 'Nov 2025 – Present', desc: 'Leading infrastructure strategy, cluster reliability, DNS redirection, and containerized deployments across all Techniche assets.' },
    { title: 'Core Team, DevOps', period: 'Nov 2024 – Nov 2025', desc: 'Provisioned primary AWS EC2 instances, constructed CI/CD workflows, and deployed multiple core administrative dashboards.' }
  ],
  links: {
    live: 'https://techniche.org.in',
    playstore: 'https://play.google.com/store/apps/details?id=com.techniche.techniche_app&hl=en-US',
    appstore: 'https://apps.apple.com/in/app/techniche/id6751044164'
  },
  metrics: [
    { value: '81.56K+', label: 'Unique Visitors', desc: 'Direct engagement during core festival phases' },
    { value: '2.3M+', label: 'HTTP Requests', desc: 'Total traffic managed across platforms' },
    { value: '95.43%', label: 'Cached Traffic', desc: 'Offloaded via Nginx static asset optimization' },
    { value: '1.5K+', label: 'Android Downloads', desc: 'Google Play Store user installs' }
  ],
  techMatrix: [
    { area: 'Cloud & Hosting', tech: 'AWS EC2, Cloudflare DNS' },
    { area: 'Reverse Proxy & Routing', tech: 'Nginx (Reverse proxy, caching layers, routing)' },
    { area: 'Containers & Process Management', tech: 'Docker (Isolation), PM2 (Persistence)' },
    { area: 'CI/CD Pipelines', tech: 'GitHub Actions, automated SSH workflows' },
    { area: 'Frontend & Mobile', tech: 'React, Vite, Flutter, Dart' },
    { area: 'Backend & APIs', tech: 'Node.js, Express, REST APIs, JSON Web Tokens (JWT)' },
    { area: 'Database & Access Control', tech: 'MongoDB, Role-Based Access Control (RBAC)' }
  ],
  decisions: [
    {
      decision: 'DNS-Based Traffic Failover Redirection',
      reason: 'Maintained fully functional secondary backup servers on isolated environments. Configured manual DNS redirection records to instantly route festival traffic away from the primary server during critical failures, ensuring absolute recovery capability.'
    },
    {
      decision: 'Granular Role-Based Access Controls (RBAC)',
      reason: 'Designed and deployed isolated permissions across the portal: administrators, GHM heads, Comedy Night coordinators, and on-ground volunteer roles had scoped API tokens to enforce operational security.'
    },
    {
      decision: 'Nginx Reverse Proxy & HTTP Static Cache Optimization',
      reason: 'Absorbed 95.43% of incoming traffic directly through proxy configurations, drastically lowering database connection pooling limits and running multiple independent services on a single cost-efficient EC2 node.'
    }
  ]
};

export default function Techniche() {
  return (
    <div style={{ paddingTop: '68px', minHeight: '100vh', backgroundColor: 'var(--bg)', color: 'var(--text-primary)' }}>
      
      {/* HERO SECTION */}
      <div className="case-study-hero" style={{ borderBottom: '1px solid var(--border)', padding: '3.5rem 0' }}>
        <div className="container-site">
          <Link
            to="/projects"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              textDecoration: 'none',
              marginBottom: '2rem',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            <ArrowLeft size={13} />
            Back to Projects
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
            <span className="badge-live"><span className="live-dot" />Production / Active</span>
            <span className="badge-orange">Infrastructure · Full-Stack · DevOps</span>
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              fontWeight: 900,
              color: 'var(--text-primary)',
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              marginBottom: '0.75rem',
            }}
          >
            Techniche Platform
          </h1>

          <p
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.15rem',
              color: 'var(--text-secondary)',
              fontWeight: 500,
              marginBottom: '2rem',
              maxWidth: '650px',
              lineHeight: 1.55,
            }}
          >
            Production ecosystem and cloud infrastructure serving IIT Guwahati's annual technical festival, supporting public portals, admin tools, mobile apps, and check-in APIs.
          </p>

          {/* Core metrics */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '1px',
              background: 'var(--border)',
              borderRadius: '12px',
              overflow: 'hidden',
              maxWidth: '800px',
            }}
          >
            {project.metrics.map(({ value, label, desc }) => (
              <div
                key={label}
                style={{ background: 'var(--bg-card)', padding: '1.5rem' }}
              >
                <div className="metric-number" style={{ fontSize: '1.85rem', color: 'var(--orange-light)' }}>{value}</div>
                <div className="metric-label" style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-primary)', marginTop: '0.25rem' }}>{label}</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '0.25rem', lineHeight: 1.4 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-site" style={{ padding: '3rem 0 6rem' }}>
        
        {/* OVERVIEW & ROLES */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '3.5rem', marginBottom: '4rem' }} className="two-col-grid">
          <div>
            <div className="cs-section-label">Context & Problem</div>
            <h2 className="cs-heading" style={{ fontSize: '1.75rem', marginBottom: '1.25rem' }}>Scale Event Technology</h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
              Techniche is one of Asia's premier student-led technical festivals. Managing its software ecosystem meant architecting high-reliability tools for 80,000+ visitors and structuring background APIs that volunteers and admins could query under heavy loads.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
              The infrastructure had to deploy multiple apps (Main Website, CA Portal, GHM, Comedy Night register guides, and volunteer scan queues) on a limited set of resource-scoped AWS EC2 nodes, requiring robust container configuration and proxy rules.
            </p>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
              <a href={project.links.live} className="btn btn-primary" target="_blank" rel="noreferrer">
                Live Website <ArrowUpRight size={15} />
              </a>
              <a href={project.links.github} className="btn btn-secondary" target="_blank" rel="noreferrer">
                GitHub Repo <ArrowUpRight size={15} />
              </a>
            </div>
          </div>

          <div>
            <div className="cs-section-label">Roles & Operations</div>
            <h2 className="cs-heading" style={{ fontSize: '1.75rem', marginBottom: '1.25rem' }}>My Contribution</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {project.roles.map((r, i) => (
                <div
                  key={i}
                  style={{
                    padding: '1.25rem',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    borderRadius: '12px',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--orange-light)' }}>{r.title}</h3>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>{r.period}</span>
                  </div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {r.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ECOSYSTEM DIAGRAM */}
        <div className="case-study-section">
          <div className="cs-section-label">Software Ecosystem</div>
          <h2 className="cs-heading">Application Architecture Map</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginTop: '1.5rem' }}>
            {[
              {
                title: 'Main Website',
                desc: 'Public portal for festival event discovery, information, scheduling, and primary registrations.'
              },
              {
                title: 'CA Portal',
                desc: 'Campus Ambassador hub for tracking local advocates, processing tasks, and administering points.'
              },
              {
                title: 'Comedy Night & GHM Panels',
                desc: 'Targeted registration systems featuring leaderboard lookups and ticket quota verification.'
              },
              {
                title: 'Volunteer Scanner Panel',
                desc: 'Lightweight administrative tool using QR camera capture to process entry passes instantly.'
              },
              {
                title: 'Android Mobile Client',
                desc: 'Flutter app supporting navigation, live voting pipelines, and mobile-friendly leaderboards.'
              }
            ].map((app, idx) => (
              <div key={idx} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <Layers size={16} style={{ color: 'var(--orange)' }} />
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-primary)' }}>{app.title}</h4>
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{app.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* WORKFLOWS: DEPLOYMENT, TRAFFIC FAILOVER, EVENT OPERATIONS */}
        <div className="case-study-section">
          <div className="cs-section-label">Architecture & Workflows</div>
          <h2 className="cs-heading">System Operations Flows</h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', marginTop: '2rem' }} className="two-col-grid">
            
            {/* CI/CD Pipeline */}
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
                <GitBranch size={18} style={{ color: 'var(--orange)' }} />
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800 }}>CI/CD Git Flow</h3>
              </div>
              <pre className="arch-diagram" style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>{`Developer commits to git
          ↓
Push event hooks GitHub Action
          ↓
Build and test code units
          ↓
SSH script logs into AWS EC2
          ↓
Pull changes & Docker rebuild
          ↓
Deploy hotfix to production

⚡ Pipeline completes in ~30 seconds`}</pre>
            </div>

            {/* Traffic Failover */}
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '2rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
                <RefreshCw size={18} style={{ color: 'var(--orange)' }} />
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800 }}>Traffic Redirection</h3>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1, padding: '1rem 0' }}>
                <div style={{ width: '100%', maxWidth: '320px', opacity: 0.85 }} dangerouslySetInnerHTML={{ __html: techSvg }} />
              </div>
            </div>

          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', marginTop: '2rem' }} className="two-col-grid">
            
            {/* Event Operations */}
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
                <Server size={18} style={{ color: 'var(--orange)' }} />
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800 }}>On-Ground Check-In Flow</h3>
              </div>
              <pre className="arch-diagram" style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>{`User Registers on platform
          ↓
Unique ticket database creation
          ↓
QR Ticket dispatched via Web/App
          ↓
Attendee presents QR code at venue
          ↓
Volunteer scans QR using admin panel
          ↓
API checks RBAC permission + logs entry`}</pre>
            </div>

            {/* Access Control */}
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '2rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
                <Shield size={18} style={{ color: 'var(--orange)' }} />
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800 }}>Role Access Hierarchy</h3>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1, padding: '1rem 0' }}>
                <div style={{ width: '100%', maxWidth: '400px', opacity: 0.85 }} dangerouslySetInnerHTML={{ __html: technicheSvg }} />
              </div>
            </div>

          </div>
        </div>

        {/* DECISIONS & RATIONALE */}
        <div className="case-study-section">
          <div className="cs-section-label">Engineering Decisions</div>
          <h2 className="cs-heading">Architecture Trade-offs</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
            {project.decisions.map((d, i) => (
              <div
                key={i}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  display: 'grid',
                  gridTemplateColumns: '1fr 2fr',
                  gap: '2rem',
                  alignItems: 'start'
                }}
                className="decision-row"
              >
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--orange)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Decision Choice</div>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.35 }}>{d.decision}</h4>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Rationale & Impact</div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{d.reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TECHNOLOGY MATRIX */}
        <div className="case-study-section">
          <div className="cs-section-label">Technologies</div>
          <h2 className="cs-heading">Engine & Tooling Matrix</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
            {project.techMatrix.map((item, idx) => (
              <div key={idx} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px', padding: '1.25rem' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', fontWeight: 600, color: 'var(--orange)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                  {item.area}
                </div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                  {item.tech}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .two-col-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .decision-row { grid-template-columns: 1fr !important; gap: 1rem !important; }
        }
      `}</style>
    </div>
  );
}
