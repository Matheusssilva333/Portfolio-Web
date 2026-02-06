import { Project, Skill, Experience } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Radar de monitoramento de drones",
    description: "Sistema de radar integrado com IA para resgate.",
    tags: ["Python", "Visão Computacional"],
    imageUrl:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/Matheusssilva333/Radar-de-monitoramento-rastreamento-e-controle-de-drone-de-resgate",
  },
];

export const SKILLS: Skill[] = [
  { name: "Python", category: "core", proficiency: 98 },
  { name: "Machine Learning", category: "core", proficiency: 85 },
  { name: "Java", category: "core", proficiency: 92 },
];

export const EXPERIENCE: Experience[] = [];

