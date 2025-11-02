"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* ===== ANIMATIONS & MICROINTERACTIONS - MODERN PORTFOLIO ===== */
var AnimationManager =
/*#__PURE__*/
function () {
  function AnimationManager() {
    _classCallCheck(this, AnimationManager);

    this.observers = [];
    this.parallaxElements = [];
    this.isInitialized = false;
    this.init();
  }

  _createClass(AnimationManager, [{
    key: "init",
    value: function init() {
      this.setupIntersectionObserver();
      this.setupParallaxElements();
      this.setupSmoothScrolling();
      this.setupHoverEffects();
      this.setupLoadingAnimation();
      this.setupCursorEffects();
      this.isInitialized = true;
    }
  }, {
    key: "setupIntersectionObserver",
    value: function setupIntersectionObserver() {
      // Fade in animation observer
      var fadeInObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            fadeInObserver.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }); // Slide up animation observer

      var slideUpObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            slideUpObserver.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }); // Apply observers to elements

      document.addEventListener('DOMContentLoaded', function () {
        // Fade in elements
        document.querySelectorAll('.fade-in-on-scroll').forEach(function (el) {
          fadeInObserver.observe(el);
        }); // Slide up elements

        document.querySelectorAll('.slide-up-on-scroll').forEach(function (el) {
          slideUpObserver.observe(el);
        });
      });
      this.observers.push(fadeInObserver, slideUpObserver);
    }
  }, {
    key: "setupParallaxElements",
    value: function setupParallaxElements() {
      var _this = this;

      var updateParallax = function updateParallax() {
        var scrollY = window.scrollY;

        _this.parallaxElements.forEach(function (element) {
          var speed = element.dataset.parallaxSpeed || 0.5;
          var yPos = -(scrollY * speed);
          element.style.transform = "translateY(".concat(yPos, "px)");
        });
      }; // Throttled scroll handler


      var ticking = false;

      var handleScroll = function handleScroll() {
        if (!ticking) {
          requestAnimationFrame(function () {
            updateParallax();
            ticking = false;
          });
          ticking = true;
        }
      };

      window.addEventListener('scroll', handleScroll); // Initialize parallax elements

      document.addEventListener('DOMContentLoaded', function () {
        _this.parallaxElements = Array.from(document.querySelectorAll('[data-parallax]'));
      });
    }
  }, {
    key: "setupSmoothScrolling",
    value: function setupSmoothScrolling() {
      // Smooth scroll for anchor links
      document.addEventListener('click', function (e) {
        var target = e.target.closest('a[href^="#"]');

        if (target) {
          e.preventDefault();
          var targetId = target.getAttribute('href').substring(1);
          var targetElement = document.getElementById(targetId);

          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      });
    }
  }, {
    key: "setupHoverEffects",
    value: function setupHoverEffects() {
      // Card hover effects
      var setupCardHovers = function setupCardHovers() {
        document.querySelectorAll('.card, .project-card').forEach(function (card) {
          card.addEventListener('mouseenter', function (e) {
            e.target.style.transform = 'translateY(-8px) scale(1.02)';
            e.target.style.boxShadow = '0 20px 40px rgba(0, 255, 136, 0.2)';
          });
          card.addEventListener('mouseleave', function (e) {
            e.target.style.transform = 'translateY(0) scale(1)';
            e.target.style.boxShadow = '';
          });
        });
      }; // Button hover effects


      var setupButtonHovers = function setupButtonHovers() {
        document.querySelectorAll('.btn').forEach(function (btn) {
          btn.addEventListener('mouseenter', function (e) {
            var ripple = document.createElement('span');
            ripple.classList.add('ripple-effect');
            e.target.appendChild(ripple);
            setTimeout(function () {
              ripple.remove();
            }, 600);
          });
        });
      }; // Navigation hover effects


      var setupNavHovers = function setupNavHovers() {
        document.querySelectorAll('.nav-link').forEach(function (link) {
          link.addEventListener('mouseenter', function (e) {
            e.target.style.color = 'var(--color-accent-green)';
            e.target.style.textShadow = '0 0 10px rgba(0, 255, 136, 0.5)';
          });
          link.addEventListener('mouseleave', function (e) {
            e.target.style.color = '';
            e.target.style.textShadow = '';
          });
        });
      };

      document.addEventListener('DOMContentLoaded', function () {
        setupCardHovers();
        setupButtonHovers();
        setupNavHovers();
      });
    }
  }, {
    key: "setupLoadingAnimation",
    value: function setupLoadingAnimation() {
      var createLoader = function createLoader() {
        var loader = document.createElement('div');
        loader.id = 'page-loader';
        loader.innerHTML = "\n        <div class=\"loader-content\">\n          <div class=\"loader-spinner\"></div>\n          <div class=\"loader-text\">Carregando...</div>\n          <div class=\"loader-progress\">\n            <div class=\"loader-progress-bar\"></div>\n          </div>\n        </div>\n      ";
        document.body.appendChild(loader);
        return loader;
      };

      var hideLoader = function hideLoader() {
        var loader = document.getElementById('page-loader');

        if (loader) {
          loader.classList.add('fade-out');
          setTimeout(function () {
            loader.remove();
          }, 500);
        }
      }; // Show loader immediately


      document.addEventListener('DOMContentLoaded', function () {
        var loader = createLoader(); // Simulate loading progress

        var progressBar = loader.querySelector('.loader-progress-bar');
        var progress = 0;

        var updateProgress = function updateProgress() {
          progress += Math.random() * 15;
          if (progress > 100) progress = 100;
          progressBar.style.width = "".concat(progress, "%");

          if (progress < 100) {
            setTimeout(updateProgress, 100 + Math.random() * 200);
          } else {
            setTimeout(hideLoader, 500);
          }
        };

        setTimeout(updateProgress, 200);
      });
    }
  }, {
    key: "setupCursorEffects",
    value: function setupCursorEffects() {
      var cursor = document.createElement('div');
      cursor.classList.add('custom-cursor');
      document.body.appendChild(cursor);
      var cursorFollower = document.createElement('div');
      cursorFollower.classList.add('cursor-follower');
      document.body.appendChild(cursorFollower);
      var mouseX = 0,
          mouseY = 0;
      var followerX = 0,
          followerY = 0;
      document.addEventListener('mousemove', function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
      }); // Smooth follower animation

      var animateFollower = function animateFollower() {
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        cursorFollower.style.left = followerX + 'px';
        cursorFollower.style.top = followerY + 'px';
        requestAnimationFrame(animateFollower);
      };

      animateFollower(); // Cursor interactions

      var interactiveElements = document.querySelectorAll('a, button, .clickable, .project-card, .btn');
      interactiveElements.forEach(function (element) {
        element.addEventListener('mouseenter', function () {
          cursor.classList.add('cursor-hover');
          cursorFollower.classList.add('cursor-hover');
        });
        element.addEventListener('mouseleave', function () {
          cursor.classList.remove('cursor-hover');
          cursorFollower.classList.remove('cursor-hover');
        });
      });
    } // Utility methods

  }, {
    key: "animateCounter",
    value: function animateCounter(element, target) {
      var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2000;
      var start = 0;
      var increment = target / (duration / 16);
      var current = start;
      var timer = setInterval(function () {
        current += increment;
        element.textContent = Math.floor(current);

        if (current >= target) {
          element.textContent = target;
          clearInterval(timer);
        }
      }, 16);
    }
  }, {
    key: "typeWriter",
    value: function typeWriter(element, text) {
      var speed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 50;
      var i = 0;
      element.textContent = '';
      var timer = setInterval(function () {
        if (i < text.length) {
          element.textContent += text.charAt(i);
          i++;
        } else {
          clearInterval(timer);
        }
      }, speed);
    }
  }, {
    key: "staggerAnimation",
    value: function staggerAnimation(elements) {
      var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
      elements.forEach(function (element, index) {
        setTimeout(function () {
          element.classList.add('animate-slide-up');
        }, index * delay);
      });
    }
  }, {
    key: "morphShape",
    value: function morphShape(element, newPath) {
      var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1000;

      if (element.tagName === 'path') {
        var currentPath = element.getAttribute('d');
        var startTime = Date.now();

        var animate = function animate() {
          var elapsed = Date.now() - startTime;
          var progress = Math.min(elapsed / duration, 1); // Simple path interpolation (would need more complex logic for real morphing)

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            element.setAttribute('d', newPath);
          }
        };

        animate();
      }
    } // Cleanup method

  }, {
    key: "dispose",
    value: function dispose() {
      this.observers.forEach(function (observer) {
        return observer.disconnect();
      });
      this.observers = [];
      this.parallaxElements = []; // Remove custom cursor

      var cursor = document.querySelector('.custom-cursor');
      var follower = document.querySelector('.cursor-follower');
      if (cursor) cursor.remove();
      if (follower) follower.remove();
    }
  }]);

  return AnimationManager;
}(); // CSS for animations (to be added to the main CSS file)


