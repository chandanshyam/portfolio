const skills = [
  {
    title: 'Java',
    competency: 5,
    category: ['Languages', 'Web Development'],
  },
  {
    title: 'C',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'C++',
    competency: 1,
    category: ['Languages'],
  },
  {
    title: 'C#',
    competency: 4,
    category: ['Languages', 'Web Development'],
  },
  {
    title: 'MATLAB',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Python',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'SQL',
    competency: 4,
    category: ['Languages', 'Databases', 'Web Development'],
  },
  {
    title: 'JavaScript',
    competency: 4,
    category: ['Languages', 'Web Development'],
  },
  {
    title: 'React',
    competency: 3,
    category: ['Frameworks', 'Javascript', 'Web Development'],
  },
  {
    title: 'Next.js',
    competency: 2,
    category: ['Frameworks', 'Javascript', 'Web Development'],
  },
  {
    title: 'EXTJS',
    competency: 3,
    category: ['Frameworks', 'Javascript', 'Web Development'],
  },
  {
    title: 'Spring',
    competency: 4,
    category: ['Frameworks', 'Web Development'],
  },
  {
    title: 'Hibernate',
    competency: 3,
    category: ['Frameworks', 'Web Development'],
  },
  {
    title: 'Open Telemetry',
    competency: 3,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Tekton',
    competency: 3,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'GIT',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Datadog',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'SonarQube',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'FOSSA',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Apache Maven',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Production Support Tools',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Linux',
    competency: 4,
    category: ['Platforms', 'Web Development'],
  },
  {
    title: 'Google Cloud Platform (GCP)',
    competency: 4,
    category: ['Platforms', 'Cloud', 'Web Development'],
  },
  {
    title: 'RedHat OpenShift',
    competency: 3,
    category: ['Platforms', 'Cloud', 'Web Development'],
  },
  {
    title: 'Docker',
    competency: 3,
    category: ['Platforms', 'Tools', 'Cloud'],
  },
  {
    title: 'Kubernetes',
    competency: 2,
    category: ['Platforms', 'Cloud', 'Tools'],
  },
  {
    title: 'Database Development',
    competency: 4,
    category: ['Databases', 'Web Development'],
  },
  {
    title: 'PostgreSQL',
    competency: 4,
    category: ['Databases', 'Web Development'],
  },
  {
    title: 'Firebase',
    competency: 4,
    category: ['Platforms', 'Cloud', 'Web Development'],
  },
  {
    title: 'Firestore',
    competency: 4,
    category: ['Databases', 'Cloud', 'Web Development'],
  },
  {
    title: 'Microsoft Azure',
    competency: 3,
    category: ['Platforms', 'Cloud', 'Web Development'],
  },
  {
    title: 'PayPal Integration',
    competency: 4,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Bun.js',
    competency: 3,
    category: ['Tools', 'Javascript', 'Web Development'],
  },
  {
    title: 'Drizzle ORM',
    competency: 3,
    category: ['Frameworks', 'Databases', 'Web Development'],
  },
  {
    title: 'OpenAI API',
    competency: 4,
    category: ['Tools', 'Web Development'],
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
