import React from 'react';
import { ArrowUpRight, FlaskConical, Construction } from 'lucide-react';

const smartReturnSections = [
  { label: 'Problem', content: 'Predicting whether a customer will return a purchased product at the time of purchase — enabling proactive intervention to reduce return rates and improve customer lifetime value.' },
  { label: 'Dataset', content: 'Tabular e-commerce transaction data with features including product category, price, customer history, purchase channel, and seasonal factors.' },
  { label: 'Preprocessing', content: 'Handled missing values, encoded categorical features, normalised numerical columns, and addressed class imbalance with SMOTE.' },
  { label: 'EDA', content: 'Identified return rate patterns by category, price band, customer cohort, and purchase channel. Visualised feature correlations and distribution shifts.' },
  { label: 'Feature Engineering', content: 'Created derived features: customer return rate history, product category return rate, price relative to category median, and purchase-to-return time lag features.' },
  { label: 'Model Selection', content: 'Compared Logistic Regression, Random Forest, XGBoost, and LightGBM. Evaluated on precision, recall, F1, and AUC-ROC with cross-validation.' },
  { label: 'Results', content: 'Best performing model achieved meaningful improvement over the baseline return-rate classifier. Detailed metrics available in the project repository.' },
];

export default function ML() {
  return (
    <div style={{ paddingTop: '68px' }}>
      {/* Page header */}
      <div style={{ borderBottom: '1px solid var(--border)', padding: '4rem 0 3.5rem' }}>
        <div className="container-site">
          <div className="section-eyebrow">ML / Data</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 4vw, 3.6rem)', fontWeight: 900, color: 'var(--text-primary)', letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: '1rem' }}>
            Machine Learning &<br />Data Projects
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--text-secondary)', maxWidth: '500px', lineHeight: 1.65 }}>
            Applied ML work. Currently one completed project and one in active development.
            This section will expand as projects are completed and documented.
          </p>
        </div>
      </div>

      <div className="container-site">

        {/* ─── Smart Return Predictor (Completed) ─── */}
        <section className="page-section" style={{ borderBottom: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                <span className="badge-live"><span className="live-dot" />Completed</span>
                <span className="badge-orange">Supervised Learning</span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.025em', lineHeight: 1.05 }}>
                Smart Return Predictor
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginTop: '0.6rem', maxWidth: '500px' }}>
                Binary classification model predicting e-commerce product returns at the point of purchase.
              </p>
            </div>
            <FlaskConical size={32} style={{ color: 'var(--orange)', flexShrink: 0 }} />
          </div>

          {/* Section breakdown */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border)', borderRadius: '12px', overflow: 'hidden' }}>
            {smartReturnSections.map(({ label, content }) => (
              <div
                key={label}
                style={{
                  background: 'var(--bg-card)',
                  padding: '1.25rem 1.5rem',
                  display: 'grid',
                  gridTemplateColumns: '140px 1fr',
                  gap: '1.5rem',
                  alignItems: 'start',
                }}
                className="ml-row"
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 600, color: 'var(--orange)', letterSpacing: '0.1em', textTransform: 'uppercase', paddingTop: '2px' }}>
                  {label}
                </div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                  {content}
                </p>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginTop: '1.5rem' }}>
            {['Python', 'scikit-learn', 'LightGBM', 'XGBoost', 'pandas', 'numpy', 'matplotlib', 'seaborn', 'SMOTE', 'Jupyter'].map((t) => (
              <span key={t} className="tech-badge" style={{ fontSize: '0.78rem' }}>{t}</span>
            ))}
          </div>
        </section>

        {/* ─── Groundwater Prediction (Building) ─── */}
        <section className="page-section">
          <div
            className="building-card card"
            style={{ padding: '2.5rem' }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                  <span className="badge-building">
                    <Construction size={12} />
                    Currently Building
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
                    Do not treat as completed work
                  </span>
                </div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.025em', lineHeight: 1.05 }}>
                  Groundwater Prediction System
                </h2>
              </div>
            </div>

            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.75, maxWidth: '620px', marginBottom: '1.5rem' }}>
              A machine learning system for predicting groundwater levels from environmental and meteorological features. Currently in data collection and exploratory analysis phase.
            </p>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                color: 'var(--gold)',
                background: 'rgba(212,168,83,0.08)',
                border: '1px solid rgba(212,168,83,0.15)',
                padding: '0.6rem 1rem',
                borderRadius: '8px',
              }}
            >
              <Construction size={14} />
              Case study will be updated as the project progresses
            </div>
          </div>
        </section>

      </div>

      <style>{`
        @media (max-width: 640px) {
          .ml-row { grid-template-columns: 1fr !important; gap: 0.5rem !important; }
        }
      `}</style>
    </div>
  );
}
