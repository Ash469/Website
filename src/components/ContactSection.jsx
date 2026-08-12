import React, { useState } from 'react';
import { Mail, Github, Linkedin, MapPin, Copy, Send, Check } from 'lucide-react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [copiedToast, setCopiedToast] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hello@rayhan.dev');
    setCopiedToast(true);
    setTimeout(() => setCopiedToast(false), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="page-section" id="contact">
      {/* Toast Notification */}
      {copiedToast && (
        <div className="toast-notification">
          <Check size={16} color="#10b981" />
          <span>Copied hello@rayhan.dev to clipboard!</span>
        </div>
      )}

      <div className="section-title-head">
        <span className="section-tag-label">// 05. GET IN TOUCH</span>
        <h2 className="section-main-title">Start a Conversation</h2>
      </div>

      <div className="contact-layout-grid">
        {/* Left Column: Direct Info & Quick Copy */}
        <div className="contact-info-block">
          <p className="contact-bio-text">
            Currently open for full-time Senior Software Engineer positions, high-impact contract roles, and technical advisory. 
            Click below to copy my direct email or fill out the inquiry form.
          </p>

          <button className="copy-email-box-btn" onClick={handleCopyEmail}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Mail size={18} color="#0284c7" />
              <span className="copy-email-text">hello@rayhan.dev</span>
            </span>
            <span className="copy-hint-text">
              <Copy size={14} />
              <span>Copy</span>
            </span>
          </button>

          <div className="social-cards-column">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="social-card-item">
              <Github size={18} />
              <span>github.com/rayhan</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-card-item">
              <Linkedin size={18} />
              <span>linkedin.com/in/rayhan</span>
            </a>
            <div className="social-card-item">
              <MapPin size={18} />
              <span>Worldwide / Remote</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <form className="contact-form-box" onSubmit={handleSubmit}>
          {submitted ? (
            <div style={{ color: 'var(--accent-success)', fontFamily: 'var(--font-mono)', fontSize: '0.92rem', textAlign: 'center', padding: '2rem 0', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
              <Check size={18} />
              <span>Message dispatched successfully! I will reply within 24 hours.</span>
            </div>
          ) : (
            <>
              <div className="form-field-group">
                <label className="form-label-text">YOUR NAME</label>
                <input type="text" className="form-input-control" placeholder="e.g. Alex Johnson" required />
              </div>

              <div className="form-field-group">
                <label className="form-label-text">EMAIL ADDRESS</label>
                <input type="email" className="form-input-control" placeholder="e.g. alex@company.com" required />
              </div>

              <div className="form-field-group">
                <label className="form-label-text">SUBJECT</label>
                <input type="text" className="form-input-control" placeholder="Project Inquiry / Job Opportunity" required />
              </div>

              <div className="form-field-group">
                <label className="form-label-text">MESSAGE</label>
                <textarea className="form-textarea-control" rows="4" placeholder="Tell me about your project or role..." required></textarea>
              </div>

              <button type="submit" className="form-submit-action">
                <span>Dispatch Message</span>
                <Send size={16} />
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
