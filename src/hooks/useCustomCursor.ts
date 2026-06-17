import { useEffect, useState } from 'react';
import type { RefObject } from 'react';

export const useCustomCursor = (
  cursorRef: RefObject<HTMLDivElement | null>,
  followerRef: RefObject<HTMLDivElement | null>
) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if device supports hover (desktop vs mobile)
    const hoverMedia = window.matchMedia('(hover: hover)');
    if (!hoverMedia.matches) return;

    setIsVisible(true);

    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;
    let rafId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${mouseX}px`;
        cursorRef.current.style.top = `${mouseY}px`;
      }
    };

    const animateFollower = () => {
      followerX += (mouseX - followerX) * 0.12;
      followerY += (mouseY - followerY) * 0.12;

      if (followerRef.current) {
        followerRef.current.style.left = `${followerX}px`;
        followerRef.current.style.top = `${followerY}px`;
      }

      rafId = requestAnimationFrame(animateFollower);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        target.closest('a, button, [role="button"], .project-card, .skill-card, .blog-item, [data-interactive="true"]')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    // Attach listeners
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    rafId = requestAnimationFrame(animateFollower);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(rafId);
    };
  }, [cursorRef, followerRef]);

  return { isHovering, isVisible };
};
