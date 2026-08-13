import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Github, Sparkles, CheckCircle2, Smartphone, Server, Globe } from 'lucide-react';
import logoImg from './logo.png';

import studentImg from './student.jpg';
import parentImg from './parent.jpg';
import wardenImg from './warden.jpg';
import guardImg from './guard.jpg';
import roleImg from './role.jpg';

export default function PIMSExp() {
  const metrics = [
    { value: '2,000+', label: 'Active Students', desc: 'Centralized digital tracking database' },
    { value: '5-Stage', label: 'Approval Pipeline', desc: 'Warden, parent & gate-guard hierarchy' },
    { value: '100%', label: 'Paperless Workflow', desc: 'Replacing manual log books securely' }
  ];

  const overview = [
    'Ease Exit is a digital leave management and student movement system built for Prasad Institute of Medical Sciences, designed to replace manual leave approval and physical verification processes with a centralized digital workflow.',
    'The platform connects students, parents, wardens, and security staff through a controlled approval and verification system. Instead of handling leave applications manually, the institution can manage the complete process digitally — from submitting a leave request to verifying the student\'s exit and return at the campus gate.'
  ];

  const capabilities = [
    'Built and deployed a leave-management platform used by 2,000+ students.',
    'Designed a multi-stage workflow: Student → Parent → Warden → QR Pass → Gate Guard.',
    'Implemented time-bound QR verification for secure digital exit and return at campus gates.',
    'Built Node.js REST APIs with MongoDB, Firebase Authentication and JWT-based access control.',
    'Integrated FCM push notifications and email alerts for real-time approval updates.'
  ];

  const cards = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Cross-Platform Flutter Client',
      desc: 'Engineered custom responsive interfaces for both iOS and Android platforms, providing seamless multi-role access controls and offline token rendering support.'
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: 'Node.js & MongoDB Infrastructure',
      desc: 'Deployed reliable back-end structures with RESTful API architecture, JWT authentication, and structured security layers keeping student transit logs confidential.'
    }
  ];

  const techStack = [
    'Flutter',
    'Dart',
    'Node.js',
    'MongoDB',
    'Firebase Auth',
    'Firebase Cloud Messaging (FCM)',
    'JWT Secure Access',
    'QR Code Tokenization'
  ];

  const galleryImages = [
    { src: studentImg, label: 'Student Interface' },
    { src: parentImg, label: 'Parent Portal' },
    { src: wardenImg, label: 'Warden Dashboard' },
    { src: guardImg, label: 'Gate Guard Verification' },
    { src: roleImg, label: 'Role-Based Selection' }
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
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-bg-surface border border-border-subtle p-2 flex items-center justify-center shrink-0 shadow-card">
              <img src={logoImg} alt="Ease Exit" className="w-full h-full object-contain rounded-xl" />
            </div>
            <div>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-text-primary tracking-tight">
                PIMS – Ease Exit
              </h1>
              <p className="font-heading text-lg font-semibold text-text-secondary mt-1">
                Smart Leave Management & Student Tracking System
              </p>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://play.google.com/store/apps/details?id=com.pims.pims_app"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-mono text-xs font-bold tracking-wider inline-flex items-center gap-2 shadow-orange-glow transition-all hover:-translate-y-0.5"
            >
              PLAY STORE <Globe className="w-4 h-4" />
            </a>
            <a
              href="https://apps.apple.com/in/app/ease-exit/id6447814631"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-mono text-xs font-bold tracking-wider inline-flex items-center gap-2 shadow-orange-glow transition-all hover:-translate-y-0.5"
            >
              APP STORE <Smartphone className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/Ash469/PIMS-Leave-App"
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

            {/* Custom Content for PIMS - Workflow Details */}
            <div className="bg-bg-card border border-border-subtle rounded-3xl p-8 sm:p-10 shadow-card space-y-6">
              <h2 className="font-display text-2xl font-black text-text-primary border-b border-border-subtle pb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-orange-500" /> Core Approval Workflow
              </h2>
              <p className="font-body text-text-secondary leading-relaxed text-sm">
                The core of the application is a multi-stage approval and verification workflow. Each stage controls whether the request can progress to the next stage, preventing unauthorized leave requests from reaching the physical exit gate:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center font-heading text-xs font-semibold">
                <div className="p-3 bg-bg-surface border border-border-subtle rounded-xl">
                  <span className="text-[10px] text-orange-400 font-mono">STEP 1</span>
                  <div className="text-text-primary mt-1">Student Submit</div>
                </div>
                <div className="p-3 bg-bg-surface border border-border-subtle rounded-xl">
                  <span className="text-[10px] text-orange-400 font-mono">STEP 2</span>
                  <div className="text-text-primary mt-1">Parent Approval</div>
                </div>
                <div className="p-3 bg-bg-surface border border-border-subtle rounded-xl">
                  <span className="text-[10px] text-orange-400 font-mono">STEP 3</span>
                  <div className="text-text-primary mt-1">Warden Approval</div>
                </div>
                <div className="p-3 bg-bg-surface border border-border-subtle rounded-xl">
                  <span className="text-[10px] text-orange-400 font-mono">STEP 4</span>
                  <div className="text-text-primary mt-1">QR Pass Gen</div>
                </div>
                <div className="p-3 bg-bg-surface border border-border-subtle rounded-xl col-span-2 sm:col-span-1">
                  <span className="text-[10px] text-emerald-400 font-mono">STEP 5</span>
                  <div className="text-text-primary mt-1">Guard Verify</div>
                </div>
              </div>
            </div>

            {/* Custom Content - Role Based System Details */}
            <div className="space-y-6">
              <h2 className="font-display text-2xl font-black text-text-primary">Role-Based Operations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-bg-card border border-border-subtle rounded-2xl space-y-2">
                  <h3 className="font-heading text-lg font-bold text-orange-400">Student & Parent Flow</h3>
                  <p className="text-sm font-body text-text-secondary leading-relaxed">
                    Students request leaves and receive instant updates. Parents receive alerts and can review, approve, or reject student requests.
                  </p>
                </div>
                <div className="p-6 bg-bg-card border border-border-subtle rounded-2xl space-y-2">
                  <h3 className="font-heading text-lg font-bold text-emerald-400">Warden & Guard Flow</h3>
                  <p className="text-sm font-body text-text-secondary leading-relaxed">
                    Wardens review institutional parameters. Guards scan dynamic QR passes to automatically record exits and returns.
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Showcase (Screenshots) */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-orange-400 uppercase tracking-widest font-semibold">
                <Sparkles className="w-3.5 h-3.5" /> Visual Showcase
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-text-primary">
                Product Gallery & Interfaces
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {galleryImages.map((img, idx) => (
                  <div key={idx} className="group overflow-hidden rounded-2xl border border-border-subtle bg-bg-card shadow-card hover:border-orange-500/30 transition-all duration-300">
                    <img 
                      src={img.src} 
                      alt={img.label} 
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-2 bg-bg-surface border-t border-border-subtle text-[10px] text-center text-text-secondary font-mono">
                      {img.label}
                    </div>
                  </div>
                ))}
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

            {/* Custom Content - Dynamic QR Gate-Exit Flow */}
            <div className="bg-bg-card border border-border-subtle rounded-3xl p-8 shadow-card space-y-4">
              <h2 className="font-display text-xl font-bold text-text-primary border-b border-border-subtle pb-3">
                QR-Based Physical Verification
              </h2>
              <p className="font-body text-sm text-text-secondary leading-relaxed">
                Dynamic signed QR tokens prevent screenshot sharing or pass reuse, automatically logging physical movements at the Prasad Institute security gate.
              </p>
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

