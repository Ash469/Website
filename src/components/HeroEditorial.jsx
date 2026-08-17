import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import heroImg from '../../hero.png';
import image2Img from '../../image2.png';

export default function HeroEditorial() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[700px] overflow-hidden bg-gradient-to-b from-[#0F0D0C] via-[#080707] to-[#0C0A08] border-b border-neutral-900 flex flex-col justify-between pt-20 pb-10">
      
      {/* ── Background Glow Effects ── */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* ── Responsive Container Grid ── */}
      <div className="container-site relative z-20 my-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Column: Heading & Titles */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left z-20">
            <h2 className="leading-[1.05] mb-6">
              <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-neutral-200">
                SOFTWARE
              </div>
              <div className="font-serif italic text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight my-1 text-[#F28C54]">
                & System
              </div>
              <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-neutral-200">
                ENGINEER
              </div>
              <div className="font-display text-lg sm:text-xl lg:text-2xl font-black uppercase tracking-tight text-neutral-400 mt-3">
                FROM IIT GUWAHATI
              </div>
            </h2>

            <p className="font-heading text-sm sm:text-base lg:text-lg text-neutral-400 leading-relaxed mb-6 max-w-[420px] block lg:hidden">
              Hi, I'm Ayush Shandilya – a software and system engineer passionate about architecting high-performance backends and robust infrastructure.
            </p>

            <Link 
              to="/projects" 
              className="inline-flex items-center gap-4 bg-neutral-200 text-[#0C0A08] pl-6 pr-2.5 py-2.5 rounded-full no-underline font-mono text-[0.8rem] sm:text-[0.85rem] font-bold tracking-wider hover:-translate-y-0.5 transition-transform duration-200 group lg:hidden"
            >
              See my works
              <span className="flex items-center justify-center w-[28px] h-[28px] bg-orange-500 text-white rounded-full">
                <ArrowRight size={14} />
              </span>
            </Link>
          </div>

          {/* Center Column: Portrait Card */}
          <div className="lg:col-span-3 flex justify-center z-10 my-4 lg:my-0">
            <div className="w-[220px] sm:w-[280px] lg:w-[320px] h-[300px] sm:h-[380px] lg:h-[440px] rounded-[32px] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative group">
              <img
                src={heroImg}
                alt="Ayush Shandilya"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = image2Img;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
            </div>
          </div>

          {/* Right Column (Desktop): Paragraph & CTA */}
          <div className="hidden lg:flex lg:col-span-4 flex-col items-start text-left z-20 pl-4">
            <p className="font-heading text-lg text-neutral-400 leading-relaxed mb-8 max-w-[360px]">
              Hi, I'm Ayush Shandilya – a software and system engineer passionate about architecting high-performance backends and robust infrastructure that scales gracefully under load.
            </p>

            <Link 
              to="/projects" 
              className="inline-flex items-center gap-4 bg-neutral-200 text-[#0C0A08] pl-7 pr-2.5 py-2.5 rounded-full no-underline font-mono text-[0.85rem] font-bold tracking-wider hover:-translate-y-0.5 transition-transform duration-200 group"
            >
              See my works
              <span className="flex items-center justify-center w-[30px] h-[30px] bg-orange-500 text-white rounded-full">
                <ArrowRight size={14} />
              </span>
            </Link>
          </div>

        </div>
      </div>

      {/* ── Responsive Name Banner at Bottom ── */}
      <div className="w-full text-center z-10 select-none overflow-hidden pt-4">
        <h1 
          style={{ fontFamily: "'Jujutsu Kaisen', sans-serif" }}
          className="text-white text-[12vw] sm:text-[10vw] tracking-wider leading-none uppercase scale-y-[1.05] opacity-90 transition-opacity"
        >
          AYUSH
        </h1>
      </div>

    </section>
  );
}
