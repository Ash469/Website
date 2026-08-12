import React, { useState } from 'react';
import { ArrowUpRight, Code2 } from 'lucide-react';

export default function ProjectsSection({ onSelectProject }) {
  const [activeTab, setActiveTab] = useState('All');

  const projects = [
    {
      id: 1,
      name: 'DevPulse Telemetry Engine',
      categoryType: 'Full-Stack',
      category: 'FULL-STACK // REAL-TIME ANALYTICS',
      metric: '< 50ms Latency',
      desc: 'High-frequency microservices monitoring platform with real-time telemetry streaming, interactive metric dashboards, and automated alert webhooks.',
      fullDescription: 'DevPulse is an enterprise-grade microservice telemetry platform engineered to monitor infrastructure health, endpoint latency, and CPU/memory metrics in real-time. Capable of processing over 50,000 telemetry events per second with sub-50ms query response times.',
      architecture: [
        'Distributed Event Loop with WebSocket Streaming for sub-50ms latency',
        'TimescaleDB time-series storage with automated data retention policies',
        'React + Zustand global state selector tree optimized for zero unnecessary re-renders'
      ],
      tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'TailwindCSS', 'Docker'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    },
    {
      id: 2,
      name: 'CloudVault Storage Engine',
      categoryType: 'Backend & APIs',
      category: 'BACKEND // DISTRIBUTED SYSTEMS',
      metric: '99.99% Reliability',
      desc: 'End-to-end encrypted distributed cloud storage gateway built with high-throughput streaming pipelines, Redis caching, and AWS S3 replication.',
      fullDescription: 'CloudVault is a distributed object storage gateway providing high-performance encrypted file storage, automated file versioning, and secure time-limited presigned access URLs.',
      architecture: [
        'Node.js Stream Transform pipeline for zero-copy high-speed file uploads',
        'AWS S3 Multi-Region active-active failover architecture',
        'Redis distributed lock manager ensuring atomic concurrent file operations'
      ],
      tech: ['Node.js', 'AWS S3', 'Redis', 'Express', 'Jest', 'CI/CD Actions'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    },
    {
      id: 3,
      name: 'Nexus AI Workflow Studio',
      categoryType: 'AI & Automation',
      category: 'AI AUTOMATION // NODE ENGINE',
      metric: '10k+ Daily Executions',
      desc: 'Visual node-based drag-and-drop workflow editor integrating LLM inference pipelines, external webhook triggers, and automated cron background jobs.',
      fullDescription: 'Nexus AI is a visual node-based automation studio that empowers developers to compose complex multi-step AI pipelines combining LLM prompts, HTTP webhooks, conditional branches, and database actions.',
      architecture: [
        'FastAPI async background worker thread pools for parallel node execution',
        'Visual graph DAG execution engine built with React Flow and custom node hooks',
        'OpenAI GPT-4 Turbo streaming token parser with live SSE frontend streaming'
      ],
      tech: ['React', 'Zustand', 'Python', 'FastAPI', 'OpenAI API', 'TailwindCSS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    },
    {
      id: 4,
      name: 'OmniCommerce Scalable E-Store',
      categoryType: 'Full-Stack',
      category: 'E-COMMERCE // FULL-STACK',
      metric: '100k+ Active Users',
      desc: 'High-throughput e-commerce platform featuring instant Algolia search indexing, Stripe subscription checkout flows, and real-time inventory webhooks.',
      fullDescription: 'OmniCommerce is a full-stack e-commerce web application engineered for maximum conversion, dynamic inventory tracking, instant search indexing, and resilient multi-currency Stripe payment processing.',
      architecture: [
        'Next.js App Router with Server Components & Edge Cache static generation',
        'Stripe Webhook event queue with idempotent database transaction handling',
        'Prisma ORM with PostgreSQL connection pooling and sub-20ms query caching'
      ],
      tech: ['Next.js', 'TypeScript', 'Stripe API', 'GraphQL', 'Prisma', 'PostgreSQL'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    }
  ];

  const filteredProjects = activeTab === 'All' 
    ? projects 
    : projects.filter(p => p.categoryType === activeTab);

  return (
    <section className="page-section" id="projects">
      <div className="section-title-head">
        <span className="section-tag-label">// 01. FEATURED PROJECTS</span>
        <h2 className="section-main-title">Engineering Showcase</h2>
      </div>

      {/* Filter Tabs */}
      <div className="project-tabs-row">
        {['All', 'Full-Stack', 'Backend & APIs', 'AI & Automation'].map((tab) => (
          <button 
            key={tab} 
            className={`tab-pill-button ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projects-layout-grid">
        {filteredProjects.map((proj) => (
          <div key={proj.id} className="project-card-container" onClick={() => onSelectProject(proj)}>
            <div className="card-header-banner">
              <span className="banner-metric-pill">{proj.metric}</span>
              <div className="banner-title-text">{proj.name}</div>
              <div className="banner-category-sub">{proj.category}</div>
            </div>

            <div className="card-body-content">
              <div>
                <h3 className="card-project-name">{proj.name}</h3>
                <p className="card-project-desc">{proj.desc}</p>
                <div className="card-tech-tags-list">
                  {proj.tech.map((t, idx) => (
                    <span key={idx} className="tech-tag-badge">{t}</span>
                  ))}
                </div>
              </div>

              <div className="card-links-row" onClick={(e) => e.stopPropagation()}>
                <button className="card-action-link" onClick={() => onSelectProject(proj)}>
                  <span>Architecture</span>
                  <Code2 size={15} />
                </button>
                <a href={proj.liveUrl} target="_blank" rel="noreferrer" className="card-action-link">
                  <span>Live Preview</span>
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
