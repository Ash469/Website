import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, FileText } from 'lucide-react';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      <header
        className="app-navbar"
        style={{
          background: scrolled
            ? 'rgba(12, 10, 8, 0.95)'
            : 'rgba(12, 10, 8, 0.75)',
          transition: 'background 0.3s ease',
        }}
      >
        <div className="navbar-inner">
          {/* Brand */}
          <Link to="/" className="nav-brand">
            <span className="brand-dot" />
            <span className="name-brand hide-mobile">AYUSH  SHANDILYA</span>
            <span className="name-brand show-mobile">AYUSH</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="nav-links" aria-label="Main navigation">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `nav-link${isActive ? ' active' : ''}`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Resume CTA */}
          <a
            href="#"
            className="nav-link hide-mobile resume-link"
            target="_blank"
            rel="noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}
          >
            Resume <span>↗</span>
          </a>

          {/* Hamburger */}
          <button
            className="hamburger-btn"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ minWidth: '44px', minHeight: '44px', display: 'flex', alignItems: 'center', justifyCenter: 'center' }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} role="dialog" aria-modal="true">
        {navItems.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `mobile-nav-link${isActive ? ' active' : ''}`
            }
          >
            {label}
          </NavLink>
        ))}
        <a
          href="#"
          className="btn btn-primary"
          style={{ marginTop: '1.5rem', alignSelf: 'stretch', justifyContent: 'center', minHeight: '44px' }}
          target="_blank"
          rel="noreferrer"
        >
          <FileText size={16} />
          Resume
        </a>
      </div>
    </>
  );
}
