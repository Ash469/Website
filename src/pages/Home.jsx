import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projectsData';
import { HexagonBackground } from '../components/HexagonBackground';

/* ── Hero Variants ── */
import HeroOriginal from '../components/HeroOriginal';
import HeroEditorial from '../components/HeroEditorial';

/* ── Logo Imports for Production Bundling ── */
import lotusLogo from './experience/LotusTraders/lotusTraders.png';
import pimsLogo from './experience/PIMS/logo.png';
import appMgmtLogo from './experience/AppMgmt/logo.jpg';

export default function Home() {
  return (
    <div className="bg-[#0C0A08] relative">
      <HeroEditorial /> 

      {/* ══════════════════════════════════════════════════
          FEATURED WORK
      ══════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16">
        <div className="container-site">
          <div className="mb-8">
            <h2 className="section-title">
              Shipped Systems,{' '}
              <span className="text-gradient-orange">Real Evidence</span>
            </h2>
          </div>

          {/* Featured grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-4">
            {projects.filter(p => ['techniche', 'pims', 'lotus-traders'].includes(p.id)).map((project) => (
              <ProjectCard key={project.id} project={project} variant="featured" />
            ))}
          </div>

          <div className="flex justify-center mt-6">
            <Link to="/projects" className="btn btn-secondary">
              View All Projects
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          EXPERIENCE PREVIEW
      ══════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 border-t border-neutral-800 bg-[#141210]">
        <div className="container-site">
          <div className="mb-10">
            <h2 className="section-title">Experience</h2>
          </div>

          {/* 3 Experience Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              {
                company: 'Lotus Traders Machinery',
                role: 'Web Developer',
                period: 'Client Deployment',
                description: 'Engineered a B2B construction machinery catalogue & enquiry management platform from scratch for an active commercial client.',
                path: '/experience/lotus-traders',
                logo: lotusLogo
              },
              {
                company: 'PIMS / Ease Exit',
                role: 'Flutter & Full-Stack Developer',
                period: 'Production Deployment',
                description: 'Designed and deployed a multi-stage hostel leave management and QR gate-verification mobile app used by over 2,000 students.',
                path: '/experience/pims',
                logo: pimsLogo
              },
              {
                company: 'Application Management System',
                role: 'App Developer',
                period: 'Production Deployment',
                description: 'Built a multi-role Flutter & Firebase mobile system for end-to-end application submission, admin review, and real-time status tracking.',
                path: '/experience/application-management',
                logo: appMgmtLogo
              }
            ].map((exp, idx) => (
              <div
                key={idx}
                className="bg-bg-card border border-border-subtle hover:border-orange-500/30 rounded-3xl p-6 transition-all duration-300 shadow-card hover:shadow-card-hover flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4 pb-3 border-b border-border-subtle">
                    <div className="w-12 h-12 rounded-xl bg-bg-surface border border-border-subtle overflow-hidden flex items-center justify-center shrink-0 p-1">
                      <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain rounded-lg" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold text-text-primary group-hover:text-orange-400 transition-colors">
                        {exp.company}
                      </h3>
                      <div className="font-heading text-xs text-text-muted mt-0.5">{exp.role}</div>
                    </div>
                  </div>
                  <p className="font-body text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
                    {exp.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-border-subtle flex items-center justify-between">
                  <span className="font-mono text-[10px] text-text-muted font-bold tracking-wider uppercase">{exp.period}</span>
                  <Link
                    to={exp.path}
                    className="inline-flex items-center gap-1 text-xs font-heading font-bold text-orange-400 hover:text-orange-300 transition-colors"
                  >
                    Details <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end">
            <Link to="/experience" className="btn btn-secondary">
              View All Experiences <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SKILLS PREVIEW
      ══════════════════════════════════════════════════ */}
      <section className="border-t border-neutral-800 relative overflow-hidden p-0 pt-12 min-h-[540px]">
        {/* Full-size interactive Hexagon background */}
        <div className="absolute inset-0 z-[1]">
          <HexagonBackground />
        </div>

        {/* Content overlaid on top of the grid */}
        <div className="container-site relative z-10 pt-0 pb-0 px-8 pointer-events-none">
          <div className="pointer-events-auto">
            <h2 className="section-title m-0">Technical Expertise</h2>
          </div>
        </div>
      </section>
    </div>
  );
}
