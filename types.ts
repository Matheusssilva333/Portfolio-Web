
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
}

export interface Skill {
  name: string;
  category: 'core' | 'framework' | 'tool';
  proficiency: number; // 0-100
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
  achievements: string[];
}
