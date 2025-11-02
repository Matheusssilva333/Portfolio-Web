/* ===== ANIMATIONS & MICROINTERACTIONS - MODERN PORTFOLIO ===== */

class AnimationManager {
  constructor() {
    this.observers = [];
    this.parallaxElements = [];
    this.isInitialized = false;
    
    this.init();
  }

  init() {
    this.setupIntersectionObserver();
    this.setupParallaxElements();
    this.setupSmoothScrolling();
    this.setupHoverEffects();
    this.setupLoadingAnimation();
    this.setupCursorEffects();
    
    this.isInitialized = true;
  }

  setupIntersectionObserver() {
    // Fade in animation observer
    const fadeInObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          fadeInObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Slide up animation observer
    const slideUpObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
          slideUpObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Apply observers to elements
    document.addEventListener('DOMContentLoaded', () => {
      // Fade in elements
      document.querySelectorAll('.fade-in-on-scroll').forEach(el => {
        fadeInObserver.observe(el);
      });

      // Slide up elements
      document.querySelectorAll('.slide-up-on-scroll').forEach(el => {
        slideUpObserver.observe(el);
      });
    });

    this.observers.push(fadeInObserver, slideUpObserver);
  }

  setupParallaxElements() {
    const updateParallax = () => {
      const scrollY = window.scrollY;
      
      this.parallaxElements.forEach(element => {
        const speed = element.dataset.parallaxSpeed || 0.5;
        const yPos = -(scrollY * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    };

    // Throttled scroll handler
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateParallax();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Initialize parallax elements
    document.addEventListener('DOMContentLoaded', () => {
      this.parallaxElements = Array.from(document.querySelectorAll('[data-parallax]'));
    });
  }

  setupSmoothScrolling() {
    // Smooth scroll for anchor links
    document.addEventListener('click', (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const targetId = target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  }

  setupHoverEffects() {
    // Card hover effects
    const setupCardHovers = () => {
      document.querySelectorAll('.card, .project-card').forEach(card => {
        card.addEventListener('mouseenter', (e) => {
          e.target.style.transform = 'translateY(-8px) scale(1.02)';
          e.target.style.boxShadow = '0 20px 40px rgba(0, 255, 136, 0.2)';
        });

        card.addEventListener('mouseleave', (e) => {
          e.target.style.transform = 'translateY(0) scale(1)';
          e.target.style.boxShadow = '';
        });
      });
    };

    // Button hover effects
    const setupButtonHovers = () => {
      document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', (e) => {
          const ripple = document.createElement('span');
          ripple.classList.add('ripple-effect');
          e.target.appendChild(ripple);
          
          setTimeout(() => {
            ripple.remove();
          }, 600);
        });
      });
    };

    // Navigation hover effects
    const setupNavHovers = () => {
      document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('mouseenter', (e) => {
          e.target.style.color = 'var(--color-accent-green)';
          e.target.style.textShadow = '0 0 10px rgba(0, 255, 136, 0.5)';
        });

        link.addEventListener('mouseleave', (e) => {
          e.target.style.color = '';
          e.target.style.textShadow = '';
        });
      });
    };

