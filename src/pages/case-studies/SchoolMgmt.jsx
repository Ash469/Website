import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const roles = ['Administrator', 'Teacher', 'Student', 'Parent'];
const features = [
  { title: 'Attendance', desc: 'Teachers mark attendance session by session. Students and parents view attendance history with absence alerts.' },
  { title: 'Grades & Academic Tracking', desc: 'Teachers enter grades per subject and exam. Students view their academic progress over time.' },
  { title: 'Assignment Lifecycle', desc: 'Teachers create assignments with deadlines. Students submit; teachers grade. Full workflow in one interface.' },
  { title: 'School Timetable', desc: 'Structured class timetable viewable by students, teachers, and parents — filtered by class and section.' },
  { title: 'Events & Announcements', desc: 'School-wide announcements and event listings pushed via FCM to all relevant roles.' },
  { title: 'Fee Tracking', desc: 'Fee amounts, due dates, and payment status visible to parents and administrators.' },
];

export default function SchoolMgmt() {
  return (
    <div style={{ paddingTop: '68px' }}>
      <div className="case-study-hero">
        <div className="container-site">
          <Link to="/work" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '2.5rem', transition: 'color 0.2s' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}>
            <ArrowLeft size={14} /> Back to Work
          </Link>
          <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <span className="badge-orange">Mobile · Flutter</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 900, color: 'var(--text-primary)', letterSpacing: '-0.03em', lineHeight: 1.0, marginBottom: '0.75rem' }}>
            School Management App
          </h1>
          <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', color: 'var(--text-secondary)', fontWeight: 500, maxWidth: '480px', lineHeight: 1.5 }}>
            Flutter Multi-Role School Management System — 4 user roles, 7 modules
          </p>
        </div>
      </div>

      <div className="container-site">
        {/* Overview */}
        <div className="case-study-section">
          <div className="cs-section-label">Overview</div>
          <h2 className="cs-heading">What It Is</h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '2rem', maxWidth: '680px' }}>
            A comprehensive school management mobile application supporting four distinct user roles. Role-based navigation ensures each user sees only their relevant interface — administrators manage school structure, teachers record academic data, students view their progress, and parents track their children's school life.
          </p>

          {/* Roles */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginBottom: '2rem' }} className="four-col-grid">
            {roles.map((role, i) => (
              <div key={role} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px', padding: '1.25rem', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 900, color: 'var(--orange)', letterSpacing: '-0.03em', lineHeight: 1 }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '0.5rem' }}>{role}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="case-study-section">
          <div className="cs-section-label">Modules</div>
          <h2 className="cs-heading">Key Features</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {features.map(({ title, desc }) => (
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

        {/* Tech */}
        <div className="case-study-section">
          <div className="cs-section-label">Stack</div>
          <h2 className="cs-heading">Technologies</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {['Flutter', 'Dart', 'Firebase', 'Firestore', 'FCM', 'Firebase Auth', 'Role-Based Access Control'].map((t) => (
              <span key={t} className="tech-badge" style={{ fontSize: '0.82rem', padding: '0.4rem 0.85rem' }}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .four-col-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .four-col-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
