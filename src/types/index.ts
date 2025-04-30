export interface NavLink {
  id: string;
  title: string;
  path: string;
}

export interface Skill {
  id: string;
  name: string;
  icon: string;
  level: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  codeUrl: string;
}

export interface Social {
  id: string;
  name: string;
  url: string;
  icon: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string[];
}