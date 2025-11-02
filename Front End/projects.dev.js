"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Projects Management System
var ProjectsManager =
/*#__PURE__*/
function () {
  function ProjectsManager() {
    _classCallCheck(this, ProjectsManager);

    this.projects = [{
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
      features: ["Chatbot com conversação natural e personalizada", "Sugestão automática de serviços e produtos", "Qualificação de leads e coleta de dados", "Integração direta com OpenAI GPT", "Customização fácil de prompts e fluxos", "Exemplo de uso via terminal"],
      highlights: ["Uso de DeepLearning4J para manipulação de modelos e respostas baseadas em IA", "Implementação de prompts generativos"]
    }, {
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
      features: ["Cadastro de pacientes", "Exibição da quantidade total de pacientes", "Cálculo da idade média dos homens", "Contagem de mulheres entre 1,60m e 1,70m com peso acima de 70kg", "Contagem de pessoas com idade entre 18 e 25 anos", "Exibição do paciente mais velho", "Exibição da paciente mais baixa"],
      highlights: ["Estruturas condicionais e laços de repetição", "Manipulação de listas e objetos", "Modularização e boas práticas de código"]
    }, {
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
      features: ["Soma, subtração, divisão e multiplicação", "Cálculo de RPM, Torque e Potência", "Cálculo de RPM voltado para motores elétricos", "Interface web interativa"],
      highlights: ["Implementação de funções matemáticas customizadas", "Interface simples e intuitiva", "Código otimizado para cálculos industriais"]
    }, {
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
      features: ["Análise do humor do usuário na tela inicial", "Sistema de recomendação de filmes personalizado", "Design responsivo e moderno", "Sugestões relaxantes para estados emocionais negativos"],
      highlights: ["Aplicação de lógica condicional para recomendação dinâmica", "Design inspirado em UX/UI modernas", "Projeto voltado para aprendizado e prática de front-end"],
      disclaimer: "Projeto criado exclusivamente para fins educacionais. Sem fins lucrativos ou vínculos comerciais com empresas reais."
    }];
    this.currentFilter = 'all';
    this.currentSort = 'newest';
    this.isGridView = true;
    this.init();
  }

  _createClass(ProjectsManager, [{
    key: "init",
    value: function init() {
      this.renderProjects();
      this.initializeFilters();
      this.initializeSort();
      this.initializeViewToggle();
      this.initializeSearch();
      this.initializeAnimations();
    }
  }, {
    key: "renderProjects",
    value: function renderProjects() {
      var _this = this;

      var container = document.querySelector('.projects-grid');
      if (!container) return;
      var filteredProjects = this.getFilteredProjects();
      var sortedProjects = this.getSortedProjects(filteredProjects);
      container.innerHTML = '';
      container.className = "projects-grid ".concat(this.isGridView ? 'grid-view' : 'list-view');
      sortedProjects.forEach(function (project, index) {
        var projectCard = _this.createProjectCard(project, index);

        container.appendChild(projectCard);
      }); // Trigger entrance animations

      this.animateProjectsEntrance();
    }
  }, {
    key: "createProjectCard",
    value: function createProjectCard(project, index) {
      var card = document.createElement('div');
      card.className = "project-card ".concat(project.featured ? 'featured' : '', " ").concat(project.status);
      card.dataset.category = project.category;
      card.dataset.year = project.year;
      card.style.setProperty('--animation-delay', "".concat(index * 0.1, "s")); // Get appropriate icon based on project title/category

      var iconCategory = 'ai'; // default

      if (project.title.toLowerCase().includes('generative') || project.title.toLowerCase().includes('ia')) {
        iconCategory = 'ai';
      } else if (project.title.toLowerCase().includes('gestão') || project.title.toLowerCase().includes('pacientes')) {
        iconCategory = 'medical';
      } else if (project.title.toLowerCase().includes('calculadora')) {
        iconCategory = 'calculator';
      } else if (project.title.toLowerCase().includes('streaming') || project.title.toLowerCase().includes('netflix')) {
        iconCategory = 'streaming';
      }

      var projectIcon = window.getProjectIcon ? window.getProjectIcon(iconCategory) : '';
      card.innerHTML = "\n            <div class=\"project-header\">\n                <div class=\"project-icon\">\n                    ".concat(projectIcon, "\n                </div>\n                <h3 class=\"project-title\">").concat(project.title, "</h3>\n            </div>\n            \n            <p class=\"project-description\">").concat(project.description, "</p>\n            \n            ").concat(project.features ? "\n                <div class=\"project-features\">\n                    <h4>Funcionalidades</h4>\n                    <ul>\n                        ".concat(project.features.map(function (feature) {
        return "<li>".concat(feature, "</li>");
      }).join(''), "\n                    </ul>\n                </div>\n            ") : '', "\n            \n            <div class=\"project-technologies\">\n                <h4>Tecnologias Utilizadas</h4>\n                <div class=\"tech-tags\">\n                    ").concat(project.technologies.map(function (tech) {
        return "<span class=\"tech-tag\"><strong>".concat(tech, "</strong></span>");
      }).join(''), "\n                </div>\n            </div>\n            \n            ").concat(project.highlights ? "\n                <div class=\"project-highlights\">\n                    <h4>Destaques T\xE9cnicos</h4>\n                    <ul>\n                        ".concat(project.highlights.map(function (highlight) {
        return "<li>".concat(highlight, "</li>");
      }).join(''), "\n                    </ul>\n                </div>\n            ") : '', "\n            \n            ").concat(project.disclaimer ? "\n                <div class=\"project-disclaimer\">\n                    <h4>Aviso Legal</h4>\n                    <p>".concat(project.disclaimer, "</p>\n                </div>\n            ") : '', "\n        "); // Add hover effects for tech tags

      var techTags = card.querySelectorAll('.tech-tag');
      techTags.forEach(function (tag) {
        tag.addEventListener('mouseenter', function () {
          tag.style.transform = 'translateY(-2px) scale(1.05)';
        });
        tag.addEventListener('mouseleave', function () {
          tag.style.transform = '';
        });
      });
      return card;
    }
  }, {
    key: "getCategoryName",
    value: function getCategoryName(category) {
      var categories = {
        'frontend': 'Frontend',
        'backend': 'Backend',
        'fullstack': 'Full Stack',
        'mobile': 'Mobile'
      };
      return categories[category] || category;
    }
  }, {
    key: "getFilteredProjects",
    value: function getFilteredProjects() {
      var _this2 = this;

      if (this.currentFilter === 'all') {
        return this.projects;
      }

      return this.projects.filter(function (project) {
        return project.category === _this2.currentFilter;
      });
    }
  }, {
    key: "getSortedProjects",
    value: function getSortedProjects(projects) {
      var _this3 = this;

      return _toConsumableArray(projects).sort(function (a, b) {
        switch (_this3.currentSort) {
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
  }, {
    key: "initializeFilters",
    value: function initializeFilters() {
      var _this4 = this;

      var filterButtons = document.querySelectorAll('.filter-btn');
      filterButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
          // Remove active class from all buttons
          filterButtons.forEach(function (b) {
            return b.classList.remove('active');
          }); // Add active class to clicked button

          btn.classList.add('active'); // Update current filter

          _this4.currentFilter = btn.dataset.filter; // Re-render projects

          _this4.renderProjects();
        });
      });
    }
  }, {
    key: "initializeSort",
    value: function initializeSort() {
      var _this5 = this;

      var sortSelect = document.querySelector('.sort-select');

      if (sortSelect) {
        sortSelect.addEventListener('change', function (e) {
          _this5.currentSort = e.target.value;

          _this5.renderProjects();
        });
      }
    }
  }, {
    key: "initializeViewToggle",
    value: function initializeViewToggle() {
      var _this6 = this;

      var viewToggle = document.querySelector('.view-toggle');

      if (viewToggle) {
        viewToggle.addEventListener('click', function () {
          _this6.isGridView = !_this6.isGridView;
          viewToggle.classList.toggle('list-view', !_this6.isGridView);

          _this6.renderProjects();
        });
      }
    }
  }, {
    key: "initializeSearch",
    value: function initializeSearch() {
      var _this7 = this;

      var searchInput = document.querySelector('.projects-search');

      if (searchInput) {
        searchInput.addEventListener('input', function (e) {
          _this7.searchProjects(e.target.value);
        });
      }
    }
  }, {
    key: "searchProjects",
    value: function searchProjects(query) {
      var cards = document.querySelectorAll('.project-card');
      var normalizedQuery = query.toLowerCase().trim();
      cards.forEach(function (card) {
        var title = card.querySelector('.card-title').textContent.toLowerCase();
        var description = card.querySelector('.card-description').textContent.toLowerCase();
        var technologies = Array.from(card.querySelectorAll('.tech-tag')).map(function (tag) {
          return tag.textContent.toLowerCase();
        });
        var matches = title.includes(normalizedQuery) || description.includes(normalizedQuery) || technologies.some(function (tech) {
          return tech.includes(normalizedQuery);
        });
        card.style.display = matches ? 'block' : 'none';
      });
    }
  }, {
    key: "expandProject",
    value: function expandProject(project) {
      // Create modal for project details
      var modal = document.createElement('div');
      modal.className = 'project-modal';
      modal.innerHTML = "\n            <div class=\"modal-backdrop\"></div>\n            <div class=\"modal-content\">\n                <button class=\"modal-close\" aria-label=\"Fechar\">\n                    <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\n                        <path d=\"M18 6L6 18M6 6L18 18\"/>\n                    </svg>\n                </button>\n                <div class=\"modal-header\">\n                    <img src=\"".concat(project.image, "\" alt=\"").concat(project.title, "\" class=\"modal-image\">\n                    <div class=\"modal-info\">\n                        <h2>").concat(project.title, "</h2>\n                        <p class=\"modal-category\">").concat(this.getCategoryName(project.category), " \u2022 ").concat(project.year, "</p>\n                        <div class=\"modal-status ").concat(project.status, "\">\n                            ").concat(project.status === 'completed' ? 'Concluído' : 'Em Desenvolvimento', "\n                        </div>\n                    </div>\n                </div>\n                <div class=\"modal-body\">\n                    <p class=\"modal-description\">").concat(project.description, "</p>\n                    <div class=\"modal-technologies\">\n                        <h4>Tecnologias Utilizadas:</h4>\n                        <div class=\"tech-list\">\n                            ").concat(project.technologies.map(function (tech) {
        return "<span class=\"tech-tag\">".concat(tech, "</span>");
      }).join(''), "\n                        </div>\n                    </div>\n                    <div class=\"modal-actions\">\n                        <a href=\"").concat(project.github, "\" target=\"_blank\" rel=\"noopener\" class=\"btn btn-primary\">\n                            <svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"currentColor\">\n                                <path d=\"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z\"/>\n                            </svg>\n                            Ver C\xF3digo\n                        </a>\n                        ").concat(project.demo !== '#' ? "\n                            <a href=\"".concat(project.demo, "\" target=\"_blank\" rel=\"noopener\" class=\"btn btn-secondary\">\n                                <svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\n                                    <path d=\"M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3\"/>\n                                </svg>\n                                Ver Demo\n                            </a>\n                        ") : '', "\n                    </div>\n                </div>\n            </div>\n        ");
      document.body.appendChild(modal);
      document.body.classList.add('modal-open'); // Close modal handlers

      var closeModal = function closeModal() {
        modal.classList.add('closing');
        setTimeout(function () {
          document.body.removeChild(modal);
          document.body.classList.remove('modal-open');
        }, 300);
      };

      modal.querySelector('.modal-close').addEventListener('click', closeModal);
      modal.querySelector('.modal-backdrop').addEventListener('click', closeModal); // Close on Escape key

      var handleEscape = function handleEscape(e) {
        if (e.key === 'Escape') {
          closeModal();
          document.removeEventListener('keydown', handleEscape);
        }
      };

      document.addEventListener('keydown', handleEscape); // Animate modal entrance

      requestAnimationFrame(function () {
        modal.classList.add('active');
      });
    }
  }, {
    key: "animateProjectsEntrance",
    value: function animateProjectsEntrance() {
      var cards = document.querySelectorAll('.project-card');
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });
      cards.forEach(function (card) {
        observer.observe(card);
      });
    }
  }, {
    key: "initializeAnimations",
    value: function initializeAnimations() {
      // Stagger animation for project cards
      var cards = document.querySelectorAll('.project-card');
      cards.forEach(function (card, index) {
        card.style.setProperty('--stagger-delay', "".concat(index * 0.1, "s"));
      });
    } // Public methods for external control

  }, {
    key: "filterByCategory",
    value: function filterByCategory(category) {
      this.currentFilter = category;
      this.renderProjects();
    }
  }, {
    key: "sortBy",
    value: function sortBy(sortType) {
      this.currentSort = sortType;
      this.renderProjects();
    }
  }, {
    key: "toggleView",
    value: function toggleView() {
      this.isGridView = !this.isGridView;
      this.renderProjects();
    }
  }]);

  return ProjectsManager;
}(); // Initialize projects when DOM is loaded


document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelector('.projects-grid')) {
    window.projectsManager = new ProjectsManager();
  }
}); // Export for global access

window.ProjectsManager = ProjectsManager;
//# sourceMappingURL=projects.dev.js.map
