import { Service, Course } from './types';

export const services: Service[] = [
  {
    id: 's1',
    name: 'Hardware & OS Troubleshooting',
    description: 'Expert diagnostic scan, virus removal, deep-cleaning, OS repair, and slow-system optimization for laptops and desktops.',
    price: 2500,
    unit: 'per incident',
    category: 'General Support',
    iconName: 'Wrench',
    longDescription: 'Our diagnostic and repair session targets system bottlenecks, hardware degradation, OS file corruptions, malware/adware removal, performance testing, thermal paste replacement, and proactive maintenance to restore your machine back to its peak efficiency.',
    imageUrl: 'https://images.unsplash.com/photo-1597872200319-382d440c3478?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 's2',
    name: 'Premium Web Hosting',
    description: 'Blazing-fast cloud hosting servers in Kenya featuring lightning SSD storage, free SSL, cPanel, and weekly backup integrity checks.',
    price: 4999,
    unit: 'per year',
    category: 'Cloud Services',
    iconName: 'Globe',
    longDescription: 'Ensure high-speed accessibility for your users. Our premium web hosting package includes robust NVMe SSD arrays, 99.9% uptime guarantees, custom enterprise email interfaces, preconfigured cPanel, automated weekly backups, and live firewall protection.',
    imageUrl: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 's3',
    name: 'Bespoke Web Design',
    description: 'Fully responsive, conversion-primed business or portfolio websites styled beautifully with fast loading times and robust SEO out-of-the-box.',
    price: 22000,
    unit: 'starting from',
    category: 'Development',
    iconName: 'Layout',
    longDescription: 'Stand out online with a unique digital presence. We code highly customized, mobile-first responsive sites utilizing modern UI principles, semantic layout components for S-tier SEO indexing, robust dark-mode schemes, fast CDN compression, and easy content management.',
    imageUrl: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 's4',
    name: 'Agile Project Management',
    description: 'Direct consultation, pipeline engineering, technical roadmap planning, and software development oversight from seasoned experts.',
    price: 12000,
    unit: 'per project milestone',
    category: 'Consultancy',
    iconName: 'Briefcase',
    longDescription: 'Accelerate your commercial endeavors. We manage and lead your product development workflows using Jira/Trello boards, agile sprint divisions, strict quality assurance protocols, timeline allocations, resource metrics, and risk-remediation maps.',
    imageUrl: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 's5',
    name: 'Software Installation & Audit',
    description: 'Trouble-free installation of heavyweight tools, development environments, and operating systems with configuration audits.',
    price: 3500,
    unit: 'per workspace setup',
    category: 'Enterprise Support',
    iconName: 'Cpu',
    longDescription: 'Avoid license mismatch configurations. We configure advanced software installations (development editors IDEs, CAD frameworks, engineering tools, commercial suites) along with direct firewall validation, update rules, and native background performance settings.',
    imageUrl: 'https://images.unsplash.com/photo-1618401471353-b98aedd07871?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 's6',
    name: 'Custom PC Specification & Build',
    description: 'Procuration, meticulous assembly, custom wiring, clean cable management, thermal throttling tests, and stress tests for gaming or edit PCs.',
    price: 7500,
    unit: 'build assembly fee',
    category: 'Custom Hardware',
    iconName: 'Monitor',
    longDescription: 'A custom PC designed precisely around your workflows (e.g., AAA gaming, 4K rendering, Deep Learning simulation, budget schoolwork). We research optimum pricing, source certified components, assemble, optimize internal air/liquid flow, test under extreme stress, and install OS drivers.',
    imageUrl: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 's7',
    name: 'Custom NAS Server Creation',
    description: 'Dedicated Network-Attached Storage system creation using TrueNAS or Synology for bulletproof automated home or office backups.',
    price: 10000,
    unit: 'setup configuration fee',
    category: 'Network Storage',
    iconName: 'HardDrive',
    longDescription: 'Take control of your data privacy. We convert standard computing parts or specialized server motherboards into autonomous Network storage machines. Configured with RAID parity arrays, internal DLNA media streamers, permission restrictions, and cloud-bridge synchronizations.',
    imageUrl: 'https://images.unsplash.com/photo-1601597111158-2fceff270190?auto=format&fit=crop&w=600&q=80'
  }
];

export const courses: Course[] = [
  {
    id: 'c1',
    name: 'Microsoft Suite Mastery',
    description: 'Comprehensive workflow-oriented course targeting core office competencies from data calculations to pitch deck designs.',
    price: 6000,
    unit: 'full course access',
    iconName: 'Grid',
    topics: [
      'Microsoft Word: Advanced layouts, dynamic table of contents, and mail merge procedures.',
      'Microsoft Excel: High-level formulas (XLOOKUP, VLOOKUP, INDEX-MATCH), pivot tables, and conditional charts.',
      'Microsoft PowerPoint: Master slides, vector integrations, kinetic typography, and transitions.',
      'Microsoft Access: Relational schema creation, structured query builder, and custom data forms.',
      'Microsoft Outlook: Email filtering formulas, automated scheduling rules, calendar syncing, and tasks.',
      'Microsoft Teams: Multi-party secure channel operations, video configuration, and third-party utility integrations.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'c2',
    name: 'Full-Stack Computer Programming',
    description: 'Step-by-step programming track building software products from front‑end layout engines to relational database servers.',
    price: 12000,
    unit: 'full course access',
    iconName: 'Code',
    topics: [
      'Web Design Core: Semantics, modern styling via CSS Flex/Grid, and responsive layout scaling.',
      'Modern JavaScript: ES6 classes, async/await interfaces, REST API integration, and DOM manipulations.',
      'MySQL & Relational Databases: Database normalization, structured queries (DQL, DML), views, and indexes.',
      'Object-Oriented C#: Program structures, visual forms, controls, exception systems, and Windows services.',
      'Version Control with Git: Repository branching, safe merges, commit history auditing, and GitHub teamwork.',
      'Advanced Python Introduction: Dynamic structures, file utilities, script task automation, and charts.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'c3',
    name: 'Graphics & Creative Design',
    description: 'Professional visual creation class exploring marketing aesthetics, vector drawing paradigms, and visual compositions.',
    price: 6000,
    unit: 'full course access',
    iconName: 'Palette',
    topics: [
      'Canva Branding: Creative templates, color space rules, social media sizing, and speed-oriented marketing tools.',
      'GIMP Photo Composition: Layer masking, channels, high-pass filters, repair brushes, and dark room tweaks.',
      'Affinity Designer: Precision vectors, smooth bezier curves, artboard workflows, and geometric shape tools.',
      'Adobe Photoshop Concepts: Raster workspace settings, generative fills, layout grids, and smart objects.',
      'Adobe Illustrator Fundamentals: Anchor manipulations, precise typography alignments, and corporate logo mockups.',
      'Inkscape Open-Source: Custom asset designs, path operations, SVG optimizations, and vector image traces.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1561070791-26c113006238?auto=format&fit=crop&w=600&q=80'
  }
];
