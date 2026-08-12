import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Github,
  Linkedin,
  FileText,
  ArrowUpRight,
  ChevronDown,
} from 'lucide-react';

const TOTAL_FRAMES = 152;
const FRAME_PREFIX = '/image2frames/ezgif-frame-';
const FRAME_EXT = '.jpg';

/**
 * Pinned Scroll Hero Section
 *
 * Layout:
 *  ┌─ outer (position: relative, height: SCROLL_HEIGHT) ─────┐
 *  │  ┌─ sticky (position: sticky, top: 0, h: 100vh) ───────┐ │
 *  │  │  [canvas] full-bleed background                      │ │
 *  │  │  [overlay] dark gradient                             │ │
 *  │  │  [content] hero text & CTAs                          │ │
 *  │  └───────────────────────────────────────────────────────┘ │
 *  └──────────────────────────────────────────────────────────┘
 *
 * Scroll progress is calculated from the outer container's
 * bounding rect — 0 when top hits viewport top, 1 when bottom
 * hits viewport bottom. All frames play within that window;
 * the page only advances once progress === 1.
 */

// How many viewport-heights of scroll to play through all frames
// 6 × 100vh gives a comfortable ~1800px scroll range at 900px screen
const SCROLL_MULTIPLIER = 6;

export default function HeroScrollSection({ onScrollDone }) {
  const outerRef = useRef(null);
  const canvasRef = useRef(null);
  const framesRef = useRef([]);
  const currentFrameRef = useRef(0);
  const targetFrameRef = useRef(0);
  const animFrameIdRef = useRef(null);

  const [loadProgress, setLoadProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentFrame, setCurrentFrame] = useState(1);

  // ── 1. Preload all frames ──────────────────────────────────────
  useEffect(() => {
    let loaded = 0;
    const imgs = new Array(TOTAL_FRAMES);

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = `${FRAME_PREFIX}${String(i).padStart(3, '0')}${FRAME_EXT}`;
      img.onload = img.onerror = () => {
        loaded++;
        setLoadProgress(Math.round((loaded / TOTAL_FRAMES) * 100));
        if (loaded === TOTAL_FRAMES) setIsLoaded(true);
      };
      imgs[i - 1] = img;
    }
    framesRef.current = imgs;

    return () => { framesRef.current = []; };
  }, []);

  // ── 2. Canvas resize ───────────────────────────────────────────
  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const W = window.innerWidth;
    const H = window.innerHeight;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width = `${W}px`;
    canvas.style.height = `${H}px`;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.scale(dpr, dpr);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
    }
  };

  // ── 3. Draw a frame (cover-fit) ────────────────────────────────
  const drawFrame = (index) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const img = framesRef.current[Math.max(0, Math.min(TOTAL_FRAMES - 1, index))];
    if (!img?.complete || img.naturalWidth === 0) return;

    const W = window.innerWidth;
    const H = window.innerHeight;
    const ir = img.naturalWidth / img.naturalHeight;
    const cr = W / H;
    let dw, dh, dx, dy;
    if (cr > ir) {
      dw = W; dh = W / ir; dx = 0; dy = (H - dh) / 2;
    } else {
      dw = H * ir; dh = H; dx = (W - dw) / 2; dy = 0;
    }
    ctx.clearRect(0, 0, W, H);
    ctx.drawImage(img, dx, dy, dw, dh);
  };

  // ── 4. Scroll → frame mapping ──────────────────────────────────
  useEffect(() => {
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleScroll = () => {
      const outer = outerRef.current;
      if (!outer) return;

      const rect = outer.getBoundingClientRect();
      const scrollable = outer.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      const progress = Math.min(1, Math.max(0, scrolled / scrollable));

      setScrollProgress(progress);
      targetFrameRef.current = progress * (TOTAL_FRAMES - 1);

      if (onScrollDone) onScrollDone(progress >= 0.98);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // rAF lerp loop
    const loop = () => {
      const delta = targetFrameRef.current - currentFrameRef.current;
      currentFrameRef.current += delta * 0.18;
      const idx = Math.round(currentFrameRef.current);
      drawFrame(idx);
      setCurrentFrame(idx + 1);
      animFrameIdRef.current = requestAnimationFrame(loop);
    };
    animFrameIdRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animFrameIdRef.current);
    };
  }, []);

  return (
    /*
     * OUTER — tall scroll container; determines total scroll distance
     * SCROLL_MULTIPLIER × 100vh gives enough room to play all frames comfortably
     */
    <div
      ref={outerRef}
      style={{ position: 'relative', height: `${SCROLL_MULTIPLIER * 100}vh` }}
    >
      {/* STICKY — stays pinned to viewport during the entire outer scroll */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        {/* ── Background canvas (full bleed) ── */}
        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            display: 'block',
            zIndex: 0,
          }}
        />

        {/* ── Gradient overlay: bottom-heavy for text legibility ── */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: [
              'linear-gradient(180deg,',
              'rgba(10,8,6,0.55) 0%,',
              'rgba(10,8,6,0.25) 40%,',
              'rgba(10,8,6,0.15) 60%,',
              'rgba(10,8,6,0.75) 100%)',
            ].join(' '),
            zIndex: 1,
          }}
        />

        {/* ── Loading bar (shows during preload) ── */}
        {!isLoaded && (
          <div
            style={{
              position: 'absolute',
              bottom: '50%',
              left: '50%',
              transform: 'translate(-50%, 50%)',
              zIndex: 10,
              textAlign: 'center',
            }}
          >
            <div
              style={{
                width: '260px',
                height: '2px',
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '99px',
                overflow: 'hidden',
                marginBottom: '1rem',
              }}
            >
              <div
                style={{
                  width: `${loadProgress}%`,
                  height: '100%',
                  background: 'linear-gradient(90deg, #E8622A, #D4A853)',
                  transition: 'width 0.15s ease',
                }}
              />
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'rgba(255,255,255,0.5)',
                letterSpacing: '0.1em',
              }}
            >
              LOADING {loadProgress}%
            </div>
          </div>
        )}

        {/* ── Hero content — overlaid on canvas ── */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '0 6vw',
            paddingTop: '80px', // below navbar
          }}
        >
          {/* Status badge */}
          <div style={{ marginBottom: '1.5rem' }}>
            <span className="badge-live">
              <span className="live-dot" />
              Available for SDE, Data & Product Roles — 2025
            </span>
          </div>

          {/* Institution */}
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              color: 'rgba(255,255,255,0.55)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <span style={{ color: 'var(--orange)' }}>▸</span>
            4th Year B.Tech · IIT Guwahati
          </div>

          {/* Name */}
          <h1
            className="heading-premium"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3.5rem, 8vw, 8rem)',
              fontWeight: 900,
              lineHeight: 0.92,
              letterSpacing: '-0.045em',
              color: '#ffffff',
              marginBottom: '1rem',
              textShadow: '0 4px 40px rgba(0,0,0,0.5)',
            }}
          >
            Ayush
            <br />
            <span className="text-gradient-orange">Shandilya</span>
          </h1>

          {/* Role */}
          <div
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1rem, 2.2vw, 1.45rem)',
              fontWeight: 600,
              color: 'rgba(255,255,255,0.7)',
              letterSpacing: '-0.01em',
              marginBottom: '2rem',
              lineHeight: 1.3,
              maxWidth: '560px',
            }}
          >
            Software Engineer & Technical Product Builder
          </div>

          {/* Statement */}
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.7,
              maxWidth: '480px',
              marginBottom: '2.5rem',
            }}
          >
            I build and deploy production web, mobile, backend, and cloud
            systems. Every project here is real, shipped, and measured.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem' }}>
            <Link to="/work" className="btn btn-primary">
              View Work <ArrowRight size={16} />
            </Link>
            <a href="#" className="btn btn-secondary" target="_blank" rel="noreferrer">
              <FileText size={15} /> Resume
            </a>
            <a href="https://github.com/ash469" className="btn btn-secondary" target="_blank" rel="noreferrer">
              <Github size={15} /> GitHub
            </a>
            <a href="https://linkedin.com/in/ayush-shandilya" className="btn btn-secondary" target="_blank" rel="noreferrer">
              <Linkedin size={15} /> LinkedIn
            </a>
          </div>
        </div>

        {/* ── Bottom HUD: scroll progress bar + frame counter ── */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 3,
            padding: '0 6vw 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          {/* Progress bar */}
          <div style={{ flex: '1', maxWidth: '240px' }}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.62rem',
                color: 'rgba(255,255,255,0.35)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '0.4rem',
              }}
            >
              Scroll to explore · {Math.round(scrollProgress * 100)}%
            </div>
            <div
              style={{
                height: '2px',
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '99px',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  width: `${scrollProgress * 100}%`,
                  height: '100%',
                  background: 'linear-gradient(90deg, #E8622A, #D4A853)',
                  transition: 'width 0.05s linear',
                }}
              />
            </div>
          </div>

          {/* Frame counter */}
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              color: 'rgba(255,255,255,0.3)',
              letterSpacing: '0.06em',
            }}
          >
            {String(currentFrame).padStart(3, '0')} / {TOTAL_FRAMES}
          </div>
        </div>

        {/* ── Scroll hint chevron (fades out as user starts scrolling) ── */}
        <div
          style={{
            position: 'absolute',
            bottom: '1.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 3,
            opacity: scrollProgress < 0.02 ? 1 : 0,
            transition: 'opacity 0.4s',
            animation: 'scrollBounce 1.8s ease-in-out infinite',
            color: 'rgba(255,255,255,0.4)',
          }}
        >
          <ChevronDown size={24} />
        </div>
      </div>
    </div>
  );
}
