/* ========================================
   Portfolio — JavaScript
   Scroll reveals, nav behavior, mobile menu
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
  const allNavLinks = document.querySelectorAll('.nav__link');
  const revealElements = document.querySelectorAll('.reveal');
  const sections = document.querySelectorAll('.section, .hero');

  // ============================
  // Scroll — Nav background
  // ============================
  function handleNavScroll() {
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  // ============================
  // Scroll — Active nav link
  // ============================
  function handleActiveLink() {
    let current = '';
    const scrollPos = window.scrollY + window.innerHeight / 3;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
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
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -80px 0px',
      threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

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
  // Smooth scroll for nav links
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
  // Throttle utility
  // ============================
  function throttle(fn, wait) {
    let lastTime = 0;
    return function (...args) {
      const now = Date.now();
      if (now - lastTime >= wait) {
        lastTime = now;
        fn.apply(this, args);
      }
    };
  }

  // ============================
  // Event Listeners
  // ============================
  function init() {
    // Scroll events (throttled)
    const onScroll = throttle(() => {
      handleNavScroll();
      handleActiveLink();
    }, 100);

    window.addEventListener('scroll', onScroll, { passive: true });

    // Initial calls
    handleNavScroll();
    handleActiveLink();

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

    // Logo click — scroll to top
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

    // Close mobile menu on resize to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 640) {
        closeMobileMenu();
      }
    });
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
