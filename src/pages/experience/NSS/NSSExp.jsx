import React from 'react';
import { Users, Globe, Database } from 'lucide-react';
import ExperienceLayout from '../ExperienceLayout.jsx';

export default function NSSExp() {
  const metrics = [
    { value: 'Sheets API', label: 'Integration', desc: 'Dynamic data lookup synchronization' },
    { value: 'Self-Service', label: 'Work Hours', desc: 'Instant search lookup system' },
    { value: 'Responsive', label: 'Mobile First', desc: 'Fully optimized lookup layout' }
  ];

  const overview = [
    'Developed the official website for the National Service Scheme (NSS) Cell at IIT Guwahati. The primary objective was to streamline self-service work-hour queries for student volunteers.',
    'By integrating the front‑end search directly with the Google Sheets API database layer, volunteers can query and verify their completed service hours on demand, eliminating manual lookup bottlenecks.'
  ];

  const capabilities = [
    'Designed and developed the official NSS IIT Guwahati website from the ground up.',
    'Integrated Google Sheets API + Google Apps Script for dynamic student work-hour retrieval.',
    'Built a self-service system allowing students to check work hours using their roll number.',
    'Replaced a previously manual information-request process with instant online access.',
    'Developed and deployed the platform using React, Vite and Tailwind CSS.'
  ];

  const cards = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Intuitive Frontend Experience',
      desc: 'User interfaces engineered for accessibility, delivering readable tracking indexes and schedules for students on mobile devices.'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Google Sheets Database Sync',
      desc: 'Real‑time lookup operations fetching volunteer metrics directly from cell coordinator sheet files.'
    }
  ];

  const techStack = [
    'HTML5',
    'CSS3',
    'JavaScript (ES6+)',
    'Google Sheets API',
    'Responsive Design',
    'Git & Version Control'
  ];

  return (
    <ExperienceLayout
      title="NSS Cell, IIT Guwahati"
      subtitle="Web Developer"
      logoIcon={<Users className="w-8 h-8" />}
      githubUrl="https://github.com/Ash469/nss-iitg"
      metrics={metrics}
      overviewParagraphs={overview}
      capabilities={capabilities}
      cards={cards}
      techStack={techStack}
    />
  );
}
