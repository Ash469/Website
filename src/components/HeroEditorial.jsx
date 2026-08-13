import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function HeroEditorial() {
  return (
    <section className="relative h-[72vh] sm:h-[78vh] min-h-[550px] lg:min-h-[600px] overflow-hidden bg-gradient-to-b from-[#0F0D0C] via-[#080707] to-[#0C0A08] border-b border-neutral-900 flex flex-col justify-between">
      
      {/* ── Desktop Layout: Absolute Left & Right Columns (Foreground) ── */}
      <div className="hidden lg:block absolute inset-0 z-30 pointer-events-none">
        <div className="container-site h-full relative">
          
          {/* Middle Left Block */}
          <div className="absolute left-8 top-[16%] w-[450px] pointer-events-auto flex flex-col items-start text-left">
            <h2 className="leading-[1.05] mb-6">
              <div className="font-display text-4xl sm:text-5xl lg:text-[4.2rem] font-black uppercase tracking-tight text-neutral-200">
                SOFTWARE
              </div>
              <div className="font-serif italic text-4xl sm:text-5xl lg:text-[4.8rem] font-normal tracking-tight ml-4 my-1 text-[#F28C54]">
                & System
              </div>
              <div className="font-display text-4xl sm:text-5xl lg:text-[4.2rem] font-black uppercase tracking-tight text-neutral-200">
                ENGINEER
              </div>
              <div className="font-display text-2xl sm:text-3xl lg:text-[2.2rem] font-black uppercase tracking-tight text-neutral-400 mt-3">
                FROM IIT GUWAHATI
              </div>
            </h2>
          </div>

          {/* Middle Right Block */}
          <div className="absolute right-8 top-[20%] w-[380px] pointer-events-auto flex flex-col items-start text-left">
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

      {/* ── Center Portrait Card with Rounded Corners (Middle Layer) ── */}
      <div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 w-[240px] sm:w-[320px] lg:w-[350px] h-[72%] max-h-[72vh] rounded-[32px] overflow-hidden border border-white/10 pointer-events-none shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
      >
        <img
          src="/hero.png"
          alt="Ayush Shandilya"
          className="w-full h-full object-cover object-top"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/image2.png';
          }}
        />
      </div>

      {/* ── Giant Name Text at Bottom (Jujutsu Kaisen font family) ── */}
      <div className="absolute left-0 right-0 bottom-4 w-full text-center z-20 pointer-events-none select-none">
        <h1 
          style={{ fontFamily: "'Jujutsu Kaisen', sans-serif" }}
          className="text-white text-[10vw] tracking-wider leading-none uppercase scale-y-[1.1] opacity-95"
        >
          AYUSH
        </h1>
      </div>

      {/* ── Mobile/Tablet Layout (Flowing Fallback) ── */}
      <div className="lg:hidden w-full px-6 pt-24 pb-12 flex flex-col gap-8 text-center items-center relative z-30 mt-auto pointer-events-auto">
        <h2 className="leading-[1.1] text-center">
          <div className="font-display text-3xl sm:text-4xl font-black uppercase tracking-tight text-neutral-200">
            SOFTWARE
          </div>
          <div className="font-serif italic text-3xl sm:text-4xl font-normal tracking-tight my-0.5 text-[#F28C54]">
            & Systems
          </div>
          <div className="font-display text-3xl sm:text-4xl font-black uppercase tracking-tight text-neutral-200">
            ENGINEER
          </div>
          <div className="font-display text-xl sm:text-2xl font-black uppercase tracking-tight text-neutral-400 mt-2">
            FROM IIT GUWAHATI
          </div>
        </h2>

        <p className="font-heading text-base text-neutral-400 max-w-[420px] leading-relaxed">
          Hi, I'm Ayush Shandilya – a software and systems engineer passionate about architecting high-performance backends and robust infrastructure.
        </p>

        <Link 
          to="/projects" 
          className="inline-flex items-center gap-4 bg-neutral-200 text-[#0C0A08] pl-5 pr-2.5 py-2.5 rounded-full no-underline font-mono text-[0.8rem] font-bold tracking-wider hover:-translate-y-0.5 transition-transform duration-200 group"
        >
          See my works
          <span className="flex items-center justify-center w-[26px] h-[26px] bg-orange-500 text-white rounded-full">
            <ArrowRight size={12} />
          </span>
        </Link>
      </div>

    </section>
  );
}