var animationStyles = "\n/* Loading Animation */\n#page-loader {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: var(--color-primary-dark);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n  transition: opacity 0.5s ease-out;\n}\n\n#page-loader.fade-out {\n  opacity: 0;\n}\n\n.loader-content {\n  text-align: center;\n  color: var(--color-text-primary);\n}\n\n.loader-spinner {\n  width: 50px;\n  height: 50px;\n  border: 3px solid var(--color-border);\n  border-top: 3px solid var(--color-accent-green);\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin: 0 auto 20px;\n}\n\n.loader-text {\n  font-size: var(--font-size-lg);\n  margin-bottom: 20px;\n  font-weight: var(--font-weight-medium);\n}\n\n.loader-progress {\n  width: 200px;\n  height: 4px;\n  background: var(--color-border);\n  border-radius: var(--radius-full);\n  overflow: hidden;\n  margin: 0 auto;\n}\n\n.loader-progress-bar {\n  height: 100%;\n  background: var(--gradient-primary);\n  width: 0%;\n  transition: width 0.3s ease;\n}\n\n@keyframes spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n\n/* Custom Cursor */\n.custom-cursor {\n  position: fixed;\n  width: 10px;\n  height: 10px;\n  background: var(--color-accent-green);\n  border-radius: 50%;\n  pointer-events: none;\n  z-index: 9999;\n  transition: transform 0.1s ease;\n}\n\n.cursor-follower {\n  position: fixed;\n  width: 30px;\n  height: 30px;\n  border: 2px solid var(--color-accent-green);\n  border-radius: 50%;\n  pointer-events: none;\n  z-index: 9998;\n  opacity: 0.5;\n}\n\n.custom-cursor.cursor-hover {\n  transform: scale(2);\n  background: var(--color-accent-blue);\n}\n\n.cursor-follower.cursor-hover {\n  transform: scale(1.5);\n  border-color: var(--color-accent-blue);\n}\n\n/* Ripple Effect */\n.ripple-effect {\n  position: absolute;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.3);\n  transform: scale(0);\n  animation: ripple 0.6s linear;\n  pointer-events: none;\n}\n\n@keyframes ripple {\n  to {\n    transform: scale(4);\n    opacity: 0;\n  }\n}\n\n/* Hover Transitions */\n.card, .project-card {\n  transition: all var(--transition-normal);\n}\n\n.btn {\n  position: relative;\n  overflow: hidden;\n}\n\n.nav-link {\n  transition: all var(--transition-fast);\n}\n\n/* Mobile Optimizations */\n@media (max-width: 768px) {\n  .custom-cursor,\n  .cursor-follower {\n    display: none;\n  }\n}\n"; // Inject styles

var styleSheet = document.createElement('style');
styleSheet.textContent = animationStyles;
document.head.appendChild(styleSheet); // Initialize Animation Manager

var animationManager = null;
document.addEventListener('DOMContentLoaded', function () {
  animationManager = new AnimationManager();
}); // Export for external use

window.AnimationManager = AnimationManager;
window.animationManager = animationManager;
//# sourceMappingURL=animations.dev.js.map
