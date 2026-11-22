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
    repo: "https://github.com/sunil-gabbila/sales-savvy"
  },
  {
    id: 2,
    title: "Secure Authentication System",
    category: "Backend Development",
    description:
      "A backend authentication system exploring secure login workflows, password encryption, JWT-based authentication, role-based authorization, and Spring Security integration.",
    features: [
      "User authentication",
      "Password hashing using BCrypt",
      "JWT token generation and validation",
      "Spring Security filter chain",
      "Role-based access control",
      "Protected endpoints"
    ],
    technologies: ["Java", "Spring Boot", "Spring Security", "JWT", "MySQL"],
    liveDemo: "#",
    repo: "https://github.com/sunil-gabbila/secure-auth"
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
    repo: "https://github.com/sunil-gabbila/payment-api"
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
    repo: "https://github.com/sunil-gabbila/advanced-dsa-patterns"
  }
];
