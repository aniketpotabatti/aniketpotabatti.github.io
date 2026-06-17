import { useEffect, useState } from 'react';

export const useScrollProgress = (): number => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const pct = docHeight > 0 ? (scrolled / docHeight) * 100 : 0;
      setScrollProgress(pct);
    };

    // Throttle helper
    let lastTime = 0;
    const throttledScroll = () => {
      const now = Date.now();
      if (now - lastTime >= 50) {
        lastTime = now;
        handleScroll();
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    // Initial run
    handleScroll();

    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, []);

  return scrollProgress;
};
