export interface ProjectOutcome {
    value: string;
    label: string;
}

export interface Project {
    id: string;
    title: string;
    company: string;
    duration: string;
    year: string;
    role: string;
    category: 'Full Stack' | 'Microservices' | 'Frontend' | 'Low-Code' | 'AI';
    description: string;
    /** Short one-liner used on cards. */
    tagline: string;
    /** Case-study narrative */
    problem: string;
    approach: string;
    architecture: string[];
    highlights: string[];
    outcomes: ProjectOutcome[];
    skills: string[];
    image?: string;
    website?: string;
    github?: string;
    featured?: boolean;
    stars?: number;
    forks?: number;
}

export const projectsData: Project[] = [
    {
        id: 'chatnconnect',
        title: 'chatNconnect — AI Chatbot Therapist',
        company: 'chatNconnect',
        duration: '2026',
        year: '2026',
        role: 'Full Stack & AI Developer',
        category: 'AI',
        tagline: 'A conversational AI companion offering supportive, therapist-style chat.',
        description:
            'An AI-powered mental-wellness chatbot that holds natural, supportive conversations, remembers context across a session, and routes sensitive cases responsibly.',
        problem:
            'People wanted a private, always-available space to talk things through — but generic chatbots felt robotic, lost context, and handled sensitive topics poorly.',
        approach:
            'I built a React + TypeScript chat experience backed by a Spring Boot service that orchestrates an LLM with carefully designed prompts, conversation memory and safety guardrails. Responses stream in real time over WebSockets, and sessions are secured with JWT.',
        architecture: [
            'React + TypeScript chat UI with streaming responses',
            'Spring Boot orchestration layer wrapping the LLM API with prompt templates + guardrails',
            'Conversation memory & context window management per session',
            'WebSocket streaming, JWT-secured sessions, rate limiting',
        ],
        highlights: [
            'Designed empathetic, context-aware conversation flows',
            'Implemented real-time streaming responses over WebSockets',
            'Added safety guardrails and graceful escalation for sensitive topics',
            'Built a clean, calming, accessible chat interface',
        ],
        outcomes: [
            { value: 'Real-time', label: 'Streaming replies' },
            { value: 'Context', label: 'Aware sessions' },
            { value: 'Safe', label: 'Guardrailed AI' },
        ],
        skills: ['React', 'TypeScript', 'Spring Boot', 'REST APIs', 'WebSockets', 'LLM / AI', 'JWT', 'Tailwind CSS'],
        image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1200&q=80',
        featured: true,
        stars: 34,
        forks: 9,
    },
    {
        id: 'omt-mobility',
        title: 'OMT — Mobility Platform',
        company: 'OMT (Mobility & Technologies)',
        duration: '2025 - 2026',
        year: '2026',
        role: 'Full Stack Developer',
        category: 'Full Stack',
        tagline: 'A scalable platform powering modern mobility and transport services.',
        description:
            'A full-stack mobility platform handling bookings, real-time tracking and operational dashboards for transport services, built for scale and reliability.',
        problem:
            'The mobility operator needed a unified system to manage bookings, track vehicles in real time and give operators clear dashboards — replacing disconnected manual tools.',
        approach:
            'I delivered a React front end with live map/tracking views over a Spring Boot API layer, modelling bookings, vehicles and trips, with role-based access for operators and admins and an analytics dashboard for daily operations.',
        architecture: [
            'React + Tailwind front end with real-time tracking views',
            'Spring Boot REST APIs for bookings, vehicles and trips',
            'Role-based access (operators / admins) with JWT security',
            'Operational dashboards and reporting; deployed on the cloud',
        ],
        highlights: [
            'Built booking, dispatch and real-time tracking modules',
            'Designed operator and admin dashboards with live metrics',
            'Implemented secure role-based access control',
            'Optimised APIs and UI for reliability at scale',
        ],
        outcomes: [
            { value: 'Real-time', label: 'Vehicle tracking' },
            { value: 'RBAC', label: 'Operators & admins' },
            { value: 'Scalable', label: 'Cloud-ready APIs' },
        ],
        skills: ['React', 'Spring Boot', 'Microservices', 'REST APIs', 'PostgreSQL', 'JWT', 'Tailwind CSS', 'Azure'],
        // To use your own screenshot: drop it in /public (e.g. public/omt-demo.png) and set image: '/charan_portfolio/omt-demo.png'
        image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1200&q=80',
        featured: true,
        stars: 22,
        forks: 6,
    },
    {
        id: 'keyp-healthcare',
        title: 'KEYP Healthcare Management',
        company: 'iSignTech',
        duration: 'Oct 2025 - Jan 2026',
        year: '2026',
        role: 'Full Stack Developer',
        category: 'Full Stack',
        tagline: 'Secure clinical & administrative workflows for a modern healthcare platform.',
        description:
            'Comprehensive healthcare application built on a monolithic architecture supporting clinical and administrative workflows with secure data handling.',
        problem:
            'The clinic needed a single, secure platform to unify patient management, appointments and medical records — replacing fragmented spreadsheets and manual processes while meeting strict data-privacy expectations.',
        approach:
            'I built a cohesive Spring Boot + Spring MVC backend exposing RESTful APIs, paired with a responsive React + Tailwind front end. Security was enforced with Spring Security and JWT, and the whole platform was shipped on Azure with CI/CD so every change deployed predictably.',
        architecture: [
            'Spring Boot monolith with layered (controller → service → repository) structure',
            'JWT-based auth + role-based access control via Spring Security',
            'React.js SPA with Tailwind CSS consuming REST APIs',
            'Deployed on Microsoft Azure with automated CI/CD pipelines',
        ],
        highlights: [
            'Developed backend modules with Spring Boot, Spring MVC, and RESTful APIs',
            'Implemented patient management, appointments, and medical records',
            'Built responsive UI with React.js and Tailwind CSS',
            'Deployed on Microsoft Azure with CI/CD pipelines',
        ],
        outcomes: [
            { value: '3', label: 'Core modules unified' },
            { value: '100%', label: 'JWT-secured endpoints' },
            { value: 'CI/CD', label: 'Automated deploys' },
        ],
        skills: ['Java', 'Spring Boot', 'Spring Security', 'React.js', 'Tailwind CSS', 'REST APIs', 'JWT', 'Azure', 'CI/CD', 'Agile'],
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
        website: 'https://app.keyp.digital/login',
        featured: true,
        stars: 12,
        forks: 4,
    },
    {
        id: 'xact-pos',
        title: 'XACT Point of Sale System',
        company: 'iSignTech',
        duration: 'Apr 2025 - Oct 2025',
        year: '2025',
        role: 'Full Stack Developer · Team Lead',
        category: 'Microservices',
        tagline: 'A scalable, microservices-based POS with real-time billing and inventory.',
        description:
            'End-to-end POS application using a microservices architecture for high scalability, featuring real-time data processing and seamless service communication.',
        problem:
            'Retail operations needed a POS that could scale per-module under load — billing spikes shouldn’t slow inventory, and the system had to support independent deployment of features by a small team.',
        approach:
            'I designed a microservices architecture with Spring Boot and Hibernate, splitting billing, inventory and order processing into independently deployable services. A React + Tailwind front end delivered a high-performance UI, with JWT auth and role-based access governing every action. I also coordinated the team’s delivery.',
        architecture: [
            'Independent Spring Boot services: billing, inventory, orders',
            'Hibernate/JPA persistence on PostgreSQL',
            'JWT auth + role-based access control across services',
            'React.js + Tailwind front end; deployed on Azure Container Apps',
        ],
        highlights: [
            'Designed microservices architecture with Spring Boot and Hibernate',
            'Implemented billing, inventory management, and order processing',
            'Developed high-performance UI with React.js and Tailwind CSS',
            'Integrated JWT authentication and role-based access control',
        ],
        outcomes: [
            { value: '3+', label: 'Independent services' },
            { value: 'Real-time', label: 'Billing & inventory' },
            { value: 'RBAC', label: 'Secure by role' },
        ],
        skills: ['Microservices', 'Spring Boot', 'Hibernate', 'React.js', 'PostgreSQL', 'JWT', 'Azure', 'REST APIs', 'Team Management'],
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
        website: 'https://ca-xact-ne-dev-frontend.happymushroom-ec9943ea.northeurope.azurecontainerapps.io/login',
        featured: true,
        stars: 28,
        forks: 7,
    },
    {
        id: 'smart-hostel',
        title: 'Smart Hostel Management',
        company: 'iSignTech',
        duration: 'Nov 2024 - Mar 2025',
        year: '2025',
        role: 'Developer',
        category: 'Low-Code',
        tagline: 'Low-code hostel operations with automated workflows and live analytics.',
        description:
            "End-to-end hostel management system leveraging Zoho Creator's low-code platform with custom workflows and real-time analytics dashboards.",
        problem:
            'Hostel administrators were managing rooms, residents and operations manually. They needed a tailored system fast — without a long custom-build cycle.',
        approach:
            'I delivered the platform on Zoho Creator, building admin and user modules, custom UI with HTML snippets and widgets, and automating business processes with Deluge workflows. Zoho BI & Analytics surfaced real-time operational insight.',
        architecture: [
            'Zoho Creator app with admin + resident modules',
            'Custom widgets/HTML snippets for tailored UI',
            'Deluge scripts automating operational workflows',
            'Zoho BI & Analytics dashboards for real-time insight',
        ],
        highlights: [
            'Implemented admin and user modules for hostel operations',
            'Built dynamic UI components with HTML snippets and widgets',
            'Automated business processes with custom workflows',
            'Enabled real-time insights through Zoho BI & Analytics',
        ],
        outcomes: [
            { value: '2', label: 'Role-based modules' },
            { value: 'Automated', label: 'Operational workflows' },
            { value: 'Live', label: 'Analytics dashboards' },
        ],
        skills: ['Zoho Creator', 'Zoho Analytics', 'JavaScript', 'HTML', 'API Integration', 'JWT', 'Workflows'],
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
        website: 'https://shmsoft.in/',
        stars: 5,
        forks: 2,
    },
    {
        id: 'sports-events',
        title: 'Sports Events Website',
        company: 'iSignTech • srisportsevents.com',
        duration: 'Oct 2024 - Dec 2024',
        year: '2024',
        role: 'Frontend Developer',
        category: 'Frontend',
        tagline: 'A fast, mobile-first marketing site for a sports-events brand.',
        description:
            'Fully responsive and dynamic sports events website featuring intuitive navigation, engaging UI layouts, and a mobile-first design approach.',
        problem:
            'The brand needed an engaging, fast-loading public site that worked flawlessly on phones and clearly presented events and contact paths.',
        approach:
            'I built a mobile-first, cross-browser site with semantic HTML5, modern CSS and JavaScript, layering in smooth scrolling and tasteful animation while keeping performance tight.',
        architecture: [
            'Mobile-first responsive layout (HTML5 / CSS3 / Bootstrap)',
            'Vanilla JavaScript interactions + smooth scrolling',
            'Event listings and contact sections',
            'Cross-browser tested, performance-optimized assets',
        ],
        highlights: [
            'Designed with a mobile-first approach for seamless cross-device experience',
            'Implemented event listings and contact sections',
            'Added smooth scrolling interactions and animations',
            'Ensured cross-browser compatibility and optimized performance',
        ],
        outcomes: [
            { value: 'Mobile-first', label: 'Responsive design' },
            { value: 'Cross-browser', label: 'Consistent UX' },
            { value: 'Optimized', label: 'Fast load' },
        ],
        skills: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Responsive Design', 'Performance Optimization'],
        website: 'https://srisportsevents.com',
        image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80',
        stars: 15,
        forks: 3,
    },
    {
        id: 'vernon-medical',
        title: 'Vernon Medical Clinic',
        company: 'iSignTech',
        duration: 'Jul 2024 - Oct 2024',
        year: '2024',
        role: 'Frontend Developer',
        category: 'Full Stack',
        tagline: 'Patient-facing site with online appointments and chronic-care access.',
        description:
            'Comprehensive website and online appointment system enhancing patient access to healthcare services with responsive design and an intuitive interface.',
        problem:
            'Patients lacked an easy way to learn about services and book visits online, while the clinic needed a uniform experience across browsers and devices.',
        approach:
            'I led front-end development of a patient-facing platform with AngularJS and Bootstrap (PHP/jQuery backing), adding online-visit and chronic-care management plus an intuitive appointment scheduler, designed in Figma and delivered in an Agile cadence.',
        architecture: [
            'AngularJS + Bootstrap front end, PHP/jQuery integration',
            'Online appointment scheduling flow',
            'Online-visit & chronic-care management features',
            'Figma-led design, Agile delivery, cross-browser hardening',
        ],
        highlights: [
            'Led development of a patient-facing healthcare platform',
            'Integrated online visit capabilities and chronic care management',
            'Implemented an intuitive appointment scheduling system',
            'Addressed cross-browser compatibility for a uniform experience',
        ],
        outcomes: [
            { value: 'Online', label: 'Appointment booking' },
            { value: 'Chronic-care', label: 'Management flow' },
            { value: 'Uniform', label: 'Cross-browser UX' },
        ],
        skills: ['AngularJS', 'Bootstrap', 'PHP', 'jQuery', 'JavaScript', 'Figma', 'Agile'],
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
        website: 'https://vernonmedicalclinic.com/',
        stars: 8,
        forks: 2,
    },
];

export const projectCategories = ['All', 'AI', 'Full Stack', 'Microservices', 'Frontend', 'Low-Code'] as const;
