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
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left z-20">
            <h2 className="leading-[0.98] mb-6">
              <div className="font-display text-4xl sm:text-5xl lg:text-[4.5rem] xl:text-[5.2rem] font-black uppercase tracking-tight text-neutral-100 drop-shadow-md">
                SOFTWARE
              </div>
              <div className="font-serif italic text-4xl sm:text-5xl lg:text-[4.8rem] xl:text-[5.5rem] font-normal tracking-tight my-1 text-[#F28C54]">
                & System
              </div>
              <div className="font-display text-4xl sm:text-5xl lg:text-[4.5rem] xl:text-[5.2rem] font-black uppercase tracking-tight text-neutral-100 drop-shadow-md">
                ENGINEER
              </div>
              <div className="font-display text-xl sm:text-2xl lg:text-3xl xl:text-[2.2rem] font-black uppercase tracking-wider text-neutral-400 mt-4">
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

          {/* Center Column: Portrait Card with AYUSH Text Overlayed */}
          <div className="lg:col-span-3 flex flex-col items-center justify-center z-10 my-4 lg:my-0 relative">
            <div className="w-[240px] sm:w-[300px] lg:w-[320px] xl:w-[340px] h-[320px] sm:h-[400px] lg:h-[440px] xl:h-[470px] rounded-[32px] overflow-hidden border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.8)] relative group">
              <img
                src={heroImg}
                alt="Ayush Shandilya"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = image2Img;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* AYUSH Text overlayed on top/bottom of portrait */}
              <div className="absolute bottom-2 left-0 right-0 text-center pointer-events-none select-none z-20">
                <h1
                  style={{ fontFamily: "'Jujutsu Kaisen', sans-serif" }}
                  className="text-white text-[4rem] sm:text-[5rem] lg:text-[5.5rem] tracking-wider leading-none uppercase drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)] opacity-95"
                >
                  AYUSH
                </h1>
              </div>
            </div>
          </div>

          {/* Right Column (Desktop): Paragraph & CTA */}
          <div className="hidden lg:flex lg:col-span-3 flex-col items-start text-left z-20 pl-2">
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

    </section>
  );
}
