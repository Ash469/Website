import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Shield, Flame, Award, HardDrive, Zap, Info } from 'lucide-react';

const project = {
  features: [
    { title: 'Continuous Step Tracking', desc: 'Queries native pedometer hardware step counters to log continuous distance telemetry in the background.' },
    { title: '1v1 Battle System', desc: 'Syncs two competitors into a rapid-fire 10-minute walking match, comparing step frequencies in real time.' },
    { title: 'Instant KO Win Condition', desc: 'Continuously monitors differences. If one user takes a lead of 300+ steps, the match closes immediately.' },
    { title: 'Monuments Progression Map', desc: 'Rewards achievements with location-themed city and famous monument badges across India.' }
  ],
  decisions: [
    {
      decision: 'Archived / Original System Scope',
      reason: 'Developed the original real-time step battle system and gamification modules. The deployed application has since evolved to exclude the active battle system due to backend scaling decisions, so the current platform does not represent this implementation.'
    },
    {
      decision: 'Cloudinary Asset Sync Pipeline',
      reason: 'Separated heavy media assets from the client build by storing badge, monument, and city achievement cards in Cloudinary, syncing URLs to user profiles to preserve client bundle size.'
    },
    {
      decision: 'Real-Time State Evaluation Logic',
      reason: 'Instead of calculation at the match end, the app periodically pushed step count queries to evaluate the 300-step knockout difference continuously throughout the active 10-minute battle.'
    }
  ],
  techMatrix: [
    { area: 'Mobile SDK & Language', tech: 'Flutter, Dart' },
    { area: 'Activity Sensors', tech: 'Native Pedometer API' },
    { area: 'Media & Badge Hosting', tech: 'Cloudinary' },
    { area: 'State Rules', tech: 'Continuous evaluation, 300-step KO' },
    { area: 'Game Duration', tech: '10-Minute timers' },
    { area: 'Version Control', tech: 'Git' }
  ]
};

export default function StepWars() {
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
            <span className="badge-live" style={{ color: 'var(--text-muted)', borderColor: 'var(--border)' }}>Archived · Original Implementation</span>
            <span className="badge-orange">Mobile · Gamification · Real-Time</span>
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
            Step Wars
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
            A real-time competitive walking application combining mobile step-sensor tracking with a 1v1 gamified battle engine.
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
              { value: '10 Mins', label: 'Battle Duration' },
              { value: '300 Steps', label: 'Instant KO Trigger' },
              { value: 'Cloudinary', label: 'Reward Delivery' },
              { value: 'Archived', label: 'Project Status' }
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
        
        {/* DISCLAIMER BOX */}
        <div className="case-study-section">
          <div className="cs-section-label">Operational Note</div>
          <div 
            style={{ 
              background: 'rgba(212, 168, 83, 0.04)', 
              border: '1px solid rgba(212, 168, 83, 0.15)', 
              borderRadius: '12px', 
              padding: '1.5rem',
              display: 'flex',
              gap: '1rem',
              alignItems: 'flex-start'
            }}
          >
            <Info size={20} style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '2px' }} />
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Original Implementation Disclaimer</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                This section documents the original 1v1 real-time competitive battle system and geographical rewards engine designed and developed during my role. The production application has since evolved, and the real-time battle models have been replaced in later versions.
              </p>
            </div>
          </div>
        </div>

        {/* OVERVIEW & PROBLEM */}
        <div className="case-study-section two-col-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '3.5rem' }}>
          <div>
            <div className="cs-section-label">Concept & Game Mechanics</div>
            <h2 className="cs-heading" style={{ fontSize: '1.75rem', marginBottom: '1.25rem' }}>Gamifying Daily Pedometer Data</h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
              Standard fitness trackers focus on static daily logs, which often fail to keep users engaged over time. Step Wars aimed to gamify fitness by converting pedometer data into head-to-head match outcomes.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
              The application let users start real-time, 10-minute walking challenges. During these matches, step differentials were monitored continuously to determine a winner, either by time limit or via an instant 300-step lockout condition.
            </p>
          </div>

          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <Flame size={16} style={{ color: 'var(--orange)' }} />
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800 }}>Game Logic Conditions</h3>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1rem' }}>
              Battles are resolved under two separate rules:
            </p>
            {['Instant KO: A participant takes a lead of 300+ steps', 'Time-based Win: Opponents walk for 10 minutes', 'High-frequency synchronization monitors changes', 'Tied results reward base coins to both'].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.4rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                <CheckCircle2 size={13} style={{ color: 'var(--orange)' }} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* STATE MACHINE DIAGRAM */}
        <div className="case-study-section">
          <div className="cs-section-label">State Engine</div>
          <h2 className="cs-heading">1v1 Battle State Flow</h2>
          
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '2rem', marginTop: '1.5rem' }}>
            <pre className="arch-diagram" style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', overflowX: 'auto' }}>{`              User-A Challenge Created
                        │
                  User-B Joins
                        │
                [ Battle Starts ] (10-Minute timer init)
                        │
            Continuous Step Sync Queries
            ┌───────────┴───────────┐
            ▼                       ▼
      Difference ≥ 300        Timer Expires
            │                       │
      [ Instant KO ]         [ Step Compare ]
            │                       │
            └───────────┬───────────┘
                        ▼
                Winner Identified
                        │
             Unlock Badge via Cloudinary`}</pre>
          </div>
        </div>

        {/* KEY FEATURES */}
        <div className="case-study-section">
          <div className="cs-section-label">Ecosystem Features</div>
          <h2 className="cs-heading">Gamification Modules</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginTop: '1.5rem' }}>
            {project.features.map((m, idx) => (
              <div key={idx} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <Award size={16} style={{ color: 'var(--orange)' }} />
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-primary)' }}>{m.title}</h4>
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* REAL-TIME TRAFFIC CHALLENGE */}
        <div className="case-study-section">
          <div className="cs-section-label">Engineering Lesson</div>
          <h2 className="cs-heading">High-Frequency Telemetry Load</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '2.5rem', marginTop: '1.5rem' }} className="two-col-grid">
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
                <HardDrive size={18} style={{ color: 'var(--orange)' }} />
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800 }}>Telemetry Update Loop</h3>
              </div>
              <pre className="arch-diagram" style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>{`  Competitor-A (Step sensor event) ────→ API State Endpoint
                                                      │
  Competitor-B (Step sensor event) ────→ Sync Queue database
                                                      │
  Battle State Engine ─────────────────→ Differential audit
                                                      │
  Broadcast results to both clients ───→ Client state changes`}</pre>
            </div>

            <div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1rem' }}>
                Running active 1v1 matches with fast telemetry updates generated substantial server-side traffic as concurrent participation grew. Maintaining real-time differential comparisons required constant write-heavy polling cycles.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                <strong style={{ color: 'var(--text-primary)' }}>Engineering Retrospective:</strong> The original real-time battle system generated significant backend traffic as concurrent participation increased, leading the product to move away from the battle model in later versions.
              </p>
            </div>
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
