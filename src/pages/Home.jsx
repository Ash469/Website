import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Code, Server, Database, Award } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projectsData';
import { HexagonBackground } from '../components/HexagonBackground';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/* ── Hero Import ── */
import HeroEditorial from '../components/HeroEditorial';

/* ── Logo Imports for Experience Cards ── */
import lotusLogo from './experience/LotusTraders/lotusTraders.png';
import pimsLogo from './experience/PIMS/logo.png';
import appMgmtLogo from './experience/AppMgmt/logo.jpg';
import technicheLogo from './experience/Techniche/image.png';
import nssLogo from './experience/NSS/logo.png';
import udgamLogo from './experience/Udgam/logo.png';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Reveal text blocks & sections smoothly on scroll (excluding timeline cards)
    const revealElements = containerRef.current.querySelectorAll('.reveal-el:not(.timeline-card-el)');
    revealElements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // Horizontal Marquee Animation
    gsap.to('.marquee-inner', {
      xPercent: -50,
      ease: 'none',
      duration: 20,
      repeat: -1,
    });

    // Parallax background hexagons
    gsap.to('.hex-parallax', {
      yPercent: -15,
      ease: 'none',
      scrollTrigger: {
        trigger: '.skills-section-container',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    // Winding SVG path + timeline cards in a single fully-synchronized GSAP ScrollTimeline
    const path = containerRef.current.querySelector('.timeline-path');
    const timelineCards = containerRef.current.querySelectorAll('.timeline-card-el');

    if (path && timelineCards.length > 0) {
      const pathLength = path.getTotalLength();

      // Initialize SVG path to hidden and cards to dim initial states
      gsap.set(path, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength
      });
      gsap.set(timelineCards, { opacity: 0.05, scale: 0.92, y: 30 });

      // Create a master scrub timeline for the timeline section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.timeline-wrapper-el',
          start: 'top 55%', // Starts drawing when timeline top reaches 55% viewport height
          end: 'bottom 65%', // Finishes near bottom
          scrub: 1,
        }
      });

      // Animate path drawing across the timeline duration (4 seconds block)
      tl.to(path, { strokeDashoffset: 0, duration: 4, ease: 'none' });

      // Trigger card fades sequentially exactly as the path reaches their junctions
      timelineCards.forEach((card, idx) => {
        const triggerTime = idx * 1.05 + 0.35;
        tl.to(card, {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.45,
          ease: 'power1.out'
        }, triggerTime);
      });
    }
  }, []);

  // Professional Experiences in specified order
  const professionalExperiences = [
    {
      id: 'techniche',
      company: 'Techniche DevOps',
      role: 'Infrastructure & Lead DevOps',
      period: 'Annual Technical Festival',
      description: 'Managed AWS EC2 environments, reverse proxy routers, SSL verification, and CI/CD pipelines reaching over 81K+ visitors.',
      path: '/experience/techniche',
      logo: technicheLogo
    },
    {
      id: 'pims',
      company: 'PIMS / Ease Exit',
      role: 'Flutter & Full-Stack Developer',
      period: 'Production Deployment',
      description: 'Designed and deployed a multi-stage hostel leave management and QR gate-verification mobile app used by over 2,000 students.',
      path: '/experience/pims',
      logo: pimsLogo
    },
    {
      id: 'application-management',
      company: 'Application Management System',
      role: 'App Developer',
      period: 'Production Deployment',
      description: 'Built a multi-role Flutter & Firebase mobile system for end-to-end application submission, admin review, and real-time status tracking.',
      path: '/experience/application-management',
      logo: appMgmtLogo
    },
    {
      id: 'lotus-traders',
      company: 'Lotus Traders Machinery',
      role: 'Web Developer',
      period: 'Client Deployment',
      description: 'Engineered a B2B construction machinery catalogue & enquiry management platform from scratch for an active commercial client.',
      path: '/experience/lotus-traders',
      logo: lotusLogo
    }
  ];

  // Campus / College Leadership Roles
  const collegeRoles = [
    {
      organization: 'Techniche, IIT Guwahati',
      period: '1 yr 10 mos',
      logo: technicheLogo,
      roles: [
        { title: 'DevOps Head', duration: 'Nov 2025 - Present · 10 mos' },
        { title: 'Core Team, DevOps', duration: 'Nov 2024 - Nov 2025 · 1 yr 1 mo' }
      ],
      skills: 'Web Development, Flutter',
      path: '/experience/techniche'
    },
    {
      organization: 'Centre for Career Development, IIT Guwahati',
      period: '1 yr 6 mos',
      logo: null,
      roles: [
        { title: 'Student Coordinator', duration: 'Mar 2025 - Present · 1 yr 6 mos' }
      ],
      skills: 'Web Development',
      path: '#'
    },
    {
      organization: 'NSS Cell, IIT Guwahati',
      period: '1 yr 7 mos',
      logo: nssLogo,
      roles: [
        { title: 'Web Developer', duration: 'Feb 2025 - Aug 2026 · 1 yr 7 mos' }
      ],
      description: 'Single-handedly designed and developed the entire web portal. Built serverless data engine connecting Google Sheets API with Google Apps Script.',
      skills: 'Web Development and Team Leadership',
      path: '/experience/nss'
    },
    {
      organization: 'Udgam, IIT Guwahati',
      period: '5 mos',
      logo: udgamLogo,
      roles: [
        { title: 'Manager', duration: 'Oct 2024 - Feb 2025 · 5 mos' }
      ],
      skills: 'Team Leadership',
      path: '/experience/udgam'
    }
  ];

  // Marquee Phrases
  const marqueePhrases = [
    'FULL-STACK DEVELOPMENT',
    'DEVOPS PIPELINES',
    'SYSTEMS ENGINEERING',
    'DATABASE SCHEMAS',
    'WORKFLOW AUTOMATION',
    'INTERACTIVE CODE'
  ];

  // Project section: Filter school-management, nss, udgam, step-wars, smart-return
  const homeProjects = projects.filter(p =>
    ['school-management', 'nss', 'udgam', 'step-wars', 'smart-return'].includes(p.id)
  );

  return (
    <div ref={containerRef} className="bg-[#0C0A08] relative overflow-hidden text-[#F5F0E8]">

      {/* Hero Section */}
      <HeroEditorial />

      {/* ══════════════════════════════════════════════════
          EXPERIENCE SECTION (BENTO LAYOUT)
      ══════════════════════════════════════════════════ */}
      <section className="py-24 relative bg-[#141210] curve-section-wrapper">

        {/* Top Curve Separator */}
        <div className="curve-divider-top">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C400,120 800,0 1200,120 L1200,120 L0,120 Z" className="shape-fill" fill="#141210"></path>
          </svg>
        </div>

        <div className="container-site relative z-20">
          <div className="mb-12 reveal-el">
            <span className="section-eyebrow">Professional History</span>
            <h2 className="section-title mt-2">Active Engineering Impact</h2>
          </div>

          {/* Experience in Bento layout (Techniche/Lotus span large (8), PIMS/AppMgmt span small (4)) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-12">
            {professionalExperiences.map((exp, idx) => {
              const isLarge = idx === 0 || idx === 3;
              return (
                <div
                  key={exp.id}
                  className={`reveal-el glow-card ${isLarge ? 'lg:col-span-8' : 'lg:col-span-4'} p-6 sm:p-7 flex flex-col justify-between group`}
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

                  <div className="pt-4 border-t border-border-subtle flex items-center justify-between mt-auto">
                    <span className="font-mono text-[10px] text-text-muted font-bold tracking-wider uppercase">{exp.period}</span>
                    <Link
                      to={exp.path}
                      className="inline-flex items-center gap-1 text-xs font-heading font-bold text-orange-400 hover:text-orange-300 transition-colors"
                    >
                      Details <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-end reveal-el">
            <Link to="/experience" className="btn btn-secondary group">
              View All Experiences <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Bottom Curve Separator */}
        <div className="curve-divider-bottom">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,120 C400,0 800,120 1200,0 L1200,0 L0,0 Z" className="shape-fill" fill="#141210"></path>
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          PROJECTS SECTION (NORMAL 3-COLUMN GRID)
      ══════════════════════════════════════════════════ */}
      <section className="py-24 relative z-20">
        <div className="container-site">
          <div className="mb-12 reveal-el">
            <span className="section-eyebrow">Projects Showcase</span>
            <h2 className="section-title mt-2">
              Innovative Systems,{' '}
              <span className="text-gradient-orange">Engineered Solutions</span>
            </h2>
          </div>

          {/* Projects in normal grid (3 columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {homeProjects.map((project) => (
              <div key={project.id} className="reveal-el glow-card flex flex-col">
                <ProjectCard project={project} variant="featured" />
              </div>
            ))}
          </div>

          <div className="flex justify-center reveal-el">
            <Link to="/projects" className="btn btn-secondary group">
              View All Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          CAMPUS INVOLVEMENT (CURVED TIMELINE LAYOUT)
      ══════════════════════════════════════════════════ */}
      <section className="py-24 relative bg-[#141210] curve-section-wrapper timeline-wrapper-el">

        {/* Top Wave Curve (Deep parabola curve pointing down) */}
        <div className="curve-divider-top" style={{ height: '95px' }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ height: '95px', width: '100%' }}>
            <path d="M0,0 Q600,220 1200,0 L1200,120 L0,120 Z" className="shape-fill" fill="#141210"></path>
          </svg>
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="mb-16 text-center reveal-el">
            <span className="section-eyebrow">Campus Leadership</span>
            <h2 className="section-title mt-2">IIT Guwahati Activities & Societies</h2>
          </div>

          {/* Curved Timeline Wrapper */}
          <div className="relative w-full mx-auto">

            {/* Desktop: Curved SVG Timeline Line */}
            <svg
              className="absolute hidden md:block left-1/2 top-0 bottom-0 w-32 h-full transform -translate-x-1/2 pointer-events-none z-10"
              viewBox="0 0 100 1000"
              preserveAspectRatio="none"
            >
              <path
                className="timeline-path stroke-orange-500 fill-none"
                strokeWidth="2.5"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                d="M 50,0 C 90,150 10,250 50,400 C 90,550 10,650 50,800 C 90,920 15,960 50,1000"
              />
            </svg>

            {/* Mobile: Straight line fallback */}
            <div className="absolute left-4 md:hidden top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-[#D4A853]/50 to-neutral-800 transform" />

            <div className="space-y-12">
              {collegeRoles.map((role, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div key={idx} className={`relative flex flex-col md:flex-row items-stretch ${isEven ? 'md:flex-row-reverse' : ''}`}>

                    {/* Node Dot */}
                    <div className="absolute left-3 md:left-1/2 w-4 h-4 rounded-full bg-[#0C0A08] border-2 border-orange-500 transform -translate-x-1/2 top-7 z-30 shadow-[0_0_8px_#E8622A]" />

                    {/* Timeline card container */}
                    <div className={`w-[calc(100%-2rem)] ml-8 md:ml-0 md:w-[45%] lg:w-[42%] ${isEven ? 'md:mr-8 lg:mr-16' : 'md:ml-8 lg:ml-16'} bg-[#1E1A16] border border-border-warm rounded-[24px] sm:rounded-[32px] p-2 sm:p-2.5 shadow-[0_15px_35px_rgba(0,0,0,0.5)] hover:shadow-card-hover hover:border-orange-500/30 transition-all duration-300 relative group timeline-card-el`}>
                      
                      {/* Device Top Speaker/Camera punch-hole */}
                      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#0C0A08] border border-[#2A2420] flex items-center justify-center shadow-inner z-20">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#141210]" />
                      </div>

                      {/* Inner Screen Layer */}
                      <div className="bg-[#141210] rounded-[18px] sm:rounded-[24px] pt-8 px-3.5 sm:px-6 pb-5 border border-[#2A2420] h-full flex flex-col justify-between">
                        <div>
                          {/* Serif Index Number */}
                          <div className="font-serif italic text-2xl sm:text-3xl text-orange-500/50 mb-3 select-none">
                            0{idx + 1}
                          </div>

                          <div className="flex items-center justify-between gap-3 mb-4 pb-2 border-b border-[#2A2420]">
                            <div className="flex items-center gap-2.5 min-w-0">
                              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-bg-surface border border-[#2A2420] overflow-hidden flex items-center justify-center shrink-0 p-1">
                                {role.logo ? (
                                  <img src={role.logo} alt={role.organization} className="w-full h-full object-contain rounded-md" />
                                ) : (
                                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
                                )}
                              </div>
                              <h3 className="font-display text-xs sm:text-sm md:text-base font-bold text-text-primary group-hover:text-orange-400 transition-colors truncate">
                                {role.organization}
                              </h3>
                            </div>
                          </div>

                          {/* Multi-role mapping */}
                          <div className="space-y-3 my-4">
                            {role.roles.map((r, rIdx) => (
                              <div key={rIdx} className="flex flex-col sm:flex-row justify-between text-xs font-heading gap-0.5">
                                <span className="font-semibold text-text-secondary leading-snug">{r.title}</span>
                                <span className="font-mono text-text-muted text-[10px] shrink-0">{r.duration}</span>
                              </div>
                            ))}
                          </div>

                          {role.description && (
                            <p className="font-body text-xs text-text-secondary leading-relaxed mb-4">
                              {role.description}
                            </p>
                          )}
                        </div>

                        <div className="pt-3 border-t border-[#2A2420] flex items-center justify-between mt-4 flex-wrap gap-2">
                          <span className="font-mono text-[9px] text-orange-400 font-bold uppercase tracking-wider">
                            {role.skills}
                          </span>
                          {role.path !== '#' && (
                            <Link
                              to={role.path}
                              className="inline-flex items-center gap-1 text-xs font-heading font-bold text-[#F28C54] hover:text-[#E8622A] transition-colors ml-auto"
                            >
                              Details <ArrowUpRight className="w-3.5 h-3.5" />
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Spacer for desktop alignment */}
                    <div className="hidden md:block w-[50%]" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Wave Curve */}
        <div className="curve-divider-bottom">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,120 C400,0 800,120 1200,0 L1200,0 L0,0 Z" className="shape-fill" fill="#141210"></path>
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SKILLS STACK SECTION
      ══════════════════════════════════════════════════ */}
      <section className="py-24 relative z-20">
        <div className="container-site relative z-20">
          <div className="mb-12 reveal-el">
            <span className="section-eyebrow">Skills Inventory</span>
            <h2 className="section-title mt-2">Core Tech Stack</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Frontend */}
            <div className="reveal-el bg-[#141210] border border-border-subtle p-6 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-mono text-xs text-orange-500">(01)</span>
                  <Code className="w-5 h-5 text-orange-500" />
                </div>
                <h3 className="font-display text-lg font-bold mb-3 text-white">Frontend</h3>
                <p className="text-sm text-neutral-400 mb-6">Designing interactive interface experiences and mobile apps.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'TypeScript', 'Flutter', 'Tailwind CSS', 'GSAP'].map(t => (
                  <span key={t} className="bg-[#0C0A08] text-xs text-neutral-300 px-2.5 py-1 rounded-full border border-neutral-800">{t}</span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="reveal-el bg-[#141210] border border-border-subtle p-6 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-mono text-xs text-[#D4A853]">(02)</span>
                  <Server className="w-5 h-5 text-[#D4A853]" />
                </div>
                <h3 className="font-display text-lg font-bold mb-3 text-white">Backend</h3>
                <p className="text-sm text-neutral-400 mb-6">Architecting REST APIs, queue managers, and messaging protocols.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Go', 'Node.js', 'Express', 'BullMQ', 'Redis', 'Python', 'WebSockets'].map(t => (
                  <span key={t} className="bg-[#0C0A08] text-xs text-neutral-300 px-2.5 py-1 rounded-full border border-neutral-800">{t}</span>
                ))}
              </div>
            </div>

            {/* Databases & DevOps */}
            <div className="reveal-el bg-[#141210] border border-border-subtle p-6 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-mono text-xs text-emerald-500">(03)</span>
                  <Database className="w-5 h-5 text-emerald-500" />
                </div>
                <h3 className="font-display text-lg font-bold mb-3 text-white">DevOps & Databases</h3>
                <p className="text-sm text-neutral-400 mb-6">Configuring robust database schemas and Docker container environments.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {['MongoDB', 'PostgreSQL', 'MySQL', 'Docker', 'AWS', 'GitHub Actions', 'GitBucket', 'Nginx', 'Git'].map(t => (
                  <span key={t} className="bg-[#0C0A08] text-xs text-neutral-300 px-2.5 py-1 rounded-full border border-neutral-800">{t}</span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          RUNNING TEXT MARQUEE WITH INTERACTIVE HOVER HIGHLIGHT
      ══════════════════════════════════════════════════ */}
      <section className="py-16 overflow-hidden bg-[#141210] border-y border-neutral-900 relative">
        <div className="marquee-outer w-full whitespace-nowrap flex select-none">
          <div className="marquee-inner flex gap-12 text-[3vw] lg:text-[2rem] font-display font-black uppercase text-neutral-600/40">
            {/* Multiply phrase list to ensure seamless looping block */}
            {Array(4).fill(marqueePhrases).flat().map((phrase, idx) => (
              <span
                key={idx}
                className="hover:text-orange-500 hover:scale-105 transition-all duration-300 cursor-pointer select-none inline-block"
              >
                * {phrase}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          CONTACT SECTION
      ══════════════════════════════════════════════════ */}
      <section id="contact" className="py-24 relative bg-[#0C0A08] z-20">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Left side details */}
            <div className="lg:col-span-5 reveal-el">
              <span className="section-eyebrow">Get in touch</span>
              <h3 className="text-3xl lg:text-5xl font-black uppercase tracking-tight mt-4 mb-6">
                Let's collaborate on your next system.
              </h3>
              <p className="text-neutral-400 mb-8 leading-relaxed">
                I am open to software engineering, backend developer, and DevOps roles. Drop a message to connect.
              </p>
            </div>

            {/* Right side contact form */}
            <div className="lg:col-span-7 bg-[#141210] border border-border-subtle p-8 rounded-[32px] reveal-el shadow-card">
              <form className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-xs uppercase text-neutral-400">Name</label>
                    <input type="text" placeholder="Your name" className="bg-[#0C0A08] border border-border-subtle rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors" required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-xs uppercase text-neutral-400">Email</label>
                    <input type="email" placeholder="Your email" className="bg-[#0C0A08] border border-border-subtle rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors" required />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-xs uppercase text-neutral-400">Message</label>
                  <textarea rows="5" placeholder="Your message" className="bg-[#0C0A08] border border-border-subtle rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors" required />
                </div>
                <button type="submit" className="btn btn-primary self-start px-8">Send Message</button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SKILLS PREVIEW BACKGROUND (Hidden/Decorative)
      ══════════════════════════════════════════════════ */}
      <section className="skills-section-container relative overflow-hidden p-0 min-h-[300px] border-t border-neutral-900">
        <div className="absolute inset-0 z-[1] hex-parallax">
          <HexagonBackground />
        </div>
        <div className="container-site relative z-10 pt-16 pb-16 px-8 text-center pointer-events-none">
          <span className="font-mono text-xs text-neutral-600 tracking-widest uppercase">© 2026 Ayush Shandilya. Built with precision.</span>
        </div>
      </section>
    </div>
  );
}
