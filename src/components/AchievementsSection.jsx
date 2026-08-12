import React from 'react';
import { Trophy, Award, Star } from 'lucide-react';

export default function AchievementsSection() {
  const achievements = [
    {
      icon: <Trophy size={22} />,
      title: 'Hackathon Winner (1st Place)',
      desc: 'Awarded 1st Place out of 120+ competing teams at National Tech Hackathon for building an automated web accessibility telemetry tool.'
    },
    {
      icon: <Award size={22} />,
      title: 'AWS Certified Developer',
      desc: 'Earned AWS Certified Developer Associate credential validating cloud architecture, serverless deployment, and AWS S3/Lambda security.'
    },
    {
      icon: <Star size={22} />,
      title: 'Open Source Contributor',
      desc: 'Active contributor with 50+ merged pull requests across React developer utilities, CLI tools, and ecosystem packages.'
    }
  ];

  return (
    <section className="page-section" id="achievements">
      <div className="section-title-head">
        <span className="section-tag-label">// 04. HONORS & CERTIFICATIONS</span>
        <h2 className="section-main-title">Key Achievements</h2>
      </div>

      <div className="achievements-layout-grid">
        {achievements.map((item, idx) => (
          <div key={idx} className="achievement-box-card">
            <div className="achieve-icon-box">{item.icon}</div>
            <h3 className="achieve-title-text">{item.title}</h3>
            <p className="achieve-desc-text">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
