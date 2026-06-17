export interface PersonalData {
  name: string;
  profile: string;
  designation: string;
  description: string;
  email: string;
  phone: string;
  github: string;
  notion: string;
  velog: string;
  linkedIn: string;
  resume: string;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  duration: string;
  bullets: string[];
  tools: string[];
}

export interface Project {
  id: number;
  name: string;
  role: string;
  summary: string;
  tools: string[];
  link: string;
  linkLabel: string;
}

export interface SkillGroup {
  title: string;
  icons: string[];
  extras: string[];
}

export interface Article {
  href: string;
  headline: string;
  context: string;
  date: string;
  tags?: string[];
  thumbnail: string;
}
