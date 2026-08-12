import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Github, FileText, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ExperienceLayout({
  title,
  subtitle,
  logoSrc,
  logoIcon,
  githubUrl,
  pdfUrl,
  pdfLabel = 'VIEW CONTRACT (PDF)',
  metrics = [],
  overviewParagraphs = [],
  capabilities = [],
  cards = [],
  techStack = [],
  architectureImg,
  galleryImages = [],
  children
}) {
  return (
    <div className="pt-20 min-h-screen bg-bg text-text-primary">
      {/* ── Top Navigation & Hero Header ── */}
      <section className="border-b border-border-subtle py-12 bg-bg-card/50">
        <div className="max-w-5xl mx-auto px-6">
          <Link
            to="/experience"
            className="inline-flex items-center gap-2 font-mono text-xs text-text-muted hover:text-orange-400 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Experience
          </Link>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-bg-surface border border-border-subtle p-2 flex items-center justify-center shrink-0 shadow-card">
                {logoSrc ? (
                  <img src={logoSrc} alt={title} className="w-full h-full object-contain rounded-xl" />
                ) : (
                  <div className="w-full h-full rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                    {logoIcon}
                  </div>
                )}
              </div>

              <div>
                <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-text-primary tracking-tight">
                  {title}
                </h1>
                <p className="font-heading text-lg font-semibold text-text-secondary mt-1">
                  {subtitle}
                </p>
              </div>
            </div>

            {/* Action Links */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-mono text-xs font-bold tracking-wider inline-flex items-center gap-2 shadow-orange-glow transition-all hover:-translate-y-0.5"
                >
                  GITHUB REPO <Github className="w-4 h-4" />
                </a>
              )}
              {pdfUrl && (
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 font-mono text-xs font-bold inline-flex items-center gap-2 transition-all hover:-translate-y-0.5"
                >
                  <FileText className="w-4.5 h-4.5" /> {pdfLabel}
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Key Scale Metrics ── */}
      {metrics.length > 0 && (
        <section className="py-12 border-b border-border-subtle bg-bg-surface/40">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {metrics.map((m, idx) => (
                <div key={idx} className="p-6 bg-bg-card border border-border-subtle rounded-2xl shadow-card">
                  <div className="font-display text-4xl font-black text-orange-400 mb-1">{m.value}</div>
                  <div className="font-heading text-sm font-bold text-text-primary">{m.label}</div>
                  <div className="font-body text-xs text-text-muted mt-1">{m.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Main Content Body ── */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 space-y-16">
          {/* Section: Overview */}
          {overviewParagraphs.length > 0 && (
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-orange-400 uppercase tracking-widest font-semibold">
                <Sparkles className="w-3.5 h-3.5" /> Project Overview
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-text-primary">
                Overview & Summary
              </h2>
              <div className="prose prose-invert max-w-none text-text-secondary font-body leading-relaxed text-base space-y-4">
                {overviewParagraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>
          )}

          {/* Section: Custom Content Children */}
          {children && (
            <div className="space-y-12">
              {children}
            </div>
          )}

          {/* Section: Image Gallery (Visual Showcase) */}
          {galleryImages.length > 0 && (
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-orange-400 uppercase tracking-widest font-semibold">
                <Sparkles className="w-3.5 h-3.5" /> Visual Showcase
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-text-primary">
                Product Gallery & Interfaces
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {galleryImages.map((imgUrl, idx) => (
                  <div key={idx} className="group overflow-hidden rounded-2xl border border-border-subtle bg-bg-card shadow-card hover:border-orange-500/30 transition-all duration-300">
                    <img 
                      src={imgUrl} 
                      alt={`Gallery Image ${idx + 1}`} 
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section: What I Built */}
          {capabilities.length > 0 && (
            <div className="bg-bg-card border border-border-warm rounded-3xl p-8 sm:p-10 shadow-card space-y-6">
              <h2 className="font-display text-2xl font-black text-text-primary border-b border-border-subtle pb-4">
                Key Contributions & Deliverables
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {capabilities.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 bg-bg-surface border border-border-subtle rounded-xl text-sm font-heading font-semibold text-text-primary"
                  >
                    <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section: Cards Grid */}
          {cards.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cards.map((card, idx) => (
                <div key={idx} className="bg-bg-card border border-border-subtle rounded-3xl p-8 space-y-4 shadow-card">
                  <div className="p-3 bg-orange-500/10 border border-orange-500/20 rounded-2xl w-fit text-orange-500">
                    {card.icon}
                  </div>
                  <h3 className="font-display text-xl font-bold text-text-primary">{card.title}</h3>
                  <p className="font-body text-sm text-text-secondary leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          )}

          {/* Section: Architecture Visualization */}
          {architectureImg && (
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-orange-400 uppercase tracking-widest font-semibold">
                <Sparkles className="w-3.5 h-3.5" /> System Design
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-text-primary">
                Technical Component Architecture
              </h2>
              <div className="bg-bg-card border border-border-warm rounded-3xl p-4 sm:p-8 shadow-card">
                <div className="w-full rounded-2xl overflow-hidden bg-bg-surface border border-border-subtle p-2 sm:p-4 shadow-inner">
                  <img 
                    src={architectureImg} 
                    alt="System Architecture Diagram" 
                    className="w-full h-auto object-contain rounded-xl max-h-[600px] mx-auto filter contrast-[1.03]"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Section: Technology Badges */}
          {techStack.length > 0 && (
            <div className="bg-bg-card border border-border-subtle rounded-3xl p-8 space-y-4">
              <h3 className="font-display text-xl font-bold text-text-primary">Technologies Used</h3>
              <div className="flex flex-wrap gap-2.5">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-bg-surface border border-border-subtle rounded-xl font-mono text-sm text-text-primary font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Section: Footer Call to Action */}
          <div className="p-8 bg-gradient-to-r from-orange-500/10 via-gold/5 to-transparent border border-orange-500/30 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-xl font-black text-text-primary mb-1">Verify Assets & Codebases</h3>
              <p className="font-body text-sm text-text-secondary">
                Review verified details, contract agreements, and target source repositories.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-mono text-xs font-bold inline-flex items-center gap-2 transition-all shadow-orange-glow"
                >
                  <Github className="w-4.5 h-4.5" /> GITHUB
                </a>
              )}
              {pdfUrl && (
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-mono text-xs font-bold inline-flex items-center gap-2 transition-all shadow-card"
                >
                  <FileText className="w-4 h-4" /> VIEW PDF
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
