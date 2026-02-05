import charanAvatar from '../assets/charan.png';
import masteringFullStackImg from '../assets/Master_of_fullstack.png';
import springbootMicroservicesImg from '../assets/springboot_microservices.png';
import uiUxPatternImg from '../assets/UI_UX Patern.png';
import zohoCreatorImg from '../assets/zoho_creator.png';
import razorpayArchitectureImg from '../assets/razorpay_architecture.png';
import springbootDockerMysqlImg from '../assets/springboot_docker_mysql.png';
import kafkaDockerImg from '../assets/kafka_docker.png';

export const hero = {
  title: "Full Stack Java & React Developer",
  subtitle: "Building scalable, secure, and user-focused web applications",
  shortBio:
    "Full Stack Developer at iSign Tech with hands-on experience in Java, Spring Boot, Microservices, React, Angular, and cloud-native tools.",
  ctas: [
    { label: "View Projects", href: "#projects" },
    { label: "Download Resume", href: "/resume.pdf" },
  ],
};

export const about = {
  paragraphs: [
    "I am a Full Stack Java Developer currently working at iSign Technologies Pvt Ltd, specializing in building scalable enterprise-grade applications using Java, Spring Boot, Microservices, and modern frontend frameworks like React and Angular.",
    "I enjoy solving complex problems, integrating APIs, and continuously improving code quality. My experience spans backend development, frontend UI design, database integration, and deployment using containerization tools.",
  ],
  location: "Hyderabad, Telangana, India",
};

export const skills = [
  "React",
  "TypeScript",
  "Angular",
  "Tailwind CSS",
  "Java",
  "Spring Boot",
  "Microservices",
  "Docker",
  "Kubernetes",
];

