export interface BasicInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  about: string;
  profileImage: string;
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string;
  technologies: string[];
}

export interface Project {
  name: string;
  description: string;
  techStack: string[];
  github: string;
  liveUrl: string;
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
}

export interface Profile {
  basicInfo: BasicInfo;
  socialLinks: SocialLink[];
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
}
