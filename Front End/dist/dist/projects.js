// Projects Management System
class ProjectsManager {
    constructor() {
        this.projects = [
            {
                id: 1,
                title: "GenerativeSalesAgent",
                description: "Um agente de vendas e marketing digital com IA generativa, desenvolvido em Java. Integra a API do OpenAI (ChatGPT) a uma aplicação Java para criar um chatbot inteligente que responde dúvidas, recomenda serviços, qualifica leads e auxilia em estratégias de marketing digital.",
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300' fill='none'%3E%3Crect width='400' height='300' fill='%23667eea'/%3E%3Ccircle cx='200' cy='150' r='60' fill='%23764ba2'/%3E%3Cpath d='M170 130c0-5 5-10 10-10h40c5 0 10 5 10 10v40c0 5-5 10-10 10h-40c-5 0-10-5-10-10z' fill='%23fff'/%3E%3Ccircle cx='185' cy='145' r='3' fill='%23667eea'/%3E%3Ccircle cx='200' cy='145' r='3' fill='%23667eea'/%3E%3Ccircle cx='215' cy='145' r='3' fill='%23667eea'/%3E%3Cpath d='M180 160h40' stroke='%23667eea' stroke-width='2'/%3E%3C/svg%3E",
                technologies: ["Java", "API OpenAI", "DeepLearning4J"],
                category: "backend",
                status: "completed",
                github: "https://github.com/Matheusssilva333/generative-sales-agent",
                demo: "#",
                featured: true,
                year: 2024,
                features: [
                    "Chatbot com conversação natural e personalizada",
                    "Sugestão automática de serviços e produtos",
                    "Qualificação de leads e coleta de dados",
                    "Integração direta com OpenAI GPT",
                    "Customização fácil de prompts e fluxos",
                    "Exemplo de uso via terminal"
                ],
                highlights: [
                    "Uso de DeepLearning4J para manipulação de modelos e respostas baseadas em IA",
                    "Implementação de prompts generativos"
                ]
            },
            {
                id: 2,
                title: "Sistema de Gestão de Pacientes",
                description: "Aplicação em Java voltada para o gerenciamento de pacientes em uma clínica médica. Desenvolvida com menus interativos via console, permite realizar cadastros, consultas e análises de dados de forma prática e estruturada.",
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300' fill='none'%3E%3Crect width='400' height='300' fill='%2300ff88'/%3E%3Crect x='120' y='80' width='160' height='140' rx='10' fill='%23fff'/%3E%3Cpath d='M200 100v60M170 130h60' stroke='%2300ff88' stroke-width='8'/%3E%3Crect x='140' y='200' width='120' height='40' rx='5' fill='%2300ff88'/%3E%3Ctext x='200' y='225' text-anchor='middle' fill='%23fff' font-size='14' font-family='Arial'%3ESAÚDE%3C/text%3E%3C/svg%3E",
                technologies: ["Java", "Apache NetBeans", "GitHub"],
                category: "backend",
                status: "completed",
                github: "https://github.com/Matheusssilva333/sistema-gestao-pacientes",
                demo: "#",
                featured: true,
                year: 2024,
                features: [
                    "Cadastro de pacientes",
                    "Exibição da quantidade total de pacientes",
                    "Cálculo da idade média dos homens",
                    "Contagem de mulheres entre 1,60m e 1,70m com peso acima de 70kg",
                    "Contagem de pessoas com idade entre 18 e 25 anos",
                    "Exibição do paciente mais velho",
                    "Exibição da paciente mais baixa"
                ],
                highlights: [
                    "Estruturas condicionais e laços de repetição",
                    "Manipulação de listas e objetos",
                    "Modularização e boas práticas de código"
                ]
            },
            {
                id: 3,
                title: "Calculadora Mecânica",
                description: "Uma calculadora desenvolvida para engenheiros e técnicos mecânicos, capaz de realizar operações básicas e cálculos específicos de engenharia.",
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300' fill='none'%3E%3Crect width='400' height='300' fill='%230095ff'/%3E%3Crect x='100' y='60' width='200' height='180' rx='15' fill='%23fff'/%3E%3Crect x='120' y='80' width='160' height='40' rx='5' fill='%230095ff'/%3E%3Ctext x='200' y='105' text-anchor='middle' fill='%23fff' font-size='16' font-family='Arial'%3E123.45%3C/text%3E%3Crect x='120' y='140' width='35' height='25' rx='3' fill='%23e0e0e0'/%3E%3Crect x='165' y='140' width='35' height='25' rx='3' fill='%23e0e0e0'/%3E%3Crect x='210' y='140' width='35' height='25' rx='3' fill='%23e0e0e0'/%3E%3Crect x='255' y='140' width='35' height='25' rx='3' fill='%23ff6b35'/%3E%3Crect x='120' y='175' width='35' height='25' rx='3' fill='%23e0e0e0'/%3E%3Crect x='165' y='175' width='35' height='25' rx='3' fill='%23e0e0e0'/%3E%3Crect x='210' y='175' width='35' height='25' rx='3' fill='%23e0e0e0'/%3E%3Crect x='255' y='175' width='35' height='25' rx='3' fill='%23ff6b35'/%3E%3Crect x='120' y='210' width='80' height='25' rx='3' fill='%2300ff88'/%3E%3Ctext x='160' y='227' text-anchor='middle' fill='%23fff' font-size='10' font-family='Arial'%3ERPM%3C/text%3E%3C/svg%3E",
                technologies: ["HTML", "CSS", "JavaScript"],
                category: "frontend",
                status: "completed",
                github: "https://github.com/Matheusssilva333/calculadora-mecanica",
                demo: "https://matheusssilva333.github.io/calculadora-mecanica",
                featured: false,
                year: 2023,
                features: [
                    "Soma, subtração, divisão e multiplicação",
                    "Cálculo de RPM, Torque e Potência",
                    "Cálculo de RPM voltado para motores elétricos",
                    "Interface web interativa"
                ],
                highlights: [
                    "Implementação de funções matemáticas customizadas",
                    "Interface simples e intuitiva",
                    "Código otimizado para cálculos industriais"
                ]
            },
            {
                id: 4,
                title: "Projeto de Streaming",
                description: "Projeto educacional inspirado na Netflix, desenvolvido com HTML, CSS e JavaScript, com foco em praticar desenvolvimento front-end e sistemas de recomendação baseados no humor do usuário.",
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300' fill='none'%3E%3Crect width='400' height='300' fill='%23ff6b6b'/%3E%3Crect x='50' y='50' width='300' height='200' rx='15' fill='%23000'/%3E%3Crect x='70' y='70' width='260' height='40' rx='5' fill='%23ff6b6b'/%3E%3Ctext x='200' y='95' text-anchor='middle' fill='%23fff' font-size='16' font-family='Arial'%3ESTREAMING%3C/text%3E%3Crect x='70' y='130' width='80' height='60' rx='5' fill='%23333'/%3E%3Crect x='160' y='130' width='80' height='60' rx='5' fill='%23333'/%3E%3Crect x='250' y='130' width='80' height='60' rx='5' fill='%23333'/%3E%3Ccircle cx='110' cy='160' r='15' fill='%23ff6b6b'/%3E%3Cpath d='M105 155l10 5-10 5z' fill='%23fff'/%3E%3Ccircle cx='200' cy='160' r='15' fill='%23ff6b6b'/%3E%3Cpath d='M195 155l10 5-10 5z' fill='%23fff'/%3E%3Ccircle cx='290' cy='160' r='15' fill='%23ff6b6b'/%3E%3Cpath d='M285 155l10 5-10 5z' fill='%23fff'/%3E%3Crect x='70' y='210' width='260' height='20' rx='5' fill='%23333'/%3E%3C/svg%3E",
                technologies: ["HTML5", "CSS3", "JavaScript", "Java", "Photopea"],
                category: "frontend",
                status: "completed",
                github: "https://github.com/Matheusssilva333/projeto-streaming",
                demo: "https://matheusssilva333.github.io/projeto-streaming",
                featured: false,
                year: 2023,
                features: [
                    "Análise do humor do usuário na tela inicial",
                    "Sistema de recomendação de filmes personalizado",
                    "Design responsivo e moderno",
                    "Sugestões relaxantes para estados emocionais negativos"
                ],
                highlights: [
                    "Aplicação de lógica condicional para recomendação dinâmica",
                    "Design inspirado em UX/UI modernas",
                    "Projeto voltado para aprendizado e prática de front-end"
                ],
                disclaimer: "Projeto criado exclusivamente para fins educacionais. Sem fins lucrativos ou vínculos comerciais com empresas reais."
            }
        ];

        this.currentFilter = 'all';
        this.currentSort = 'newest';
        this.isGridView = true;
        
        this.init();
    }

