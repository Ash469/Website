import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Shield, Settings, Server, Database, Globe, BarChart2, Layers } from 'lucide-react';
import smartReturnSvg from './smartReturn.svg?raw';

const project = {
  pipeline: [
    { title: 'Data Cleaning', desc: 'Identified and handled missing value properties, removed outlier transaction logs, and normalized currency metrics.' },
    { title: 'Feature Engineering', desc: 'Constructed rolling customer purchase profiles, categorised items by returning frequency, and mapped time-based purchase intervals.' },
    { title: 'Stratified Split', desc: 'Applied StratifiedShuffleSplit (80/20 ratio) to maintain consistent return-to-sale proportions between train and test splits.' },
    { title: 'Model Exploration', desc: 'Benchmarked multiple pipelines from simple Logistic Regression baselines to tree-based ensemble models.' },
    { title: 'Evaluation & Interpretability', desc: 'Analyzed ROC-AUC curves, confusion matrices, and feature importances to verify the selected model decisions.' }
  ],
  decisions: [
    {
      decision: 'StratifiedShuffleSplit Validation Strategy',
      reason: 'Since returns represent an imbalanced class distribution, a random split could cause class distributions to drift between train and test datasets. Stratified splitting preserves class ratios exactly across splits.'
    },
    {
      decision: 'LightGBM Gradient Boosting Engine',
      reason: 'Outperformed traditional classifiers in tabular performance. Handled categorical features directly, maintained low memory footprints on local environments, and supported fast query times.'
    },
    {
      decision: 'Rolling User Return History Feature',
      reason: 'Constructed rolling return-to-purchase ratios per customer profile. This personal historical probability became the highest-weighted feature in predicting return risk.'
    }
  ],
  experiments: [
    { model: 'Logistic Regression (Baseline)', metric: 'ROC-AUC', score: '0.74', f1: '0.68' },
    { model: 'Random Forest Classifier', metric: 'ROC-AUC', score: '0.89', f1: '0.84' },
    { model: 'LightGBM (Final Model)', metric: 'ROC-AUC', score: '0.96', f1: '0.94' }
  ],
  featuresImportance: [
    { name: 'user_historical_return_rate', weight: '38%' },
    { name: 'product_category_return_rate', weight: '28%' },
    { name: 'transaction_amount', weight: '18%' },
    { name: 'seasonal_purchase_indicator', weight: '16%' }
  ],
  techMatrix: [
    { area: 'Core Language', tech: 'Python' },
    { area: 'Data Manipulation', tech: 'Pandas, NumPy' },
    { area: 'Machine Learning', tech: 'Scikit-learn, LightGBM' },
    { area: 'Plotting & Visuals', tech: 'Matplotlib, Seaborn' },
    { area: 'Validation Split', tech: 'StratifiedShuffleSplit (80/20)' },
    { area: 'Environment', tech: 'Jupyter Notebooks, Anaconda' }
  ]
};

export default function SmartReturn() {
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
            <span className="badge-orange">Machine Learning · Data Pipeline</span>
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
            Smart Return Predictor
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
            A high-accuracy predictive ML pipeline that structures historical transaction logs to forecast return risk and optimize retail fulfillment pipelines.
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
              { value: '96%', label: 'ROC-AUC Score' },
              { value: '94%', label: 'F1 Classification' },
              { value: 'LightGBM', label: 'Modeling Engine' },
              { value: 'Stratified', label: 'Validation Split' }
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
            <div className="cs-section-label">Data Science Pipeline</div>
            <h2 className="cs-heading" style={{ fontSize: '1.75rem', marginBottom: '1.25rem' }}>Predicting Return Likelihoods</h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
              Product returns generate billions of dollars in operational costs for retail businesses. Standard databases keep transaction histories but rarely evaluate user return patterns to optimize checkout operations.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
              This machine learning project structures raw transactional logs into predictive feature records. By cleaning outliers, applying stratified splits to preserve unbalanced class ratios, and training boosting ensembles, the system forecasts returning risks before fulfillment.
            </p>
          </div>

          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <BarChart2 size={16} style={{ color: 'var(--orange)' }} />
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800 }}>Feature Preprocessing Flow</h3>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1rem' }}>
              How raw inputs are cleaned and prepared for training:
            </p>
            {['Load raw transaction datasets', 'Identify & impute missing record rows', 'Apply category label encoding', 'Perform log transforms on transaction values', 'Run stratified splits to balance validation'].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.4rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                <CheckCircle2 size={13} style={{ color: 'var(--orange)' }} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* PIPELINE FLOW CHART DIAGRAM */}
        <div className="case-study-section">
          <div className="cs-section-label">Machine Learning Pipeline</div>
          <h2 className="cs-heading">Model Ingestion & Evaluation Lifecycle</h2>
          
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '2rem', marginTop: '1.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: '100%', maxWidth: '500px', opacity: 0.85 }} dangerouslySetInnerHTML={{ __html: smartReturnSvg }} />
          </div>
        </div>

        {/* DATA STEPS */}
        <div className="case-study-section">
          <div className="cs-section-label">Pipeline Sections</div>
          <h2 className="cs-heading">Development Phases</h2>
          
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

        {/* EXPERIMENT MATRIX */}
        <div className="case-study-section">
          <div className="cs-section-label">Benchmark Logs</div>
          <h2 className="cs-heading">Model Experimentation Matrix</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '2.5rem', marginTop: '1.5rem' }} className="two-col-grid">
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
                <Settings size={18} style={{ color: 'var(--orange)' }} />
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800 }}>Model Benchmarks</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', borderBottom: '1px solid var(--border)', pb: '0.5rem', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                  <span>MODEL</span>
                  <span>ROC-AUC</span>
                  <span>F1-SCORE</span>
                </div>
                {project.experiments.map((exp, idx) => (
                  <div key={idx} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    <span style={{ fontWeight: exp.model.includes('Final') ? 800 : 400, color: exp.model.includes('Final') ? 'var(--orange-light)' : 'var(--text-secondary)' }}>{exp.model}</span>
                    <span>{exp.score}</span>
                    <span>{exp.f1}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1rem' }}>
                We explored standard classification paradigms. The baseline Logistic Regression model served as a reference point but struggled with nonlinear interaction features.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                Ensemble architectures resolved the feature relationships. LightGBM provided the best balance, delivering a validation ROC-AUC score of 0.96 with fast predictions suitable for live checkouts.
              </p>
            </div>
          </div>
        </div>

        {/* MODEL INTERPRETABILITY */}
        <div className="case-study-section">
          <div className="cs-section-label">Interpretability</div>
          <h2 className="cs-heading">Feature Importances (LightGBM)</h2>
          
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '2rem', marginTop: '1.5rem' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              The relative influence of engineered features in predicting transaction returns:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {project.featuresImportance.map((feat, idx) => (
                <div key={idx} style={{ display: 'grid', gridTemplateColumns: '2fr 3fr 1fr', gap: '1rem', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{feat.name}</span>
                  <div style={{ height: '8px', background: 'var(--border)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: feat.weight, height: '100%', background: 'linear-gradient(90deg, var(--orange), var(--gold))', borderRadius: '4px' }} />
                  </div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--orange-light)', fontWeight: 700 }}>{feat.weight}</span>
                </div>
              ))}
            </div>
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
