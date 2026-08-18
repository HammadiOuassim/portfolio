export interface Contact {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface ExperienceHighlight {
  text: string;
}

export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  type: string;
  startDate: string;
  endDate: string;
  location?: string;
  summary?: string;
  highlights: ExperienceHighlight[];
  projects?: ProjectEntry[];
}

export interface ProjectEntry {
  id: string;
  title: string;
  period?: string;
  region?: string;
  description: string;
  technologies: string[];
  highlights: string[];
}

export interface EducationEntry {
  id: string;
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
}

export interface TrainingEntry {
  id: string;
  title: string;
  institution: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface LanguageEntry {
  language: string;
  level: string;
}

export interface Portfolio {
  name: string;
  title: string;
  tagline: string;
  summary: string;
  contact: Contact;
  skills: SkillGroup[];
  experience: ExperienceEntry[];
  projects: ProjectEntry[];
  education: EducationEntry[];
  training: TrainingEntry[];
  interests: string[];
  languages: LanguageEntry[];
}

export const portfolioData: Portfolio = {
  name: 'Ouassim Hammadi',
  title: 'Full Stack Engineer & DevOps',
  tagline: 'Building scalable systems, AI-powered platforms, and microservices at scale.',
  summary:
    'Full Stack Engineer with experience architecting microservices systems scaling to 300,000+ users via Kubernetes, building products for African and European markets. Skilled in backend and frontend development, AI model integration, and DevOps workflows. Represented company technology portfolios at international events including Mobile World Congress Barcelona and MWC Doha.',
  contact: {
    email: 'ouassimhammadi@gmail.com',
    phone: '+213 7 82 24 78 13',
    linkedin: 'https://linkedin.com/in/ouassim-hammadi',
    github: 'https://github.com/HammadiOuassim',
  },
  skills: [
    {
      category: 'Languages',
      items: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'HTML/CSS'],
    },
    {
      category: 'Frameworks & Runtimes',
      items: ['NestJS', 'Django', 'Node.js', 'Express.js', 'React', 'MERN Stack'],
    },
    {
      category: 'Cloud & DevOps',
      items: [
        'Kubernetes (K8s)',
        'Docker',
        'Apache Airflow',
        'CI/CD Pipelines',
        'GitHub Actions',
        'GitLab CI/CD',
      ],
    },
    {
      category: 'Architecture & Tools',
      items: [
        'Microservices',
        'RESTful APIs',
        'Meilisearch',
        'Redis',
        'Amazon S3',
        'SonarQube',
        'Prisma ORM',
      ],
    },
    {
      category: 'Databases',
      items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Oracle'],
    },
    {
      category: 'Management & Design',
      items: ['Agile Scrum', 'Jira', 'Figma', 'LucidChart', 'UML System Architecture'],
    },
  ],
  experience: [
    {
      id: 'digi-booking',
      role: 'Full Stack Engineer',
      company: 'Digi Booking',
      type: 'Hybrid',
      startDate: '2026-07',
      endDate: 'Present',
      summary:
        'Full Stack Engineer at Digi Booking, owning core products on NEXUS AI — an AI-powered social platform — from backend design through the user-facing experience.',
      highlights: [
        {
          text: 'Designed how product data, permissions, and AI stay separated: the platform owns the user record and consent; AI only generates help. Users never talk to the AI layer directly.',
        },
        {
          text: 'Delivered Education: a system of record for enrollments and progress, plus Course Studio, an adaptive tutor, quizzes, flashcards, career-path evaluation, and learning analytics.',
        },
        {
          text: 'Delivered Health: a secure path for sensitive wellness data, turning voice and camera signals into practical insights, with an AI advisor, symptom triage, and an English/French experience.',
        },
      ],
      projects: [
        {
          id: 'nexus-ai',
          title: 'NEXUS AI',
          period: 'Jul 2026 – Present',
          region: 'European Union',
          description:
            'NEXUS AI is a next-generation AI-powered social ecosystem for individuals, families, professionals, and organizations. The product spans life domains — social, health, education, finance, work, and wellbeing — with the platform owning identity, consent, and APIs while AI services own the models. Designed for the European Union region.',
          technologies: ['NestJS', 'React', 'AI Integration', 'Microservices', 'PostgreSQL', 'GDPR'],
          highlights: [
            'Designed for the EU market with GDPR-aligned consent, privacy-first data boundaries, and bilingual English/French experiences.',
            'Platform-owned identity, consent, and APIs — AI services own the models; users never interact with the AI layer directly.',
            'Education: enrollments, progress tracking, Course Studio, adaptive tutor, quizzes, flashcards, career-path evaluation, and learning analytics.',
            'Health: secure wellness data pipeline, voice and camera signal analysis, AI advisor, symptom triage, and bilingual English/French experience.',
          ],
        },
      ],
    },
    {
      id: 'intaj-mouhtawayat',
      role: 'Full Stack Engineer',
      company: 'Intaj Mouhtawayat',
      type: 'Full Time',
      startDate: '2025-02',
      endDate: '2026-06',
      summary:
        'Worked on 5 key AI-supported projects as a Full Stack Engineer, contributing to backend and frontend development, microservices architecture, AI models integration, and deployment.',
      highlights: [
        {
          text: 'Architected microservices systems scaling to 300,000+ users via Kubernetes.',
        },
        {
          text: 'Delivered an AI-powered SaaS platform built on Apache Airflow with a distributed architecture.',
        },
        {
          text: 'Represented the company\'s technology portfolio at international industry events, including Mobile World Congress (MWC) Barcelona, Spain and MWC Doha, Qatar.',
        },
      ],
      projects: [
        {
          id: 'brand-monitoring',
          title: 'SaaS Brand Monitoring & Reputation Platform',
          period: 'Jan 2026 – Jun 2026',
          region: 'Africa',
          description:
            'AI-powered SaaS platform to track social media brand mentions, calculate reputation power, and generate automated alerts and recommendations.',
          technologies: [
            'NestJS',
            'React',
            'Kubernetes',
            'Apache Airflow',
            'PostgreSQL',
            'Microservices',
          ],
          highlights: [
            'Defined backend core logic and workflow for each actor within the SaaS ecosystem with multi-database support.',
            'Engineered a complex user and component restriction system based on contract requirements and user hierarchy.',
            'Developed a dynamic frontend interface for customizable dashboards and manager-controlled sub-user access.',
            'Designed multi-service microservices architecture managed via Kubernetes.',
            'Utilized Apache Airflow to schedule and trigger complex data processing and monitoring tasks.',
          ],
        },
        {
          id: 'algerian-social',
          title: 'Algerian Social Media Platform',
          period: 'Oct 2025 – Jan 2026',
          region: 'Algeria',
          description:
            'Nationwide platform with over 300,000 active users across Algeria; presented at MWC Barcelona 2026 and Algeria Startup Conference 2025.',
          technologies: [
            'NestJS',
            'Prisma',
            'PostgreSQL',
            'Kubernetes',
            'Meilisearch',
            'Redis',
            'Amazon S3',
          ],
          highlights: [
            'Developed backend using NestJS, Prisma, and PostgreSQL within a Kubernetes-orchestrated microservices architecture.',
            'Integrated AI content moderation and recommendation algorithms for post classification and user engagement.',
            'Led cross-functional team building core microservices for Notifications, Privacy, and high-performance search via Meilisearch.',
            'Enhanced performance with Redis caching and Amazon S3 for scalable media storage.',
            'Integrated SonarQube and Meterian into GitLab CI/CD pipelines for security and code quality.',
          ],
        },
        {
          id: 'djezzy-analyst',
          title: 'Djezzy Analyst Platform',
          period: 'Jul 2025 – Oct 2025',
          description:
            'AI-driven platform to analyze user interactions with Djezzy, generate alerts, and suggest decisions. Presented at MWC Doha, Qatar 2025.',
          technologies: ['Python', 'React', 'Docker', 'Celery', 'Redis', 'Microservices'],
          highlights: [
            'Implemented web scraping solutions and deep search analytics using Python.',
            'Designed seamless microservice communication between UI, backend, scraping scripts, and AI modules.',
            'Used Celery and Redis to manage background tasks and connect scraping microservices with the backend.',
            'Contributed to sentiment analysis AI model for automated classification of customer comments.',
            'Collaborated on AI-powered chatbot supporting Djezzy marketing agents with data-driven actions.',
          ],
        },
        {
          id: 'government-courier',
          title: 'Government Courier Platform',
          period: 'Jun 2025',
          description:
            'Integration of new features into an existing production Django/React codebase under tight deadlines.',
          technologies: ['Django', 'React', 'Docker'],
          highlights: [
            'Integrated new features into an existing Django/React codebase in a critical production environment.',
            'Built a browser-to-peripheral communication solution enabling direct hardware interaction from the web client.',
          ],
        },
        {
          id: 'citizen-complaints',
          title: 'Citizen Complaints Platform',
          period: 'Feb 2025 – Jun 2025',
          description:
            'Digital platform enabling citizens to submit complaints to the Médiateur institution; presented at MWC Doha, Qatar 2025.',
          technologies: ['Django', 'React', 'Docker', 'AI/OCR'],
          highlights: [
            'Developed and deployed backend services with Django and frontend interfaces using React, containerized via Docker.',
            'Integrated microservices and ensured smooth end-to-end data flow.',
            'Customized text area to manipulate AI-generated suggestions.',
            'Contributed to OCR model for document processing, sentiment/urgency classification, and AI chatbot for complaint submission.',
          ],
        },
      ],
    },
    {
      id: 'delivery-app',
      role: 'Backend Developer',
      company: 'Delivery App',
      type: 'Freelance',
      startDate: '2024-12',
      endDate: '2025-02',
      highlights: [
        {
          text: 'Sole backend architect for a high-performance delivery platform built on Django and PostgreSQL; designed full system architecture and UML diagrams from business requirements.',
        },
        {
          text: 'Automated CI/CD pipelines using GitHub Actions and managed containerised environments with Docker.',
        },
        {
          text: 'Facilitated an Agile Scrum environment using Jira for sprint planning, velocity tracking, and cross-functional delivery.',
        },
      ],
    },
    {
      id: 'aman-startup',
      role: 'Mobile Developer',
      company: 'Aman Startup',
      type: 'Freelance',
      startDate: '2023-12',
      endDate: '2024-07',
      highlights: [
        {
          text: 'Developed Sauviwni — a full-featured Android car assistance app using Java, XML, and Firebase with real-time interaction and location-based services.',
        },
        {
          text: 'Managed architecture documentation using LucidChart and version control via GitHub; delivered on schedule using Agile Scrum.',
        },
      ],
    },
  ],
  projects: [
    {
      id: 'sauviwni',
      title: 'Sauviwni — Car Assistance App',
      period: 'Dec 2023 – Jul 2024',
      description:
        'Full-featured Android car assistance application with real-time interaction and location-based services.',
      technologies: ['Java', 'Android', 'Firebase', 'XML'],
      highlights: [
        'Real-time interaction and location-based services.',
        'Delivered on schedule using Agile Scrum methodology.',
      ],
    },
    {
      id: 'arabic-voice-assistant',
      title: 'Arabic Smart Voice Assistant',
      period: 'Feb 2022 – Jul 2022',
      description:
        'Custom Arabic speech recognition model deployed as an Android mobile app.',
      technologies: ['Java', 'PocketSphinx', 'Android'],
      highlights: [
        'Designed and trained a custom Arabic speech recognition model using PocketSphinx.',
        'Achieved minimal word error rate; deployed as an Android mobile app.',
      ],
    },
  ],
  education: [
    {
      id: 'master',
      institution: 'University of Constantine 2 Abd Elhamid Mehri',
      degree: "Master's in IT & Communication Technologies",
      startDate: '2022-09',
      endDate: '2024-06',
    },
    {
      id: 'bachelor',
      institution: 'University of Constantine 2 Abd Elhamid Mehri',
      degree: "Bachelor's Degree in Computer Science",
      startDate: '2019-09',
      endDate: '2022-07',
    },
  ],
  training: [
    {
      id: 'ai-training',
      title: 'AI System Developer',
      institution: 'University of Constantine 2',
      period: 'Feb 2022 – Jul 2022',
      description: 'Arabic Smart Voice Assistant training program.',
      highlights: [
        'Designed and trained a custom Arabic speech recognition model using PocketSphinx and Java.',
        'Achieved minimal word error rate; deployed as an Android mobile app.',
      ],
    },
    {
      id: 'network-training',
      title: 'Network Engineering',
      institution: 'University of Constantine 2',
      period: 'Sep 2022 – Jan 2023',
      description: 'LAN architecture design and configuration.',
      highlights: [
        'Designed and configured LAN architectures (routing, switching, subnetting) using Cisco Packet Tracer.',
      ],
    },
  ],
  interests: [
    'Backend development',
    'AWS Solutions Architecture',
    'DevOps',
    'Data Science',
    'Information Systems',
  ],
  languages: [
    { language: 'Arabic', level: 'Native' },
    { language: 'English', level: 'Fluent' },
    { language: 'French', level: 'Fluent' },
  ],
};
