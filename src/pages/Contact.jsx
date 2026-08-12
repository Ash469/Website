import React, { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  Github, 
  Send, 
  CheckCircle2, 
  Phone, 
  MessageSquare, 
  User, 
  MapPin, 
  Clock 
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: 'Full-Stack Project',
    description: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const topics = [
    'Full-Stack Project',
    'DevOps / Infrastructure',
    'Mobile App (Flutter)',
    'Client Engagement',
    'General Inquiry'
  ];

  const emails = [
    {
      label: 'Personal & Business',
      address: 'ashshandilya4@gmail.com',
      href: 'mailto:ashshandilya4@gmail.com'
    },
    {
      label: 'IIT Guwahati Academic',
      address: 'ayush.shandilya@iitg.ac.in',
      href: 'mailto:ayush.shandilya@iitg.ac.in'
    }
  ];

  const linkedinUrl = "https://www.linkedin.com/in/ayush-ranjan-9928192a9/";
  const githubUrl = "https://github.com/Ash469";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const mailSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.topic} from ${formData.name}`);
    const mailBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'N/A'}\nTopic: ${formData.topic}\n\nMessage:\n${formData.description}`
    );

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.location.href = `mailto:ashshandilya4@gmail.com?subject=${mailSubject}&body=${mailBody}`;
    }, 600);
  };

  return (
    <div className="pt-20 min-h-screen bg-bg text-text-primary">
      {/* ── Header ── */}
      <section className="border-b border-border-subtle py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            {/* Header Text */}
            <div className="max-w-xl">
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none mb-4">
                Let's start a conversation.
              </h1>
              <p className="font-heading text-lg text-text-secondary leading-relaxed">
                Have a project in mind, need infrastructure expertise, or want to collaborate? Send me a message below or reach out directly.
              </p>
            </div>

            {/* Profile Card Beside Header */}
            <div className="bg-bg-card border border-border-warm rounded-3xl p-4 sm:p-6 shadow-card relative overflow-hidden max-w-lg shrink-0 w-full lg:w-auto">
              <div className="flex items-center gap-6 mb-5">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-orange-500 shrink-0 shadow-orange-glow">
                  <img 
                    src="/image2.png" 
                    alt="Ayush Ranjan Shandilya" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-black text-text-primary mb-1">
                    Ayush Ranjan
                  </h3>
                  <p className="font-heading text-sm sm:text-base font-semibold text-orange-400 mb-2">
                    Software & Systems Engineer
                  </p>
                  <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-success">
                    <span className="w-2.5 h-2.5 rounded-full bg-success animate-pulse" />
                    Available for projects
                  </div>
                </div>
              </div>

              <div className="space-y-3 border-t border-border-subtle  text-sm text-text-secondary">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-orange-500 shrink-0" />
                  <span>IIT Guwahati, Assam, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-orange-500 shrink-0" />
                  <span>Response time: Usually within 24 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Contact Content ── */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Direct Links (5 cols) */}
            <div className="lg:col-span-5 space-y-8">

              {/* Direct Emails */}
              <div className="bg-bg-card border border-border-subtle rounded-3xl p-7">
                <h4 className="font-heading text-base font-bold text-text-primary mb-5 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-orange-500" /> Direct Emails
                </h4>
                <div className="space-y-4">
                  {emails.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.href}
                      className="block p-4 bg-bg-surface border border-border-subtle rounded-xl hover:border-orange-500/50 hover:translate-x-1 transition-all duration-200"
                    >
                      <div className="font-mono text-xs text-text-muted uppercase tracking-wider mb-1">
                        {item.label}
                      </div>
                      <div className="font-body text-base font-semibold text-orange-400 break-all">
                        {item.address}
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Professional Networks */}
              <div className="bg-bg-card border border-border-subtle rounded-3xl p-7">
                <h4 className="font-heading text-base font-bold text-text-primary mb-5">
                  Professional Networks
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 p-3.5 bg-[#0A66C2]/10 border border-[#0A66C2]/30 rounded-xl text-[#0A66C2] font-heading text-sm font-bold hover:-translate-y-0.5 transition-transform"
                  >
                    <Linkedin className="w-5 h-5" /> LinkedIn
                  </a>
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 p-3.5 bg-white/5 border border-border-subtle rounded-xl text-text-primary font-heading text-sm font-bold hover:-translate-y-0.5 transition-transform"
                  >
                    <Github className="w-5 h-5" /> GitHub
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column: Contact Form (7 cols) */}
            <div className="lg:col-span-7 bg-bg-card border border-border-warm rounded-3xl p-8 sm:p-10 shadow-card">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-success/10 text-success flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="font-display text-3xl font-extrabold text-text-primary mb-3">
                    Message Prepared & Sent!
                  </h3>
                  <p className="font-body text-base text-text-secondary max-w-md mx-auto mb-8 leading-relaxed">
                    Thank you, <strong className="text-text-primary">{formData.name}</strong>. Your email draft has been generated. I will review your message regarding <em className="text-orange-400">"{formData.topic}"</em> promptly.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', topic: 'Full-Stack Project', description: '' }); }}
                    className="px-7 py-3 rounded-full bg-bg-surface border border-border-warm text-text-primary font-mono text-sm font-bold hover:bg-border-subtle transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-display text-2xl font-extrabold text-text-primary mb-2">
                      Send Me a Message
                    </h3>
                    <p className="font-body text-sm text-text-muted">
                      Fill in your details below and it will draft and send an email directly to me.
                    </p>
                  </div>

                  {/* Name & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-mono text-xs text-text-muted uppercase tracking-widest mb-2">
                        Your Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full py-3.5 pl-11 pr-4 bg-bg-surface border border-border-subtle rounded-xl text-text-primary font-body text-sm focus:border-orange-500 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-mono text-xs text-text-muted uppercase tracking-widest mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full py-3.5 pl-11 pr-4 bg-bg-surface border border-border-subtle rounded-xl text-text-primary font-body text-sm focus:border-orange-500 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block font-mono text-xs text-text-muted uppercase tracking-widest mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full py-3.5 pl-11 pr-4 bg-bg-surface border border-border-subtle rounded-xl text-text-primary font-body text-sm focus:border-orange-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block font-mono text-xs text-text-muted uppercase tracking-widest mb-2">
                      Project Details / Description *
                    </label>
                    <div className="relative">
                      <MessageSquare className="w-4 h-4 absolute left-4 top-4 text-text-muted" />
                      <textarea
                        name="description"
                        required
                        rows={5}
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Tell me about your project, scope, timelines, or questions..."
                        className="w-full py-3.5 pl-11 pr-4 bg-bg-surface border border-border-subtle rounded-xl text-text-primary font-body text-sm focus:border-orange-500 focus:outline-none transition-colors resize-y"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-mono text-sm font-extrabold tracking-wider flex items-center justify-center gap-3 shadow-orange-glow hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Preparing Email...' : (
                      <>
                        SEND MESSAGE <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
