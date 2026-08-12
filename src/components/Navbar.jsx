import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, FileText } from 'lucide-react';

const navItems = [
  { to: '/work', label: 'Work' },
  { to: '/ml', label: 'ML / Data' },
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
            <span className="name-brand">Ayush</span><span style={{ color: 'var(--orange)' }}>.</span>
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
            className="btn btn-primary btn-sm hide-mobile"
            target="_blank"
            rel="noreferrer"
          >
            <FileText size={14} />
            Resume
          </a>

          {/* Hamburger */}
          <button
            className="hamburger-btn"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
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
          style={{ marginTop: '1.5rem', alignSelf: 'flex-start' }}
          target="_blank"
          rel="noreferrer"
        >
          <FileText size={14} />
          Resume
        </a>
      </div>
    </>
  );
}
