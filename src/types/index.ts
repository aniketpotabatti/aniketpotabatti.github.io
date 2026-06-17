export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  url: string;
}

export interface ExperienceItem {
  title: string;
  period: string;
  organization: string;
  description: string;
  tags: string[];
}

export interface SkillCard {
  icon: string;
  title: string;
  description: string;
  tags: string[];
}

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  url: string;
}

export interface SocialLink {
  label: string;
  url: string;
}

export interface NavItem {
  label: string;
  sectionId: string;
}
