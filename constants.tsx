import { Project, Skill, Experience } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Radar de monitoramento de drones",
    description: "Sistema de radar integrado com IA para resgate.",
    tags: ["Python", "Visão Computacional"],
    imageUrl: "https://images.icon-icons.com/4197/PNG/96/communication_network_background_digital_technology_software_icon_262677.png",
    link: "https://github.com/Matheusssilva333/Radar-de-monitoramento-rastreamento-e-controle-de-drone-de-resgate",
  },
  {
    id: "2",
    title: "IA de Consultoria de Marketing Digital",
    description: "Agente de IA em Java integrado à API do Manus AI que atua como consultor de marketing digital para crescimento empresarial.",
    tags: ["Java", "IA", "API Manus AI"],
    imageUrl: "https://images.icon-icons.com/119/PNG/96/presentation_software_19674.png",
    link: "https://github.com/Matheusssilva333/IA-de-Consultoria-de-Marketing-Digital",
  },
  {
    id: "3",
    title: "Sistema de Dashboards para Gestão de Tráfego",
    description: "Sistema empresarial completo de geração de dashboards dinâmicos com múltiplas camadas de segurança para gestores de tráfego.",
    tags: ["Python", "Dashboards", "Analytics"],
    imageUrl: "https://images.icon-icons.com/82/PNG/96/apps_system_software_update_15746.png",
    link: "https://github.com/Matheusssilva333/Sistema-de-Dashboards",
  },
  {
    id: "4",
    title: "ShopeeAds Manager",
    description: "Plataforma SaaS profissional para gestão de comissões, vendas e anúncios para afiliados da Shopee. Construída com FastAPI e Streamlit.",
    tags: ["Python", "FastAPI", "Streamlit", "SaaS"],
    imageUrl: "https://images.icon-icons.com/1024/PNG/96/software_256_icon-icons.com_76005.png",
    link: "https://github.com/Matheusssilva333/ShopeeAds-Manager",
  },
  {
    id: "5",
    title: "Calculadora Industrial",
    description: "Calculadora especializada para cálculos mecânicos industriais incluindo RPM, torque e potência para motores elétricos.",
    tags: ["JavaScript", "HTML", "CSS"],
    imageUrl: "https://images.icon-icons.com/3254/PNG/96/report_calculator_pie_chart_icon_205718.png",
    link: "https://github.com/Matheusssilva333/Calculadora-Industrial",
  },
];

export const SKILLS: Skill[] = [
  { name: "Python", category: "core", proficiency: 95 },
  { name: "Machine Learning", category: "core", proficiency: 85 },
  { name: "Java", category: "core", proficiency: 80 },
  { name: "JavaScript", category: "core", proficiency: 75 },
  { name: "Agentes de IA", category: "core", proficiency: 82 },
  { name: "Automação de tarefas", category: "core", proficiency: 78 },
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

