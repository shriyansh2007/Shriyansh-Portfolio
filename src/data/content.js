// ==========================================================================
// All personal content lives here so you can update copy without touching
// component logic. Edit freely — nothing else needs to change.
// ==========================================================================

export const PROFILE = {
  name: 'Shriyansh Goyal',
  role: 'Full Stack Web Developer & Freelancer',
  tagline: 'ECE @ Netaji Subhas University of Technology',
  location: 'New Delhi, India',
  github: 'https://github.com/shriyansh2007',
  linkedin: 'https://www.linkedin.com/in/shriyansh-g-a77b05313/',
  email: 'mailto:goyalshriyansh66@gmail.com',
}

export const ABOUT = {
  paragraphs: [
    "I'm a third-year Electronics & Communication Engineering student at Netaji Subhas University of Technology who builds full-stack products and freelances on the side. My background sits at the intersection of signals and software — I spend as much time reasoning about circuits and probability as I do shipping React apps.",
    "I like problems with a clear signal underneath the noise: distributed systems that need to stay consistent, interfaces that need to feel instant, and models that need to generalize. Whether it's a consensus algorithm or a client-facing product, I care about the same thing — building it correctly, then building it well.",
  ],
  stats: [
    { label: 'Year', value: '3rd', sub: 'B.Tech ECE, NSUT' },
    { label: 'Focus', value: 'Full-Stack', sub: 'Web + ML systems' },
    { label: 'Mode', value: 'Freelance', sub: 'Open to projects' },
  ],
}

export const SKILLS = [
  {
    group: 'Programming Languages',
    id: 'lang',
    items: ['Python', 'Java', 'JavaScript', 'SQL'],
  },
  {
    group: 'Machine Learning & AI',
    id: 'ml',
    items: [
      'PyTorch',
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Google Colab',
      'Supervised Learning',
      'Classification',
      'Feature Engineering',
      'Model Evaluation',
      'Hyperparameter Tuning',
    ],
  },
  {
    group: 'Web Development',
    id: 'web',
    items: ['React.js', 'Next.js', 'Node.js', 'HTML5', 'CSS3', 'REST APIs', 'MongoDB'],
  },
  {
    group: 'Developer Tools',
    id: 'tools',
    items: ['Git', 'GitHub', 'Docker', 'AWS', 'Linux'],
  },
  {
    group: 'Core Concepts',
    id: 'core',
    items: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'Linear Algebra',
      'Probability & Statistics',
      'Digital Signal Processing',
    ],
  },
]

export const COURSEWORK = [
  'Machine Learning',
  'Data Structures and Algorithms',
  'Linear Algebra',
  'Probability and Statistics',
  'Digital Signal Processing',
  'Operating Systems',
]

export const PROJECTS = [
  {
    id: '01',
    name: 'Off-Image',
    description:
      'A tool built around image manipulation and processing — exploring how images can be transformed, analyzed, and served efficiently within a full-stack pipeline.',
    tags: ['React', 'Node.js', 'Image Processing'],
    link: 'https://github.com/shriyansh2007/Off-Image',
  },
  {
    id: '02',
    name: 'Raft Algorithm',
    description:
      'An implementation of the Raft consensus algorithm — leader election, log replication, and fault tolerance for distributed systems, built to understand consensus from first principles.',
    tags: ['Distributed Systems', 'Python', 'Consensus'],
    link: 'https://github.com/shriyansh2007/raft-algorithm',
  },
  {
    id: '03',
    name: 'BizBridge',
    description:
      'A full-stack platform connecting businesses — end-to-end product work spanning frontend, backend, and database design.',
    tags: ['Full Stack', 'MongoDB', 'REST APIs'],
    link: 'https://github.com/shriyansh2007/BizBridge',
  },
]

export const NAV_LINKS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]