export const skillsCategories = [
  {
    title: "Frontend",
    icon: "code",
    items: [
      "React",
      "TypeScript",
      "Angular",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
  {
    title: "Backend",
    icon: "server",
    items: [
      "Java",
      "Spring Boot",
      "Microservices",
      "REST APIs",
      "JWT Authentication",
      ".NET (C#)",
    ],
  },
  {
    title: "Database",
    icon: "database",
    items: ["MySQL", "Oracle", "Cosmos DB"],
  },
  {
    title: "DevOps & Tools",
    icon: "tools",
    items: [
      "Git & GitHub",
      "Docker",
      "Kubernetes",
      "CI/CD Pipelines",
      "Zoho Creator",
      "Agile / Scrum",
    ],
  },
];

export const experience = [
  {
    company: "iSign Technologies Pvt Ltd",
    role: "Full Stack Developer",
    duration: "February 2024 – Present",
    bullets: [
      "Developing scalable web applications using Java, Spring Boot, and React.",
      "Working on secure authentication and authorization using JWT.",
    ],
  },
  {
    company: "Sathya Technologies",
    role: "Internship Trainee",
    duration: "August 2023 – February 2024",
    bullets: [
      "Built an Employee Management System using Spring Boot and MySQL.",
    ],
  },
  {
    company: "Ataritech Effective Industrial Solutions (OPC) Pvt Ltd",
    role: "Application Engineer",
    duration: "June 2023 – August 2023",
    bullets: [
      "Developed WPF desktop applications using C#.",
      "Designed UI screens for industrial machines.",
      "Worked on real-time software-to-machine interaction.",
      "Focused on clean, maintainable code and usability.",
    ],
  },
];

export const projects = [
  {
    title: "Employee Management System",
    desc: "A comprehensive system for managing employee data, roles, and departments with authentication and CRUD operations.",
    tech: ["Spring Boot", "REST APIs", "MySQL", "Bootstrap"],
    github: "https://github.com/charankuramana09/employee-management-system",
    demo: "#",
  },
  {
    title: "Enterprise Web Application",
    desc: "Scalable web application with microservices architecture, JWT authentication, and real-time processing.",
    tech: ["Java", "React", "Microservices", "Docker"],
    github: "https://github.com/charankuramana09/enterprise-web-app",
    demo: "#",
  },
  {
    title: "Industrial UI Dashboard",
    desc: "WPF desktop application with real-time machine interaction and monitoring for industrial use.",
    tech: ["C#", "WPF", ".NET", "SQL Server"],
    github: "https://github.com/charankuramana09/industrial-ui-dashboard",
    demo: "#",
  },
  {
    title: "API Integration Platform",
    desc: "RESTful API platform enabling seamless integration between services with comprehensive documentation.",
    tech: ["Spring Boot", "Swagger", "JWT", "Oracle"],
    github: "https://github.com/charankuramana09/api-integration-platform",
    demo: "#",
  },
];

export const contact = {
  email: "kura.radha.krishna@gmail.com",
  linkedin: "https://www.linkedin.com/in/charan-kuramana-145282249",
};

export const blogPosts = [
  {
    id: 1,
    slug: 'mastering-full-stack-engineering',
    title: 'Mastering Full-Stack Engineering',
    date: '2026-01-15',
    tags: ['Full Stack', 'Career', 'Best Practices'],
    summary: 'A deep dive into the mindset and skills needed to excel as a product-focused full-stack engineer.',
    content: `
      ## The Full-Stack Mindset
      Being a full-stack engineer isn't just about knowing both frontend and backend. It's about owning the product from end to end.

      ### Essential Skills
      1. **Empathy for the User**: Understanding the "why" behind the features.
      2. **Architectural Thinking**: How does data flow from the DB to the UI?
      3. **Problem Solving**: Bridges the gap between technical limitations and product requirements.

      ### My Journey
      In my recent projects, I've found that moving between Java/Spring and React allows for much faster iteration cycles...
    `,
    image: masteringFullStackImg,
    author: { name: 'Charan Kuramana', avatar: charanAvatar },
    readingTime: 5,
    views: 1200,
    comments: 8,
    featured: true,
  },
  {
    id: 2,
    slug: 'building-scalable-microservices',
    title: 'Building Scalable Microservices with Spring Boot',
    date: '2025-12-10',
    tags: ['Microservices', 'Spring Boot', 'Java'],
    summary: 'Step-by-step guide to designing and deploying robust microservices using Spring Boot and Docker.',
    content: `
      ## Why Microservices?
      Scalability, maintainability, and deployment independence.

      ### Key Design Patterns
      *   **API Gateway**: The entry point for all clients.
      *   **Service Discovery**: How services find each other.
      *   **Circuit Breaker**: Preventing cascading failures.

      Using Spring Cloud with Spring Boot makes implementing these patterns significantly easier...
    `,
    image: springbootMicroservicesImg,
    author: { name: 'Charan Kuramana', avatar: charanAvatar },
    readingTime: 7,
    views: 980,
    comments: 5,
    featured: false,
  },
  {
    id: 3,
    slug: 'react-ui-ux-patterns',
    title: 'React UI/UX Patterns for Modern Web Apps',
    date: '2025-11-05',
    tags: ['React', 'UI/UX', 'Frontend'],
    summary: 'Explore advanced UI/UX patterns in React to create delightful and accessible user experiences.',
    content: `
      ## Component-Driven Design
      Building reusable, accessible components is the foundation of a great UI.

      ### Patterns to Know
      *   **Compound Components**: Flexible and expressive APIs.
      *   **Higher-Order Components**: Reusing logic across components.
      *   **Custom Hooks**: The modern way to handle state and effects.
    `,
    image: uiUxPatternImg,
    author: { name: 'Charan Kuramana', avatar: charanAvatar },
    readingTime: 6,
    views: 1100,
    comments: 6,
    featured: false,
  },
  {
    id: 4,
    slug: 'low-code-automation-zoho',
    title: 'Low-Code Automation with Zoho Creator',
    date: '2025-10-20',
    tags: ['Zoho Creator', 'Automation', 'Low-Code'],
    summary: 'Unlock the power of low-code platforms for rapid business automation and integration.',
    content: `
      ## Rapid Prototyping
      Zoho Creator allows for incredibly fast development of business tools.

      ### Deluge Scripting
      Even in low-code, logic matters. Deluge provides the power to handle complex workflows and third-party integrations.
    `,
    image: zohoCreatorImg,
    author: { name: 'Charan Kuramana', avatar: charanAvatar },
    readingTime: 4,
    views: 800,
    comments: 2,
    featured: false,
  },
  {
    id: 5,
    slug: 'integrating-razorpay-microservices',
    title: 'Integrating Razorpay with Microservices Architecture',
    date: '2026-02-05',
    tags: ['Microservices', 'Razorpay', 'Java', 'Spring Boot', 'Fintech'],
    summary: 'A guide on handling secure payment transactions seamlessly in a distributed system using API Gateway and Eureka.',
    content: `
      ## Secure Payments in Microservices
      Recently, I integrated Razorpay into a microservices-based project to handle secure payment transactions. The primary challenge was ensuring consistent state across a distributed system.

      ### Architecture Overview
      *   **API Gateway**: The single entry point for external client requests, handling routing and security.
      *   **Eureka Service Discovery**: Manages service registration ensuring smooth interaction between internal services.
      *   **Payment Service**: The core component that communicates with Razorpay APIs, processes webhooks, and updates transaction statuses.

      ### Key Takeaways
      Using this modular approach allows for scalable and reliable payment processing while keeping the architecture maintainable.
    `,
    image: razorpayArchitectureImg,
    author: { name: 'Charan Kuramana', avatar: charanAvatar },
    readingTime: 5,
    views: 850,
    comments: 4,
    featured: true,
  },
  {
    id: 6,
    slug: 'deploy-spring-boot-docker-mysql',
    title: 'Build & Deploy Spring Boot in Docker with MySQL',
    date: '2026-02-01',
    tags: ['Docker', 'Spring Boot', 'MySQL', 'DevOps'],
    summary: 'An end-to-end 7-day guide to dockerizing your Spring Boot applications and connecting them with databases.',
    content: `
      ## The 7-Day Docker Journey
      If you're a Java Developer looking to master DevOps tools, this guide is for you. I've broken down the process of containerizing a Spring Boot app with MySQL into a manageable week-long plan.

      ### Roadmap
      1.  **Day 1-2**: Docker Setup & Basic Commands.
      2.  **Day 3**: Creating the Dockerfile for Spring Boot.
      3.  **Day 4**: Orchestrating with Docker Compose.
      4.  **Day 5-7**: Testing with Postman and Pushing to Docker Hub.

      [Download the PDF Guide](https://github.com/charankuramana09/docker-springboot-mysql-guide/raw/main/Guide.pdf)
    `,
    image: springbootDockerMysqlImg,
    author: { name: 'Charan Kuramana', avatar: charanAvatar },
    readingTime: 8,
    views: 1500,
    comments: 12,
    featured: false,
  },
  {
    id: 7,
    slug: 'hands-on-kafka-docker',
    title: 'Hands-on with Apache Kafka + Docker',
    date: '2026-01-28',
    tags: ['Kafka', 'Docker', 'Event Streaming', 'Java'],
    summary: 'Simulating real-time data streaming locally using Docker, Zookeeper, and Kafka producers/consumers.',
    content: `
      ## Real-Time Data Streaming
      I recently set up Apache Kafka locally using Docker to simulate event-driven architecture for a test project.

      ### Implementation Steps
      *   **Zookeeper Integration**: Essential for managing Kafka cluster state.
      *   **Bitnami Images**: Used for quick and reliable bootstrapping of the environment.
      *   **Testing Flow**: Validated using producer and consumer scripts to ensure message delivery.

      ### Next Steps
      Exploring Kafka REST Proxy and building asynchronous message pipelines with Spring Boot.
    `,
    image: kafkaDockerImg,
    author: { name: 'Charan Kuramana', avatar: charanAvatar },
    readingTime: 6,
    views: 920,
    comments: 7,
    featured: false,
  },
];
