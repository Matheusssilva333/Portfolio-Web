/* ===== PROJECT ICONS - CUSTOM SVG ICONS ===== */

const ProjectIcons = {
  // IA/AI Icon - Brain with circuits
  ai: `<svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 9H14V4H19V9ZM8 12V14H16V12H8ZM8 16V18H13V16H8Z"/>
    <circle cx="7" cy="9" r="1.5" fill="currentColor"/>
    <circle cx="17" cy="15" r="1.5" fill="currentColor"/>
    <path d="M9 7L11 9M15 13L17 15M7 15L9 13M15 7L17 9" stroke="currentColor" stroke-width="1" fill="none"/>
  </svg>`,

  // Medical System Icon - Hospital/Medical cross with data
  medical: `<svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
    <rect x="9" y="9" width="6" height="2" fill="currentColor"/>
    <rect x="11" y="7" width="2" height="6" fill="currentColor"/>
    <path d="M4 14V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V14H4Z" fill="currentColor" opacity="0.7"/>
    <rect x="6" y="16" width="3" height="1" fill="white"/>
    <rect x="6" y="18" width="4" height="1" fill="white"/>
    <rect x="15" y="16" width="3" height="1" fill="white"/>
    <rect x="14" y="18" width="4" height="1" fill="white"/>
  </svg>`,

  // Calculator Icon - Calculator with gears
  calculator: `<svg viewBox="0 0 24 24" fill="currentColor">
    <rect x="4" y="2" width="16" height="20" rx="2" fill="currentColor" opacity="0.9"/>
    <rect x="6" y="4" width="12" height="3" rx="1" fill="white"/>
    <circle cx="8" cy="10" r="1.5" fill="white"/>
    <circle cx="12" cy="10" r="1.5" fill="white"/>
    <circle cx="16" cy="10" r="1.5" fill="white"/>
    <circle cx="8" cy="14" r="1.5" fill="white"/>
    <circle cx="12" cy="14" r="1.5" fill="white"/>
    <circle cx="16" cy="14" r="1.5" fill="white"/>
    <rect x="8" y="17" width="8" height="2" rx="1" fill="white"/>
    <path d="M18 8L20 10L18 12L16 10Z" fill="currentColor"/>
    <circle cx="19" cy="6" r="2" fill="none" stroke="currentColor" stroke-width="1"/>
    <path d="M17.5 5.5L20.5 6.5" stroke="currentColor" stroke-width="1"/>
  </svg>`,

  // Streaming Icon - Play button with streaming waves
  streaming: `<svg viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.9"/>
    <path d="M10 8L16 12L10 16V8Z" fill="white"/>
    <path d="M2 12C2 12 4 8 8 8" stroke="currentColor" stroke-width="2" fill="none" opacity="0.6"/>
    <path d="M2 12C2 12 4 16 8 16" stroke="currentColor" stroke-width="2" fill="none" opacity="0.6"/>
    <path d="M22 12C22 12 20 8 16 8" stroke="currentColor" stroke-width="2" fill="none" opacity="0.6"/>
    <path d="M22 12C22 12 20 16 16 16" stroke="currentColor" stroke-width="2" fill="none" opacity="0.6"/>
    <circle cx="4" cy="12" r="1" fill="currentColor"/>
    <circle cx="20" cy="12" r="1" fill="currentColor"/>
  </svg>`
};

// Function to get icon by project category
function getProjectIcon(category) {
  const iconMap = {
    'ai': ProjectIcons.ai,
    'medical': ProjectIcons.medical,
    'calculator': ProjectIcons.calculator,
    'streaming': ProjectIcons.streaming,
    'generative': ProjectIcons.ai, // GenerativeSalesAgent
    'sistema': ProjectIcons.medical, // Sistema de Gestão
    'calculadora': ProjectIcons.calculator, // Calculadora Mecânica
    'projeto': ProjectIcons.streaming // Projeto de Streaming
  };
  
  return iconMap[category.toLowerCase()] || ProjectIcons.ai;
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ProjectIcons, getProjectIcon };
}

// Make available globally
window.ProjectIcons = ProjectIcons;
window.getProjectIcon = getProjectIcon;