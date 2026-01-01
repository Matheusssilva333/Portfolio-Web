"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Main Portfolio JavaScript
var PortfolioApp =
/*#__PURE__*/
function () {
  function PortfolioApp() {
    _classCallCheck(this, PortfolioApp);

    this.threeManager = null;
    this.animationManager = null;
    this.isLoaded = false;
    this.init();
  }

  _createClass(PortfolioApp, [{
    key: "init",
    value: function init() {
      return regeneratorRuntime.async(function init$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // Show loading animation
              this.showLoader(); // Initialize core functionality

              _context.next = 3;
              return regeneratorRuntime.awrap(this.initializeCore());

            case 3:
              _context.next = 5;
              return regeneratorRuntime.awrap(this.initialize3D());

            case 5:
              // Initialize animations
              this.initializeAnimations(); // Initialize interactions

              this.initializeInteractions(); // Hide loader and show content

              this.hideLoader();
              this.isLoaded = true;

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "showLoader",
    value: function showLoader() {
      var _this = this;

      // Create and show loading screen
      var loader = document.createElement('div');
      loader.id = 'page-loader';
      loader.className = 'page-loader';
      loader.innerHTML = "\n            <div class=\"loader-content\">\n                <div class=\"loader-logo\">\n                    <svg viewBox=\"0 0 100 100\" fill=\"none\">\n                        <circle cx=\"50\" cy=\"50\" r=\"45\" stroke=\"var(--color-accent-green)\" stroke-width=\"2\" fill=\"none\"/>\n                        <path d=\"M30 50L45 65L70 35\" stroke=\"var(--color-accent-green)\" stroke-width=\"3\" fill=\"none\"/>\n                    </svg>\n                </div>\n                <div class=\"loader-text\">Carregando...</div>\n                <div class=\"loader-progress\">\n                    <div class=\"loader-progress-bar\"></div>\n                </div>\n            </div>\n        ";
      document.body.appendChild(loader); // Animate progress bar

      var progressBar = loader.querySelector('.loader-progress-bar');
      var progress = 0;
      var interval = setInterval(function () {
        progress += Math.random() * 15;
        if (progress > 90) progress = 90;
        progressBar.style.width = "".concat(progress, "%");

        if (_this.isLoaded) {
          progress = 100;
          progressBar.style.width = '100%';
          clearInterval(interval);
        }
      }, 100);
    }
  }, {
    key: "hideLoader",
    value: function hideLoader() {
      var loader = document.getElementById('page-loader');

      if (loader) {
        loader.style.opacity = '0';
        setTimeout(function () {
          loader.remove();
        }, 500);
      }
    }
  }, {
    key: "initializeCore",
    value: function initializeCore() {
      return regeneratorRuntime.async(function initializeCore$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              // Initialize navigation
              this.initializeNavigation(); // Initialize theme toggle

              this.initializeThemeToggle(); // Initialize mobile menu

              this.initializeMobileMenu(); // Initialize form handling

              this.initializeFormHandling(); // Initialize scroll effects

              this.initializeScrollEffects();

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "initialize3D",
    value: function initialize3D() {
      return regeneratorRuntime.async(function initialize3D$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!(typeof ThreeJSManager !== 'undefined')) {
                _context3.next = 10;
                break;
              }

              _context3.prev = 1;
              this.threeManager = new ThreeJSManager();
              _context3.next = 5;
              return regeneratorRuntime.awrap(this.threeManager.init());

            case 5:
              _context3.next = 10;
              break;

            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3["catch"](1);
              console.warn('3D components failed to initialize:', _context3.t0);

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, null, this, [[1, 7]]);
    }
  }, {
    key: "initializeAnimations",
    value: function initializeAnimations() {
      if (typeof AnimationManager !== 'undefined') {
        this.animationManager = new AnimationManager();
      }
    }
  }, {
    key: "initializeNavigation",
    value: function initializeNavigation() {
      // Smooth scrolling for anchor links
      document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          var target = document.querySelector(anchor.getAttribute('href'));

          if (target) {
            var offsetTop = target.offsetTop - 80; // Account for fixed navbar

            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            });
          }
        });
      }); // Active navigation highlighting

      var sections = document.querySelectorAll('section[id]');
      var navLinks = document.querySelectorAll('.nav-link');

      var highlightNavigation = function highlightNavigation() {
        var scrollY = window.pageYOffset;
        sections.forEach(function (section) {
          var sectionHeight = section.offsetHeight;
          var sectionTop = section.offsetTop - 100;
          var sectionId = section.getAttribute('id');

          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(function (link) {
              link.classList.remove('active');

              if (link.getAttribute('href') === "#".concat(sectionId)) {
                link.classList.add('active');
              }
            });
          }
        });
      };

      window.addEventListener('scroll', highlightNavigation);
      highlightNavigation(); // Initial call
    }
  }, {
    key: "initializeThemeToggle",
    value: function initializeThemeToggle() {
      var themeToggle = document.querySelector('.theme-toggle');

      if (themeToggle) {
        themeToggle.addEventListener('click', function () {
          document.body.classList.toggle('light-theme'); // Save theme preference

          var isLight = document.body.classList.contains('light-theme');
          localStorage.setItem('theme', isLight ? 'light' : 'dark');
        }); // Load saved theme

        var savedTheme = localStorage.getItem('theme');

        if (savedTheme === 'light') {
          document.body.classList.add('light-theme');
        }
      }
    }
  }, {
    key: "initializeMobileMenu",
    value: function initializeMobileMenu() {
      var _this2 = this;

      var mobileToggle = document.querySelector('.mobile-menu-toggle');
      var mobileNav = document.querySelector('.mobile-nav');
      var mobileClose = document.querySelector('.mobile-nav-close');

      if (mobileToggle && mobileNav) {
        // Open mobile menu
        mobileToggle.addEventListener('click', function () {
          mobileToggle.classList.toggle('active');
          mobileNav.classList.toggle('active');
          document.body.classList.toggle('menu-open');
        }); // Close mobile menu with close button

        if (mobileClose) {
          mobileClose.addEventListener('click', function () {
            _this2.closeMobileMenu();
          });
        } // Close menu when clicking on a link


        document.querySelectorAll('.mobile-nav .nav-link').forEach(function (link) {
          link.addEventListener('click', function () {
            _this2.closeMobileMenu();
          });
        }); // Close menu when clicking outside

        document.addEventListener('click', function (e) {
          if (!e.target.closest('.navbar') && !e.target.closest('.mobile-nav')) {
            _this2.closeMobileMenu();
          }
        }); // Close menu with Escape key

        document.addEventListener('keydown', function (e) {
          if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
            _this2.closeMobileMenu();
          }
        });
      }
    }
  }, {
    key: "closeMobileMenu",
    value: function closeMobileMenu() {
      var mobileToggle = document.querySelector('.mobile-menu-toggle');
      var mobileNav = document.querySelector('.mobile-nav');

      if (mobileToggle && mobileNav) {
        mobileToggle.classList.remove('active');
        mobileNav.classList.remove('active');
        document.body.classList.remove('menu-open');
      }
    }
  }, {
    key: "initializeFormHandling",
    value: function initializeFormHandling() {
      var _this3 = this;

      var contactForm = document.getElementById('contactForm');

      if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
          e.preventDefault();

          _this3.handleFormSubmission(contactForm);
        });
      }
    }
  }, {
    key: "handleFormSubmission",
    value: function handleFormSubmission(form) {
      var submitBtn, originalText;
      return regeneratorRuntime.async(function handleFormSubmission$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              submitBtn = form.querySelector('.form-submit');
              originalText = submitBtn.innerHTML; // Show loading state

              submitBtn.innerHTML = "\n            <svg class=\"animate-spin\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\n                <path d=\"M21 12a9 9 0 11-6.219-8.56\"/>\n            </svg>\n            Enviando...\n        ";
              submitBtn.disabled = true;
              _context4.prev = 4;
              _context4.next = 7;
              return regeneratorRuntime.awrap(new Promise(function (resolve) {
                return setTimeout(resolve, 2000);
              }));

            case 7:
              // Show success message
              this.showNotification('Mensagem enviada com sucesso!', 'success');
              form.reset();
              _context4.next = 14;
              break;

            case 11:
              _context4.prev = 11;
              _context4.t0 = _context4["catch"](4);
              // Show error message
              this.showNotification('Erro ao enviar mensagem. Tente novamente.', 'error');

            case 14:
              _context4.prev = 14;
              // Reset button
              submitBtn.innerHTML = originalText;
              submitBtn.disabled = false;
              return _context4.finish(14);

            case 18:
            case "end":
              return _context4.stop();
          }
        }
      }, null, this, [[4, 11, 14, 18]]);
    }
  }, {
    key: "showNotification",
    value: function showNotification(message) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'info';
      var notification = document.createElement('div');
      notification.className = "notification notification-".concat(type);
      notification.innerHTML = "\n            <div class=\"notification-content\">\n                <span class=\"notification-message\">".concat(message, "</span>\n                <button class=\"notification-close\" aria-label=\"Fechar\">\n                    <svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\n                        <path d=\"M18 6L6 18M6 6L18 18\"/>\n                    </svg>\n                </button>\n            </div>\n        ");
      document.body.appendChild(notification); // Auto remove after 5 seconds

      setTimeout(function () {
        notification.classList.add('notification-exit');
        setTimeout(function () {
          return notification.remove();
        }, 300);
      }, 5000); // Manual close

      notification.querySelector('.notification-close').addEventListener('click', function () {
        notification.classList.add('notification-exit');
        setTimeout(function () {
          return notification.remove();
        }, 300);
      });
    }
  }, {
    key: "initializeScrollEffects",
    value: function initializeScrollEffects() {
      // Navbar background on scroll
      var navbar = document.querySelector('.navbar');

      var handleScroll = function handleScroll() {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial call
      // Parallax effects

      var parallaxElements = document.querySelectorAll('[data-parallax]');

      var updateParallax = function updateParallax() {
        var scrollY = window.pageYOffset;
        parallaxElements.forEach(function (element) {
          var speed = parseFloat(element.dataset.parallaxSpeed) || 0.5;
          var yPos = -(scrollY * speed);
          element.style.transform = "translateY(".concat(yPos, "px)");
        });
      };

      if (parallaxElements.length > 0) {
        window.addEventListener('scroll', updateParallax);
      } // Counter animation for stats


      this.initializeCounters();
    }
  }, {
    key: "initializeCounters",
    value: function initializeCounters() {
      var counters = document.querySelectorAll('[data-count]');

      var animateCounter = function animateCounter(counter) {
        var target = parseInt(counter.dataset.count);
        var duration = 2000;
        var step = target / (duration / 16);
        var current = 0;

        var updateCounter = function updateCounter() {
          current += step;

          if (current < target) {
            counter.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target;
          }
        };

        updateCounter();
      }; // Intersection Observer for counters


      var counterObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
            animateCounter(entry.target);
          }
        });
      }, {
        threshold: 0.5
      });
      counters.forEach(function (counter) {
        return counterObserver.observe(counter);
      });
    }
  }, {
    key: "initializeInteractions",
    value: function initializeInteractions() {
      // Custom cursor
      this.initializeCustomCursor(); // Project card interactions

      this.initializeProjectCards(); // Skill tag interactions

      this.initializeSkillTags(); // Timeline interactions

      this.initializeTimeline();
    }
  }, {
    key: "initializeCustomCursor",
    value: function initializeCustomCursor() {
      var cursor = document.createElement('div');
      cursor.className = 'custom-cursor';
      document.body.appendChild(cursor);
      var follower = document.createElement('div');
      follower.className = 'cursor-follower';
      document.body.appendChild(follower);
      var mouseX = 0,
          mouseY = 0;
      var followerX = 0,
          followerY = 0;
      document.addEventListener('mousemove', function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
      });

      var updateFollower = function updateFollower() {
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        follower.style.left = followerX + 'px';
        follower.style.top = followerY + 'px';
        requestAnimationFrame(updateFollower);
      };

      updateFollower(); // Cursor interactions

      document.querySelectorAll('a, button, .project-card').forEach(function (element) {
        element.addEventListener('mouseenter', function () {
          cursor.classList.add('cursor-hover');
          follower.classList.add('cursor-hover');
        });
        element.addEventListener('mouseleave', function () {
          cursor.classList.remove('cursor-hover');
          follower.classList.remove('cursor-hover');
        });
      });
    }
  }, {
    key: "initializeProjectCards",
    value: function initializeProjectCards() {
      var projectCards = document.querySelectorAll('.project-card');
      projectCards.forEach(function (card) {
        card.addEventListener('mouseenter', function () {
          card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        card.addEventListener('mouseleave', function () {
          card.style.transform = 'translateY(0) scale(1)';
        });
      });
    }
  }, {
    key: "initializeSkillTags",
    value: function initializeSkillTags() {
      var skillTags = document.querySelectorAll('.skill-tag');
      skillTags.forEach(function (tag) {
        tag.addEventListener('click', function () {
          tag.classList.toggle('active');
        });
      });
    } // Interactive Timeline Implementation

  }, {
    key: "initializeTimeline",
    value: function initializeTimeline() {
      var timeline = document.querySelector('.timeline');
      var timelineItems = document.querySelectorAll('.timeline-item');
      var timelineProgress = document.querySelector('.timeline-progress');
      if (!timeline || !timelineItems.length) return; // Animate timeline items on scroll

      var timelineObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry, index) {
          if (entry.isIntersecting) {
            setTimeout(function () {
              entry.target.classList.add('animate');
            }, index * 200);
          }
        });
      }, {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      });
      timelineItems.forEach(function (item) {
        timelineObserver.observe(item);
      }); // Progress bar animation

      var progressObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            setTimeout(function () {
              timelineProgress.classList.add('animate');
            }, 500);
          }
        });
      }, {
        threshold: 0.1
      });

      if (timelineProgress) {
        progressObserver.observe(timeline);
      } // Click to expand timeline items


      timelineItems.forEach(function (item) {
        var content = item.querySelector('.timeline-content');
        var marker = item.querySelector('.timeline-marker');

        if (content && marker) {
          var clickHandler = function clickHandler() {
            // Close other expanded items
            timelineItems.forEach(function (otherItem) {
              if (otherItem !== item) {
                otherItem.classList.remove('expanded', 'active');
              }
            }); // Toggle current item

            item.classList.toggle('expanded');
            item.classList.toggle('active'); // Smooth scroll to item if expanding

            if (item.classList.contains('expanded')) {
              setTimeout(function () {
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
      }); // Keyboard navigation

      timeline.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
          timelineItems.forEach(function (item) {
            item.classList.remove('expanded', 'active');
          });
        }
      }); // Auto-expand first item after animation

      setTimeout(function () {
        var firstItem = timelineItems[0];

        if (firstItem && firstItem.classList.contains('animate')) {
          firstItem.classList.add('active');
        }
      }, 2000); // Scroll-based progress update

      var updateTimelineProgress = function updateTimelineProgress() {
        if (!timelineProgress.classList.contains('animate')) return;
        var timelineRect = timeline.getBoundingClientRect();
        var windowHeight = window.innerHeight;
        var scrollProgress = Math.max(0, Math.min(1, (windowHeight - timelineRect.top) / (timelineRect.height + windowHeight)));
        timelineProgress.style.transform = "scaleY(".concat(scrollProgress, ")");
      }; // Throttled scroll listener for performance


      var scrollTimeout;
      window.addEventListener('scroll', function () {
        if (scrollTimeout) {
          clearTimeout(scrollTimeout);
        }

        scrollTimeout = setTimeout(updateTimelineProgress, 10);
      }); // Timeline item hover effects

      timelineItems.forEach(function (item) {
        var skills = item.querySelectorAll('.timeline-skill');
        item.addEventListener('mouseenter', function () {
          skills.forEach(function (skill, index) {
            setTimeout(function () {
              skill.style.transform = 'translateY(-2px) scale(1.05)';
            }, index * 50);
          });
        });
        item.addEventListener('mouseleave', function () {
          skills.forEach(function (skill) {
            skill.style.transform = '';
          });
        });
      }); // Touch support for mobile

      var touchStartY = 0;
      timeline.addEventListener('touchstart', function (e) {
        touchStartY = e.touches[0].clientY;
      });
      timeline.addEventListener('touchend', function (e) {
        var touchEndY = e.changedTouches[0].clientY;
        var touchDiff = touchStartY - touchEndY; // Swipe up to expand, swipe down to collapse

        if (Math.abs(touchDiff) > 50) {
          var targetItem = e.target.closest('.timeline-item');

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
    } // Utility methods

  }, {
    key: "debounce",
    value: function debounce(func, wait) {
      var timeout;
      return function executedFunction() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var later = function later() {
          clearTimeout(timeout);
          func.apply(void 0, args);
        };

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    }
  }, {
    key: "throttle",
    value: function throttle(func, limit) {
      var inThrottle;
      return function () {
        var args = arguments;
        var context = this;

        if (!inThrottle) {
          func.apply(context, args);
          inThrottle = true;
          setTimeout(function () {
            return inThrottle = false;
          }, limit);
        }
      };
    }
  }]);

  return PortfolioApp;
}(); // Initialize the portfolio app when DOM is loaded


document.addEventListener('DOMContentLoaded', function () {
  new PortfolioApp();
}); // Handle page visibility changes

document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    // Pause animations when page is not visible
    document.body.classList.add('page-hidden');
  } else {
    // Resume animations when page becomes visible
    document.body.classList.remove('page-hidden');
  }
}); // Handle resize events

window.addEventListener('resize', function () {
  // Trigger resize events for 3D components
  if (window.threeManager && window.threeManager.handleResize) {
    window.threeManager.handleResize();
  }
}); // Export for global access

window.PortfolioApp = PortfolioApp;
//# sourceMappingURL=main.dev.js.map
