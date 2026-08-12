import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  const links = [
    { label: 'Work', to: '/work' },
    { label: 'ML / Data', to: '/ml' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ];

  const socials = [
    {
      label: 'GitHub',
      icon: <Github size={16} />,
      href: 'https://github.com/ash469',
    },
    {
      label: 'LinkedIn',
      icon: <Linkedin size={16} />,
      href: 'https://linkedin.com/in/ayush-shandilya',
    },
    {
      label: 'Email',
      icon: <Mail size={16} />,
      href: 'mailto:ashshandilya4@gmail.com',
    },
  ];

  return (
    <footer className="app-footer">
      <div className="container-site">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '3rem',
            alignItems: 'start',
            paddingBottom: '2.5rem',
            borderBottom: '1px solid var(--border)',
            marginBottom: '2rem',
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div
              className="name-brand"
              style={{
                fontSize: '1.25rem',
                fontWeight: 900,
                color: 'var(--text-primary)',
                marginBottom: '0.75rem',
              }}
            >
              Ayush<span style={{ color: 'var(--orange)' }}>.</span>
            </div>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.88rem',
                color: 'var(--text-muted)',
                lineHeight: 1.65,
                maxWidth: '240px',
              }}
            >
              Software Engineer & Technical Product Builder.
              B.Tech, IIT Guwahati.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: '1rem',
              }}
            >
              Navigation
            </div>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {links.map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--text-primary)')}
                  onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Socials */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: '1rem',
              }}
            >
              Connect
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {socials.map(({ label, icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--orange-light)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; }}
                >
                  {icon}
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.75rem',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'var(--text-muted)',
            }}
          >
            © {year} <span className="name-brand" style={{fontSize: '0.8rem'}}>Ayush Shandilya</span>. B.Tech IIT Guwahati.
          </span>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'var(--text-muted)',
            }}
          >
            Built with React + Tailwind
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </footer>
  );
}
