import React from 'react';
import { Cpu, Server, ShieldAlert } from 'lucide-react';
import ExperienceLayout from '../ExperienceLayout.jsx';

export default function TechnicheDevOpsExp() {
  const metrics = [
    { value: 'AWS EC2', label: 'Hosting Infrastructure', desc: 'High-availability cloud staging' },
    { value: 'Nginx', label: 'Reverse Proxy', desc: 'Load balancing and SSL config' },
    { value: 'CI/CD', label: 'Automation Pipelines', desc: 'Zero downtime build workflows' }
  ];

  const overview = [
    'Overseeing complete server infrastructure, deployment operations, proxy layer management, and package distribution networks for Techniche, the premier national technical festival of IIT Guwahati.',
    'Responsible for hosting scalable web architectures on AWS EC2, configuring secure SSL/TLS protocols via Nginx proxy layers, and distributing native Android builds smoothly.'
  ];

  const capabilities = [
    'Managed AWS EC2 infrastructure, Nginx reverse proxy, DNS and multiple production applications.',
    'Built Docker-based CI/CD pipelines that automatically deploy merged code to production within seconds.',
    'Developed and maintained event admin systems, CA portal and QR-based volunteer verification.',
    'Supported the Techniche Android application with features including registration, voting, navigation and GHM leaderboard.',
    'Managed a platform reaching 81K+ visitors, 2.3M requests and 95%+ cached traffic.'
  ];

  const cards = [
    {
      icon: <Server className="w-6 h-6" />,
      title: 'Cloud Operations Infrastructure',
      desc: 'Scalable computing environments running EC2 instance stacks, customized storage security rules, and container setups.'
    },
    {
      icon: <ShieldAlert className="w-6 h-6" />,
      title: 'Nginx & SSL Configuration',
      desc: 'Reverse proxy routers directing system endpoints securely, handling compression parameters and SSL verification keys.'
    }
  ];

  const techStack = [
    'AWS (EC2, S3)',
    'Nginx Proxy Layers',
    'Docker Containers',
    'CI/CD Pipelines',
    'Bash Scripting',
    'Android Deployment'
  ];

  return (
    <ExperienceLayout
      title="Techniche, IIT Guwahati"
      subtitle="DevOps Head"
      logoIcon={<Cpu className="w-8 h-8" />}
      githubUrl="https://github.com/Ash469"
      metrics={metrics}
      overviewParagraphs={overview}
      capabilities={capabilities}
      cards={cards}
      techStack={techStack}
    />
  );
}
