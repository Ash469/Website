import React from 'react';
import { Sparkles, Compass, Briefcase } from 'lucide-react';
import ExperienceLayout from '../ExperienceLayout.jsx';

export default function UdgamExp() {
  const metrics = [
    { value: 'Summit', label: 'Feature Operations', desc: 'Structured listings and interactive components' },
    { value: 'Interactive', label: 'User Flows', desc: 'High conversion navigation funnels' },
    { value: '100%', label: 'Optimized Layouts', desc: 'Seamless mobile responsive adjustments' }
  ];

  const overview = [
    'Managed platform features, event listings, and interactive web flows for Udgam, the flagship entrepreneurship summit of IIT Guwahati.',
    'Designed and streamlined registration navigation screens and marketing sections to ensure high conversion rates and smooth user journeys for thousands of prospective summit delegates.'
  ];

  const capabilities = [
    'Managed technical and platform requirements for Udgam, IIT Guwahati\'s entrepreneurship summit.',
    'Developed the event website using React, Vite and Tailwind CSS.',
    'Implemented event listings, registration flows, schedules and dynamic speaker showcases.',
    'Coordinated platform development and delivery across the event lifecycle.'
  ];

  const cards = [
    {
      icon: <Compass className="w-6 h-6" />,
      title: 'Summit Web Architecture',
      desc: 'Streamlined system directories housing event descriptions, key schedules, registration links, and details.'
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: 'Interface Moderation & Management',
      desc: 'Refining grid layouts, navigation controls, custom components, and visual elements across screens.'
    }
  ];

  const techStack = [
    'HTML5',
    'CSS3 / SCSS',
    'JavaScript (ES6+)',
    'UI/UX Architecture',
    'Event Analytics Integration',
    'Responsive Web Design'
  ];

  return (
    <ExperienceLayout
      title="Udgam, IIT Guwahati"
      subtitle="Manager"
      logoIcon={<Sparkles className="w-8 h-8" />}
      githubUrl="https://github.com/Ash469"
      metrics={metrics}
      overviewParagraphs={overview}
      capabilities={capabilities}
      cards={cards}
      techStack={techStack}
    />
  );
}
