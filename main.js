
// Main Portfolio JavaScript
class PortfolioApp {
    constructor() {
        this.threeManager = null;
        this.animationManager = null;
        this.isLoaded = false;
        
        this.init();
    }

    async init() {
        // Show loading animation
        this.showLoader();
        
        // Initialize core functionality
        await this.initializeCore();
        
        // Initialize 3D components
        await this.initialize3D();
        
        // Initialize animations
        this.initializeAnimations();
        
        // Initialize interactions
        this.initializeInteractions();
        
        // Hide loader and show content
        this.hideLoader();
        
        this.isLoaded = true;
    }

    showLoader() {
        // Create and show loading screen
        const loader = document.createElement('div');
        loader.id = 'page-loader';
        loader.className = 'page-loader';
        loader.innerHTML = `
            <div class="loader-content">
                <div class="loader-logo">
                    <svg viewBox="0 0 100 100" fill="none">
                        <circle cx="50" cy="50" r="45" stroke="var(--color-accent-green)" stroke-width="2" fill="none"/>
                        <path d="M30 50L45 65L70 35" stroke="var(--color-accent-green)" stroke-width="3" fill="none"/>
                    </svg>
                </div>
                <div class="loader-text">Carregando...</div>
                <div class="loader-progress">
                    <div class="loader-progress-bar"></div>
                </div>
            </div>
        `;
        
        document.body.appendChild(loader);
        
        // Animate progress bar
        const progressBar = loader.querySelector('.loader-progress-bar');
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 15;
            if (progress > 90) progress = 90;
            progressBar.style.width = `${progress}%`;
            
            if (this.isLoaded) {
                progress = 100;
                progressBar.style.width = '100%';
                clearInterval(interval);
            }
        }, 100);
    }

    hideLoader() {
        const loader = document.getElementById('page-loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.remove();
            }, 500);
        }
    }

    async initializeCore() {
        // Initialize navigation
        this.initializeNavigation();
        
        // Initialize theme toggle
        this.initializeThemeToggle();
        
        // Initialize mobile menu
        this.initializeMobileMenu();
        
        // Initialize form handling
        this.initializeFormHandling();
        
        // Initialize scroll effects
        this.initializeScrollEffects();
    }

    async initialize3D() {
        if (typeof ThreeJSManager !== 'undefined') {
            try {
                this.threeManager = new ThreeJSManager();
                await this.threeManager.init();
            } catch (error) {
                console.warn('3D components failed to initialize:', error);
            }
        }
    }

    initializeAnimations() {
        if (typeof AnimationManager !== 'undefined') {
            this.animationManager = new AnimationManager();
        }
    }

    initializeNavigation() {
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Active navigation highlighting
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        const highlightNavigation = () => {
            const scrollY = window.pageYOffset;
            
            sections.forEach(section => {
                const sectionHeight = section.offsetHeight;
                const sectionTop = section.offsetTop - 100;
                const sectionId = section.getAttribute('id');
                
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        };

        window.addEventListener('scroll', highlightNavigation);
        highlightNavigation(); // Initial call
    }

    initializeThemeToggle() {
        const themeToggle = document.querySelector('.theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                document.body.classList.toggle('light-theme');
                
                // Save theme preference
                const isLight = document.body.classList.contains('light-theme');
                localStorage.setItem('theme', isLight ? 'light' : 'dark');
            });

            // Load saved theme
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'light') {
                document.body.classList.add('light-theme');
            }
        }
    }

    initializeMobileMenu() {
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        const mobileNav = document.querySelector('.mobile-nav');
        const mobileClose = document.querySelector('.mobile-nav-close');
        
        if (mobileToggle && mobileNav) {
            // Open mobile menu
            mobileToggle.addEventListener('click', () => {
                mobileToggle.classList.toggle('active');
                mobileNav.classList.toggle('active');
                document.body.classList.toggle('menu-open');
            });

            // Close mobile menu with close button
            if (mobileClose) {
                mobileClose.addEventListener('click', () => {
                    this.closeMobileMenu();
                });
            }

            // Close menu when clicking on a link
            document.querySelectorAll('.mobile-nav .nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    this.closeMobileMenu();
                });
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!e.target.closest('.navbar') && !e.target.closest('.mobile-nav')) {
                    this.closeMobileMenu();
                }
            });

            // Close menu with Escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
                    this.closeMobileMenu();
                }
            });
        }
    }

    closeMobileMenu() {
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        const mobileNav = document.querySelector('.mobile-nav');
        
        if (mobileToggle && mobileNav) {
            mobileToggle.classList.remove('active');
            mobileNav.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    }

    initializeFormHandling() {
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleFormSubmission(contactForm);
            });
        }
    }

    async handleFormSubmission(form) {
        const submitBtn = form.querySelector('.form-submit');
        const originalText = submitBtn.innerHTML;
        
        // Show loading state
        submitBtn.innerHTML = `
            <svg class="animate-spin" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 12a9 9 0 11-6.219-8.56"/>
            </svg>
            Enviando...
        `;
        submitBtn.disabled = true;

        try {
            // Simulate form submission (replace with actual API call)
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Show success message
            this.showNotification('Mensagem enviada com sucesso!', 'success');
            form.reset();
            
        } catch (error) {
            // Show error message
            this.showNotification('Erro ao enviar mensagem. Tente novamente.', 'error');
        } finally {
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close" aria-label="Fechar">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 6L6 18M6 6L18 18"/>
                    </svg>
                </button>
            </div>
        `;

        document.body.appendChild(notification);

        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.classList.add('notification-exit');
            setTimeout(() => notification.remove(), 300);
        }, 5000);

        // Manual close
        notification.querySelector('.notification-close').addEventListener('click', () => {
            notification.classList.add('notification-exit');
            setTimeout(() => notification.remove(), 300);
        });
    }

    initializeScrollEffects() {
        // Navbar background on scroll
        const navbar = document.querySelector('.navbar');
        const handleScroll = () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial call

        // Parallax effects
        const parallaxElements = document.querySelectorAll('[data-parallax]');
        const updateParallax = () => {
            const scrollY = window.pageYOffset;
            
            parallaxElements.forEach(element => {
                const speed = parseFloat(element.dataset.parallaxSpeed) || 0.5;
                const yPos = -(scrollY * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        };

        if (parallaxElements.length > 0) {
            window.addEventListener('scroll', updateParallax);
        }

        // Counter animation for stats
        this.initializeCounters();
    }

    initializeCounters() {
        const counters = document.querySelectorAll('[data-count]');
        const animateCounter = (counter) => {
            const target = parseInt(counter.dataset.count);
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;

            const updateCounter = () => {
                current += step;
                if (current < target) {
                    counter.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };

            updateCounter();
        };

        // Intersection Observer for counters
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                    entry.target.classList.add('counted');
                    animateCounter(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => counterObserver.observe(counter));
    }

    initializeInteractions() {
        // Custom cursor
        this.initializeCustomCursor();
        
        // Project card interactions
        this.initializeProjectCards();
        
        // Skill tag interactions
        this.initializeSkillTags();
        
        // Timeline interactions
        this.initializeTimeline();
    }

    initializeCustomCursor() {
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        document.body.appendChild(cursor);

        const follower = document.createElement('div');
        follower.className = 'cursor-follower';
        document.body.appendChild(follower);

        let mouseX = 0, mouseY = 0;
        let followerX = 0, followerY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            cursor.style.left = mouseX + 'px';
            cursor.style.top = mouseY + 'px';
        });

        const updateFollower = () => {
            followerX += (mouseX - followerX) * 0.1;
            followerY += (mouseY - followerY) * 0.1;
            
            follower.style.left = followerX + 'px';
            follower.style.top = followerY + 'px';
            
            requestAnimationFrame(updateFollower);
        };
        updateFollower();

        // Cursor interactions
        document.querySelectorAll('a, button, .project-card').forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursor.classList.add('cursor-hover');
                follower.classList.add('cursor-hover');
            });
            
            element.addEventListener('mouseleave', () => {
                cursor.classList.remove('cursor-hover');
                follower.classList.remove('cursor-hover');
            });
        });
    }

    initializeProjectCards() {
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
            });
        });
    }

    initializeSkillTags() {
        const skillTags = document.querySelectorAll('.skill-tag');
        
        skillTags.forEach(tag => {
            tag.addEventListener('click', () => {
                tag.classList.toggle('active');
            });
        });
    }

    // Interactive Timeline Implementation
    initializeTimeline() {
        const timeline = document.querySelector('.timeline');
        const timelineItems = document.querySelectorAll('.timeline-item');
        const timelineProgress = document.querySelector('.timeline-progress');
        
        if (!timeline || !timelineItems.length) return;

        // Animate timeline items on scroll
        const timelineObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('animate');
                    }, index * 200);
                }
            });
        }, {
            threshold: 0.3,
            rootMargin: '0px 0px -100px 0px'
        });

        timelineItems.forEach(item => {
            timelineObserver.observe(item);
        });

        // Progress bar animation
        const progressObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        timelineProgress.classList.add('animate');
                    }, 500);
                }
            });
        }, {
            threshold: 0.1
        });

        if (timelineProgress) {
            progressObserver.observe(timeline);
        }

        // Click to expand timeline items
        timelineItems.forEach(item => {
            const content = item.querySelector('.timeline-content');
            const marker = item.querySelector('.timeline-marker');
            
            if (content && marker) {
                const clickHandler = () => {
                    // Close other expanded items
                    timelineItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.classList.remove('expanded', 'active');
                        }
                    });
                    
                    // Toggle current item
                    item.classList.toggle('expanded');
                    item.classList.toggle('active');
                    
                    // Smooth scroll to item if expanding
                    if (item.classList.contains('expanded')) {
                        setTimeout(() => {
                            item.scrollIntoView({
                                behavior: 'smooth',
                                block: 'center'
                            });
                        }, 100);
                    }
                };

                content.addEventListener('click', clickHandler);
                marker.addEventListener('click', clickHandler);
            }
        });

        // Keyboard navigation
        timeline.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                timelineItems.forEach(item => {
                    item.classList.remove('expanded', 'active');
                });
            }
        });

        // Auto-expand first item after animation
        setTimeout(() => {
            const firstItem = timelineItems[0];
            if (firstItem && firstItem.classList.contains('animate')) {
                firstItem.classList.add('active');
            }
        }, 2000);

        // Scroll-based progress update
        const updateTimelineProgress = () => {
            if (!timelineProgress.classList.contains('animate')) return;
            
            const timelineRect = timeline.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const scrollProgress = Math.max(0, Math.min(1, 
                (windowHeight - timelineRect.top) / (timelineRect.height + windowHeight)
            ));
            
            timelineProgress.style.transform = `scaleY(${scrollProgress})`;
        };

        // Throttled scroll listener for performance
        let scrollTimeout;
        window.addEventListener('scroll', () => {
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }
            scrollTimeout = setTimeout(updateTimelineProgress, 10);
        });

        // Timeline item hover effects
        timelineItems.forEach(item => {
            const skills = item.querySelectorAll('.timeline-skill');
            
            item.addEventListener('mouseenter', () => {
                skills.forEach((skill, index) => {
                    setTimeout(() => {
                        skill.style.transform = 'translateY(-2px) scale(1.05)';
                    }, index * 50);
                });
            });
            
            item.addEventListener('mouseleave', () => {
                skills.forEach(skill => {
                    skill.style.transform = '';
                });
            });
        });

        // Touch support for mobile
        let touchStartY = 0;
        timeline.addEventListener('touchstart', (e) => {
            touchStartY = e.touches[0].clientY;
        });

        timeline.addEventListener('touchend', (e) => {
            const touchEndY = e.changedTouches[0].clientY;
            const touchDiff = touchStartY - touchEndY;
            
            // Swipe up to expand, swipe down to collapse
            if (Math.abs(touchDiff) > 50) {
                const targetItem = e.target.closest('.timeline-item');
                if (targetItem) {
                    if (touchDiff > 0) {
                        // Swipe up - expand
                        targetItem.classList.add('expanded', 'active');
                    } else {
                        // Swipe down - collapse
                        targetItem.classList.remove('expanded', 'active');
                    }
                }
            }
        });
    }

    // Utility methods
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
}

// Initialize the portfolio app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioApp();
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause animations when page is not visible
        document.body.classList.add('page-hidden');
    } else {
        // Resume animations when page becomes visible
        document.body.classList.remove('page-hidden');
    }
});

// Handle resize events
window.addEventListener('resize', () => {
    // Trigger resize events for 3D components
    if (window.threeManager && window.threeManager.handleResize) {
        window.threeManager.handleResize();
    }
});

// Export for global access
window.PortfolioApp = PortfolioApp;