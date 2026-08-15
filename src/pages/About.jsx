import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Sparkles, 
  Code2, 
  Server, 
  Smartphone, 
  Cloud, 
  Database, 
  BrainCircuit, 
  Layers,
  Boxes,
  Lock,
  Workflow,
  Key,
  Bell,
  Cpu,
  Terminal,
  Activity,
  BarChart2,
  HardDrive
} from 'lucide-react';
import image1Img from '../../image1.png';

// Tech SVG Icons
const icons = {
  'C++': (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-blue-400">
      <path d="M22.378 4.767a.342.342 0 00-.317-.184h-2.187a.342.342 0 00-.318.214l-2.073 5.405h-1.573l-2.073-5.405a.342.342 0 00-.318-.214H11.34a.342.342 0 00-.317.472l3.197 8.337-3.197 8.337a.342.342 0 00.317.472h2.187c.146 0 .276-.088.318-.214l2.073-5.405h1.573l2.073 5.405c.042.126.172.214.318.214h2.187a.342.342 0 00.317-.472l-3.197-8.337 3.197-8.337a.342.342 0 000-.288zM4.148 12.012c0-3.64 2.12-5.49 5.37-5.49 2.08 0 3.73.82 4.6 2.3.15.25.07.57-.17.72l-1.35.85c-.22.14-.52.08-.68-.14-.54-.72-1.38-1.12-2.39-1.12-1.85 0-2.95 1.15-2.95 2.88s1.1 2.88 2.95 2.88c1.01 0 1.85-.4 2.39-1.12.16-.22.46-.28.68-.14l1.35.85c.24.15.32.47.17.72-.87 1.48-2.52 2.3-4.6 2.3-3.25 0-5.37-1.85-5.37-5.49z"/>
    </svg>
  ),
  'Python': (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-blue-400">
      <path d="M11.898 0C5.748 0 6.11 2.67 6.11 2.67l.006 2.766h5.89v.834H3.882S0 5.753 0 11.944c0 6.19 3.4 5.97 3.4 5.97h2.032v-2.868s-.11-3.4 3.344-3.4h5.726s3.174.055 3.174-3.064V3.064S18.15 0 11.898 0zm-3.07 1.888a1.05 1.05 0 110 2.1 1.05 1.05 0 010-2.1zm6.274 6.274h2.868s3.4.11 3.4-3.344V2.766S21.32 0 15.102 0c-2.316 0-3.953.535-4.86 1.408v2.45h4.86c1.173 0 2.124.95 2.124 2.124v2.18h-2.124zm-3.197 4.103H6.18s-3.174-.055-3.174 3.064v5.492S2.527 24 8.78 24c6.15 0 5.788-2.67 5.788-2.67l-.006-2.766h-5.89v-.834h8.125s3.882.517 3.882-5.674c0-6.19-3.4-5.97-3.4-5.97h-2.032v2.868s.11 3.4-3.344 3.4zm3.07 13.947a1.05 1.05 0 110-2.1 1.05 1.05 0 010 2.1z"/>
    </svg>
  ),
  'JavaScript': (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-yellow-400">
      <path d="M0 0h24v24H0z" fill="none"/>
      <path d="M3 3h18v18H3V3zm9.64 15.75c.92 0 1.63-.38 2.06-1.12.16-.27.24-.62.24-1.04 0-1.28-.85-1.92-2.54-2.45-.96-.31-1.44-.65-1.44-1.14 0-.44.38-.72 1.05-.72.63 0 1.25.26 1.76.71.18.16.45.16.63-.02l.85-.92c.16-.17.15-.44-.02-.6-.74-.7-1.77-1.08-2.97-1.08-1.84 0-3.08.97-3.08 2.45 0 1.34.82 2.04 2.5 2.56 1.04.32 1.48.68 1.48 1.17 0 .52-.46.82-1.22.82-.87 0-1.63-.42-2.18-1.13-.14-.19-.41-.23-.61-.09l-.92.65c-.2.14-.25.42-.11.62.88 1.25 2.3 1.94 4.09 1.94zm-5.91-.32h1.66V9.75H6.73v8.68z"/>
    </svg>
  ),
  'TypeScript': (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-blue-500">
      <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm17.363 9.75c.612 0 1.154.037 1.627.111.473.075.912.22 1.317.436v2.571a6.39 6.39 0 00-1.32-.486 7.424 7.424 0 00-1.47-.147c-.675 0-1.196.143-1.563.428-.368.286-.552.69-.552 1.213 0 .39.1.7.3.93.2.23.473.413.818.55.345.136.757.263 1.237.382.72.18 1.343.376 1.868.586.525.21.956.473 1.293.788.338.315.586.69.743 1.125.158.435.237.945.237 1.53 0 .885-.218 1.65-.653 2.295-.435.645-1.042 1.14-1.823 1.485-.78.345-1.702.518-2.767.518-.75 0-1.463-.075-2.138-.225a9.387 9.387 0 01-1.927-.645v-2.7a8.556 8.556 0 001.995.84 6.786 6.786 0 001.98.27c.72 0 1.275-.158 1.665-.473.39-.315.585-.757.585-1.328 0-.375-.09-.675-.27-.9-.18-.225-.435-.413-.765-.563-.33-.15-.728-.285-1.193-.405-.75-.195-1.395-.405-1.935-.63-.54-.225-.975-.503-1.305-.833-.33-.33-.57-.72-.72-1.17-.15-.45-.225-.975-.225-1.575 0-.855.218-1.605.653-2.25.435-.645 1.035-1.133 1.8-1.463.765-.33 1.673-.495 2.723-.495zm-6.862.15v2.52h-3.09v11.43H5.535V12.42H2.445V9.9h6.18z"/>
    </svg>
  ),
  'Dart': (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-sky-400">
      <path d="M4.105 4.105L12 0l7.895 4.105L24 12l-4.105 7.895L12 24l-7.895-4.105L0 12l4.105-7.895z"/>
    </svg>
  ),
  'SQL': <Database className="w-4 h-4 text-emerald-400" />,
  'React': (
    <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-current stroke-2 fill-none text-sky-400">
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  ),
  'Next.js': (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-white">
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.62 18.23l-7.39-10.4V16.5H8.75V7.5h1.75l7.12 10.05v-9.3h1.5v9.98h-1.5z" />
    </svg>
  ),
  'Vite': (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-purple-400">
      <path d="M22.04 3.03a.75.75 0 00-.7-.03L1.93 11.2a.75.75 0 00.1 1.41l5.48 1.48 2.37 6.42a.75.75 0 001.35.13l3.18-4.77 5.25 3.94a.75.75 0 001.19-.48l2.25-15.75a.75.75 0 00-.06-.55z"/>
    </svg>
  ),
  'Tailwind CSS': (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-sky-400">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
    </svg>
  ),
  'GSAP': <Sparkles className="w-4 h-4 text-green-400" />,
  'Framer Motion': <Workflow className="w-4 h-4 text-pink-400" />,
  'Node.js': (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-green-500">
      <path d="M12 2L2 7.7v11.6L12 25l10-5.7V7.7L12 2zm-1 18.4l-6.5-3.7v-7.4L11 13v7.4zm2 0V13l6.5-3.7v7.4L13 20.4z" />
    </svg>
  ),
  'Express': <Server className="w-4 h-4 text-gray-300" />,
  'REST APIs': <Server className="w-4 h-4 text-orange-400" />,
  'JWT': <Key className="w-4 h-4 text-yellow-400" />,
  'RBAC': <Lock className="w-4 h-4 text-emerald-400" />,
  'Flutter': (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-blue-400">
      <path d="M14.314 0L2.3 12 6 15.7 21.686 0h-7.372zm-2.28 12.01L6.05 17.99 12.034 24h7.372l-5.984-5.99 5.984-5.99h-7.372z"/>
    </svg>
  ),
  'Firebase': (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-amber-400">
      <path d="M3.89 15.672L6.255.474A.538.538 0 017.24.275l2.457 4.707-5.807 10.69zM14.54 9.171L12.518 5.25a.539.539 0 00-.955 0L.191 22.842a.539.539 0 00.757.698l10.573-5.962 3.019-8.407zm8.887 13.671L17.72 10.22l-2.43 4.606 5.378 8.717a.538.538 0 00.77.166l1.989-1.168a.539.539 0 00.103-.7z"/>
    </svg>
  ),
  'FCM': <Bell className="w-4 h-4 text-orange-400" />,
  'MongoDB': (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-green-500">
      <path d="M11.96 0c-2.31 4.54-5.06 7.42-7.23 11.08-1.57 2.65-2.4 5.76-2.4 8.87 0 2.23.82 4.05 2.4 4.05 2.37 0 4.19-2.37 7.23-5.59 3.04 3.22 4.86 5.59 7.23 5.59 1.58 0 2.4-1.82 2.4-4.05 0-3.11-.83-6.22-2.4-8.87C17.02 7.42 14.27 4.54 11.96 0zm.04 7.26c1.39 2.5 3.08 4.3 4.41 6.66.97 1.73 1.49 3.73 1.49 5.74 0 1.05-.29 1.84-.96 1.84-1.39 0-2.82-1.65-4.94-3.86V7.26zm-.08 0v14.44c-2.12 2.21-3.55 3.86-4.94 3.86-.67 0-.96-.79-.96-1.84 0-2.01.52-4.01 1.49-5.74 1.33-2.36 3.02-4.16 4.41-6.66z"/>
    </svg>
  ),
  'MySQL': <Database className="w-4 h-4 text-blue-400" />,
  'PostgreSQL': <Database className="w-4 h-4 text-sky-400" />,
  'Redis': <HardDrive className="w-4 h-4 text-red-500" />,
  'AWS': (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-amber-500">
      <path d="M6.664 12.875c0-.6.126-1.077.378-1.43.252-.354.664-.53 1.236-.53.52 0 .91.173 1.172.52.262.346.393.81.393 1.39 0 .615-.128 1.11-.385 1.485-.257.375-.662.563-1.215.563-.526 0-.93-.178-1.212-.535-.282-.357-.423-.847-.423-1.47zm7.64-1.88c-.347 0-.66.07-.94.21-.28.14-.51.347-.69.62v-.705H11.3v5.67h1.417v-2.84c0-.605.143-1.066.43-1.385.286-.318.665-.478 1.137-.478.47 0 .82.138 1.05.414.23.276.345.696.345 1.26v3.03H17.1v-3.235c0-.97-.22-1.69-.66-2.16-.44-.47-1.07-.706-1.896-.706zm-6.22-8.32C4.164 4.54 1.38 7.6 0 11.234c2.052.793 4.267 1.206 6.51 1.22 1.36.008 2.716-.134 4.03-.424C9.176 10.457 7.766 7.42 8.084 2.675zm12.33 13.916c-3.14 2.37-7.07 3.65-11.02 3.61-2.48.02-4.94-.47-7.18-1.44-.22-.09-.34-.33-.27-.55.07-.22.3-.34.52-.26 2.14.93 4.49 1.4 6.86 1.38 3.77.04 7.52-1.18 10.52-3.44.2-.15.48-.11.63.09.15.2.1.48-.1.63z"/>
    </svg>
  ),
  'Docker': (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-sky-400">
      <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm-2.954-5.43h2.118a.185.185 0 00.186-.186V3.574a.185.185 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185zm0 5.43h2.118a.185.185 0 00.186-.185V9.006a.185.185 0 00-.186-.186h-2.118a.185.185 0 00-.185.186v1.887c0 .102.082.185.185.185zm-2.955 0h2.119a.186.186 0 00.185-.185V9.006a.185.185 0 00-.185-.186H8.074a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm0-2.716h2.119a.186.186 0 00.185-.186V6.289a.186.186 0 00-.185-.186H8.074a.185.185 0 00-.185.186v1.887c0 .102.083.186.185.186zm-2.955 2.716h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.119a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm0-2.716h2.119a.185.185 0 00.185-.186V6.289a.185.185 0 00-.185-.186H5.119a.185.185 0 00-.185.186v1.887c0 .102.083.186.185.186zm-2.955 2.716h2.119a.186.186 0 00.185-.185V9.006a.185.185 0 00-.185-.186H2.164a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm0-2.716h2.119a.186.186 0 00.185-.186V6.289a.186.186 0 00-.185-.186H2.164a.185.185 0 00-.185.186v1.887c0 .102.083.186.185.186zM23.713 11.5c-.144-.1-.83-.56-2.203-.43-.284-1.39-1.31-2.22-1.36-2.26l-.26-.2-.18.27c-.39.6-.52 1.34-.37 2.07-1.04.16-2.11.75-2.8 1.63-.3.38-.55.82-.73 1.28H0c.4 3.73 3.66 6.64 7.64 6.64 5.25 0 9.77-3.23 11.45-8.23 1.13.12 3.19-.18 4.62-1.63l.24-.25-.24-.19z"/>
    </svg>
  ),
  'Nginx': <Server className="w-4 h-4 text-emerald-500" />,
  'GitHub Actions': <Workflow className="w-4 h-4 text-blue-400" />,
  'PM2': <Activity className="w-4 h-4 text-emerald-400" />,
  'Linux': <Terminal className="w-4 h-4 text-yellow-500" />,
  'Pandas': <BarChart2 className="w-4 h-4 text-indigo-400" />,
  'NumPy': <Cpu className="w-4 h-4 text-sky-400" />,
  'Scikit-learn': <BrainCircuit className="w-4 h-4 text-amber-500" />,
  'Matplotlib': <BarChart2 className="w-4 h-4 text-teal-400" />,
  'Kafka': <Boxes className="w-4 h-4 text-gray-300" />,
  'RabbitMQ': <Boxes className="w-4 h-4 text-orange-500" />,
  'Cassandra': <Database className="w-4 h-4 text-blue-400" />,
  'DynamoDB': <Database className="w-4 h-4 text-blue-500" />,
  'Kubernetes': <Boxes className="w-4 h-4 text-blue-500" />
};

