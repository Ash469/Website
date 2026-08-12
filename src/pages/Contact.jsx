import React, { useState } from 'react';
import { Mail, Github, Linkedin, FileText, Copy, Check, MapPin } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('ashshandilya4@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
  };

  const contacts = [
    {
      icon: <Mail size={18} />,
      label: 'Primary Email',
      value: 'ashshandilya4@gmail.com',
      href: 'mailto:ashshandilya4@gmail.com',
    },
    {
      icon: <Mail size={18} />,
      label: 'Institute Email',
      value: 'ayush.r@iitg.ac.in',
      href: 'mailto:ayush.r@iitg.ac.in',
    },
    {
      icon: <Github size={18} />,
      label: 'GitHub',
      value: 'github.com/ash469',
      href: 'https://github.com/ash469',
      external: true,
    },
    {
      icon: <Linkedin size={18} />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/ayush-shandilya',
      href: 'https://linkedin.com/in/ayush-shandilya',
      external: true,
    },
    {
      icon: <MapPin size={18} />,
      label: 'Location',
      value: 'IIT Guwahati, Assam, India',
      href: null,
    },
  ];

  return (
    <div style={{ paddingTop: '68px' }}>
      {/* Header */}
      <div style={{ borderBottom: '1px solid var(--border)', padding: '4rem 0 3.5rem' }}>
        <div className="container-site">
          <div className="section-eyebrow">Contact</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 4vw, 3.6rem)', fontWeight: 900, color: 'var(--text-primary)', letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: '1rem' }}>
            Get In Touch
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--text-secondary)', maxWidth: '480px', lineHeight: 1.65 }}>
            Currently seeking SDE, data engineering, and product-oriented roles for the 2025 placement cycle. Open to conversations about internships, projects, and collaborations too.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="page-section">
        <div className="container-site">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '4rem', alignItems: 'start' }} className="contact-grid">

            {/* Left: Contact info */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em', marginBottom: '1.75rem' }}>
                Direct Contact
              </h2>

              {/* Copy email box */}
              <button
                onClick={handleCopy}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-warm)',
                  borderRadius: '10px',
                  padding: '1rem 1.25rem',
                  cursor: 'pointer',
                  marginBottom: '1.5rem',
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--border-orange)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-warm)')}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Mail size={18} style={{ color: 'var(--orange)' }} />
                  <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    ashshandilya4@gmail.com
                  </span>
                </div>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: copied ? 'var(--success)' : 'var(--text-muted)' }}>
                  {copied ? <Check size={13} /> : <Copy size={13} />}
                  {copied ? 'Copied!' : 'Copy'}
                </span>
              </button>

              {/* Contact links */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {contacts.slice(1).map(({ icon, label, value, href, external }) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.9rem 1.25rem', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px', transition: 'border-color 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--border-orange)')}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}>
                    <span style={{ color: 'var(--orange)', flexShrink: 0 }}>{icon}</span>
                    <div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.15rem' }}>{label}</div>
                      {href ? (
                        <a href={href} target={external ? '_blank' : undefined} rel="noreferrer"
                          style={{ fontFamily: 'var(--font-heading)', fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-primary)', textDecoration: 'none', transition: 'color 0.2s' }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--orange-light)')}
                          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}>
                          {value}
                        </a>
                      ) : (
                        <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-secondary)' }}>{value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Resume */}
              <a href="#" className="btn btn-secondary" style={{ display: 'inline-flex', marginTop: '1.5rem' }} target="_blank" rel="noreferrer">
                <FileText size={15} />
                Download Resume
              </a>
            </div>

            {/* Right: Form */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em', marginBottom: '1.75rem' }}>
                Send a Message
              </h2>

              {submitted ? (
                <div style={{ background: 'rgba(74,222,128,0.06)', border: '1px solid rgba(74,222,128,0.2)', borderRadius: '12px', padding: '2.5rem', textAlign: 'center' }}>
                  <Check size={32} style={{ color: 'var(--success)', margin: '0 auto 1rem' }} />
                  <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)' }}>Message sent!</p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '0.4rem' }}>I'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {[
                    { label: 'YOUR NAME', type: 'text', placeholder: 'e.g. Priya Sharma', required: true },
                    { label: 'EMAIL', type: 'email', placeholder: 'e.g. priya@company.com', required: true },
                    { label: 'SUBJECT', type: 'text', placeholder: 'Internship Opportunity / SDE Role / Collaboration', required: true },
                  ].map(({ label, type, placeholder, required }) => (
                    <div key={label}>
                      <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.68rem', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                        {label}
                      </label>
                      <input
                        type={type}
                        placeholder={placeholder}
                        required={required}
                        style={{
                          width: '100%',
                          background: 'var(--bg-card)',
                          border: '1px solid var(--border-warm)',
                          borderRadius: '8px',
                          padding: '0.85rem 1rem',
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.9rem',
                          color: 'var(--text-primary)',
                          outline: 'none',
                          transition: 'border-color 0.2s',
                        }}
                        onFocus={(e) => (e.target.style.borderColor = 'var(--border-orange)')}
                        onBlur={(e) => (e.target.style.borderColor = 'var(--border-warm)')}
                      />
                    </div>
                  ))}
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.68rem', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                      MESSAGE
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tell me about the role or opportunity..."
                      required
                      style={{
                        width: '100%',
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border-warm)',
                        borderRadius: '8px',
                        padding: '0.85rem 1rem',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.9rem',
                        color: 'var(--text-primary)',
                        outline: 'none',
                        resize: 'vertical',
                        minHeight: '120px',
                        transition: 'border-color 0.2s',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--border-orange)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--border-warm)')}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
                    Send Message
                    <Mail size={15} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </div>
  );
}
