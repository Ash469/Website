import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Shield, Calendar, FileText, Smartphone, Users, Layers } from 'lucide-react';
import schoolPng from './school.png';

const project = {
  roles: [
    {
      title: 'Administrator',
      desc: 'Central control portal. Manages students, teachers, parents, subjects, and classes; publishes timetables and manages calendar events.'
    },
    {
      title: 'Teacher',
      desc: 'Classroom operational dashboard. Views class lists, takes attendance, assigns/grades homework, and posts learning materials.'
    },
    {
      title: 'Student',
      desc: 'Academic monitoring dashboard. Tracks class schedules, viewable timetables, grades, and submits digital homework.'
    },
    {
      title: 'Parent',
      desc: 'Supervision portal. Monitors child\'s grades, tracks attendance records, checks fee status, and reviews communication histories.'
    }
  ],
  modules: [
    { title: 'Attendance Module', desc: 'Allows teachers to record class attendance. Status feeds instantly to student and parent dashboards with warnings.' },
    { title: 'Academic Tracker', desc: 'Maintains grades, homework scopes, and learning material uploads across classes.' },
    { title: 'Scheduling System', desc: 'Manages timetables, class schedules, and calendar events powered by table_calendar integrations.' },
    { title: 'Reporting Engine', desc: 'Generates exportable PDF report cards and academic summaries using native file-sharing channels.' },
    { title: 'Fee Status Log', desc: 'Tracks payment statuses and historical transaction data, allowing parents to review pending dues.' }
  ],
  decisions: [
    {
      decision: 'Role-Based Dashboard Routing Architecture',
      reason: 'Structured the application lifecycle so that authentication queries the user\'s role profile. The router routes users immediately to specialized UI dashboards, keeping administrative controls completely isolated.'
    },
    {
      decision: 'Provider State Management Architecture',
      reason: 'Implemented Provider to manage shared states (such as active timetables, student records, and class selections) across multiple widget trees, keeping rendering performance high.'
    },
    {
      decision: 'PDF Generation & Document Sharing Pipeline',
      reason: 'Integrated pdf, path_provider, and share_plus libraries to compile and save report cards locally, taking the application beyond typical read-only screens.'
    }
  ],
  techMatrix: [
    { area: 'Mobile Framework', tech: 'Flutter (iOS, Android)' },
    { area: 'Programming Language', tech: 'Dart' },
    { area: 'State Management', tech: 'Provider' },
    { area: 'UI Paradigm', tech: 'Material Design, custom roles styling' },
    { area: 'Calendar Utility', tech: 'table_calendar' },
    { area: 'Date Formatting', tech: 'intl library' },
    { area: 'Document Compiling', tech: 'pdf rendering library' },
    { area: 'Local Directory Access', tech: 'path_provider' },
    { area: 'Native File Sharing', tech: 'share_plus' }
  ]
};

export default function SchoolMgmt() {
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
            <span className="badge-live">Completed</span>
            <span className="badge-orange">Mobile · Management Platform</span>
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
            School Management App
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
            A multi-role school management system centralizing classroom tasks, administrative data, schedules, and PDF report sharing into role-scoped Flutter dashboards.
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
              { value: '4 Roles', label: 'Dashboard Types' },
              { value: 'Provider', label: 'State Manager' },
              { value: '5 Modules', label: 'System Operations' },
              { value: 'PDF Export', label: 'Report Sharing' }
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
            <div className="cs-section-label">Management Platforms</div>
            <h2 className="cs-heading" style={{ fontSize: '1.75rem', marginBottom: '1.25rem' }}>Centralizing Fragmented Operations</h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
              Academic operations are traditionally fragmented across multiple channels: papers for schedules, separate apps for grades, sheets for attendance, and email threads for administrative tasks.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
              This Flutter application solves this fragmentation by grouping all modules under a unified mobile dashboard. By detecting the user's role profile upon authentication, the application loads the specific tools required for administrators, teachers, students, or parents.
            </p>
          </div>

          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <Layers size={16} style={{ color: 'var(--orange)' }} />
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800 }}>Role Router Pipeline</h3>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1rem' }}>
              Authentication maps roles dynamically:
            </p>
            {['Login authenticates credentials', 'Server profile returns user role', 'Router triggers dashboard widget tree', 'Restricts unauthorized widgets'].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.4rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                <CheckCircle2 size={13} style={{ color: 'var(--orange)' }} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ROLE ARCHITECTURE DIAGRAM */}
        <div className="case-study-section">
          <div className="cs-section-label">Access Architecture</div>
          <h2 className="cs-heading">Multi-Role Routing Hierarchy</h2>
          
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '2rem', marginTop: '1.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={schoolPng} alt="Multi-Role Routing Hierarchy Diagram" style={{ width: '100%', maxWidth: '500px', height: 'auto', opacity: 0.85 }} />
          </div>
        </div>

        {/* CORE MODULES */}
        <div className="case-study-section">
          <div className="cs-section-label">Operational Modules</div>
          <h2 className="cs-heading">Platform Modules</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginTop: '1.5rem' }}>
            {project.modules.map((m, idx) => (
              <div key={idx} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <Smartphone size={16} style={{ color: 'var(--orange)' }} />
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-primary)' }}>{m.title}</h4>
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ROLES DEFINITION */}
        <div className="case-study-section">
          <div className="cs-section-label">Role Specifications</div>
          <h2 className="cs-heading">Dashboard Capabilities</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginTop: '1.5rem' }}>
            {project.roles.map((r, idx) => (
              <div key={idx} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.5rem' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--orange)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Role Profile</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{r.title}</div>
                <div style={{ width: '20px', height: '1px', background: 'var(--border)', marginBottom: '0.75rem' }} />
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ENGINEERING DECISIONS */}
        <div className="case-study-section">
          <div className="cs-section-label">Engineering Decisions</div>
          <h2 className="cs-heading">Key Technical Choices</h2>

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
