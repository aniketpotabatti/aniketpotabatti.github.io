import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import { siteConfig } from '../../data/siteConfig';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const toggleMenu = () => {
    setIsMenuOpen((prev) => {
      const next = !prev;
      document.body.style.overflow = next ? 'hidden' : '';
      return next;
    });
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  useEffect(() => {
    const handleScroll = () => {
      // Nav scroll background
      setIsScrolled(window.scrollY > 60);

      // Active link on scroll
      const scrollPos = window.scrollY + window.innerHeight / 3;
      let current = 'hero';
      const sectionIds = ['hero', 'about', 'experience', 'skills', 'projects', 'blog', 'contact'];

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    // Close mobile menu on desktop resize
    const handleResize = () => {
      if (window.innerWidth > 640) {
        closeMenu();
      }
    };

    // Throttle helper
    let lastTime = 0;
    const throttledScroll = () => {
      const now = Date.now();
      if (now - lastTime >= 60) {
        lastTime = now;
        handleScroll();
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    
    // Initial call
    handleScroll();

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = '';
    };
  }, []);

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    closeMenu();

    const target = document.getElementById(sectionId);
    if (target) {
      const navEl = document.getElementById('nav');
      const offset = (navEl?.offsetHeight || 70) + 20;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}
      id="nav"
    >
      <div className={`container ${styles.inner}`}>
        <a
          href="#hero"
          onClick={(e) => handleNavLinkClick(e, 'hero')}
          className={styles.logo}
          id="nav-logo"
        >
          <svg
            width="36"
            height="36"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="AP logo"
          >
            <rect width="64" height="64" rx="10" fill="#000" />
            <text
              x="50%"
              y="54%"
              dominantBaseline="middle"
              textAnchor="middle"
              fontFamily="Inter, sans-serif"
              fontSize="26"
              fontWeight="700"
              letterSpacing="-1"
              fill="#fff"
            >
              {siteConfig.logoText}
            </text>
          </svg>
        </a>

        <ul className={`${styles.links} ${isMenuOpen ? styles.open : ''}`} id="nav-links">
          {siteConfig.navItems.map((item) => (
            <li key={item.sectionId}>
              <a
                href={`#${item.sectionId}`}
                onClick={(e) => handleNavLinkClick(e, item.sectionId)}
                className={`${styles.link} ${
                  activeSection === item.sectionId ? styles.active : ''
                }`}
                data-section={item.sectionId}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`}
          id="nav-hamburger"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};