    init() {
        this.renderProjects();
        this.initializeFilters();
        this.initializeSort();
        this.initializeViewToggle();
        this.initializeSearch();
        this.initializeAnimations();
    }

    renderProjects() {
        const container = document.querySelector('.projects-grid');
        if (!container) return;

        const filteredProjects = this.getFilteredProjects();
        const sortedProjects = this.getSortedProjects(filteredProjects);

        container.innerHTML = '';
        container.className = `projects-grid ${this.isGridView ? 'grid-view' : 'list-view'}`;

        sortedProjects.forEach((project, index) => {
            const projectCard = this.createProjectCard(project, index);
            container.appendChild(projectCard);
        });

        // Trigger entrance animations
        this.animateProjectsEntrance();
    }

    createProjectCard(project, index) {
        const card = document.createElement('div');
        card.className = `project-card ${project.featured ? 'featured' : ''} ${project.status}`;
        card.dataset.category = project.category;
        card.dataset.year = project.year;
        card.style.setProperty('--animation-delay', `${index * 0.1}s`);

        // Get appropriate icon based on project title/category
        let iconCategory = 'ai'; // default
        if (project.title.toLowerCase().includes('generative') || project.title.toLowerCase().includes('ia')) {
            iconCategory = 'ai';
        } else if (project.title.toLowerCase().includes('gestão') || project.title.toLowerCase().includes('pacientes')) {
            iconCategory = 'medical';
        } else if (project.title.toLowerCase().includes('calculadora')) {
            iconCategory = 'calculator';
        } else if (project.title.toLowerCase().includes('streaming') || project.title.toLowerCase().includes('netflix')) {
            iconCategory = 'streaming';
        }

        const projectIcon = window.getProjectIcon ? window.getProjectIcon(iconCategory) : '';

        card.innerHTML = `
            <div class="project-header">
                <div class="project-icon">
                    ${projectIcon}
                </div>
                <h3 class="project-title">${project.title}</h3>
            </div>
            
            <p class="project-description">${project.description}</p>
            
            ${project.features ? `
                <div class="project-features">
                    <h4>Funcionalidades</h4>
                    <ul>
                        ${project.features.map(feature => 
                            `<li>${feature}</li>`
                        ).join('')}
                    </ul>
                </div>
            ` : ''}
            
            <div class="project-technologies">
                <h4>Tecnologias Utilizadas</h4>
                <div class="tech-tags">
                    ${project.technologies.map(tech => 
                        `<span class="tech-tag"><strong>${tech}</strong></span>`
                    ).join('')}
                </div>
            </div>
            
            ${project.highlights ? `
                <div class="project-highlights">
                    <h4>Destaques Técnicos</h4>
                    <ul>
                        ${project.highlights.map(highlight => 
                            `<li>${highlight}</li>`
                        ).join('')}
                    </ul>
                </div>
            ` : ''}
            
            ${project.disclaimer ? `
                <div class="project-disclaimer">
                    <h4>Aviso Legal</h4>
                    <p>${project.disclaimer}</p>
                </div>
            ` : ''}
        `;

        // Add hover effects for tech tags
        const techTags = card.querySelectorAll('.tech-tag');
        techTags.forEach(tag => {
            tag.addEventListener('mouseenter', () => {
                tag.style.transform = 'translateY(-2px) scale(1.05)';
            });
            tag.addEventListener('mouseleave', () => {
                tag.style.transform = '';
            });
        });

        return card;
    }

