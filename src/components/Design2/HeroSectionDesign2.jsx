import React from 'react';
import ScrollCanvas from '../ScrollCanvas';

export default function HeroSectionDesign2({ onFrameChange, onLoadingChange }) {
  return (
    <div className="design2-hero-wrapper">
      {/* Outer Big Header Title */}
      <div className="outer-portfolio-title">Portfolio</div>

      {/* Main Glassmorphic Dark Container */}
      <div className="design2-main-card">
        {/* Top Header Navbar */}
        <header className="d2-header">
          <a href="#hero2" className="d2-logo">ROBINSWEB</a>
          
          <nav className="d2-nav-pills">
            <a href="#about2" className="d2-pill active">About</a>
            <a href="#projects2" className="d2-pill">Projects</a>
            <a href="#services2" className="d2-pill">Services</a>
            <a href="#testimonials2" className="d2-pill">Testimonials</a>
            <a href="#contact2" className="d2-pill">Contact</a>
          </nav>

          <a href="#contact2" className="d2-cta-btn">
            Start a Project <span className="arrow">↗</span>
          </a>
        </header>

        {/* Hero Body */}
        <section className="d2-hero-body" id="hero2">
          <div className="d2-subhead">Hi, I am</div>
          <h1 className="d2-hero-name">Robin Ahmed</h1>

          {/* Center Canvas Animation Viewport with image2.png poster */}
          <div className="d2-canvas-container">
            <ScrollCanvas 
              onLoadingChange={onLoadingChange}
              onFrameChange={onFrameChange}
            />
          </div>

          {/* Floating Trust Card (Bottom Left) */}
          <div className="d2-floating-left">
            <div className="d2-trust-tag">✦ Trusted by 200+ clients</div>
            <h2 className="d2-trust-heading">
              Websites that turn<br />visitors into clients
            </h2>
            <div className="d2-btn-group">
              <a href="#contact2" className="d2-btn-fill">
                Start a Project <span className="arrow">↗</span>
              </a>
              <a href="#projects2" className="d2-btn-outline">
                View My Work <span className="arrow">↘</span>
              </a>
            </div>
          </div>

          {/* Floating Testimonial Card (Bottom Right) */}
          <div className="d2-floating-right">
            <div className="d2-avatar-stack">
              <span className="avatar avatar-1"></span>
              <span className="avatar avatar-2"></span>
              <span className="avatar avatar-3"></span>
              <span className="avatar avatar-4"></span>
            </div>
            <p className="d2-testimonial-text">
              99.6% Of My Clients Are Satisfied — Be One Of Them Today.
            </p>
            <div className="d2-badge-pills">
              <span className="d2-badge">Free Consultation</span>
              <span className="d2-badge">24h Response</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
