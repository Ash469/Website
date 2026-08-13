import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, CheckCircle2, Cpu, Server, ShieldAlert, Globe, Smartphone } from 'lucide-react';

import logoImg from './image.png';
import screenshotImg from './unnamed (1).png';
import screenshotImg1 from './unnamed (2).png';


export default function TechnicheDevOpsExp() {
  const metrics = [
    { value: 'AWS EC2', label: 'Hosting Infrastructure', desc: 'High-availability cloud staging' },
    { value: 'Nginx', label: 'Reverse Proxy', desc: 'Load balancing and SSL config' },
    { value: 'CI/CD', label: 'Automation Pipelines', desc: 'Zero downtime build workflows' }
  ];

  const overview = [
    'Overseeing complete server infrastructure, deployment operations, proxy layer management, and package distribution networks for Techniche, the premier national technical festival of IIT Guwahati.',
    'Responsible for hosting scalable web architectures on AWS EC2, configuring secure SSL/TLS protocols via Nginx proxy layers, and distributing native Android builds smoothly.'
  ];

  const capabilities = [
    'Managed AWS EC2 infrastructure, Nginx reverse proxy, DNS and multiple production applications.',
    'Built Docker-based CI/CD pipelines that automatically deploy merged code to production within seconds.',
    'Developed and maintained event admin systems, CA portal and QR-based volunteer verification.',
    'Supported the Techniche Android application with features including registration, voting, navigation and GHM leaderboard.',
    'Managed a platform reaching 81K+ visitors, 2.3M requests and 95%+ cached traffic.'
  ];

  const cards = [
    {
      icon: <Server className="w-6 h-6" />,
      title: 'Cloud Operations Infrastructure',
      desc: 'Scalable computing environments running EC2 instance stacks, customized storage security rules, and container setups.'
    },
    {
      icon: <ShieldAlert className="w-6 h-6" />,
      title: 'Nginx & SSL Configuration',
      desc: 'Reverse proxy routers directing system endpoints securely, handling compression parameters and SSL verification keys.'
    }
  ];

  const techStack = [
    'AWS (EC2, S3)',
    'Nginx Proxy Layers',
    'Docker Containers',
    'CI/CD Pipelines',
    'Bash Scripting',
    'Android Deployment'
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
              <img src={logoImg} alt="Techniche" className="w-full h-full object-fill rounded-xl" />
            </div>
            <div>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-text-primary tracking-tight">
                Techniche, IIT Guwahati
              </h1>
              <p className="font-heading text-lg font-semibold text-text-secondary mt-1">
                DevOps Head
              </p>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://techniche.org.in"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-mono text-xs font-bold tracking-wider inline-flex items-center gap-2 shadow-orange-glow transition-all hover:-translate-y-0.5"
            >
              VISIT WEBSITE <Globe className="w-4 h-4" />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.techniche.techniche_app&hl=en-US"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-mono text-xs font-bold tracking-wider inline-flex items-center gap-2 shadow-orange-glow transition-all hover:-translate-y-0.5"
            >
              PLAY STORE <Smartphone className="w-4 h-4" />
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

