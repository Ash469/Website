import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Server, Database, Layers, Compass, Loader2 } from 'lucide-react';

const project = {
  pipeline: [
    { title: 'Heterogeneous Ingestion', desc: 'Queries water levels, precipitation rates, and temperature telemetry maps from varied endpoints and formats.' },
    { title: 'Temporal Alignment', desc: 'Piles monthly and seasonal observations into standard timestamp keys to align variables correctly.' },
    { title: 'Geospatial Mapping', desc: 'Translates geolocational coordinates (lat/long) into State, District, and specific monitoring station markers.' },
    { title: 'Feature Composition', desc: 'Aggregates historical water levels and rolling rain metrics to construct modeling data features.' }
  ],
  decisions: [
    {
      decision: 'Serverless Spatial-Temporal Pipeline',
      reason: 'Environmental records vary in frequency and format. Building a unified ingestion script ensures datasets align geographically and chronologically without corrupting class labels.'
    },
    {
      decision: 'Targeting Nationwide Coverage',
      reason: 'Rather than prototyping for one state, the data architecture is designed from the beginning around Pan-India scales, allowing telemetry maps to expand dynamically.'
    }
  ],
  roadmap: [
    { step: 'Data Collection', status: 'completed' },
    { step: 'Data Integration', status: 'in-progress' },
    { step: 'Data Cleaning', status: 'in-progress' },
    { step: 'Feature Engineering', status: 'in-progress' },
    { step: 'Model Development', status: 'in-progress' },
    { step: 'Evaluation & Benchmarks', status: 'in-progress' },
    { step: 'Geospatial Dashboard', status: 'in-progress' },
    { step: 'Pan-India Deployment', status: 'in-progress' }
  ],
  techMatrix: [
    { area: 'Core Language', tech: 'Python' },
    { area: 'Data Processing', tech: 'Pandas, NumPy' },
    { area: 'Machine Learning', tech: 'Scikit-learn (planned)' },
    { area: 'Plotting & Validation', tech: 'Matplotlib (planned)' },
    { area: 'Data Scopes', tech: 'Groundwater observations, Rainfall measurements, Telemetry logs' },
    { area: 'Geographic Mapping', tech: 'Spatial District & State coordinates' }
  ]
};

export default function Groundwater() {
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
            <span className="badge-live" style={{ color: 'var(--gold)', borderColor: 'var(--gold)' }}>
              <span className="live-dot" style={{ backgroundColor: 'var(--gold)', animation: 'pulse 1.5s infinite' }} />
              Currently Building
            </span>
            <span className="badge-orange">ML · Environmental Analytics</span>
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
            Groundwater Prediction System
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
            An ongoing machine learning and data engineering project designed to predict and monitor groundwater levels across India using historical observation logs and rainfall datasets.
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
              { value: 'Pan-India', label: 'Geographic Target' },
              { value: 'Ongoing', label: 'Project Status' },
              { value: 'Telemetry', label: 'Data Model' },
              { value: 'Roadmap Init', label: 'Current Phase' }
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
            <div className="cs-section-label">Problem Space</div>
            <h2 className="cs-heading" style={{ fontSize: '1.75rem', marginBottom: '1.25rem' }}>Geospatial Environmental Analytics</h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
              Groundwater depletion is a critical issue across India, varying heavily based on rainfall, intensive local agriculture, and seasonal changes. Predictively warning environmental authorities of depleting aquifers requires massive data integration.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
              This project focuses on building the data engineering pipeline. It consolidates heterogeneous observation tables, historical rainfall data, and locational details into a spatio-temporal ML dataset suited for regional forecasts.
            </p>
          </div>

          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <Compass size={16} style={{ color: 'var(--orange)' }} />
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800 }}>Nationwide Data Scopes</h3>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1rem' }}>
              Designed around nationwide coordinates:
            </p>
            {['Includes geolocational coordinates (lat/long)', 'Associates records to States and Districts', 'Integrates multi-source rainfall indexes', 'Architected for flexible spatial-temporal queries'].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.4rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                <CheckCircle2 size={13} style={{ color: 'var(--orange)' }} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* DATA PIPELINE DIAGRAM */}
        <div className="case-study-section">
          <div className="cs-section-label">Pipeline Architecture</div>
          <h2 className="cs-heading">Spatio-Temporal Data Pipeline</h2>
          
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '2rem', marginTop: '1.5rem' }}>
            <pre className="arch-diagram" style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', overflowX: 'auto' }}>{`  Groundwater Observations ─────┐
                                  │
  Rainfall Records ──────────────┼──→ Data Integration (Alignment by station)
                                  │
  Telemetry Logs ────────────────┘
                                         │
                                         ▼
                                Cleaning & Validation
                                         │
                                         ▼
                                Temporal Alignment
                                         │
                                         ▼
                                Geographic Mapping
                                         │
                                         ▼
                                Feature Engineering (Rolling averages)
                                         │
                                         ▼
                                ML Training Dataset`}</pre>
          </div>
        </div>

        {/* ROADMAP PROGRESS */}
        <div className="case-study-section">
          <div className="cs-section-label">Development Roadmap</div>
          <h2 className="cs-heading">Current System Progress</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
            {project.roadmap.map((item, idx) => (
              <div key={idx} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px', padding: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>{item.step}</span>
                {item.status === 'completed' ? (
                  <CheckCircle2 size={16} style={{ color: 'var(--success)' }} />
                ) : (
                  <Loader2 size={16} style={{ color: 'var(--gold)', animation: 'spin 2s linear infinite' }} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* PIPELINE PHASES */}
        <div className="case-study-section">
          <div className="cs-section-label">Data Challenges</div>
          <h2 className="cs-heading">Pipeline Tasks</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginTop: '1.5rem' }}>
            {project.pipeline.map((p, idx) => (
              <div key={idx} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <Layers size={16} style={{ color: 'var(--orange)' }} />
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-primary)' }}>{p.title}</h4>
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* TECHNICAL MATRIX */}
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
