export interface Project {
    id: string;
    title: string;
    company: string;
    duration: string;
    description: string;
    highlights: string[];
    skills: string[];
    image?: string;
    website?: string;
    github?: string;
    fullDetail?: string;
    stars?: number;
    forks?: number;
}

export const projectsData: Project[] = [
    {
        id: 'keyp-healthcare',
        title: 'KEYP Healthcare Management',
        company: 'iSignTech',
        duration: 'Oct 2025 - Jan 2026',
        description: 'Comprehensive healthcare application built on monolithic architecture supporting clinical and administrative workflows with secure data handling.',
        highlights: [
            'Developed backend modules with Spring Boot, Spring MVC, and RESTful APIs',
            'Implemented patient management, appointments, and medical records',
            'Built responsive UI with React.js and Tailwind CSS',
            'Deployed on Microsoft Azure with CI/CD pipelines',
        ],
        skills: ['Java', 'Spring Boot', 'Spring Security', 'React.js', 'Tailwind CSS', 'REST APIs', 'JWT', 'Azure', 'CI/CD', 'Agile'],
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
        website: 'https://app.keyp.digital/login',
        fullDetail: 'A deep dive into the monolithic healthcare platform...',
        stars: 12,
        forks: 4,
    },
    {
        id: 'xact-pos',
        title: 'XACT Point of Sale System',
        company: 'iSignTech',
        duration: 'Apr 2025 - Oct 2025',
        description: 'End-to-end POS application using microservices architecture for high scalability, featuring real-time data processing and seamless service communication.',
        highlights: [
            'Designed microservices architecture with Spring Boot and Hibernate',
            'Implemented billing, inventory management, and order processing',
            'Developed high-performance UI with React.js and Tailwind CSS',
            'Integrated JWT authentication and role-based access control',
        ],
        skills: ['Microservices', 'Spring Boot', 'Hibernate', 'React.js', 'PostgreSQL', 'JWT', 'Azure', 'REST APIs', 'Team Management'],
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
        website: 'https://ca-xact-ne-dev-frontend.happymushroom-ec9943ea.northeurope.azurecontainerapps.io/login',
        stars: 28,
        forks: 7,
    },
    {
        id: 'smart-hostel',
        title: 'Smart Hostel Management',
        company: 'iSignTech',
        duration: 'Nov 2024 - Mar 2025',
        description: "End-to-end hostel management system leveraging Zoho Creator's low-code platform with custom workflows and real-time analytics dashboards.",
        highlights: [
            'Implemented admin and user modules for hostel operations',
            'Built dynamic UI components with HTML snippets and widgets',
            'Automated business processes with custom workflows',
            'Enabled real-time insights through Zoho BI & Analytics',
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
        description: 'Fully responsive and dynamic sports events website featuring intuitive navigation, engaging UI layouts, and mobile-first design approach.',
        highlights: [
            'Designed with mobile-first approach for seamless cross-device experience',
            'Implemented event listings and contact sections',
            'Added smooth scrolling interactions and animations',
            'Ensured cross-browser compatibility and optimized performance',
        ],
        skills: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Responsive Design', 'Performance Optimization'],
        website: 'https://srisportsevents.com',
        image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80',
        stars: 15,
        forks: 3,
    },
    {
        id: 'vernon-medical',
        title: 'Vernon Medical Clinic',
        company: 'iSignTech',
        duration: 'Jul 2024 - Oct 2024',
        description: 'Comprehensive website and online appointment system enhancing patient access to healthcare services with responsive design and intuitive interface.',
        highlights: [
            'Led development of patient-facing healthcare platform',
            'Integrated online visit capabilities and chronic care management',
            'Implemented intuitive appointment scheduling system',
            'Addressed cross-browser compatibility for uniform experience',
        ],
        skills: ['AngularJS', 'Bootstrap', 'PHP', 'jQuery', 'JavaScript', 'Figma', 'Agile'],
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
        website: 'https://vernonmedicalclinic.com/',
        stars: 8,
        forks: 2,
    },
];