    getCategoryName(category) {
        const categories = {
            'frontend': 'Frontend',
            'backend': 'Backend',
            'fullstack': 'Full Stack',
            'mobile': 'Mobile'
        };
        return categories[category] || category;
    }

    getFilteredProjects() {
        if (this.currentFilter === 'all') {
            return this.projects;
        }
        return this.projects.filter(project => project.category === this.currentFilter);
    }

    getSortedProjects(projects) {
        return [...projects].sort((a, b) => {
            switch (this.currentSort) {
                case 'newest':
                    return b.year - a.year || b.id - a.id;
                case 'oldest':
                    return a.year - b.year || a.id - b.id;
                case 'featured':
                    return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
                case 'alphabetical':
                    return a.title.localeCompare(b.title);
                default:
                    return 0;
            }
        });
    }

    initializeFilters() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(b => b.classList.remove('active'));
                
                // Add active class to clicked button
                btn.classList.add('active');
                
                // Update current filter
                this.currentFilter = btn.dataset.filter;
                
                // Re-render projects
                this.renderProjects();
            });
        });
    }

    initializeSort() {
        const sortSelect = document.querySelector('.sort-select');
        if (sortSelect) {
            sortSelect.addEventListener('change', (e) => {
                this.currentSort = e.target.value;
                this.renderProjects();
            });
        }
    }

    initializeViewToggle() {
        const viewToggle = document.querySelector('.view-toggle');
        if (viewToggle) {
            viewToggle.addEventListener('click', () => {
                this.isGridView = !this.isGridView;
                viewToggle.classList.toggle('list-view', !this.isGridView);
                this.renderProjects();
            });
        }
    }

    initializeSearch() {
        const searchInput = document.querySelector('.projects-search');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.searchProjects(e.target.value);
            });
        }
    }

    searchProjects(query) {
        const cards = document.querySelectorAll('.project-card');
        const normalizedQuery = query.toLowerCase().trim();

        cards.forEach(card => {
            const title = card.querySelector('.card-title').textContent.toLowerCase();
            const description = card.querySelector('.card-description').textContent.toLowerCase();
            const technologies = Array.from(card.querySelectorAll('.tech-tag'))
                .map(tag => tag.textContent.toLowerCase());

            const matches = title.includes(normalizedQuery) ||
                          description.includes(normalizedQuery) ||
                          technologies.some(tech => tech.includes(normalizedQuery));

            card.style.display = matches ? 'block' : 'none';
        });
    }

    expandProject(project) {
        // Create modal for project details
        const modal = document.createElement('div');
        modal.className = 'project-modal';
        modal.innerHTML = `
            <div class="modal-backdrop"></div>
            <div class="modal-content">
                <button class="modal-close" aria-label="Fechar">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 6L6 18M6 6L18 18"/>
                    </svg>
                </button>
                <div class="modal-header">
                    <img src="${project.image}" alt="${project.title}" class="modal-image">
                    <div class="modal-info">
                        <h2>${project.title}</h2>
                        <p class="modal-category">${this.getCategoryName(project.category)} • ${project.year}</p>
                        <div class="modal-status ${project.status}">
                            ${project.status === 'completed' ? 'Concluído' : 'Em Desenvolvimento'}
                        </div>
                    </div>
                </div>
                <div class="modal-body">
                    <p class="modal-description">${project.description}</p>
                    <div class="modal-technologies">
                        <h4>Tecnologias Utilizadas:</h4>
                        <div class="tech-list">
                            ${project.technologies.map(tech => 
                                `<span class="tech-tag">${tech}</span>`
                            ).join('')}
                        </div>
                    </div>
                    <div class="modal-actions">
                        <a href="${project.github}" target="_blank" rel="noopener" class="btn btn-primary">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            Ver Código
                        </a>
                        ${project.demo !== '#' ? `
                            <a href="${project.demo}" target="_blank" rel="noopener" class="btn btn-secondary">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                                </svg>
                                Ver Demo
                            </a>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        document.body.classList.add('modal-open');

        // Close modal handlers
        const closeModal = () => {
            modal.classList.add('closing');
            setTimeout(() => {
                document.body.removeChild(modal);
                document.body.classList.remove('modal-open');
            }, 300);
        };

        modal.querySelector('.modal-close').addEventListener('click', closeModal);
        modal.querySelector('.modal-backdrop').addEventListener('click', closeModal);
        
        // Close on Escape key
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                closeModal();
                document.removeEventListener('keydown', handleEscape);
            }
        };
        document.addEventListener('keydown', handleEscape);

        // Animate modal entrance
        requestAnimationFrame(() => {
            modal.classList.add('active');
        });
    }

    animateProjectsEntrance() {
        const cards = document.querySelectorAll('.project-card');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        cards.forEach(card => {
            observer.observe(card);
        });
    }

    initializeAnimations() {
        // Stagger animation for project cards
        const cards = document.querySelectorAll('.project-card');
        cards.forEach((card, index) => {
            card.style.setProperty('--stagger-delay', `${index * 0.1}s`);
        });
    }

    // Public methods for external control
    filterByCategory(category) {
        this.currentFilter = category;
        this.renderProjects();
    }

    sortBy(sortType) {
        this.currentSort = sortType;
        this.renderProjects();
    }

    toggleView() {
        this.isGridView = !this.isGridView;
        this.renderProjects();
    }
}

// Initialize projects when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.projects-grid')) {
        window.projectsManager = new ProjectsManager();
    }
});

// Export for global access
window.ProjectsManager = ProjectsManager;