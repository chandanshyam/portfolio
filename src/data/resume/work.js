/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
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
    name: 'The Donovan\'s Venom 501c3',
    position: 'Back End Developer',
    startDate: '2025-07-01',
    highlights: [
      'Led a team of five backend developers to ensure high-quality delivery of MVP releases.',
      'Owned sprint operations by creating and assigning stories, estimating story points, and tracking progress.',
      'Implemented PayPal integration for seamless payment processing during checkout and membership purchases.',
      'Developed authentication middleware to enforce role-based access for members and guests.',
    ],
  },
  {
    name: 'FreshFrosh LLC',
    position: 'Software Engineer (Volunteer)',
    startDate: '2025-02-01',
    endDate: '2025-07-30',
    highlights: [
      'Developed an AI resume parser using Firebase Functions and OpenAI API, improving processing efficiency and accuracy.',
      'Implemented Google OAuth with Firebase Authentication, enhancing user security and maintainability.',
      'Engineered chat persistence for a Node.js chatbot using Firebase Firestore, enabling real-time message storage and retrieval.',
      'Applied GCP IAM policies and managed secrets via Secret Manager, reducing unauthorized access incidents by 40%.',
    ],
  },
  {
    name: 'FordPro',
    position: 'Software Engineer',
    startDate: '2023-02-01',
    endDate: '2023-08-01',
    highlights: [
      'Upgraded Java Logging Library to Java 17 and Spring Boot, improving system observability and reliability.',
      'Automated Datadog metric integration using Terraform, reducing integration time by 95%.',
      'Led POCs for frontend observability, establishing organization-wide policies for Java/React and Node/React projects.',
      'Increased code coverage by 80%, improving code compliance and quality.',
      'Managed Agile project workflows using Rally (now CA Agile Central), tracking user stories, sprints, and tasks.',
    ],
  },
  {
    name: 'IronMountain India',
    position: 'Java Software Engineer',
    startDate: '2021-09-01',
    endDate: '2023-01-11',
    highlights: [
      'Redesigned engineering processes for bug tracking, meetings, and standups. Improved culture for code reviews, blameless post-mortems, and retrospectives.',
      'Collaborated with product managers to define project requirements and shape application features.',
      'Engineered multi-language support for 20 languages globally, optimizing user experience with REST API development.',
      'Migrated legacy systems to modern JavaScript frameworks, achieving 15% less memory usage, 30% faster load times, and 20% reduced development time.',
      'Assisted in onboarding and training 5 new engineers, including interviews and HR collaboration.',
      'Lead re-design of internal APIs for inference.',
    ],
  },
  {
    name: 'IronMountain India',
    position: 'Software Engineer Associate',
    startDate: '2019-09-04',
    endDate: '2021-01-09',
    highlights: [
      'Led the migration of an enterprise web application’s SQL database from Oracle to MSSQL, ensuring data integrity and minimizing downtime.',
      'Developed custom APIs for client web applications, improving data retrieval speeds by 60%.',
      'Migrated from MVC to MVVM architecture, improving scalability and maintainability.',
      'Applied Agile principles using Jira, participating in Scrum ceremonies.',
    ],
  },
];

export default work;
