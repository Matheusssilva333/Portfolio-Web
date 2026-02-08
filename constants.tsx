import { Project, Skill, Experience } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Radar de monitoramento de drones",
    description: "Sistema de radar integrado com IA para resgate.",
    tags: ["Python", "Visão Computacional"],
    imageUrl: "https://via.placeholder.com/800x600/0ea5e9/ffffff?text=Radar+IA+Drone",
    link: "https://github.com/Matheusssilva333/Radar-de-monitoramento-rastreamento-e-controle-de-drone-de-resgate",
  },
  {
    id: "2",
    title: "IA de Consultoria de Marketing Digital",
    description: "Agente de IA em Java integrado à API do Manus AI que atua como consultor de marketing digital para crescimento empresarial.",
    tags: ["Java", "IA", "API Manus AI"],
    imageUrl: "https://via.placeholder.com/800x600/3b82f6/ffffff?text=IA+Marketing",
    link: "https://github.com/Matheusssilva333/IA-de-Consultoria-de-Marketing-Digital",
  },
  {
    id: "3",
    title: "Sistema de Dashboards para Gestão de Tráfego",
    description: "Sistema empresarial completo de geração de dashboards dinâmicos com múltiplas camadas de segurança para gestores de tráfego.",
    tags: ["Python", "Dashboards", "Analytics"],
    imageUrl: "https://via.placeholder.com/800x600/06b6d4/ffffff?text=Dashboard+System",
    link: "https://github.com/Matheusssilva333/Sistema-de-Dashboards",
  },
  {
    id: "4",
    title: "ShopeeAds Manager",
    description: "Plataforma SaaS profissional para gestão de comissões, vendas e anúncios para afiliados da Shopee. Construída com FastAPI e Streamlit.",
    tags: ["Python", "FastAPI", "Streamlit", "SaaS"],
    imageUrl: "https://via.placeholder.com/800x600/f97316/ffffff?text=ShopeeAds+Manager",
    link: "https://github.com/Matheusssilva333/ShopeeAds-Manager",
  },
  {
    id: "5",
    title: "Calculadora Industrial",
    description: "Calculadora especializada para cálculos mecânicos industriais incluindo RPM, torque e potência para motores elétricos.",
    tags: ["JavaScript", "HTML", "CSS"],
    imageUrl: "https://via.placeholder.com/800x600/8b5cf6/ffffff?text=Calculadora+Industrial",
    link: "https://github.com/Matheusssilva333/Calculadora-Industrial",
  },
];

export const SKILLS: Skill[] = [
  { name: "Python", category: "core", proficiency: 95 },
  { name: "Machine Learning", category: "core", proficiency: 85 },
  { name: "Java", category: "core", proficiency: 80 },
  { name: "JavaScript", category: "core", proficiency: 75 },
  { name: "FastAPI", category: "core", proficiency: 82 },
  { name: "Visão Computacional", category: "core", proficiency: 78 },
];

export const EXPERIENCE: Experience[] = [
  {
    id: "1",
    company: "Freelancer",
    position: "Desenvolvedor de sistemas",
    period: "2024 - Presente",
    description: "Desenvolvimento de soluções de IA e automações para clientes diversos. Especialização em machine learning, processamento de dados e integração de APIs de IA.",
    achievements: [
      "Desenvolvimento de sistema de IA para consultoria de marketing digital",
      "Criação de dashboards analíticos para gestão de tráfego",
      "Implementação de plataforma SaaS para e-commerce",
      "Automações com Python e integração de APIs",
    ],
  },
];

