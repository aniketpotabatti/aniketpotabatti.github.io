/* ========================================
   Portfolio — JavaScript
   Loader · Custom Cursor · Progress Bar
   Typing Animation · Scroll Reveals
   Nav · Mobile Menu · Auto-Classify Links
   ======================================== */

(function () {
  'use strict';

  // ============================
  // DOM Elements
  // ============================
  const nav = document.getElementById('nav');
  const navLinks = document.getElementById('nav-links');
  const navHamburger = document.getElementById('nav-hamburger');
  const backToTop = document.getElementById('back-to-top');
  const progressBar = document.getElementById('progress-bar');
  const loader = document.getElementById('loader');
  const cursor = document.getElementById('cursor');
  const cursorFollower = document.getElementById('cursor-follower');
  const heroTyping = document.getElementById('hero-typing');
  const allNavLinks = document.querySelectorAll('.nav__link');
  const revealElements = document.querySelectorAll('.reveal');
  const sections = document.querySelectorAll('.section, .hero');

  // ============================
  // Page Loader
  // ============================
  function hideLoader() {
    if (!loader) return;
    // Minimum display time so it doesn't flash
    setTimeout(() => {
      loader.classList.add('hidden');
    }, 900);
  }

  // ============================
  // Custom Cursor
  // ============================
  let mouseX = 0, mouseY = 0;
  let followerX = 0, followerY = 0;

  function initCursor() {
    if (!cursor || !cursorFollower) return;
    // Hide system cursor already done via CSS `cursor: none`

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = mouseX + 'px';
      cursor.style.top = mouseY + 'px';
    });

    // Smooth follower via rAF
    function animateFollower() {
      followerX += (mouseX - followerX) * 0.12;
      followerY += (mouseY - followerY) * 0.12;
      cursorFollower.style.left = followerX + 'px';
      cursorFollower.style.top = followerY + 'px';
      requestAnimationFrame(animateFollower);
    }
    animateFollower();

    // Hover effect on interactive elements
    const hoverTargets = document.querySelectorAll('a, button, .project-card, .skill-card, .blog-item');
    hoverTargets.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('hovering');
        cursorFollower.classList.add('hovering');
      });
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hovering');
        cursorFollower.classList.remove('hovering');
      });
    });
  }

  // ============================
  // Progress Bar
  // ============================
  function updateProgressBar() {
    if (!progressBar) return;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    const pct = docHeight > 0 ? (scrolled / docHeight) * 100 : 0;
    progressBar.style.width = pct + '%';
  }

  // ============================
  // Typing Animation
  // ============================
  const TITLES = [
    'Freelance Data Scientist',
    'Developer Enthusiast',
    'Generative AI Engineer',
    'Problem Solver',
  ];

  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingTimer;

  function typeWriter() {
    if (!heroTyping) return;
    const current = TITLES[titleIndex];

    if (isDeleting) {
      heroTyping.textContent = current.substring(0, charIndex - 1);
      charIndex--;
    } else {
      heroTyping.textContent = current.substring(0, charIndex + 1);
      charIndex++;
    }

    let delay = isDeleting ? 60 : 110;

    if (!isDeleting && charIndex === current.length) {
      delay = 1800; // pause at end
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % TITLES.length;
      delay = 400;
    }

    typingTimer = setTimeout(typeWriter, delay);
  }

  function initTyping() {
    // Start typing after initial hero animation completes
    setTimeout(() => {
      if (heroTyping) typeWriter();
    }, 1200);
  }

  // ============================
  // Nav — Background on scroll
  // ============================
  function handleNavScroll() {
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  // ============================
  // Nav — Active link on scroll
  // ============================
  function handleActiveLink() {
    let current = '';
    const scrollPos = window.scrollY + window.innerHeight / 3;

    sections.forEach((section) => {
      if (scrollPos >= section.offsetTop &&
        scrollPos < section.offsetTop + section.offsetHeight) {
        current = section.getAttribute('id');
      }
    });

    allNavLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('data-section') === current) {
        link.classList.add('active');
      }
    });
  }

  // ============================
  // Intersection Observer — Reveal
  // ============================
  function initRevealObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { root: null, rootMargin: '0px 0px -80px 0px', threshold: 0.12 });

    revealElements.forEach((el) => observer.observe(el));
  }

  // ============================
  // Mobile Menu Toggle
  // ============================
  function toggleMobileMenu() {
    navHamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  }

  function closeMobileMenu() {
    navHamburger.classList.remove('open');
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
  }

  // ============================
  // Smooth Scroll for Nav Links
  // ============================
  function handleNavClick(e) {
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        closeMobileMenu();
        const offset = nav.offsetHeight + 20;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  }

  // ============================
  // Back to Top
  // ============================
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ============================
  // Auto-classify Links by Domain
  // ============================
  function autoClassifyLinks() {
    const elements = document.querySelectorAll('.project-card, .blog-item, .contact__social-link');
    const domainMap = {
      'github.com': 'link-github',
      'medium.com': 'link-medium',
      'linkedin.com': 'link-linkedin',
      'x.com': 'link-x',
      'twitter.com': 'link-x',
      'kaggle.com': 'link-kaggle',
    };

    elements.forEach((el) => {
      const href = el.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('mailto:')) return;
      try {
        const host = new URL(href).hostname.toLowerCase();
        for (const [domain, cls] of Object.entries(domainMap)) {
          if (host.includes(domain)) {
            el.classList.add(cls);
            break;
          }
        }
      } catch (_) { /* invalid URL, skip */ }
    });
  }

  // ============================
  // Throttle Utility
  // ============================
  function throttle(fn, wait) {
    let last = 0;
    return function (...args) {
      const now = Date.now();
      if (now - last >= wait) { last = now; fn.apply(this, args); }
    };
  }

  // ============================
  // Init
  // ============================
  function init() {
    // Loader
    hideLoader();

    // Cursor
    initCursor();

    // Typing animation
    initTyping();

    // Scroll-based features
    const onScroll = throttle(() => {
      handleNavScroll();
      handleActiveLink();
      updateProgressBar();
    }, 60);

    window.addEventListener('scroll', onScroll, { passive: true });

    // Initial state
    handleNavScroll();
    handleActiveLink();
    updateProgressBar();

    // Reveal observer
    initRevealObserver();

    // Mobile menu
    if (navHamburger) {
      navHamburger.addEventListener('click', toggleMobileMenu);
    }

    // Nav link clicks
    allNavLinks.forEach((link) => {
      link.addEventListener('click', handleNavClick);
    });

    // Logo click
    const logo = document.getElementById('nav-logo');
    if (logo) {
      logo.addEventListener('click', (e) => {
        e.preventDefault();
        scrollToTop();
      });
    }

    // Back to top
    if (backToTop) {
      backToTop.addEventListener('click', scrollToTop);
    }

    // Close mobile menu on desktop resize
    window.addEventListener('resize', () => {
      if (window.innerWidth > 640) closeMobileMenu();
    });

    // Auto-classify external links
    autoClassifyLinks();
  }

  // ============================
  // Boot
  // ============================
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