    document.addEventListener('DOMContentLoaded', () => {
      setupCardHovers();
      setupButtonHovers();
      setupNavHovers();
    });
  }

  setupLoadingAnimation() {
    const createLoader = () => {
      const loader = document.createElement('div');
      loader.id = 'page-loader';
      loader.innerHTML = `
        <div class="loader-content">
          <div class="loader-spinner"></div>
          <div class="loader-text">Carregando...</div>
          <div class="loader-progress">
            <div class="loader-progress-bar"></div>
          </div>
        </div>
      `;
      
      document.body.appendChild(loader);
      return loader;
    };

    const hideLoader = () => {
      const loader = document.getElementById('page-loader');
      if (loader) {
        loader.classList.add('fade-out');
        setTimeout(() => {
          loader.remove();
        }, 500);
      }
    };

    // Show loader immediately
    document.addEventListener('DOMContentLoaded', () => {
      const loader = createLoader();
      
      // Simulate loading progress
      const progressBar = loader.querySelector('.loader-progress-bar');
      let progress = 0;
      
      const updateProgress = () => {
        progress += Math.random() * 15;
        if (progress > 100) progress = 100;
        
        progressBar.style.width = `${progress}%`;
        
        if (progress < 100) {
          setTimeout(updateProgress, 100 + Math.random() * 200);
        } else {
          setTimeout(hideLoader, 500);
        }
      };
      
      setTimeout(updateProgress, 200);
    });
  }

  setupCursorEffects() {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    const cursorFollower = document.createElement('div');
    cursorFollower.classList.add('cursor-follower');
    document.body.appendChild(cursorFollower);

    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      cursor.style.left = mouseX + 'px';
      cursor.style.top = mouseY + 'px';
    });

    // Smooth follower animation
    const animateFollower = () => {
      followerX += (mouseX - followerX) * 0.1;
      followerY += (mouseY - followerY) * 0.1;
      
      cursorFollower.style.left = followerX + 'px';
      cursorFollower.style.top = followerY + 'px';
      
      requestAnimationFrame(animateFollower);
    };
    animateFollower();

    // Cursor interactions
    const interactiveElements = document.querySelectorAll('a, button, .clickable, .project-card, .btn');
    
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-hover');
        cursorFollower.classList.add('cursor-hover');
      });

      element.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-hover');
        cursorFollower.classList.remove('cursor-hover');
      });
    });
  }

  // Utility methods
  animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      element.textContent = Math.floor(current);

      if (current >= target) {
        element.textContent = target;
        clearInterval(timer);
      }
    }, 16);
  }

  typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    const timer = setInterval(() => {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
  }

  staggerAnimation(elements, delay = 100) {
    elements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('animate-slide-up');
      }, index * delay);
    });
  }

  morphShape(element, newPath, duration = 1000) {
    if (element.tagName === 'path') {
      const currentPath = element.getAttribute('d');
      const startTime = Date.now();
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Simple path interpolation (would need more complex logic for real morphing)
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          element.setAttribute('d', newPath);
        }
      };
      
      animate();
    }
  }

  // Cleanup method
  dispose() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
    this.parallaxElements = [];
    
    // Remove custom cursor
    const cursor = document.querySelector('.custom-cursor');
    const follower = document.querySelector('.cursor-follower');
    if (cursor) cursor.remove();
    if (follower) follower.remove();
  }
}

// CSS for animations (to be added to the main CSS file)
const animationStyles = `
/* Loading Animation */
#page-loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--color-primary-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  transition: opacity 0.5s ease-out;
}

#page-loader.fade-out {
  opacity: 0;
}

.loader-content {
  text-align: center;
  color: var(--color-text-primary);
}

.loader-spinner {
  width: 50px;
  height: 50px;
  border: 3px solid var(--color-border);
  border-top: 3px solid var(--color-accent-green);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 20px;
}

.loader-text {
  font-size: var(--font-size-lg);
  margin-bottom: 20px;
  font-weight: var(--font-weight-medium);
}

.loader-progress {
  width: 200px;
  height: 4px;
  background: var(--color-border);
  border-radius: var(--radius-full);
  overflow: hidden;
  margin: 0 auto;
}

.loader-progress-bar {
  height: 100%;
  background: var(--gradient-primary);
  width: 0%;
  transition: width 0.3s ease;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Custom Cursor */
.custom-cursor {
  position: fixed;
  width: 10px;
  height: 10px;
  background: var(--color-accent-green);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transition: transform 0.1s ease;
}

.cursor-follower {
  position: fixed;
  width: 30px;
  height: 30px;
  border: 2px solid var(--color-accent-green);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9998;
  opacity: 0.5;
}

.custom-cursor.cursor-hover {
  transform: scale(2);
  background: var(--color-accent-blue);
}

.cursor-follower.cursor-hover {
  transform: scale(1.5);
  border-color: var(--color-accent-blue);
}

/* Ripple Effect */
.ripple-effect {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0);
  animation: ripple 0.6s linear;
  pointer-events: none;
}

@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}

/* Hover Transitions */
.card, .project-card {
  transition: all var(--transition-normal);
}

.btn {
  position: relative;
  overflow: hidden;
}

.nav-link {
  transition: all var(--transition-fast);
}

/* Mobile Optimizations */
@media (max-width: 768px) {
  .custom-cursor,
  .cursor-follower {
    display: none;
  }
}
`;

// Inject styles
const styleSheet = document.createElement('style');
styleSheet.textContent = animationStyles;
document.head.appendChild(styleSheet);

// Initialize Animation Manager
let animationManager = null;

document.addEventListener('DOMContentLoaded', () => {
  animationManager = new AnimationManager();
});

// Export for external use
window.AnimationManager = AnimationManager;
window.animationManager = animationManager;