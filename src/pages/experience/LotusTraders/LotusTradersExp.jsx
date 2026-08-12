import React from 'react';
import { Search, Lock, Globe, Database } from 'lucide-react';
import logoImg from './lotusTraders.png';
import ExperienceLayout from '../ExperienceLayout.jsx';

const contractPdf = '/src/pages/experience/LotusTraders/lotus_traders_agreement (1).pdf';

export default function LotusTradersExp() {
  const metrics = [
    { value: '150+', label: 'Products Managed', desc: 'Structured across equipment specs & media' },
    { value: '8', label: 'Product Categories', desc: 'Civil engineering & heavy machinery' },
    { value: '100%', label: 'End-to-End Production', desc: 'Deployed & actively used by business client' }
  ];

  const overview = [
    'Built and deployed the official web platform for Lotus Traders Machinery, a Guwahati-based construction machinery supplier.',
    'The platform was designed around a catalogue-first business model, allowing customers to discover construction machinery, explore detailed product information, find related products, and submit enquiries directly to the business.',
    'Unlike a conventional e-commerce store, machinery pricing is negotiated individually. The platform therefore focuses on product discovery and enquiry generation rather than online checkout.'
  ];

  const capabilities = [
    'Engineered and deployed a B2B machinery catalogue & enquiry platform for an active commercial client.',
    'Built and populated 150+ products across 8 categories, including specifications, features and product relationships.',
    'Designed a MongoDB product-reference graph to power related-product recommendations.',
    'Implemented Next.js ISR for fast catalogue pages and improved search-engine discoverability.',
    'Built the admin system for product, category and enquiry management.'
  ];

  const cards = [
    {
      icon: <Search className="w-6 h-6" />,
      title: 'Structured Product Catalogue',
      desc: 'Created and populated the product database from scratch, including names, descriptions, specifications, features, categories, related products, and supporting media.'
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'NextAuth Administrative CMS',
      desc: 'Built a dedicated administrative interface so business admins can independently create, edit, delete products, manage category mappings, review enquiries, and update content.'
    }
  ];

  const techStack = [
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Node.js / API',
    'MongoDB',
    'NextAuth.js',
    'Production Hosting'
  ];

  const galleryImages = [
    '/src/pages/experience/LotusTraders/lotusTraders.png',
    '/src/pages/experience/LotusTraders/lotusTraders.png',
    '/src/pages/experience/LotusTraders/lotusTraders.png'
  ];

  return (
    <ExperienceLayout
      title="Lotus Traders Machinery"
      subtitle="Web Developer · End-to-End Platform Engineering"
      logoSrc={logoImg}
      githubUrl="https://github.com/Ash469/LotusTraders"
      pdfUrl={contractPdf}
      pdfLabel="VIEW CONTRACT (PDF)"
      metrics={metrics}
      overviewParagraphs={overview}
      capabilities={capabilities}
      cards={cards}
      techStack={techStack}
      architectureImg="/src/pages/experience/LotusTraders/image.png"
      galleryImages={galleryImages}
    />
  );
}
