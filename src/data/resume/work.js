/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'BusToShow',
    position: 'Full Stack Software Engineer',
    url: 'https://bustoshow.org',
    startDate: '2025-12-01',
    highlights: [
      'Built and operate a production ticketing SaaS platform end-to-end using Docker, Kafka, and Git, delivering payment processing, RBAC, event management, and operational workflows with reliable service uptime.',
      'Developed React + TypeScript interfaces alongside backend services and REST APIs for scalable, maintainable feature delivery.',
      'Designed PostgreSQL schemas, transactional flows, and Stripe financial integrations supporting secure checkout and order-lifecycle management.',
      'Architected backend services in a multi-tenant model with logical data isolation and role-based authorization for scalable customer onboarding.',
      'Designed and optimized RESTful APIs following HTTP standards, improving API consistency and reducing client-side errors by 30%.',
      'Implemented rate limiting and request-validation middleware to keep APIs reliable under bursts supporting 50K+ concurrent users.',
      'Introduced structured logging and distributed tracing with OpenTelemetry + Datadog, and drove incident response that reduced MTTR by 40%.',
    ],
  },
  {
    name: 'The Donovan\'s Venom Non Profit (Contract)',
    position: 'Software Engineer Lead',
    startDate: '2025-03-01',
    endDate: '2025-12-01',
    highlights: [
      'Led full-stack development on a nonprofit platform using Node.js, TypeScript, React, and PostgreSQL, shipping MVP releases on two-week Agile cycles.',
      'Built fault-tolerant transactional systems with Redis queues for asynchronous event processing and scalable backend workflows.',
      'Integrated Stripe, PayPal, and Firebase with retry logic and exponential backoff to improve payment reliability.',
      'Designed API contracts with OpenAPI/Swagger for partner integrations, reducing onboarding time for external systems.',
      'Applied TDD with Jest and Supertest, maintaining full coverage on payment and operational flows to prevent regressions.',
      'Managed IAM policies and secure secret handling, and built chat persistence for a Node.js chatbot with Firebase Firestore.',
    ],
  },
  {
    name: 'Ford Motors Pvt. Ltd.',
    position: 'Site Reliability Engineer',
    startDate: '2023-02-01',
    endDate: '2023-08-01',
    highlights: [
      'Built observability for Java and Node.js microservices with OpenTelemetry, Datadog APM, and GCP Cloud Run, enabling faster detection of performance issues and reduced MTTR.',
      'Automated Datadog metric integration using Terraform, reducing onboarding time for engineering teams by 95%.',
      'Defined SLIs/SLOs and production monitoring standards, maintaining 99.9% uptime across distributed Kafka-backed systems.',
      'Collaborated with distributed teams via GitHub Actions and incident-response runbooks to improve operational visibility and resolution times.',
    ],
  },
  {
    name: 'Iron Mountain India Pvt. Ltd.',
    position: 'Full Stack Java Developer',
    startDate: '2019-09-04',
    endDate: '2023-01-11',
    highlights: [
      'Developed and maintained enterprise applications with Java, Spring Boot, Next.js, and OpenShift under RBAC controls, supporting large-scale document management.',
      'Designed Spring Boot REST APIs in Java to process millions of records and improve downstream data-retrieval performance.',
      'Implemented Hibernate ORM with optimized indexing and query tuning, improving database performance by 25%.',
      'Migrated monolithic Java applications to modular microservices using Docker and OpenTelemetry tracing, improving deployment speed and observability.',
      'Led migration of an enterprise Order Tracking database from Oracle to MSSQL, transferring 100M+ records with zero data loss and minimal downtime.',
      'Collaborated in Agile Scrum teams using JIRA and CI/CD on OpenShift to plan sprints, review code, and coordinate on-time releases.',
    ],
  },
];

export default work;
