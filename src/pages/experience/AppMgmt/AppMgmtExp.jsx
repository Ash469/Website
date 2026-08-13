import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Github, FileText, Sparkles, CheckCircle2, Smartphone, Database } from 'lucide-react';
import logoImg from './logo.jpg';

const assamAppPdf = '/src/pages/experience/AppMgmt/Assam_app_intern.pdf';

export default function AppMgmtExp() {
  const metrics = [
    { value: 'Real-time', label: 'Firestore Sync', desc: 'Firestore live listener synchronization' },
    { value: 'Multi-Role', label: 'Access Control', desc: 'Verification workflow gatekeeper' },
    { value: '100%', label: 'Spam Elimination', desc: 'Admin moderation and validation' }
  ];

  const overview = [
    'A comprehensive mobile and web solution for managing application workflows, leveraging Flutter for cross-platform UI and Firebase for real-time data, authentication, and notifications.',
    'Architected the mobile application registration and admin approval flow using Flutter and Firebase. Implemented real-time status tracking with Firestore listeners and FCM notifications.'
  ];

  const capabilities = [
    'Built a multi-role Flutter + Firebase platform for application submission and administrative review.',
    'Implemented admin verification to control user onboarding and prevent unauthorized access.',
    'Developed real-time application status updates using Firestore listeners.',
    'Designed role-specific dashboards with user-level data access and RBAC.',
    'Integrated FCM notifications for application and status updates.'
  ];

  const cards = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Flutter Application Client',
      desc: 'Clean and modern interfaces built with Dart and Flutter, implementing live reactive states that immediately display application validation updates.'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Firebase Backend Service',
      desc: 'Utilizes Firestore rule structures and Authentication guards to block unauthorized reads/writes, ensuring overall system security.'
    }
  ];

  const techStack = [
    'Flutter',
    'Dart',
    'Firebase Auth',
    'Cloud Firestore',
    'Firebase Cloud Messaging (FCM)',
    'Role-Based Rules'
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
              <img src={logoImg} alt="App Management System" className="w-full h-full object-contain rounded-xl" />
            </div>
            <div>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-text-primary tracking-tight">
                Application Management System
              </h1>
              <p className="font-heading text-lg font-semibold text-text-secondary mt-1">
                Flutter & Firebase Application Workflow & Admin Verification System
              </p>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://github.com/Ash469/AssamApp"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full bg-bg-surface border border-border-subtle hover:border-orange-500/30 text-text-secondary hover:text-text-primary font-mono text-xs font-bold tracking-wider inline-flex items-center gap-2 transition-all hover:-translate-y-0.5"
            >
              GITHUB REPO <Github className="w-4 h-4" />
            </a>
            <a
              href={assamAppPdf}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 font-mono text-xs font-bold inline-flex items-center gap-2 transition-all hover:-translate-y-0.5"
            >
              <FileText className="w-4.5 h-4.5" /> VIEW OFFER LETTER (PDF)
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

