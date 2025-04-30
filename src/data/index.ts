import { NavLink, Project, Skill, Social, Experience } from '../types';

export const navLinks: NavLink[] = [
  {
    id: 'home',
    title: 'Home',
    path: '#home',
  },
  {
    id: 'about',
    title: 'About',
    path: '#about',
  },
  {
    id: 'projects',
    title: 'Projects',
    path: '#projects',
  },
  {
    id: 'experience',
    title: 'Experience',
    path: '#experience',
  },
  {
    id: 'contact',
    title: 'Contact',
    path: '#contact',
  },
];

export const skills: Skill[] = [
  {
    id: 'react',
    name: 'React.js',
    icon: 'react',
    level: 90,
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    icon: 'javascript',
    level: 85,
  },
  {
    id: 'python',
    name: 'Python',
    icon: 'python',
    level: 80,
  },
  {
    id: 'django',
    name: 'Django',
    icon: 'django',
    level: 85,
  },
  {
    id: 'html',
    name: 'HTML5',
    icon: 'html',
    level: 95,
  },
  {
    id: 'css',
    name: 'CSS3',
    icon: 'css',
    level: 90,
  },
  {
    id: 'git',
    name: 'Git',
    icon: 'git',
    level: 85,
  },
  {
    id: 'rest',
    name: 'REST APIs',
    icon: 'api',
    level: 80,
  },
];

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Aashram Services Platform',
    description:
      'A comprehensive web application for managing accommodation, donations, and services for spiritual institutions. Built with React.js frontend and Django backend, featuring secure payment integration and user authentication.',
    image: 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React.js', 'Django', 'REST API', 'Payment Integration'],
    demoUrl: '#',
    codeUrl: 'https://github.com/Nawalnayak',
  },
  {
    id: 'project-2',
    title: 'Hospital Management System',
    description:
      'A complete hospital management solution with patient records, appointment scheduling, and medical history tracking. Features modular components for staff and admin dashboards with secure data handling.',
    image: 'https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React.js', 'Django', 'Bootstrap', 'Database'],
    demoUrl: '#',
    codeUrl: 'https://github.com/Nawalnayak',
  },
  {
    id: 'project-3',
    title: 'Personal Portfolio Website',
    description:
      'A modern and responsive portfolio website built with React.js and Tailwind CSS. Features dark mode, smooth animations, and a contact form. Showcases projects, skills, and professional experience.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React.js', 'Tailwind CSS', 'TypeScript'],
    demoUrl: '#',
    codeUrl: 'https://github.com/Nawalnayak',
  }
];

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    role: 'Web Development Intern',
    company: 'Adyant SoftTech',
    duration: 'Jan 2025 - Present',
    description: [
      'Working on front-end and back-end development for client projects',
      'Collaborating with senior developers to design and deploy user-centric applications',
      'Gaining practical experience in API development, version control, and debugging',
      'Contributing to the development of scalable web solutions'
    ],
  },
  {
    id: 'exp-2',
    role: 'MCA Student',
    company: 'Shri Rawatpura Sarkar University',
    duration: '2023 - Present',
    description: [
      'Pursuing Master of Computer Applications with focus on advanced programming concepts',
      'Working on academic projects involving full-stack development',
      'Learning and implementing modern web technologies',
      'Participating in technical workshops and coding competitions'
    ],
  },
  {
    id: 'exp-3',
    role: 'BCA Graduate',
    company: 'Maharaja Agrasen International College',
    duration: '2020 - 2023',
    description: [
      'Completed Bachelor of Computer Applications with 7.2 CGPA',
      'Developed strong foundation in computer science fundamentals',
      'Participated in college technical events and workshops',
      'Completed various programming projects and assignments'
    ],
  }
];

export const socials: Social[] = [
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/Nawalnayak',
    icon: 'github',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/nawal-nayak-133ba9201',
    icon: 'linkedin',
  }
];