export interface Contact {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface ExperienceHighlight {
  text: string;
}

export interface ProjectEntry {
  id: string;
  title: string;
  period?: string;
  region?: string;
  description: string;
  technologies: string[];
  highlights: string[];
}

export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  type: string;
  startDate: string;
  endDate: string;
  location?: string;
  summary?: string;
  highlights: ExperienceHighlight[];
  projects?: ProjectEntry[];
}

export interface EducationEntry {
  id: string;
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
}

export interface TrainingEntry {
  id: string;
  title: string;
  institution: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface LanguageEntry {
  language: string;
  level: string;
}

export interface Portfolio {
  name: string;
  title: string;
  tagline: string;
  summary: string;
  contact: Contact;
  skills: SkillGroup[];
  experience: ExperienceEntry[];
  projects: ProjectEntry[];
  education: EducationEntry[];
  training: TrainingEntry[];
  interests: string[];
  languages: LanguageEntry[];
}
