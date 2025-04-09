import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Full Stack Development',
    icon: frontend,
  },
  {
    title: 'Machine Learning',
    icon: backend,
  },
  {
    title: 'Mobile App Development',
    icon: ux,
  },
  {
    title: 'Cloud & DevOps',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'Java',
    icon: javascript, // Using JavaScript icon as placeholder for Java
  },
  {
    name: 'Python',
    icon: nodejs, // Using Node.js icon as placeholder for Python
  },
  {
    name: 'C++',
    icon: typescript, // Using TypeScript icon as placeholder for C++
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Django',
    icon: redux, // Using Redux icon as placeholder for Django
  },
  {
    name: 'Ruby on Rails',
    icon: rubyrails,
  },
  {
    name: 'Docker',
    icon: docker,
  },
  {
    name: 'PostgreSQL',
    icon: postgresql,
  },
  {
    name: 'Git',
    icon: git,
  },
  {
    name: 'PyTorch',
    icon: graphql, // Using GraphQL icon as placeholder for PyTorch
  },
  {
    name: 'HTML/CSS',
    icon: html,
  },
  {
    name: 'UI/UX',
    icon: figma,
  },
  {
    name: 'AWS',
    icon: tailwind, // Using Tailwind icon as placeholder for AWS
  },
];

const experiences = [
  {
    title: 'IT Support Assistant',
    company_name: 'The University of Iowa IT Services',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'January 2025 - Present',
  },
  {
    title: 'Specialist Assistant',
    company_name: 'The University of Iowa IT Services',
    icon: microverse,
    iconBg: '#333333',
    date: 'September 2024 - January 2025',
  },
  {
    title: 'Software Developer Intern',
    company_name: 'The University of Iowa IT Services',
    icon: kelhel,
    iconBg: '#333333',
    date: 'June 2023 - August 2024',
  },
  {
    title: 'Engineering Tutor',
    company_name: 'The University of Iowa TRIO SSS',
    icon: dcc,
    iconBg: '#333333',
    date: 'October 2024 - December 2024',
  },
  {
    title: 'Software Engineering Research Assistant',
    company_name: 'The University of Iowa Department of Engineering',
    icon: microverse,
    iconBg: '#333333',
    date: 'August 2023 - May 2024',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'ATHLETIC INSIDER',
    description: 'A web application for sports analytics with automated branch creation, RESTful API endpoints, and containerized microservices.',
    tags: [
      {
        name: 'django',
        color: 'blue-text-gradient',
      },
      {
        name: 'react',
        color: 'green-text-gradient',
      },
      {
        name: 'postgresql',
        color: 'pink-text-gradient',
      },
      {
        name: 'docker',
        color: 'blue-text-gradient',
      },
    ],
    image: komikult,
    repo: '#',
    demo: '#',
  },
  {
    id: 'project-2',
    name: 'SmartLink',
    description: 'A two-way ML compression framework using autoencoders to extend wireless range and reliability for low-latency video transmission.',
    tags: [
      {
        name: 'c++',
        color: 'blue-text-gradient',
      },
      {
        name: 'python',
        color: 'green-text-gradient',
      },
      {
        name: 'pytorch',
        color: 'pink-text-gradient',
      },
      {
        name: 'raspberry pi',
        color: 'blue-text-gradient',
      },
    ],
    image: leaderboard,
    repo: '#',
    demo: '#',
  },
  {
    id: 'project-3',
    name: 'Shards of the Grids',
    description: 'A responsive web app with 90% test coverage, strict Git workflows, and comprehensive documentation for project transparency.',
    tags: [
      {
        name: 'ruby on rails',
        color: 'blue-text-gradient',
      },
      {
        name: 'haml',
        color: 'green-text-gradient',
      },
      {
        name: 'postgres',
        color: 'pink-text-gradient',
      },
      {
        name: 'heroku',
        color: 'blue-text-gradient',
      },
    ],
    image: math,
    repo: '#',
    demo: '#',
  },
  {
    id: 'project-4',
    name: 'Flowers Image Classifier',
    description: 'A deep learning model with PyTorch for flower image classification, featuring data augmentation and a user-friendly CLI.',
    tags: [
      {
        name: 'python',
        color: 'blue-text-gradient',
      },
      {
        name: 'pytorch',
        color: 'green-text-gradient',
      },
      {
        name: 'vgg16',
        color: 'pink-text-gradient',
      },
      {
        name: 'matplotlib',
        color: 'blue-text-gradient',
      },
    ],
    image: movie,
    repo: '#',
    demo: '#',
  },
  {
    id: 'project-5',
    name: 'ISocial',
    description: 'An Android app with Java integrating Google Auth for secure user access, Firebase for real-time data storage, and refined UI/UX design.',
    tags: [
      {
        name: 'java',
        color: 'blue-text-gradient',
      },
      {
        name: 'firebase',
        color: 'green-text-gradient',
      },
      {
        name: 'ui/ux',
        color: 'pink-text-gradient',
      },
      {
        name: 'android studio',
        color: 'blue-text-gradient',
      },
    ],
    image: nyeusi,
    repo: '#',
    demo: '#',
  },
];

export { services, technologies, experiences, projects };
