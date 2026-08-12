import React, { useEffect, useRef } from 'react';
import './ExperienceLayout.css';

export default function ExperienceLayout({
  title,
  subtitle,
  imageSrc,
  children,
  reverse = false,
  id,
}) {
  const ref = useRef(null);

  // Simple scroll-reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id={id} className={`exp-section ${reverse ? 'reverse' : ''}`} ref={ref}>
      <div className="exp-image">
        <img src={imageSrc} alt={title} loading="lazy" />
      </div>
      <div className="exp-content">
        <h2 className="exp-title">{title}</h2>
        {subtitle && <p className="exp-subtitle">{subtitle}</p>}
        <div className="exp-body">{children}</div>
      </div>
    </section>
  );
}
