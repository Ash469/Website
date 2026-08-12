import React, { useState } from 'react';
import { Terminal, ArrowRight, FileText, Copy, Check } from 'lucide-react';

export default function HeroSection() {
  const [copiedToast, setCopiedToast] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hello@rayhan.dev');
    setCopiedToast(true);
    setTimeout(() => setCopiedToast(false), 3000);
  };

  return (
    <section className="hero-container" id="hero">
      {/* Toast Notification */}
      {copiedToast && (
        <div className="toast-notification">
          <Check size={16} color="#10b981" />
          <span>Copied hello@rayhan.dev to clipboard!</span>
        </div>
      )}

      <div className="hero-grid-layout">
        {/* Left Column: Developer Intro */}
        <div className="hero-left-block">
          <div className="status-pill-badge">
            <span className="status-dot-pulse"></span>
            <span>AVAILABLE FOR FULL-TIME ROLES & CONTRACTS</span>
          </div>

          <div className="hero-code-tag">
            <Terminal size={15} />
            <span>npx rayhan-dev --status</span>
          </div>

          <h1 className="hero-display-title">
            Architecting <span className="title-accent-text">High-Performance</span> Systems & Web Apps.
          </h1>

          <p className="hero-bio-paragraph">
            Senior Full-Stack Engineer specializing in Modern React, Node.js, TypeScript, Microservices, Cloud Infrastructure, and performance-first web applications. 
            Focused on building resilient, scalable software engineered for real impact.
          </p>

          <div className="hero-cta-row">
            <a href="#projects" className="btn-fill-primary">
              <span>Explore Projects</span>
              <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn-outline-secondary">
              <FileText size={16} />
              <span>Resume</span>
            </a>
            <button className="btn-copy-action" onClick={handleCopyEmail}>
              <Copy size={15} />
              <span>Copy Email</span>
            </button>
          </div>
        </div>

        {/* Center Column: Clean Portrait Visual (image2.png) */}
        <div className="hero-center-block">
          <div className="portrait-card-frame">
            <img src="/image2.png" alt="Developer Portrait" className="portrait-card-img" />
            <div className="portrait-card-caption">
              <span className="caption-name">RAYHAN ADITYA</span>
              <span className="caption-role">Full-Stack Software Engineer</span>
            </div>
          </div>
        </div>

        {/* Right Column: Key Developer Stats */}
        <div className="hero-right-metrics">
          <div className="metric-card-box">
            <span className="metric-val-text">3+</span>
            <span className="metric-label-text">Years Engineering Experience</span>
          </div>

          <div className="metric-card-box">
            <span className="metric-val-text">25+</span>
            <span className="metric-label-text">Production Systems Deployed</span>
          </div>

          <div className="metric-card-box">
            <span className="metric-val-text">99.9%</span>
            <span className="metric-label-text">Service Uptime SLA</span>
          </div>
        </div>
      </div>
    </section>
  );
}
