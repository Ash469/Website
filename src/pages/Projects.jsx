import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    id: 'techniche',
    slug: 'techniche',
    name: 'Techniche',
    tagline: 'Full-Stack · DevOps · Android',
    category: 'Web & Platforms',
    status: 'live',
    shortDesc: 'Production event technology ecosystem for IIT Guwahati\'s annual technical festival.',
    metrics: [{ value: '81K+', label: 'Visitors' }, { value: '2.3M', label: 'Requests' }],
    tech: ['AWS EC2', 'Nginx', 'Docker', 'React', 'Node.js', 'Flutter'],
    featured: true
  },
  {
    id: 'pims',
    slug: 'pims',
    name: 'PIMS / Ease Exit',
    tagline: 'Mobile · Backend · Firebase',
    category: 'Mobile',
    status: 'live',
    shortDesc: 'Smart leave management and student verification system with multi-stage approval workflow.',
    metrics: [{ value: '2K+', label: 'Downloads' }],
    tech: ['Flutter', 'Node.js', 'MongoDB', 'Firebase'],
    featured: true
  },
  {
    id: 'lotus-traders',
    slug: 'lotus-traders',
    name: 'Lotus Traders Machinery',
    tagline: 'Full-Stack · Next.js',
    category: 'Web & Platforms',
    status: 'live',
    shortDesc: 'Construction machinery catalogue and B2B enquiry routing platform for a real client.',
    metrics: [{ value: '150+', label: 'Products' }],
    tech: ['Next.js', 'React', 'TypeScript', 'MongoDB'],
    featured: true
  },
  {
    id: 'nss',
    slug: 'nss',
    name: 'NSS IIT Guwahati',
    tagline: 'Full-Stack · Google Sheets API',
    category: 'Web & Platforms',
    status: 'live',
    shortDesc: 'Official NSS website with a self-service work-hours lookup system for students.',
    metrics: [{ value: 'Real-time', label: 'Lookup' }],
    tech: ['React', 'Node.js', 'Google Sheets API'],
    featured: true
  },
  {
    id: 'school-management',
    slug: 'school-management',
    name: 'School Management App',
    tagline: 'Mobile · Flutter',
    category: 'Mobile',
    status: 'completed',
    shortDesc: 'Flutter Multi-Role School Management System — 4 user roles, 7 modules.',
    metrics: [{ value: '4 Roles', label: 'Modules' }],
    tech: ['Flutter', 'Dart', 'Firebase Auth', 'Firestore'],
    featured: false
  },
  {
    id: 'application-management',
    slug: 'application-management',
    name: 'Application Management System',
    tagline: 'Mobile · Flutter · Firebase',
    category: 'Mobile',
    status: 'completed',
    shortDesc: 'Flutter / Firebase Application Workflow System — registration through approval.',
    metrics: [{ value: 'Real-time', label: 'Tracking' }],
    tech: ['Flutter', 'Dart', 'Firebase Auth', 'Firestore', 'FCM'],
    featured: false
  },
  {
    id: 'udgam',
    slug: 'udgam',
    name: 'Udgam 2025',
    tagline: 'Frontend · Event Platform',
    category: 'Web & Platforms',
    status: 'live',
    shortDesc: 'Official website for IIT Guwahati\'s Entrepreneurship Summit with GSAP animations.',
    metrics: [{ value: 'Summit', label: 'Platform' }],
    tech: ['React', 'Vite', 'Tailwind CSS', 'GSAP', 'Framer Motion'],
    featured: false
  }
];

export default function Projects() {
  const webProjects = projects.filter(p => ['techniche', 'lotus-traders', 'nss', 'udgam'].includes(p.id));
  const mobileProjects = projects.filter(p => ['pims', 'school-management', 'application-management'].includes(p.id));
  
  // Dummy Data for ML (since it's currently building/missing in projects.js)
  const mlProjects = [
    {
      id: 'smart-return',
      slug: 'smart-return',
      name: 'Smart Return Predictor',
      tagline: 'Data & ML Pipeline',
      category: 'Data & ML',
      status: 'completed',
      shortDesc: 'Predictive modeling for intelligent return predictions.',
      metrics: [],
      featured: false
    },
    {
      id: 'groundwater',
      slug: 'groundwater',
      name: 'Groundwater Prediction',
      tagline: 'ML / Data Systems',
      category: 'Data & ML',
      status: 'building',
      shortDesc: 'Currently building: A machine learning approach to predict groundwater levels.',
      metrics: [],
      featured: false
    }
  ];

  const renderGrid = (items) => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        gap: '1.75rem',
      }}
    >
      {items.map(project => (
        <ProjectCard key={project.id} project={project} variant="featured" />
      ))}
    </div>
  );

  return (
    <div style={{ paddingTop: '68px' }}>
      <div style={{ borderBottom: '1px solid var(--border)', padding: '4rem 0 3.5rem' }}>
        <div className="container-site">
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 4vw, 3.6rem)',
              fontWeight: 900,
              color: 'var(--text-primary)',
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              marginBottom: '1rem',
            }}
          >
            All Projects
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.05rem',
              color: 'var(--text-secondary)',
              maxWidth: '520px',
              lineHeight: 1.65,
            }}
          >
            Categorised by platform and domain.
          </p>
        </div>
      </div>

      <section className="page-section">
        <div className="container-site">
          <div style={{ marginBottom: '2.5rem' }}>
            <h2 className="section-title">Web & Platforms</h2>
          </div>
          {renderGrid(webProjects)}
        </div>
      </section>

      <section className="page-section" style={{ borderTop: '1px solid var(--border)', background: 'var(--bg-surface)' }}>
        <div className="container-site">
          <div style={{ marginBottom: '2.5rem' }}>
            <h2 className="section-title">Mobile</h2>
          </div>
          {renderGrid(mobileProjects)}
        </div>
      </section>

      <section className="page-section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container-site">
          <div style={{ marginBottom: '2.5rem' }}>
            <h2 className="section-title">Data & ML</h2>
          </div>
          {renderGrid(mlProjects)}
        </div>
      </section>
    </div>
  );
}
