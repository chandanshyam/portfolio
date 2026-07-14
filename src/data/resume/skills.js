const skills = [
  // Languages
  {
    title: 'Java',
    competency: 5,
    category: ['Languages', 'Backend'],
  },
  {
    title: 'TypeScript',
    competency: 5,
    category: ['Languages', 'Frontend'],
  },
  {
    title: 'JavaScript',
    competency: 5,
    category: ['Languages', 'Frontend'],
  },
  {
    title: 'SQL',
    competency: 4,
    category: ['Languages', 'Databases'],
  },
  {
    title: 'Python',
    competency: 4,
    category: ['Languages', 'AI/ML'],
  },
  // Backend
  {
    title: 'Spring Boot',
    competency: 5,
    category: ['Backend'],
  },
  {
    title: 'Hibernate',
    competency: 4,
    category: ['Backend', 'Databases'],
  },
  {
    title: 'Node.js',
    competency: 4,
    category: ['Backend'],
  },
  {
    title: 'REST APIs',
    competency: 5,
    category: ['Backend'],
  },
  // Frontend
  {
    title: 'React',
    competency: 4,
    category: ['Frontend'],
  },
  {
    title: 'Next.js',
    competency: 4,
    category: ['Frontend'],
  },
  {
    title: 'Angular',
    competency: 3,
    category: ['Frontend'],
  },
  // Databases
  {
    title: 'PostgreSQL',
    competency: 5,
    category: ['Databases'],
  },
  {
    title: 'MSSQL',
    competency: 4,
    category: ['Databases'],
  },
  {
    title: 'Oracle',
    competency: 3,
    category: ['Databases'],
  },
  {
    title: 'Prisma',
    competency: 4,
    category: ['Databases', 'Backend'],
  },
  {
    title: 'Knex',
    competency: 3,
    category: ['Databases', 'Backend'],
  },
  // Cloud & DevOps
  {
    title: 'Docker',
    competency: 4,
    category: ['Cloud & DevOps'],
  },
  {
    title: 'Kubernetes',
    competency: 3,
    category: ['Cloud & DevOps'],
  },
  {
    title: 'AWS',
    competency: 4,
    category: ['Cloud & DevOps'],
  },
  {
    title: 'GCP',
    competency: 4,
    category: ['Cloud & DevOps'],
  },
  {
    title: 'GitHub Actions',
    competency: 4,
    category: ['Cloud & DevOps'],
  },
  {
    title: 'OpenShift',
    competency: 3,
    category: ['Cloud & DevOps'],
  },
  {
    title: 'Terraform',
    competency: 3,
    category: ['Cloud & DevOps'],
  },
  {
    title: 'Kafka',
    competency: 4,
    category: ['Cloud & DevOps', 'Backend'],
  },
  // Observability
  {
    title: 'OpenTelemetry',
    competency: 4,
    category: ['Observability'],
  },
  {
    title: 'Datadog',
    competency: 4,
    category: ['Observability'],
  },
  {
    title: 'CloudWatch',
    competency: 3,
    category: ['Observability'],
  },
  // Testing
  {
    title: 'JUnit',
    competency: 4,
    category: ['Testing'],
  },
  {
    title: 'Jest',
    competency: 4,
    category: ['Testing'],
  },
  {
    title: 'Playwright',
    competency: 3,
    category: ['Testing'],
  },
  // AI/ML
  {
    title: 'OpenAI API',
    competency: 4,
    category: ['AI/ML'],
  },
  {
    title: 'Google Gemini API',
    competency: 4,
    category: ['AI/ML'],
  },
  {
    title: 'Claude Code / MCP',
    competency: 4,
    category: ['AI/ML'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
