import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Github, Sparkles, CheckCircle2, Globe, Database } from 'lucide-react';

import logoImg from './logo.png'; // NSS Logo (67KB)
import screenshotImg from './image.png'; // NSS Portal Screenshot (1.6MB)

export default function NSSExp() {
  const metrics = [
    { value: 'Sheets API', label: 'Integration', desc: 'Dynamic data lookup synchronization' },
    { value: 'Self-Service', label: 'Work Hours', desc: 'Instant search lookup system' },
    { value: 'Responsive', label: 'Mobile First', desc: 'Fully optimized lookup layout' }
  ];

  const overview = [
    'Developed the official website for the National Service Scheme (NSS) Cell at IIT Guwahati. The primary objective was to streamline self-service work-hour queries for student volunteers.',
    'By integrating the front-end search directly with the Google Sheets API database layer, volunteers can query and verify their completed service hours on demand, eliminating manual lookup bottlenecks.'
  ];

  const capabilities = [
    'Designed and developed the official NSS IIT Guwahati website from the ground up.',
    'Integrated Google Sheets API + Google Apps Script for dynamic student work-hour retrieval.',
    'Built a self-service system allowing students to check work hours using their roll number.',
    'Replaced a previously manual information-request process with instant online access.',
    'Developed and deployed the platform using React, Vite and Tailwind CSS.'
  ];

  const cards = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Intuitive Frontend Experience',
      desc: 'User interfaces engineered for accessibility, delivering readable tracking indexes and schedules for students on mobile devices.'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Google Sheets Database Sync',
      desc: 'Real-time lookup operations fetching volunteer metrics directly from cell coordinator sheet files.'
    }
  ];

  const techStack = [
    'HTML5',
    'CSS3',
    'JavaScript (ES6+)',
    'Google Sheets API',
    'Responsive Design',
    'Git & Version Control'
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
              <img src={logoImg} alt="NSS Cell" className="w-full h-full object-contain rounded-xl" />
            </div>
            <div>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-text-primary tracking-tight">
                NSS Cell, IIT Guwahati
              </h1>
              <p className="font-heading text-lg font-semibold text-text-secondary mt-1">
                Web Developer
              </p>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://www.iitg.ac.in/nss/"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-mono text-xs font-bold tracking-wider inline-flex items-center gap-2 shadow-orange-glow transition-all hover:-translate-y-0.5"
            >
              VISIT WEBSITE <Globe className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/Ash469/NSS"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full bg-bg-surface border border-border-subtle hover:border-orange-500/30 text-text-secondary hover:text-text-primary font-mono text-xs font-bold tracking-wider inline-flex items-center gap-2 transition-all hover:-translate-y-0.5"
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

            {/* Visual Showcase */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-orange-400 uppercase tracking-widest font-semibold">
                <Sparkles className="w-3.5 h-3.5" /> Visual Showcase
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-text-primary">
                Product Gallery & Interfaces
              </h2>
              <div className="rounded-2xl border border-border-subtle overflow-hidden bg-bg-card shadow-card">
                <img 
                  src={logoImg} 
                  alt="NSS Cell Portal Screenshot" 
                  className="w-full h-auto object-cover"
                />
                <img 
                  src={screenshotImg} 
                  alt="NSS Cell Portal Screenshot" 
                  className="w-full h-auto object-cover"
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
