import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Github, FileText, Sparkles, CheckCircle2, Search, Lock, Globe } from 'lucide-react';
import logoImg from './lotusTraders.png';

import ss1 from './ss1.png';
import ss2 from './ss2.png';
import ss3 from './ss3.png';
import architectureImg from './image.png';
import videoDemo from './video.mp4';

const contractPdf = '/src/pages/experience/LotusTraders/lotus_traders_agreement (1).pdf';

export default function LotusTradersExp() {
  const metrics = [
    { value: '150+', label: 'Products Managed', desc: 'Structured across equipment specs & media' },
    { value: '8', label: 'Product Categories', desc: 'Civil engineering & heavy machinery' },
    { value: '100%', label: 'End-to-End Production', desc: 'Deployed & actively used by business client' }
  ];

  const overview = [
    'Built and deployed the official web platform for Lotus Traders Machinery, a Guwahati-based construction machinery supplier.',
    'The platform was designed around a catalogue-first B2B model, allowing customers to discover construction machinery, explore detailed specifications, search related inventory, and submit enquiries directly to the business.',
    'Unlike a conventional e-commerce store, heavy machinery pricing is negotiated individually. The platform therefore focuses on product discovery, detailed specification hierarchies, and high-conversion enquiry generation.'
  ];

  const capabilities = [
    'Engineered and deployed a B2B machinery catalogue & enquiry platform for an active commercial client.',
    'Built and populated 150+ products across 8 categories, including specifications, features and product relationships.',
    'Designed a MongoDB product-reference graph to power related-product recommendations.',
    'Implemented Next.js ISR for fast catalogue pages and improved search-engine discoverability.',
    'Built the admin system for product, category and enquiry management.'
  ];

  const cards = [
    {
      icon: <Search className="w-6 h-6" />,
      title: 'Structured Product Catalogue',
      desc: 'Created and populated the product database from scratch, including names, descriptions, specifications, features, categories, related products, and supporting media.'
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'NextAuth Administrative CMS',
      desc: 'Built a dedicated administrative interface so business admins can independently create, edit, delete products, manage category mappings, review enquiries, and update content.'
    }
  ];

  const techStack = [
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Node.js / API',
    'MongoDB',
    'NextAuth.js',
    'Production Hosting'
  ];

  const galleryImages = [ss1, ss2, ss3];

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
              <img src={logoImg} alt="Lotus Traders" className="w-full h-full object-contain rounded-xl" />
            </div>
            <div>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-text-primary tracking-tight">
                Lotus Traders Machinery
              </h1>
              <p className="font-heading text-lg font-semibold text-text-secondary mt-1">
                Web Developer · End-to-End Platform Engineering
              </p>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://www.lotustradersmachinery.com/"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-mono text-xs font-bold tracking-wider inline-flex items-center gap-2 shadow-orange-glow transition-all hover:-translate-y-0.5"
            >
              LIVE WEBSITE <Globe className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/Ash469/LotusTraders"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full bg-bg-surface border border-border-subtle hover:border-orange-500/30 text-text-secondary hover:text-text-primary font-mono text-xs font-bold tracking-wider inline-flex items-center gap-2 transition-all hover:-translate-y-0.5"
            >
              GITHUB REPO <Github className="w-4 h-4" />
            </a>
            {/* <a
              href={contractPdf}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 font-mono text-xs font-bold inline-flex items-center gap-2 transition-all hover:-translate-y-0.5"
            >
              <FileText className="w-4.5 h-4.5" /> VIEW CONTRACT (PDF)
            </a> */}
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {galleryImages.map((imgUrl, idx) => (
                  <div key={idx} className="group overflow-hidden rounded-2xl border border-border-subtle bg-bg-card shadow-card hover:border-orange-500/30 transition-all duration-300">
                    <img 
                      src={imgUrl} 
                      alt={`Gallery Image ${idx + 1}`} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

             {/* Technical Component Architecture */}
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
                  poster={ss1}
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
