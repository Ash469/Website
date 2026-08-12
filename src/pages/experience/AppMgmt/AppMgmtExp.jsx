import React from 'react';
import { Smartphone, Database } from 'lucide-react';
import logoImg from './logo.jpg';
import ExperienceLayout from '../ExperienceLayout.jsx';

const assamAppPdf = '/src/pages/experience/AppMgmt/Assam_app_intern.pdf';

export default function AppMgmtExp() {
  const metrics = [
    { value: 'Real-time', label: 'Firestore Sync', desc: 'Firestore live listener synchronization' },
    { value: 'Multi-Role', label: 'Access Control', desc: 'Verification workflow gatekeeper' },
    { value: '100%', label: 'Spam Elimination', desc: 'Admin moderation and validation' }
  ];

  const overview = [
    'A comprehensive mobile and web solution for managing application workflows, leveraging Flutter for cross‑platform UI and Firebase for real‑time data, authentication, and notifications.',
    'Architected the mobile application registration and admin approval flow using Flutter and Firebase. Implemented real‑time status tracking with Firestore listeners and FCM notifications.'
  ];

  const capabilities = [
    'Built a multi-role Flutter + Firebase platform for application submission and administrative review.',
    'Implemented admin verification to control user onboarding and prevent unauthorized access.',
    'Developed real-time application status updates using Firestore listeners.',
    'Designed role-specific dashboards with user-level data access and RBAC.',
    'Integrated FCM notifications for application and status updates.'
  ];

  const cards = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Flutter Application Client',
      desc: 'Clean and modern interfaces built with Dart and Flutter, implementing live reactive states that immediately display application validation updates.'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Firebase Backend Service',
      desc: 'Utilizes Firestore rule structures and Authentication guards to block unauthorized reads/writes, ensuring overall system security.'
    }
  ];

  const techStack = [
    'Flutter',
    'Dart',
    'Firebase Auth',
    'Cloud Firestore',
    'Firebase Cloud Messaging (FCM)',
    'Role-Based Rules'
  ];

  const galleryImages = [
    logoImg,
    logoImg,
    logoImg
  ];

  return (
    <ExperienceLayout
      title="Application Management System"
      subtitle="Flutter & Firebase Application Workflow & Admin Verification System"
      logoSrc={logoImg}
      pdfUrl={assamAppPdf}
      pdfLabel="VIEW OFFER LETTER"
      metrics={metrics}
      overviewParagraphs={overview}
      capabilities={capabilities}
      cards={cards}
      techStack={techStack}
      galleryImages={galleryImages}
    />
  );
}
