/**
 * Single source of truth for all project data.
 * Used by ProjectCard, Work page, and individual case study pages.
 * NEVER fabricate metrics — only include verified numbers.
 */

export const projects = [
  // ─────────────────────────────────────────────────────────
  // FEATURED PROJECTS
  // ─────────────────────────────────────────────────────────
  {
    id: 'techniche',
    slug: 'techniche',
    name: 'Techniche',
    tagline: 'Production Event Technology Platform',
    category: 'Full-Stack · DevOps · Android',
    status: 'production',
    featured: true,
    tech: ['AWS EC2', 'Nginx', 'Docker', 'CI/CD', 'React', 'Node.js', 'Flutter', 'Android'],
    metrics: [
      { value: '81K+', label: 'Unique Visitors' },
      { value: '2.3M', label: 'Total Requests' },
      { value: '95%+', label: 'Cached Traffic' },
      { value: '1.5K+', label: 'Android Downloads' },
    ],
    shortDesc:
      'End-to-end event technology ecosystem for IIT Guwahati\'s annual technical festival — multiple production websites, backend services, admin portals, and an Android app serving 81K+ unique visitors.',
    overview:
      'Techniche is IIT Guwahati\'s annual technical festival. I managed the entire technology stack: AWS infrastructure, multiple production web applications, backend services, administration portals, volunteer systems, a CA portal, and the official Android application.',
    role: [
      'AWS EC2 provisioning, networking, and security group configuration',
      'Nginx reverse proxy setup with SSL termination for multiple domains',
      'Docker containerisation of backend applications',
      'CI/CD pipeline from GitHub merge to production (SSH → EC2 → deploy)',
      'Multiple Node.js backend APIs for different event systems',
      'React frontend for main website, admin panels, and event-specific portals',
      'CA (Campus Ambassador) portal with application + tracking',
      'Comedy Night and GHM registration + admin management systems',
      'Role-based access control (RBAC) across admin portals',
      'QR-based volunteer check-in/verification system',
      'Techniche Android application (fan voting, navigation, event registration, GHM leaderboard)',
    ],
    problem:
      'A large-scale technical festival requires coordinating dozens of events, thousands of registrations, hundreds of volunteers, and real-time logistics — all of which need reliable production infrastructure during peak load.',
    architecture: `Users / Mobile App
      ↓
  Cloudflare DNS
      ↓
   Nginx (Reverse Proxy + SSL)
      ↓
  ┌───────────────────────────────────┐
  │         EC2 Instance              │
  │  ┌──────────┐  ┌──────────────┐  │
  │  │ Website  │  │    Backend   │  │
  │  └──────────┘  └──────────────┘  │
  │  ┌──────────┐  ┌──────────────┐  │
  │  │CA Portal │  │ Event Admin  │  │
  │  └──────────┘  └──────────────┘  │
  │  ┌──────────┐  ┌──────────────┐  │
  │  │Volunteer │  │   Android    │  │
  │  │  QR      │  │  App APIs    │  │
  │  └──────────┘  └──────────────┘  │
  └───────────────────────────────┘
          ↓
       Database`,
    cicd: `GitHub PR
    ↓
Merge to main branch
    ↓
GitHub Actions CI/CD
    ↓
SSH into EC2
    ↓
Pull latest changes
    ↓
Restart containers / services
    ↓
Production live`,
    engineeringDecisions: [
      {
        decision: 'Nginx as the single reverse proxy',
        reason: 'Multiple applications needed to serve from the same server under different subdomains. Nginx handled SSL termination, caching headers, and routing with near-zero overhead.',
      },
      {
        decision: 'CI/CD over manual SSH deployments',
        reason: 'Manual SSH was error-prone and slow under festival pressure. Automated pipeline reduced deployment time from ~10 minutes to under 30 seconds with consistent results.',
      },
      {
        decision: '95%+ cache ratio via HTTP caching headers',
        reason: 'Static assets served with long-lived cache headers; dynamic API responses cached at Nginx layer where appropriate. This absorbed the bulk of 2.3M requests without hitting application servers.',
      },
    ],
    challenges: [
      'Coordinating deployments across multiple applications simultaneously with no downtime window',
      'Configuring Nginx to correctly handle multiple subdomains and SSL certificates on a single EC2 instance',
      'Building the Android app features (GHM leaderboard, fan voting) on a tight timeline',
    ],
    links: { github: '#', live: '#' },
  },

  {
    id: 'pims',
    slug: 'pims',
    name: 'PIMS / Ease Exit',
    tagline: 'Smart Leave Management & Student Verification System',
    category: 'Mobile · Backend · Firebase',
    status: 'production',
    featured: true,
    tech: ['Flutter', 'Node.js', 'MongoDB', 'Firebase Auth', 'FCM', 'QR Code', 'Email'],
    metrics: [
      { value: '2K+', label: 'Downloads' },
    ],
    shortDesc:
      'Multi-stage digital leave management system replacing manual paper processes — Student → Parent → Warden approval chain with QR-based physical exit/entry verification.',
    overview:
      'PIMS (Pardon-In Management System), also deployed as Ease Exit, digitises the hostel leave process at IIT Guwahati. Students apply digitally; parents and wardens approve through the app; a QR code pass is generated for the security guard to scan at the gate.',
    role: [
      'Full system architecture and implementation (frontend + backend)',
      'Flutter mobile application for students, parents, wardens, and security',
      'Node.js REST API with MongoDB for application data and state management',
      'Firebase Authentication with Google Sign-In',
      'FCM push notifications for each approval stage',
      'Email notifications as a secondary notification channel',
      'QR code generation upon final approval; QR scanning at guard station',
      'HOD administrative panel for student/parent enrollment and leave controls',
      'Analytics and leave tracking dashboard',
    ],
    problem:
      'The existing leave process was manual — paper forms, physical signatures, no tracking, and no parent verification. Students could circumvent the process; wardens had no digital record; parents were uninformed.',
    workflow: [
      { title: 'Student applies', desc: 'Student submits a leave request in the app with destination, dates, and reason.' },
      { title: 'Parent approval', desc: 'Parent receives an FCM notification and approves (or rejects) the request from their device.' },
      { title: 'Warden approval', desc: 'Warden reviews parent-approved requests and grants or declines hostel exit permission.' },
      { title: 'QR pass generated', desc: 'After warden approval, a unique QR code is generated and stored in the app.' },
      { title: 'Security gate scan', desc: 'Security guard scans the QR code at the gate; the system logs exit time and validates the pass.' },
      { title: 'Return verification', desc: 'On return, the guard scans again to record entry and close the leave record.' },
    ],
    engineeringDecisions: [
      {
        decision: 'Firebase Auth for identity, custom JWT for API',
        reason: 'Firebase provided seamless Google Sign-In across all user roles. The Node.js API verified Firebase tokens server-side to issue short-lived JWTs for subsequent requests.',
      },
      {
        decision: 'Single Flutter app with role-based navigation',
        reason: 'One codebase serving four roles (student, parent, warden, guard) kept the deployment simple and ensured consistent UX. Role is determined post-login from the database.',
      },
      {
        decision: 'QR codes tied to specific leave IDs',
        reason: 'Each QR encodes a signed leave ID. The guard\'s scan hits the API which validates the signature and checks whether the leave is currently in an approved state — preventing reuse.',
      },
    ],
    challenges: [
      'Designing the multi-role data model so that each role sees only their relevant records',
      'Ensuring QR codes cannot be screenshot-shared and reused after a leave is closed',
      'Handling FCM delivery failures gracefully with email fallback',
    ],
    links: { github: '#', live: '#' },
  },

  {
    id: 'lotus-traders',
    slug: 'lotus-traders',
    name: 'Lotus Traders Machinery',
    tagline: 'Construction Machinery Catalogue & Enquiry Platform',
    category: 'Full-Stack · Client Production',
    status: 'production',
    featured: true,
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'NextAuth.js'],
    metrics: [
      { value: '150+', label: 'Products Listed' },
      { value: '8', label: 'Categories' },
    ],
    shortDesc:
      'Production client system — full machinery catalogue built from scratch with 150+ products across 8 categories, enquiry management, related product recommendations, and admin panel.',
    overview:
      'Lotus Traders is a real client deployment for a construction machinery business. Prices are negotiated and not listed; the website serves as a professional product catalogue where visitors browse, compare, and send enquiries. I built the entire system from zero including populating the product database.',
    role: [
      'Requirements gathering and system design with the client',
      'Next.js + TypeScript frontend and API routes',
      'MongoDB product database designed and populated entirely from scratch (150+ products)',
      'Product categories, subcategories, and product-to-product relationship/recommendation logic',
      'Full product detail pages with feature lists, specifications, and image galleries',
      'Customer enquiry submission and management',
      'Admin panel with NextAuth.js authentication for product/enquiry management',
      'SEO-optimised pages with Next.js static generation',
      'Deployed to production for the client',
    ],
    problem:
      'The business had no digital presence. Customers were enquiring by phone only; the catalogue existed on paper. A web presence would open the business to larger commercial clients who research online before contacting.',
    engineeringDecisions: [
      {
        decision: 'Enquiry-driven catalogue, not e-commerce',
        reason: 'Machinery prices are negotiated based on quantity, lease terms, and customer type. A shopping cart would be misleading. The system routes all intent through a professional enquiry form.',
      },
      {
        decision: 'Product relationship graph in MongoDB',
        reason: 'Each product stores references to "related" products (by use-case and category). This enables "you might also need" recommendations without a separate recommendation engine.',
      },
      {
        decision: 'Static generation for product pages',
        reason: 'Product content changes infrequently. Next.js ISR (Incremental Static Regeneration) kept pages fast for SEO and load performance while allowing admin updates to propagate.',
      },
    ],
    challenges: [
      'Building and structuring the entire product database from unorganised paper catalogues and client communication',
      'Designing a category hierarchy that matches how customers actually search for machinery',
      'Creating an admin panel intuitive enough for non-technical client staff to use',
    ],
    links: { github: '#', live: '#' },
  },

  // ─────────────────────────────────────────────────────────
  // ADDITIONAL PROJECTS
  // ─────────────────────────────────────────────────────────
  {
    id: 'nss',
    slug: 'nss',
    name: 'NSS IIT Guwahati',
    tagline: 'Official NSS Website & Self-Service Work-Hours Lookup',
    category: 'Full-Stack · Google Sheets API',
    status: 'production',
    featured: false,
    tech: ['React', 'Node.js', 'Google Sheets API'],
    metrics: [],
    shortDesc:
      'NSS portal with a Google Sheets–backed self-service tool that lets students check their work hours by roll number — eliminating dependency on admin staff.',
    overview:
      'The official NSS IIT Guwahati website with a key self-service feature: students can enter their roll number to instantly retrieve their NSS work-hour records, which are maintained by admins in Google Sheets.',
    role: [
      'Full website design and development',
      'Google Sheets API integration for live work-hour data',
      'Roll-number search interface for students',
      'Admin maintains data in Google Sheets; no custom database required',
    ],
    problem:
      'Students had no way to check their accumulated NSS work hours without contacting administrators individually. Admins were fielding repetitive queries that could be automated.',
    engineeringDecisions: [
      {
        decision: 'Google Sheets as the data source',
        reason: 'Admins were already maintaining records in Sheets. Using the Sheets API as the backend meant zero friction for the admin workflow — no new systems to learn.',
      },
    ],
    challenges: [
      'Structuring Sheets API queries for fast lookup by roll number with rate limiting',
      'Handling edge cases where student roll numbers have formatting variations',
    ],
    links: { github: '#', live: '#' },
  },

  {
    id: 'school-management',
    slug: 'school-management',
    name: 'School Management App',
    tagline: 'Flutter Multi-Role School Management System',
    category: 'Mobile · Flutter',
    status: 'production',
    featured: false,
    tech: ['Flutter', 'Firebase', 'Firestore', 'FCM'],
    metrics: [],
    shortDesc:
      'Multi-role Flutter app (Admin, Teacher, Student, Parent) with attendance, grades, assignments, timetables, events, announcements, and fee tracking.',
    overview:
      'A comprehensive school management mobile application supporting four distinct user roles. Each role has a tailored dashboard and permissions — administrators manage the school structure; teachers record attendance and grades; students view their academic progress; parents track their children.',
    role: [
      'Complete Flutter application architecture and implementation',
      'Firebase/Firestore data model for multi-role access control',
      'Attendance tracking with teacher-side submission and student/parent viewing',
      'Grade recording and academic progress tracking',
      'Assignment creation, submission, and grading workflow',
      'Timetable management and display',
      'School event announcements with FCM notifications',
      'Fee tracking and payment status module',
    ],
    features: [
      'Role-based navigation (Admin / Teacher / Student / Parent)',
      'Attendance recording and history',
      'Grade ledger and performance tracking',
      'Assignment lifecycle management',
      'School timetable viewer',
      'Event and announcement system',
      'Fee tracking with due-date alerts',
    ],
    links: { github: '#' },
  },

  {
    id: 'application-management',
    slug: 'application-management',
    name: 'Application Management System',
    tagline: 'Flutter / Firebase Application Workflow System',
    category: 'Mobile · Flutter · Firebase',
    status: 'production',
    featured: false,
    tech: ['Flutter', 'Firebase', 'Firestore', 'FCM', 'Firebase Auth'],
    metrics: [],
    shortDesc:
      'Application tracking system with user registration, admin verification, status management, and user-specific application views.',
    overview:
      'A Flutter application for managing a submission-and-approval workflow. Users register, submit applications, and track their status in real time. Admins verify users, review applications, update statuses, and send notifications.',
    role: [
      'Flutter application for applicant and admin roles',
      'Firebase Auth for user registration and sign-in',
      'Firestore data model for applications with status state machine',
      'Admin verification flow before applications are accepted',
      'Real-time status updates via Firestore listeners',
      'FCM notifications on status changes',
    ],
    features: [
      'User registration with admin verification gate',
      'Application submission with document/detail capture',
      'Real-time application status tracking',
      'Admin dashboard for application review and status updates',
      'Push notifications on each status transition',
    ],
    links: { github: '#' },
  },

  {
    id: 'udgam',
    slug: 'udgam',
    name: 'Udgam 2025',
    tagline: 'Official Entrepreneurship Summit Website — IIT Guwahati',
    category: 'Frontend · Event Platform',
    status: 'production',
    featured: false,
    tech: ['React', 'Vite', 'Tailwind CSS', 'GSAP', 'Framer Motion'],
    metrics: [],
    shortDesc:
      'Animated React event website for IIT Guwahati\'s entrepreneurship summit with event listings, participant registration, schedules, and speaker showcase.',
    overview:
      'The official website for Udgam 2025, IIT Guwahati\'s annual entrepreneurship summit. Built with React, Vite, and Tailwind CSS, with GSAP and Framer Motion animations for a premium event experience.',
    role: [
      'Full website design and development',
      'Event listing and schedule pages',
      'Participant registration flow',
      'Speaker showcase section',
      'GSAP scroll animations and Framer Motion transitions',
      'Fully responsive across desktop, tablet, and mobile',
    ],
    links: { github: '#', live: '#' },
  },
];

/** Get a project by slug */
export function getProject(slug) {
  return projects.find((p) => p.slug === slug) || null;
}

/** Get all featured projects */
export const featuredProjects = projects.filter((p) => p.featured);

/** Get all non-featured projects */
export const additionalProjects = projects.filter((p) => !p.featured);
