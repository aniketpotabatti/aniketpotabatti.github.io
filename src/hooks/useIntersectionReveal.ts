import { useEffect, useRef, useState } from 'react';

export const useIntersectionReveal = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    // Check prefers-reduced-motion
    // const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // if (prefersReducedMotion) {
    // setIsRevealed(true);
    // return;
    // }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsRevealed(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -80px 0px',
        threshold: 0.12,
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return { ref, isRevealed };
};
