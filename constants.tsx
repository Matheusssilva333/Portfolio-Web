
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Radar de monitoramento, rastreamento e controle de drones de resgate',
    description: 'Prototipagem de um sistema de radar integrado ao poder do Gemini 3 Flash desenvolvido para um hackathon.',
    tags: ['Python', 'Visão Computacional'],
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    link: 'https://github.com/Matheusssilva333/Radar-de-monitoramento-rastreamento-e-controle-de-drone-de-resgate'
  },
  {
    id: '2',
    title: 'Agente de IA para consultoria de marketing digital ',
    description: 'Este projeto teve como objetivo o desenvolvimento de um agente de IA poderoso capaz de fazer qualquer empresa crescer no Marketing Digital.',
    tags: ['Java', 'Manus AI API'],
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800',
    link: 'https://github.com/Matheusssilva333/IA-de-Consultoria-de-Marketing-Digital'
  },
  {
    id: '3',
    title: 'Sistema de geração de dashboards para gestores de tráfego',
    description: 'Gerador de dashboards moderno e profissional para gestores de tráfego.',
    tags: ['Scikit-learn', 'Pandas', 'Docker'],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bbbda536639a?auto=format&fit=crop&q=80&w=800',
    link: 'https://github.com/Matheusssilva333/Sistema-de-Dashboards.git'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Python', category: 'core', proficiency: 98 },
  { name: 'Machine Learning', category: 'core', proficiency: 85 },
  { name: 'Java', category: 'core', proficiency: 92 },
  { name: 'Flask / Numpy / Pandas', category: 'framework', proficiency: 80 },
  { name: 'Spring AI', category: 'framework', proficiency: 90 },
  { name: 'Javascript', category: 'tool', proficiency: 75 },
  { name: 'Agentes de IA', category: 'tool', proficiency: 88 },
];

