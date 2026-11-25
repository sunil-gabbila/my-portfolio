// src/data/projects.js
export default [
  {
    id: 1,
    title: "FixFlow",
    category: "Java Microservices Platform",
    description:
      "A smart maintenance and complaint management platform built as a Java microservices application.",
    features: [
      "Identity management with JWT authentication",
      "Role-based access control",
      "Maintenance request and complaint workflows",
      "Microservices architecture with service integrations",
      "Persistent data with MySQL"
    ],
    technologies: ["Java 21", "Spring Boot", "Spring Cloud", "Microservices", "Apache Kafka", "MySQL", "React"],
    repo: "https://github.com/sunil-gabbila/fixflow-maintenance-platform"
  },
  {
    id: 2,
    title: "Café Management System",
    category: "Full-Stack Application",
    description:
      "A café operations application combining an Angular interface with Spring Boot services and MySQL persistence.",
    features: [
      "Menu management",
      "Order processing",
      "Billing workflows",
      "REST API communication",
      "MySQL-backed data storage"
    ],
    technologies: ["Angular", "Java", "Spring Boot", "MySQL", "REST APIs"]
  },
  {
    id: 5,
    title: "Payment Integration System",
    category: "Spring Boot Microservices",
    description:
      "A microservices-based payment integration built with Spring Boot and Stripe APIs, including payment validation and webhook processing.",
    features: [
      "Stripe Checkout Session integration",
      "Payment request validation",
      "Stripe webhook event processing",
      "Secure request handling and consistent API errors",
      "Payment persistence with Spring Data JPA and MySQL"
    ],
    technologies: ["Java", "Spring Boot", "Microservices", "Stripe API", "Spring Security", "Redis", "MySQL", "AWS", "JUnit"],
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
