import React, { useEffect, useRef, useState } from 'react';

const TOTAL_FRAMES = 152;

export default function ScrollCanvas({ onFrameChange, onLoadingChange }) {
  const canvasRef = useRef(null);
  const framesRef = useRef([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const [isFullyLoaded, setIsFullyLoaded] = useState(false);

  const targetFrameRef = useRef(0);
  const currentFrameRef = useRef(0);
  const animFrameIdRef = useRef(null);

  // 1. Preload all 152 image frames
  useEffect(() => {
    let count = 0;
    const loadedImages = new Array(TOTAL_FRAMES);

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameNum = String(i).padStart(3, '0');
      img.src = `/image2frames/ezgif-frame-${frameNum}.jpg`;

      img.onload = () => {
        count++;
        setLoadedCount(count);
        if (onLoadingChange) {
          onLoadingChange(Math.round((count / TOTAL_FRAMES) * 100));
        }
        if (count === TOTAL_FRAMES) {
          setIsFullyLoaded(true);
        }
      };

      img.onerror = () => {
        count++;
        setLoadedCount(count);
      };

      loadedImages[i - 1] = img;
    }

    framesRef.current = loadedImages;

    return () => {
      framesRef.current = [];
    };
  }, []);

  // 2. Setup Canvas size with High DPI scaling relative to container
  const updateCanvasDimensions = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    const width = parent ? parent.clientWidth : window.innerWidth;
    const height = parent ? parent.clientHeight : window.innerHeight;

    const dpr = window.devicePixelRatio || 1;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.scale(dpr, dpr);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
    }
  };

  // 3. Render frame with aspect ratio cover fit
  const renderFrame = (frameIndex) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const clampedIndex = Math.max(0, Math.min(TOTAL_FRAMES - 1, frameIndex));
    const img = framesRef.current[clampedIndex];

    if (!img || !img.complete || img.naturalWidth === 0) return;

    const parent = canvas.parentElement;
    const width = parent ? parent.clientWidth : window.innerWidth;
    const height = parent ? parent.clientHeight : window.innerHeight;

    const imgRatio = img.naturalWidth / img.naturalHeight;
    const containerRatio = width / height;

    let drawWidth, drawHeight, offsetX, offsetY;

    if (containerRatio > imgRatio) {
      drawWidth = width;
      drawHeight = width / imgRatio;
      offsetX = 0;
      offsetY = (height - drawHeight) / 2;
    } else {
      drawWidth = height * imgRatio;
      drawHeight = height;
      offsetX = (width - drawWidth) / 2;
      offsetY = 0;
    }

    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  // 4. Scroll tracking & requestAnimationFrame lerp loop
  useEffect(() => {
    updateCanvasDimensions();

    const handleResize = () => {
      updateCanvasDimensions();
      renderFrame(Math.round(currentFrameRef.current));
    };

    window.addEventListener('resize', handleResize);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) return;

      const progress = Math.min(1, Math.max(0, scrollY / maxScroll));
      targetFrameRef.current = progress * (TOTAL_FRAMES - 1);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    const renderLoop = () => {
      const delta = targetFrameRef.current - currentFrameRef.current;
      currentFrameRef.current += delta * 0.15;

      const activeIndex = Math.round(currentFrameRef.current);
      renderFrame(activeIndex);

      if (onFrameChange) {
        onFrameChange(activeIndex + 1);
      }

      animFrameIdRef.current = requestAnimationFrame(renderLoop);
    };

    animFrameIdRef.current = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="animation-canvas" />
  );
}
