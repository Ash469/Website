import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const links = [
    { label: 'Home', to: '/' },
    { label: 'Projects', to: '/projects' },
    { label: 'Experience', to: '/experience' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ];

  const socials = [
    {
      label: 'GitHub',
      icon: <Github size={16} />,
      href: 'https://github.com/ash469',
    },
    {
      label: 'LinkedIn',
      icon: <Linkedin size={16} />,
      href: 'https://linkedin.com/in/ayush-shandilya',
    },
    {
      label: 'Email',
      icon: <Mail size={16} />,
      href: 'mailto:ashshandilya4@gmail.com',
    },
  ];

  return (
    <footer className="border-t border-white/[0.05] bg-white/[0.02] backdrop-blur-xl py-12 mt-[-160px] relative z-10">
      <div className="container-site max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start footer-grid">
          {/* Brand */}
          <div>
            <div className="name-brand text-xl font-black text-neutral-200 mb-3">
              Ayush Shandilya
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-[240px]">
              Software Engineer & Technical Product Builder.
              B.Tech, IIT Guwahati.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="font-mono text-[0.7rem] font-semibold tracking-widest uppercase text-neutral-400 mb-4">
              Navigation
            </div>
            <nav className="flex flex-col gap-2.5">
              {links.map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  className="text-sm text-neutral-300 hover:text-white no-underline transition-colors duration-200"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Socials */}
          <div>
            <div className="font-mono text-[0.7rem] font-semibold tracking-widest uppercase text-neutral-400 mb-4">
              Connect
            </div>
            <div className="flex flex-col gap-2.5">
              {socials.map(({ label, icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-orange-400 no-underline transition-colors duration-200"
                >
                  {icon}
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
