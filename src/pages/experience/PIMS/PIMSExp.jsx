import React from 'react';
import { Smartphone, Server, Users, Sparkles, CheckCircle2 } from 'lucide-react';
import logoImg from './logo.png';
import ExperienceLayout from '../ExperienceLayout.jsx';

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
    logoImg,
    logoImg,
    logoImg
  ];

  return (
    <ExperienceLayout
      title="PIMS – Ease Exit"
      subtitle="Smart Leave Management & Student Tracking System"
      logoSrc={logoImg}
      githubUrl="https://github.com/Ash469/PIMS-Leave-App"
      metrics={metrics}
      overviewParagraphs={overview}
      capabilities={capabilities}
      cards={cards}
      techStack={techStack}
      galleryImages={galleryImages}
    >
      {/* ── Additional Detailed Sections for PIMS ── */}
      
      {/* Section: Workflow Details */}
      <section className="bg-bg-card border border-border-subtle rounded-3xl p-8 sm:p-10 shadow-card space-y-6">
        <h2 className="font-display text-2xl font-black text-text-primary border-b border-border-subtle pb-4 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-orange-500" /> Core Approval Workflow
        </h2>
        <p className="font-body text-text-secondary leading-relaxed">
          The core of the application is a multi-stage approval and verification workflow. Each stage controls whether the request can progress to the next stage, preventing unauthorized leave requests from reaching the physical exit gate:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 text-center font-heading text-sm font-semibold">
          <div className="p-4 bg-bg-surface border border-border-subtle rounded-2xl">
            <span className="text-xs text-orange-400 font-mono">STEP 1</span>
            <div className="text-text-primary mt-1">Student Submit</div>
          </div>
          <div className="p-4 bg-bg-surface border border-border-subtle rounded-2xl">
            <span className="text-xs text-orange-400 font-mono">STEP 2</span>
            <div className="text-text-primary mt-1">Parent Approval</div>
          </div>
          <div className="p-4 bg-bg-surface border border-border-subtle rounded-2xl">
            <span className="text-xs text-orange-400 font-mono">STEP 3</span>
            <div className="text-text-primary mt-1">Warden Approval</div>
          </div>
          <div className="p-4 bg-bg-surface border border-border-subtle rounded-2xl">
            <span className="text-xs text-orange-400 font-mono">STEP 4</span>
            <div className="text-text-primary mt-1">QR Pass Gen</div>
          </div>
          <div className="p-4 bg-bg-surface border border-border-subtle rounded-2xl">
            <span className="text-xs text-emerald-400 font-mono">STEP 5</span>
            <div className="text-text-primary mt-1">Guard Verify</div>
          </div>
        </div>
      </section>

      {/* Section: Role-Based System Details */}
      <section className="space-y-6">
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
      </section>

      {/* Section: Dynamic QR Gate-Exit Flow */}
      <section className="bg-bg-card border border-border-subtle rounded-3xl p-8 shadow-card space-y-6">
        <h2 className="font-display text-2xl font-black text-text-primary border-b border-border-subtle pb-4">
          QR-Based Physical Verification
        </h2>
        <p className="font-body text-text-secondary leading-relaxed">
          Dynamic signed QR tokens prevent screenshot sharing or pass reuse, automatically logging physical movements at the Prasad Institute security gate.
        </p>
      </section>
    </ExperienceLayout>
  );
}
