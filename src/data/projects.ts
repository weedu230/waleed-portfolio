import {
  Gamepad2,
  Calculator,
  Bot,
  Palette,
  Globe,
  MessageSquare,
  Hospital,
  FileText,
  Navigation,
  type LucideIcon,
} from 'lucide-react';

export type ProjectCategory =
  | 'Featured'
  | 'Academic'
  | 'SaaS & Web'
  | 'AI & Automation'
  | 'Game Development'
  | 'Desktop'
  | 'Freelance'
  | 'Other';

export interface Project {
  slug: string;
  title: string;
  icon: LucideIcon;
  tech: string;
  techStack: string[];
  description: string;
  fullDescription: string;
  features: string[];
  color: 'brand-sky' | 'brand-orange';
  category: string;
  categories: ProjectCategory[];
  githubUrl: string;
  liveUrl?: string;
  isLiveProject?: boolean;
  isFeatured?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'stans',
    title: 'STANS',
    icon: Navigation,
    tech: 'Graph Algorithms',
    techStack: ['JavaScript', 'Graph Algorithms', 'Vercel'],
    description: 'Intelligent navigation system using graph algorithms for optimal route computation with real-time traffic conditions.',
    fullDescription: 'STANS (Student Academic Navigation System) is an intelligent academic support platform designed to assist students with structured academic navigation. Built using graph algorithms for optimal route computation, it features a clean, user-focused interface with scalable architecture, focusing on usability, performance, and real-world academic workflows.',
    features: [
      'Graph-based route computation',
      'Real-time traffic condition analysis',
      'Clean user-focused interface',
      'Scalable architecture',
      'Academic workflow optimization',
    ],
    color: 'brand-orange',
    category: 'Navigation System',
    categories: ['Featured', 'Academic', 'SaaS & Web'],
    githubUrl: 'https://github.com/weedu230/STANS',
    liveUrl: 'https://sstans.vercel.app/',
    isLiveProject: true,
    isFeatured: true,
  },
  {
    slug: 'reqbot',
    title: 'ReqBot',
    icon: Bot,
    tech: 'Next.js + AI',
    techStack: ['Next.js', 'AI', 'React', 'Voice API'],
    description: 'AI-powered business analyst for eliciting and documenting project requirements through conversational interface.',
    fullDescription: 'ReqBot is an AI-powered business analyst tool designed for requirement elicitation through a conversational interface. It features voice-enabled interaction, intelligent requirement categorization, and automated documentation generation. Built with Next.js and modern AI integration for professional-grade requirement engineering.',
    features: [
      'AI-powered conversational interface',
      'Voice-enabled interaction',
      'Intelligent requirement categorization',
      'Automated documentation generation',
      'Real-time requirement analysis',
    ],
    color: 'brand-sky',
    category: 'AI & Web Application',
    categories: ['Featured', 'AI & Automation', 'SaaS & Web'],
    githubUrl: 'https://github.com/weedu230/reqbot',
    liveUrl: 'https://reqbot-sigma.vercel.app/',
    isLiveProject: true,
    isFeatured: true,
  },
  {
    slug: 'neoaura-chatbot',
    title: 'NeoAura Chatbot',
    icon: MessageSquare,
    tech: 'Java',
    techStack: ['Java', 'AI', 'NLP'],
    description: 'AI-driven chatbot management system for enhanced user interaction and intelligent automation.',
    fullDescription: 'NeoAura Chatbot is an AI-driven chatbot management system built in Java. It features intelligent response handling, natural language processing capabilities, and a robust backend architecture for managing multiple chat sessions with enhanced user interaction.',
    features: [
      'Intelligent response handling',
      'Natural language processing',
      'Multi-session management',
      'Automated conversation flows',
      'Extensible plugin architecture',
    ],
    color: 'brand-orange',
    category: 'AI & Backend',
    categories: ['Featured', 'AI & Automation'],
    githubUrl: 'https://github.com/weedu230/neoaura-chatbot',
    isFeatured: true,
  },
  {
    slug: 'pdf-master',
    title: 'PDF Master',
    icon: FileText,
    tech: 'Web Application',
    techStack: ['React', 'JavaScript', 'PDF.js'],
    description: 'Comprehensive PDF editing and conversion tool for editing, merging, and manipulating PDF documents online.',
    fullDescription: 'PDF Master is a comprehensive web-based PDF editing and conversion tool. It provides features for editing, merging, splitting, and manipulating PDF documents entirely online with no backend required. Built as a React application with a clean and intuitive user interface.',
    features: [
      'PDF editing and annotation',
      'Document merging and splitting',
      'Format conversion',
      'Online processing - no upload needed',
      'Intuitive drag-and-drop interface',
    ],
    color: 'brand-orange',
    category: 'Web Application',
    categories: ['SaaS & Web'],
    githubUrl: 'https://pdf-master.base44.app/',
    liveUrl: 'https://pdf-master.base44.app/',
    isLiveProject: true,
  },
  {
    slug: 'flappy-bird-clone',
    title: 'Flappy Bird Clone',
    icon: Gamepad2,
    tech: 'JavaScript',
    techStack: ['JavaScript', 'HTML5 Canvas', 'CSS'],
    description: 'Browser-based arcade game with smooth animations and responsive controls.',
    fullDescription: 'A browser-based recreation of the classic Flappy Bird game built with vanilla JavaScript and HTML5 Canvas. Features smooth animations, responsive controls, score tracking, and pixel-perfect collision detection for an authentic arcade gaming experience.',
    features: [
      'Smooth 60fps animations',
      'Responsive touch and keyboard controls',
      'Score tracking system',
      'Pixel-perfect collision detection',
      'Progressive difficulty scaling',
    ],
    color: 'brand-sky',
    category: 'Game Development',
    categories: ['Game Development'],
    githubUrl: 'https://github.com/weedu230/flappy-bird-clone',
    liveUrl: 'https://weedu230.github.io/flappy-bird-clone/',
    isLiveProject: true,
  },
  {
    slug: 'gpa-calculator',
    title: 'GPA Calculator',
    icon: Calculator,
    tech: 'HTML',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    description: 'Web tool to calculate GPA with intuitive interface and real-time calculations.',
    fullDescription: 'An interactive GPA calculation tool built for students. Features an intuitive interface with real-time GPA computation, course management, and grade tracking. Designed with clean UI principles for ease of use across all devices.',
    features: [
      'Real-time GPA calculation',
      'Course management',
      'Grade tracking',
      'Responsive design',
      'Export functionality',
    ],
    color: 'brand-orange',
    category: 'Web Application',
    categories: ['Academic', 'SaaS & Web'],
    githubUrl: 'https://github.com/weedu230/gpa-calculator',
    liveUrl: 'https://weedu230.github.io/GPA-calculator/',
    isLiveProject: true,
  },
  {
    slug: 'jarvis-ai-assistant',
    title: 'Jarvis AI Assistant',
    icon: Bot,
    tech: 'Python',
    techStack: ['Python', 'Speech Recognition', 'AI'],
    description: 'Personal AI assistant with voice recognition and automation features for daily tasks.',
    fullDescription: 'Jarvis AI Assistant is a voice-enabled personal assistant built with Python. It features speech recognition, task automation, and intelligent command processing for daily productivity tasks. Inspired by the concept of a personal digital assistant.',
    features: [
      'Voice command recognition',
      'Task automation',
      'Intelligent command processing',
      'System integration',
      'Extensible command library',
    ],
    color: 'brand-sky',
    category: 'AI & Automation',
    categories: ['AI & Automation', 'Desktop'],
    githubUrl: 'https://github.com/weedu230/jarvis-ai-assistant',
  },
  {
    slug: 'paint-application',
    title: 'Paint Application',
    icon: Palette,
    tech: 'C#',
    techStack: ['C#', '.NET', 'Windows Forms'],
    description: 'Desktop drawing tool with freehand sketching, color picker, and adjustable brush sizes.',
    fullDescription: 'A desktop drawing application built with C# and Windows Forms. Features freehand sketching, a full color picker, adjustable brush sizes, multiple drawing tools, and canvas management for a complete digital art experience.',
    features: [
      'Freehand sketching',
      'Full color picker',
      'Adjustable brush sizes',
      'Multiple drawing tools',
      'Canvas save and export',
    ],
    color: 'brand-orange',
    category: 'Desktop Application',
    categories: ['Desktop'],
    githubUrl: 'https://github.com/weedu230/paint-application',
  },
  {
    slug: 'restaurant-website',
    title: 'Restaurant Website',
    icon: Globe,
    tech: 'HTML',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    description: 'Responsive restaurant website with modern UI and seamless user experience.',
    fullDescription: 'A responsive restaurant website designed with modern UI principles. Features a clean layout, menu display, reservation system, and seamless user experience across all devices. Built with semantic HTML and CSS for optimal performance.',
    features: [
      'Responsive layout',
      'Interactive menu display',
      'Modern UI design',
      'Cross-device compatibility',
      'Fast loading performance',
    ],
    color: 'brand-sky',
    category: 'Web Design',
    categories: ['Freelance', 'SaaS & Web'],
    githubUrl: 'https://github.com/weedu230/restaurant-website',
    liveUrl: 'https://weedu230.github.io/Restaurant-website/',
    isLiveProject: true,
  },
  {
    slug: 'hospital-management-system',
    title: 'Hospital Management System',
    icon: Hospital,
    tech: 'Java + MySQL',
    techStack: ['Java', 'MySQL', 'JDBC'],
    description: 'Comprehensive hospital system with patient records and appointment scheduling.',
    fullDescription: 'A comprehensive enterprise-style hospital management system built with Java and MySQL. Features patient records management, appointment scheduling, staff management, and reporting capabilities designed for real-world hospital operations.',
    features: [
      'Patient records management',
      'Appointment scheduling',
      'Staff management',
      'Medical history tracking',
      'Reporting and analytics',
    ],
    color: 'brand-sky',
    category: 'Enterprise Application',
    categories: ['Academic', 'Desktop'],
    githubUrl: 'https://github.com/weedu230/hospital-management-system',
  },
];

export const categoryFilters: { label: string; value: ProjectCategory | 'All' }[] = [
  { label: 'All', value: 'All' },
  { label: 'Featured', value: 'Featured' },
  { label: 'Academic', value: 'Academic' },
  { label: 'SaaS & Web', value: 'SaaS & Web' },
  { label: 'AI & Automation', value: 'AI & Automation' },
  { label: 'Game Development', value: 'Game Development' },
  { label: 'Desktop', value: 'Desktop' },
  { label: 'Freelance', value: 'Freelance' },
];

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);