export default function About() {
  const skillCategories = [
    {
      id: 'Languages',
      icon: <Code2 className="w-5 h-5 text-orange-500" />,
      skills: ['C++', 'Python', 'JavaScript', 'TypeScript', 'Dart', 'SQL']
    },
    {
      id: 'Frontend',
      icon: <Layers className="w-5 h-5 text-sky-400" />,
      skills: ['React', 'Next.js', 'Vite', 'Tailwind CSS', 'GSAP', 'Framer Motion']
    },
    {
      id: 'Backend',
      icon: <Server className="w-5 h-5 text-emerald-400" />,
      skills: ['Node.js', 'Express', 'REST APIs', 'JWT', 'RBAC']
    },
    {
      id: 'Mobile',
      icon: <Smartphone className="w-5 h-5 text-blue-400" />,
      skills: ['Flutter', 'Firebase', 'FCM']
    },
    {
      id: 'Databases',
      icon: <Database className="w-5 h-5 text-green-400" />,
      skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis']
    },
    {
      id: 'Cloud & DevOps',
      icon: <Cloud className="w-5 h-5 text-amber-400" />,
      skills: ['AWS', 'Docker', 'Nginx', 'GitHub Actions', 'PM2', 'Linux']
    },
    {
      id: 'Data & ML',
      icon: <BrainCircuit className="w-5 h-5 text-purple-400" />,
      skills: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib']
    },
    {
      id: 'Familiar With',
      icon: <Boxes className="w-5 h-5 text-orange-400" />,
      skills: ['Kafka', 'RabbitMQ', 'Cassandra', 'DynamoDB', 'Kubernetes']
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-bg text-text-primary">
      
      {/* ── Header / Large Portrait Card ── */}
      <section className="border-b border-border-subtle py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Large Image Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              <div className="relative group w-full max-w-sm sm:max-w-md">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-gold rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-500" />
                
                <div className="relative w-full h-[420px] sm:h-[480px] rounded-3xl overflow-hidden border-2 border-border-warm bg-bg-card shadow-card">
                  <img 
                    src={image1Img} 
                    alt="Ayush Ranjan Shandilya" 
                    className="w-full h-full object-cover object-top filter contrast-[1.05] group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-bg-surface/90 backdrop-blur-md border border-border-subtle">
                    <div className="font-display font-black text-xl text-text-primary">
                      Ayush Shandilya
                    </div>
                    <div className="font-heading text-xs font-semibold text-orange-400">
                      B.Tech · IIT Guwahati (4th Year)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Bio Text */}
            <div className="lg:col-span-7 space-y-6">

              <h1 className="font-display text-4xl sm:text-5xl font-black tracking-tight leading-none text-text-primary">
                Engineering real systems for production scale.
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-sm text-text-secondary font-heading">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-orange-500" />
                  <span>IIT Guwahati (2023 – 2027)</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-orange-500" />
                  <span>Guwahati, India</span>
                </div>
              </div>

              <p className="font-body text-base sm:text-lg text-text-secondary leading-relaxed">
                I'm a 4th-year student at IIT Guwahati focused on software engineering, production infrastructure, and data platforms. I build real applications that handle traffic, scale reliably, and serve actual users.
              </p>

              <p className="font-body text-base text-text-secondary leading-relaxed">
                While my core experience covers full-stack web, backend REST APIs, DevOps, and cross-platform mobile apps, I am actively expanding into machine learning and data engineering pipelines.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── Structured Technical Skills Section ── */}
      <section className="py-20 bg-bg-surface/50 border-b border-border-subtle">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight text-text-primary mb-3">
              Skills & Expertise
            </h2>
            <p className="font-body text-base text-text-secondary">
              A clean breakdown of technologies, frameworks, and tools I engineer with.
            </p>
          </div>

          {/* Structured Category Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skillCategories.map((catGroup) => (
              <div 
                key={catGroup.id}
                className="bg-bg-card border border-border-subtle hover:border-orange-500/40 rounded-3xl p-7 transition-all duration-300 shadow-card hover:shadow-card-hover"
              >
                <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-border-subtle">
                  <div className="p-3 bg-bg-surface border border-border-subtle rounded-2xl">
                    {catGroup.icon}
                  </div>
                  <h3 className="font-display text-xl font-extrabold text-text-primary">
                    {catGroup.id}
                  </h3>
                </div>

                {/* Skill Pills with authentic icons */}
                <div className="flex flex-wrap gap-3">
                  {catGroup.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-bg-surface border border-border-subtle hover:border-orange-500/50 hover:bg-orange-500/10 text-text-primary font-heading text-sm font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                    >
                      {icons[skill] || <Code2 className="w-4 h-4 text-orange-400" />}
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
