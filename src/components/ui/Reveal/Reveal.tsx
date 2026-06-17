import type { FC, ReactNode } from 'react';
import { useIntersectionReveal } from '../../../hooks/useIntersectionReveal';

interface RevealProps {
  children: ReactNode;
  delay?: number;
}

export const Reveal: FC<RevealProps> = ({ children, delay }) => {
  const { ref, isRevealed } = useIntersectionReveal();
  const delayClass = delay ? `reveal-delay-${delay}` : '';

  return (
    <div
      ref={ref as any}
      className={`reveal ${isRevealed ? 'revealed' : ''} ${delayClass}`}
    >
      {children}
    </div>
  );
};
