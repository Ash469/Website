import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const heroMetrics = [
  { value: '81K+', label: 'Visitors' },
  { value: '2.3M', label: 'Requests' },
  { value: '2K+', label: 'Downloads' },
  { value: '150+', label: 'Products' },
];

export default function HeroOriginal() {
  return (
    <section className="bg-[#0C0A08] min-h-screen flex flex-col justify-center pt-28 pb-16 overflow-hidden relative">
      <div className="container-site max-w-[1400px] mx-auto w-full px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-12 items-center hero-grid">
          
          {/* ── Left: Typography ── */}
          <div className="relative z-10">
            <div className="font-heading text-xl text-neutral-400 mb-6 font-medium">
              Hey. I'm Ayush,
            </div>
            <h1 className="text-neutral-200 leading-tight mb-8">
              <div className="font-display text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight">
                SOFTWARE
              </div>
              <div className="font-serif italic text-5xl sm:text-6xl md:text-8xl font-normal tracking-tight ml-4 my-[-0.5rem] text-[#F28C54]">
                & System
              </div>
              <div className="font-display text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight">
                ENGINEER
              </div>
            </h1>

            <p className="font-heading text-lg text-neutral-400 leading-relaxed max-w-[400px] mb-10">
              Building robust products, platforms and infrastructure that handle real traffic, scale effectively, and deliver results.
            </p>

            <Link 
              to="/contact" 
              className="inline-flex items-center gap-4 bg-neutral-200 text-[#0C0A08] pl-7 pr-2.5 py-2.5 rounded-full no-underline font-mono text-[0.85rem] font-bold tracking-wider hover:-translate-y-0.5 transition-transform duration-200"
            >
              CONTACT ME
              <span className="flex items-center justify-center w-[38px] h-[38px] bg-orange-500 text-white rounded-full">
                <ArrowRight size={18} />
              </span>
            </Link>
          </div>

          {/* ── Center: U-Shape Portrait ── */}
          <div className="relative h-full flex items-end justify-center">
            <div className="w-[280px] h-[350px] sm:w-[450px] sm:h-[550px] bg-[#181410] border border-[#3A3028] rounded-b-[250px] overflow-hidden relative flex items-end justify-center shadow-[0_24px_60px_rgba(0,0,0,0.6)]">
              <img
                src="/hero.png"
                alt="Ayush Shandilya"
                className="w-[120%] h-auto object-contain object-bottom translate-y-[5%]"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/image2.png';
                }}
              />
            </div>
          </div>

          {/* ── Right: Stats ── */}
          <div className="grid grid-cols-2 lg:flex lg:flex-col gap-12 text-center relative z-10 lg:w-full">
            {heroMetrics.map((m, idx) => (
              <div key={idx} className="border-b border-neutral-800/40 pb-6 last:border-b-0">
                <div className="font-display text-3xl font-black text-neutral-200 mb-1">
                  {m.value}
                </div>
                <div className="font-heading text-sm text-neutral-500">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
