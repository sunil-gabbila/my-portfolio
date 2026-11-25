// src/data/projects.js
export default [
  {
    id: 1,
    title: "Sales Savvy",
    category: "Full-Stack E-Commerce Application",
    description:
      "A full-stack e-commerce application featuring user authentication, product management, shopping functionality, order processing, and database integration.",
    features: [
      "User registration and login",
      "Authentication and authorization",
      "Product management",
      "Shopping cart functionality",
      "Order management",
      "REST API integration",
      "Database persistence"
    ],
    technologies: ["Java", "Spring Boot", "React", "MySQL", "Hibernate"],
    liveDemo: "#", // placeholder, user can replace
    repo: "https://github.com/sunil-gabbila/sales-savvy-ecommerce"
  },
  {
    id: 3,
    title: "Payment API",
    category: "Backend API Development",
    description:
      "A backend payment API project focused on request validation, payment processing workflows, secure request handling, and backend service architecture.",
    features: [
      "Payment API endpoints",
      "Request/response DTOs",
      "Validation",
      "Exception handling",
      "HMAC-SHA256 signature verification",
      "Logging",
      "REST API design"
    ],
    technologies: ["Java", "Spring Boot", "REST APIs", "HMAC-SHA256", "Maven"],
    liveDemo: "#",
    repo: "https://github.com/sunil-gabbila/fixflow-maintenance-platform"
  },
  {
    id: 4,
    title: "Advanced DSA Patterns",
    category: "Problem Solving",
    description:
      "A structured collection of programming problems and solutions focused on advanced prefix sums, array patterns, optimization, and algorithmic problem solving.",
    features: [
      "Prefix sums",
      "Running sums",
      "Range sum queries",
      "Maximum prefix sum",
      "Array optimization",
      "Time complexity",
      "Space complexity"
    ],
    technologies: ["Java", "Data Structures", "Algorithms"],
    liveDemo: "#",
    repo: "https://github.com/sunil-gabbila/fixflow-maintenance-platform"
  },
  {
    id: 5,
    title: "Payment Integration System (Stripe)",
    category: "Spring Boot Microservices | AWS",
    description:
      "Contributed to a secure, scalable payment integration system built with Java, Spring Boot, and microservices on AWS. The system integrates Stripe checkout sessions, validates payment requests, processes webhooks, and persists payment data.",
    features: [
      "Stripe Checkout Session creation through the Stripe REST API",
      "Configurable field-level and business-rule payment validation",
      "Stripe webhook event processing",
      "HMAC-SHA256 request authentication and integrity checks",
      "Spring Data JPA persistence for payment entities",
      "Centralized configuration and consistent API error handling"
    ],
    technologies: ["Java", "Spring Boot", "Stripe API", "Spring Security", "Redis", "MySQL", "AWS", "JUnit"],
    responsibilities: [
      "Developed the stripe-provider and payment-validation microservices using Java and Spring Boot.",
      "Analyzed Stripe integration documentation and collaborated with the team on the end-to-end integration approach.",
      "Integrated the Stripe REST API to create Checkout Sessions.",
      "Built a modular business validation framework designed for adding and maintaining rules; implemented field validation with Spring Validation and cached business rules with Redis.",
      "Secured APIs with HMAC-SHA256 request authentication and data-integrity checks using Spring Security, and configured Basic Auth for communication with Stripe APIs.",
      "Created custom error codes and Spring exception handling for consistent error responses.",
      "Processed incoming Stripe webhook events and wrote unit tests using JUnit and Mockito.",
      "Implemented payment persistence with Spring Data JPA and MySQL; gained hands-on experience with AWS EC2, RDS, and Secrets Manager.",
      "Integrated Spring Cloud Config for centralized configuration across microservices.",
      "Applied Strategy and Builder patterns and object-oriented design principles to keep services modular and maintainable."
    ],
    technologyGroups: {
      "Languages and frameworks": [
        "Java",
        "Spring Boot",
        "Spring Validation",
        "Spring Data JPA",
        "Spring Security",
        "Spring Cloud Config",
        "Spring Cloud Circuit Breaker",
        "Eureka Service Registry",
        "Tomcat"
      ],
      "Payments and APIs": [
        "Stripe REST API",
        "RESTful APIs",
        "JSON",
        "Swagger UI",
        "Postman",
        "cURL",
        "Jackson"
      ],
      "Security and caching": [
        "HMAC-SHA256",
        "Basic Auth",
        "Redis",
        "Spring Security"
      ],
      "Data and cloud": ["MySQL", "AWS EC2", "AWS RDS", "AWS Secrets Manager"],
      "Testing and build": ["JUnit", "Mockito", "Maven", "Code Coverage"],
      "Engineering and delivery": [
        "Git",
        "Bitbucket",
        "SourceTree",
        "Jira",
        "Scrum",
        "Agile Development",
        "SLF4J",
        "Logback",
        "Lombok",
        "Design Patterns",
        "Performance Tuning",
        "Code Review",
        "Debugging and Troubleshooting",
        "Data Structures and Algorithms",
        "GitHub Copilot",
        "ChatGPT",
        "DBeaver",
        "VS Code",
        "MobaXterm"
      ]
    },
    repo: "https://bitbucket.org/sunil-gabbila_2003/payment-validation-service/src/main/"
    
  }
];
