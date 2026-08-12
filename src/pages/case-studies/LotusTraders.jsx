import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { getProject } from '../../data/projects';

const project = getProject('lotus-traders');

export default function LotusTraders() {
  return (
    <div style={{ paddingTop: '68px' }}>
      <div className="case-study-hero">
        <div className="container-site">
          <Link to="/work" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '2.5rem', transition: 'color 0.2s' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}>
            <ArrowLeft size={14} /> Back to Work
          </Link>

          <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
            <span className="badge-live"><span className="live-dot" />Client Production</span>
            <span className="badge-orange">Full-Stack · Next.js</span>
          </div>

          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 5vw, 4.2rem)', fontWeight: 900, color: 'var(--text-primary)', letterSpacing: '-0.03em', lineHeight: 1.0, marginBottom: '0.75rem' }}>
            Lotus Traders Machinery
          </h1>
          <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', color: 'var(--text-secondary)', fontWeight: 500, marginBottom: '2.5rem', maxWidth: '540px', lineHeight: 1.5 }}>
            Construction Machinery Catalogue & Enquiry Platform — Real Client Deployment
          </p>

          <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
            {[{ value: '150+', label: 'Products Listed' }, { value: '8', label: 'Categories' }].map(({ value, label }) => (
              <div key={label}>
                <div className="metric-number" style={{ fontSize: '2.5rem' }}>{value}</div>
                <div className="metric-label">{label}</div>
              </div>
            ))}
            <div style={{ width: '1px', height: '50px', background: 'var(--border)' }} />
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--text-secondary)', maxWidth: '280px', lineHeight: 1.6 }}>
              Entire product database designed and populated from scratch from paper catalogues and client communication.
            </div>
          </div>
        </div>
      </div>

      <div className="container-site">

        {/* Context */}
        <div className="case-study-section">
          <div className="cs-section-label">Context</div>
          <h2 className="cs-heading">Client & Problem</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }} className="two-col-grid">
            <div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                Lotus Traders is a construction machinery business with no digital presence. All customer communication happened over phone or in-person. The company's machinery catalogue existed only on paper, making it impossible for larger commercial clients — who research online — to discover or evaluate products.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                <strong style={{ color: 'var(--orange-light)' }}>Important: This is not an e-commerce system.</strong> Machinery prices are negotiated based on quantity, lease terms, and customer type. The system routes all customer intent through professional enquiry forms — not a shopping cart.
              </p>
            </div>
            <div>
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.5rem' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--orange)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>System Flow</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                  {['Customer browses catalogue', 'Views product detail + specs', 'Sees related machinery', 'Submits enquiry form', 'Admin receives notification', 'Admin responds to enquiry'].map((step, i) => (
                    <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', padding: '0.6rem 0', borderBottom: i < 5 ? '1px solid var(--border)' : 'none' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--orange)', fontWeight: 700, flexShrink: 0, marginTop: '1px' }}>{i + 1}</span>
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What I Built */}
        <div className="case-study-section">
          <div className="cs-section-label">What I Built</div>
          <h2 className="cs-heading">System Components</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {[
              { title: 'Product Catalogue', desc: '150+ products across 8 categories, built entirely from scratch. Each product has descriptions, specifications, feature lists, and image galleries.' },
              { title: 'Product Relationships', desc: 'Product pages show "Related Machinery" recommendations based on use-case compatibility — implemented as a document reference graph in MongoDB.' },
              { title: 'Enquiry System', desc: 'Customers submit detailed enquiry forms from any product page. Enquiries are stored, categorised, and displayed in the admin panel.' },
              { title: 'Admin Panel', desc: 'NextAuth.js-authenticated admin interface for managing products, categories, enquiries, and content — designed to be usable by non-technical staff.' },
              { title: 'SEO Optimisation', desc: 'Next.js ISR (Incremental Static Regeneration) for product pages — fast loads, good Lighthouse scores, and search engine discoverability.' },
              { title: 'Responsive Frontend', desc: 'Fully responsive across desktop, tablet, and mobile. Built with TypeScript for type safety throughout.' },
            ].map(({ title, desc }) => (
              <div key={title} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.5rem', transition: 'border-color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--border-orange)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--orange)', flexShrink: 0, display: 'block' }} />
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>{title}</h3>
                </div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Decisions */}
        <div className="case-study-section">
          <div className="cs-section-label">Engineering Decisions</div>
          <h2 className="cs-heading">Key Technical Choices</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {project.engineeringDecisions.map(({ decision, reason }) => (
              <div key={decision} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.5rem 1.75rem', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem', alignItems: 'start' }} className="decision-row">
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--orange)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Decision</div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.35 }}>{decision}</h3>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Rationale</div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>{reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges */}
        <div className="case-study-section">
          <div className="cs-section-label">Challenges</div>
          <h2 className="cs-heading">What Was Hard</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {project.challenges.map((c, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1.1rem 1.25rem', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--orange)', fontWeight: 700, flexShrink: 0 }}>{String(i + 1).padStart(2, '0')}</span>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{c}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="case-study-section">
          <div className="cs-section-label">Technology Stack</div>
          <h2 className="cs-heading">Tools Used</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {project.tech.concat(['ISR (Incremental Static Regen)', 'NextAuth.js', 'Mongoose ODM', 'Responsive CSS']).map((t) => (
              <span key={t} className="tech-badge" style={{ fontSize: '0.82rem', padding: '0.4rem 0.85rem' }}>{t}</span>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .two-col-grid { grid-template-columns: 1fr !important; }
          .decision-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
