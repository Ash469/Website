import React from 'react';
import { Link } from 'react-router-dom';
import {
  Briefcase,
  Award,
  ShieldCheck,
  ExternalLink,
  ArrowUpRight,
  Building2,
  Calendar,
  CheckCircle2,
  Sparkles,
  Smartphone,
  Globe,
  Layers,
  FileText
} from 'lucide-react';

const pimsLogo = '/src/pages/experience/PIMS/logo.png';
const lotusTradersLogo = '/src/pages/experience/LotusTraders/lotusTraders.png';
const appMgmtLogo = '/src/pages/experience/AppMgmt/logo.jpg';

// Offer Letter / Contract PDFs
const assamAppPdf = '/src/pages/experience/AppMgmt/Assam_app_intern.pdf';
const lotusTradersPdf = '/src/pages/experience/LotusTraders/lotus_traders_agreement (1).pdf';

export default function Experience() {
  const professionalExperiences = [
    {
      id: 'lotus-traders',
      company: 'Lotus Traders Machinery',
      role: 'Web Developer',
      domain: 'Web Development · Client Engagement',
      period: 'Client Deployment',
      verified: true,
      pdf: lotusTradersPdf,
      logo: lotusTradersLogo,
      fallbackIcon: <Globe className="w-6 h-6 text-orange-500" />,
      path: '/experience/lotus-traders',
      description: 'Engineered a B2B construction machinery catalogue & enquiry management platform from scratch for an active commercial client.',
      highlights: [
        'Built a 150+ product catalogue across 8 categories from paper specifications',
        'Implemented document reference relationship graph in MongoDB for product recommendations',
        'Next.js ISR integration for instant static page loads and search engine discoverability'
      ],
      tech: ['Next.js', 'React', 'TypeScript', 'MongoDB', 'Node.js', 'Tailwind CSS']
    },
    {
      id: 'pims',
      company: 'PIMS / Ease Exit',
      role: 'Flutter & Full-Stack Developer',
      domain: 'App Development · Mobile & Backend',
      period: 'Production Deployment (2K+ Downloads)',
      verified: true,
      pdf: null,
      logo: pimsLogo,
      fallbackIcon: <Smartphone className="w-6 h-6 text-orange-500" />,
      path: '/experience/pims',
      description: 'Designed and deployed a multi-stage hostel leave management and QR gate-verification mobile app used by over 2,000 students.',
      highlights: [
        'Created 5-stage state machine: Student → Parent → Warden → QR Pass → Gate Guard',
        'Built real-time push notification & email alert pipelines via FCM & Node.js REST API',
        'Time-bound signed QR token generation to prevent pass screenshot sharing at security'
      ],
      tech: ['Flutter', 'Dart', 'Node.js', 'MongoDB', 'Firebase', 'QR Scanning', 'FCM']
    },
    {
      id: 'application-management',
      company: 'Application Management System',
      role: 'App Developer',
      domain: 'App Development · Workflow Automation',
      period: 'Production Deployment',
      verified: true,
      pdf: assamAppPdf,
      logo: appMgmtLogo,
      fallbackIcon: <Layers className="w-6 h-6 text-orange-500" />,
      path: '/experience/application-management',
      description: 'Built a multi-role Flutter & Firebase mobile system for end-to-end application submission, admin review, and real-time status tracking.',
      highlights: [
        'Designed administrative verification gate to eliminate spam and unauthorized user access',
        'Real-time Firestore sync listeners ensuring zero latency on application status updates',
        'Role-based dashboard views tailored for applicants and verifying administrators'
      ],
      tech: ['Flutter', 'Dart', 'Firebase Auth', 'Firestore', 'FCM', 'Role-Based Access']
    }
  ];

  const leadershipExperiences = [
    {
      organization: 'Techniche, IIT Guwahati',
      path: '/experience/techniche',
      roles: [
        { title: 'DevOps Head', duration: 'Nov 2025 – Present' },
        { title: 'Core Team, DevOps', duration: 'Nov 2024 – Nov 2025' }
      ],
      summary: 'Overseeing complete infrastructure, AWS EC2 instances, Nginx proxy layers, CI/CD pipelines, and Android app deployments for IIT Guwahati’s technical festival.'
    },
    {
      organization: 'Hostel Technical Board, IIT Guwahati',
      path: '#',
      roles: [
        { title: 'Associate Technical Secretary', duration: 'Hostel Technical Council' }
      ],
      summary: 'Managed participation of the hostel in the annual inter-hostel technical competition across 15+ Problem Statements (PS) competing among 13 hostels.'
    },
    {
      organization: 'NSS Cell, IIT Guwahati',
      path: '/experience/nss',
      roles: [
        { title: 'Web Developer', duration: 'Feb 2025 – May 2026' }
      ],
      summary: 'Developed the official NSS website integrated with Google Sheets API to provide self-service work-hour lookups for students.'
    },
    {
      organization: 'Udgam, IIT Guwahati',
      path: '/experience/udgam',
      roles: [
        { title: 'Manager', duration: 'Oct 2024 – Feb 2025' }
      ],
      summary: 'Managed platform features, event listings, and interactive web flows for IIT Guwahati’s flagship entrepreneurship summit.'
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-bg text-text-primary">
      {/* ── Section 1: Professional Engagements (3 Featured Cards) ── */}
      <section className="py-1">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-10">
            <div className="p-3 bg-orange-500/10 border border-orange-500/20 rounded-2xl text-orange-500">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-black text-text-primary">
                Professional Experience
              </h2>
              <p className="font-body text-sm text-text-muted">
                Client contracts & verified software engineering roles
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {professionalExperiences.map((exp) => (
              <div
                key={exp.id}
                className="group bg-bg-card border border-border-warm rounded-3xl p-7 sm:p-9 shadow-card hover:shadow-card-hover hover:border-orange-500/50 transition-all duration-300 relative overflow-hidden"
              >
                {/* Accent top gradient */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-gold to-orange-500 opacity-60 group-hover:opacity-100 transition-opacity" />

                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6">
                  {/* Left: Logo & Titles */}
                  <div className="flex items-start gap-5">
                    {/* Logo container */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-bg-surface border border-border-subtle overflow-hidden flex items-center justify-center shrink-0 p-2 shadow-inner">
                      {exp.logo ? (
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        exp.fallbackIcon
                      )}
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="font-mono text-xs text-orange-400 font-semibold uppercase tracking-wider">
                          {exp.domain}
                        </span>
                      </div>

                      <h3 className="font-display text-2xl sm:text-3xl font-black text-text-primary group-hover:text-orange-400 transition-colors">
                        {exp.company}
                      </h3>

                      <div className="font-heading text-base font-semibold text-text-secondary mt-0.5">
                        {exp.role}
                      </div>
                    </div>
                  </div>

                  {/* Right: Verified Badge & PDF Link */}
                  <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3 shrink-0">
                    <div className="flex items-center gap-4 mt-1">
                      {exp.pdf && (
                        <a
                          href={exp.pdf}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-emerald-400 hover:text-emerald-300 transition-colors underline decoration-emerald-500/30 underline-offset-4"
                        >
                          <FileText className="w-3.5 h-3.5" /> View PDF Contract <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                      <Link
                        to={exp.path}
                        className="inline-flex items-center gap-1.5 text-sm font-heading font-bold text-orange-400 hover:text-orange-300 transition-colors"
                      >
                        Details <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="font-body text-base text-text-secondary mb-6 leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Highlights */}
                <div className="bg-bg-surface/70 border border-border-subtle rounded-2xl p-5 mb-6 space-y-3">
                  <div className="font-mono text-xs text-text-muted uppercase tracking-wider font-semibold">
                    Key Deliverables:
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm font-body text-text-secondary">
                    {exp.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-bg-surface border border-border-subtle rounded-lg text-xs font-mono text-text-secondary"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 2: Institutional Experience & Leadership ── */}
      <section className="py-16 bg-bg-surface/50 border-t border-border-subtle">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-10">
            <div className="p-3 bg-orange-500/10 border border-orange-500/20 rounded-2xl text-orange-500">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-black text-text-primary">
                Experience & Leadership
              </h2>
              <p className="font-body text-sm text-text-muted">
                Key leadership and engineering positions at IIT Guwahati
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {leadershipExperiences.map((exp, idx) => (
              <div
                key={idx}
                className="bg-bg-card border border-border-subtle hover:border-orange-500/40 rounded-3xl p-7 transition-all duration-300 shadow-card hover:shadow-card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-border-subtle">

                    <h3 className="font-display text-xl font-extrabold text-text-primary group-hover:text-orange-400 transition-colors">
                      {exp.organization}
                    </h3>
                    <Link
                      to={exp.path}
                      className="px-4 py-1.5 bg-orange-500/10 border border-orange-500/30 text-orange-400 hover:bg-orange-500/20 rounded-xl font-heading text-xs font-bold flex items-center gap-1 transition-colors shrink-0"
                    >
                      Details <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>

                  </div>

                  <p className="font-body text-sm text-text-secondary leading-relaxed mb-6">
                    {exp.summary}
                  </p>
                </div>

                <div className="flex justify-between items-end gap-4 pt-4 border-t border-border-subtle mt-4">
                  <div className="space-y-2.5 flex-grow">
                    {exp.roles.map((role, rIdx) => (
                      <div key={rIdx} className="flex items-center justify-between text-xs sm:text-sm font-heading">
                        <span className="font-semibold text-text-primary">{role.title}</span>
                        <span className="font-mono text-text-muted">{role.duration}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
