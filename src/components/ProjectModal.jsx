import React from 'react';
import { X, CheckCircle2, ArrowUpRight, Github } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay-backdrop" onClick={onClose}>
      <div className="modal-content-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-icon-btn" onClick={onClose}>
          <X size={20} />
        </button>
        
        <div className="modal-top-head">
          <span className="modal-tag-text">{project.category}</span>
          <h2 className="modal-title-text">{project.name}</h2>
          <span className="modal-metric-pill">
            <CheckCircle2 size={14} />
            <span>{project.metric}</span>
          </span>
        </div>

        <div>
          <p className="modal-body-desc">{project.fullDescription || project.desc}</p>

          <div className="modal-section-block">
            <h4 className="modal-section-title">// SYSTEM ARCHITECTURE HIGHLIGHTS</h4>
            <ul className="modal-arch-bullets">
              {project.architecture ? (
                project.architecture.map((item, idx) => (
                  <li key={idx} className="modal-arch-bullet-item">
                    <CheckCircle2 size={16} className="bullet-icon" />
                    <span>{item}</span>
                  </li>
                ))
              ) : (
                <>
                  <li className="modal-arch-bullet-item">
                    <CheckCircle2 size={16} className="bullet-icon" />
                    <span>High-concurrency asynchronous execution architecture</span>
                  </li>
                  <li className="modal-arch-bullet-item">
                    <CheckCircle2 size={16} className="bullet-icon" />
                    <span>Sub-second response latency with Redis caching layer</span>
                  </li>
                  <li className="modal-arch-bullet-item">
                    <CheckCircle2 size={16} className="bullet-icon" />
                    <span>Automated CI/CD deployment pipeline with 99.9% uptime SLA</span>
                  </li>
                </>
              )}
            </ul>
          </div>

          <div className="modal-section-block">
            <h4 className="modal-section-title">// TECHNOLOGIES & STACK</h4>
            <div className="modal-tech-pills-row">
              {project.tech.map((t, idx) => (
                <span key={idx} className="modal-tech-badge">{t}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="modal-footer-row">
          <a href={project.liveUrl} target="_blank" rel="noreferrer" className="modal-footer-btn primary">
            <span>Launch Live Preview</span>
            <ArrowUpRight size={16} />
          </a>
          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="modal-footer-btn secondary">
            <Github size={16} />
            <span>GitHub Repository</span>
          </a>
        </div>
      </div>
    </div>
  );
}
