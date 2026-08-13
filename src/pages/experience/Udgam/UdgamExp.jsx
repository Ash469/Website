import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Github, Sparkles, CheckCircle2, Compass, Briefcase, Globe } from 'lucide-react';

import logoImg from './logo.png';
import videoDemo from './video.mp4';

export default function UdgamExp() {
  const metrics = [
    { value: 'Summit', label: 'Feature Operations', desc: 'Structured listings and interactive components' },
    { value: 'Interactive', label: 'User Flows', desc: 'High conversion navigation funnels' },
    { value: '100%', label: 'Optimized Layouts', desc: 'Seamless mobile responsive adjustments' }
  ];

  const overview = [
    'Managed platform features, event listings, and interactive web flows for Udgam, the flagship entrepreneurship summit of IIT Guwahati.',
    'Designed and streamlined registration navigation screens and marketing sections to ensure high conversion rates and smooth user journeys for thousands of prospective summit delegates.'
  ];

  const capabilities = [
    'Managed technical and platform requirements for Udgam, IIT Guwahati\'s entrepreneurship summit.',
    'Developed the event website using React, Vite and Tailwind CSS.',
    'Implemented event listings, registration flows, schedules and dynamic speaker showcases.',
    'Coordinated platform development and delivery across the event lifecycle.'
  ];

  const cards = [
    {
      icon: <Compass className="w-6 h-6" />,
      title: 'Summit Web Architecture',
      desc: 'Streamlined system directories housing event descriptions, key schedules, registration links, and details.'
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: 'Interface Moderation & Management',
      desc: 'Refining grid layouts, navigation controls, custom components, and visual elements across screens.'
    }
  ];

  const techStack = [
    'HTML5',
    'CSS3 / SCSS',
    'JavaScript (ES6+)',
    'UI/UX Architecture',
    'Event Analytics Integration',
    'Responsive Web Design'
  ];

  return (
    <div className="pt-24 min-h-screen bg-bg text-text-primary">
      <div className="max-w-7xl mx-auto px-6 pb-24">
        {/* Back Link */}
        <Link
          to="/experience"
          className="inline-flex items-center gap-2 font-mono text-xs text-text-muted hover:text-orange-400 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Experience
        </Link>

        {/* Hero Area */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 pb-12 border-b border-border-subtle mb-12">
          <div className="flex items-start gap-6">
            <div className="w-40 h-20 sm:w-48 sm:h-24 rounded-2xl bg-bg-surface border border-border-subtle p-2 flex items-center justify-center shrink-0 shadow-card">
              <img src={logoImg} alt="Udgam Logo" className="w-full h-full object-fill rounded-xl" />
            </div>
            <div>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-text-primary tracking-tight">
                Udgam, IIT Guwahati
              </h1>
              <p className="font-heading text-lg font-semibold text-text-secondary mt-1">
                Manager
              </p>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://udgam-nine.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-mono text-xs font-bold tracking-wider inline-flex items-center gap-2 shadow-orange-glow transition-all hover:-translate-y-0.5"
            >
              VISIT WEBSITE <Globe className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/Ash469/udgam"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full bg-bg-surface border border-border-subtle hover:border-orange-500/30 text-text-secondary hover:text-text-primary font-mono text-xs font-bold tracking-wider inline-flex items-center gap-2 shadow-orange-glow transition-all hover:-translate-y-0.5"
            >
              GITHUB REPO <Github className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Premium Grid Split */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* Main Area (2/3 width) */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-orange-400 uppercase tracking-widest font-semibold">
                <Sparkles className="w-3.5 h-3.5" /> Project Overview
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-text-primary">
                Overview & Summary
              </h2>
              <div className="prose prose-invert max-w-none text-text-secondary font-body leading-relaxed text-base space-y-4">
                {overview.map((para, idx) => <p key={idx}>{para}</p>)}
              </div>
            </div>

            {/* Key Deliverables */}
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

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

            {/* Video Walkthrough & Demo */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-orange-400 uppercase tracking-widest font-semibold">
                <Sparkles className="w-3.5 h-3.5" /> Interactive Demo
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-text-primary">
                Video Walkthrough & Demo
              </h2>
              <div className="rounded-3xl border border-border-subtle overflow-hidden bg-bg-card shadow-card">
                <video 
                  src={videoDemo} 
                  controls 
                  preload="none" 
                  poster={logoImg}
                  className="w-full h-auto aspect-video object-cover"
                />
              </div>
            </div>
          </div>

          {/* Sidebar Area (1/3 width, sticky) */}
          <div className="space-y-8 lg:sticky lg:top-28">
            {/* Metrics */}
            <div className="bg-bg-card border border-border-subtle rounded-3xl p-6 shadow-card space-y-6">
              <h3 className="font-display text-lg font-bold text-text-primary border-b border-border-subtle pb-3">Project Impact</h3>
              <div className="space-y-4">
                {metrics.map((m, idx) => (
                  <div key={idx} className="p-4 bg-bg-surface border border-border-subtle rounded-2xl hover:border-orange-500/20 transition-colors">
                    <div className="font-display text-3xl font-black text-orange-400 mb-1">{m.value}</div>
                    <div className="font-heading text-sm font-bold text-text-primary">{m.label}</div>
                    <div className="font-body text-xs text-text-muted mt-1">{m.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-bg-card border border-border-subtle rounded-3xl p-6 shadow-card space-y-4">
              <h3 className="font-display text-lg font-bold text-text-primary border-b border-border-subtle pb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 bg-bg-surface border border-border-subtle rounded-xl font-mono text-xs text-text-primary font-semibold hover:border-orange-500/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

