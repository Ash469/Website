import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Shield, Settings, Server, Database, Globe, Search } from 'lucide-react';

const project = {
  roles: [
    { title: 'Full-Stack Developer', desc: 'Managed the full project lifecycle: designed the pages structure, wrote React code, set up App Script code, and hosted the final web assets.' },
    { title: 'System Architecture Design', desc: 'Chose to bypass a standard database server. Interfaced Google Sheets API directly with Apps Script to serve as a lightweight serverless data endpoint.' },
    { title: 'Google Integration Developer', desc: 'Constructed custom Google Apps Script functions to secure, parse, and serve roll-number work logs safely.' }
  ],
  decisions: [
    {
      decision: 'Google Sheets as the Primary Database',
      reason: 'Rather than adding custom database software, the coordinator updates records in standard spreadsheets. This avoided any database alignment issues and required zero technical training for administrative coordinators.'
    },
    {
      decision: 'Google Apps Script API Wrapper',
      reason: 'Designed a custom Google Apps Script webhook to parse roll-number requests, querying spreadsheet tabs and returning clean JSON datasets without exposing private client records.'
    },
    {
      decision: 'Static Site Rendering via Vite + Vercel',
      reason: 'Pre-compiled the institutional landing page structure statically. Only the student hour search forms query APIs, resulting in rapid load speeds and minimal server overhead.'
    }
  ],
  problems: [
    { problem: 'Manual Query Handling', solution: 'Designed a self-service roll-number hour lookup portal.' },
    { problem: 'High Setup Cost', solution: 'Bypassed hosting databases by mapping Google Sheets directly.' },
    { problem: 'Complex Admin Panels', solution: 'Preserved the existing spreadsheet workflows for organizers.' },
    { problem: 'Dynamic Listing Changes', solution: 'Structured filterable card views for activities and events.' }
  ],
  techMatrix: [
    { area: 'Frontend Library', tech: 'React, JavaScript' },
    { area: 'Build Platform', tech: 'Vite, ESBuild' },
    { area: 'CSS Framework', tech: 'Tailwind CSS' },
    { area: 'Data Storage', tech: 'Google Sheets' },
    { area: 'API Ingestion', tech: 'Google Apps Script API, Google Sheets API' },
    { area: 'Interactive Slider', tech: 'Swiper.js' },
    { area: 'Hosting Pipeline', tech: 'Vercel, Git integration' }
  ]
};

export default function NSS() {
  return (
    <div style={{ paddingTop: '68px', minHeight: '100vh', backgroundColor: 'var(--bg)', color: 'var(--text-primary)' }}>
      
      {/* HERO SECTION */}
      <div className="case-study-hero">
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
            <span className="badge-live"><span className="live-dot" />Production / Complete</span>
            <span className="badge-orange">Frontend · Google Sheets API · Serverless</span>
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
            NSS IIT Guwahati
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
            The official portal for the NSS Cell of IIT Guwahati, featuring a serverless self-service work-hour lookup tool for students.
          </p>

          {/* Metrics Grid */}
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
            {[
              { value: 'Production', label: 'NSS Portal' },
              { value: 'Sheets API', label: 'Data Source' },
              { value: 'Apps Script', label: 'API Layer' },
              { value: 'Serverless', label: 'Architecture' }
            ].map(({ value, label }) => (
              <div
                key={label}
                style={{ background: 'var(--bg-card)', padding: '1.5rem' }}
              >
                <div className="metric-number" style={{ fontSize: '1.85rem', color: 'var(--orange-light)' }}>{value}</div>
                <div className="metric-label" style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-primary)', marginTop: '0.25rem' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-site" style={{ padding: '0 0 6rem' }}>
        
        {/* OVERVIEW & PROBLEM */}
        <div className="case-study-section two-col-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '3.5rem' }}>
          <div>
            <div className="cs-section-label">Campus Platforms</div>
            <h2 className="cs-heading" style={{ fontSize: '1.75rem', marginBottom: '1.25rem' }}>Self-Service Student Hours Lookup</h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
              NSS participants at IIT Guwahati had no online method to review their accumulated volunteering hours. Coordinating hours required manual inquiries through email or text with administration coordinators.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
              This platform bridges standard objectives and announcements pages with a dynamic self-service query field. Students input their roll numbers to verify details, pulling hours dynamically from spreadsheet resources.
            </p>
          </div>

          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <Search size={16} style={{ color: 'var(--orange)' }} />
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800 }}>Student Lookup Funnel</h3>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1rem' }}>
              How the query matches work hours without dedicated servers:
            </p>
            {['Student inputs roll number on search field', 'Frontend dispatches Webhook call', 'Google Apps Script checks sheet index', 'Matches row containing roll number', 'Returns work details & hours'].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.4rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                <CheckCircle2 size={13} style={{ color: 'var(--orange)' }} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FLOW CHART DIAGRAM */}
        <div className="case-study-section">
          <div className="cs-section-label">System Architecture</div>
          <h2 className="cs-heading">Serverless Hour Ingestion Pipeline</h2>
          
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '2rem', marginTop: '1.5rem' }}>
            <pre className="arch-diagram" style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', overflowX: 'auto' }}>{`                    NSS Administrator
                           │
                           ▼
                    Google Sheets
                           │
                           ▼
                  Google Apps Script
                           │
                           ▼
                    API Endpoint
                           │
                           ▼
                  React / Vite Website
                           │
                           ▼
                        Student
                 (Search by Roll Number)`}</pre>
          </div>
        </div>

        {/* ROLES & SECTIONS */}
        <div className="case-study-section">
          <div className="cs-section-label">My Contribution</div>
          <h2 className="cs-heading">Development Areas</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginTop: '1.5rem' }}>
            {project.roles.map((role, idx) => (
              <div key={idx} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <Database size={16} style={{ color: 'var(--orange)' }} />
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-primary)' }}>{role.title}</h4>
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>{role.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SOLVED PROBLEMS */}
        <div className="case-study-section">
          <div className="cs-section-label">Solutions Overview</div>
          <h2 className="cs-heading">Platform Improvements</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginTop: '1.5rem' }}>
            {project.problems.map((p, idx) => (
              <div key={idx} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.5rem' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--orange)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Problem Space</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{p.problem}</div>
                <div style={{ width: '20px', height: '1px', background: 'var(--border)', marginBottom: '0.75rem' }} />
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Architecture Fix</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{p.solution}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ENGINEERING DECISIONS */}
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
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Rationale & Detail</div>
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
