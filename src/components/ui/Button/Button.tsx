import type { FC, ReactNode, MouseEvent } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  href?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  download?: boolean | string;
  target?: string;
  rel?: string;
  className?: string;
  id?: string;
}

export const Button: FC<ButtonProps> = ({
  children,
  variant = 'primary',
  href,
  onClick,
  download,
  target,
  rel,
  className = '',
  id,
}) => {
  const getVariantClass = () => {
    switch (variant) {
      case 'outline':
        return styles.btnOutline;
      case 'ghost':
        return styles.btnGhost;
      case 'primary':
      default:
        return styles.btnPrimary;
    }
  };

  const fullClassName = `${styles.btn} ${getVariantClass()} ${className}`.trim();

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick as any}
        download={download}
        target={target}
        rel={rel}
        className={fullClassName}
        id={id}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={fullClassName} id={id}>
      {children}
    </button>
  );
};
