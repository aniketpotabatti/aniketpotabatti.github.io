import React, { useRef } from 'react';
import styles from './Cursor.module.css';
import { useCustomCursor } from '../../hooks/useCustomCursor';

export const Cursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const followerRef = useRef<HTMLDivElement | null>(null);

  const { isHovering, isVisible } = useCustomCursor(cursorRef, followerRef);

  if (!isVisible) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className={`${styles.cursor} ${isHovering ? styles.cursorHovering : ''}`}
        aria-hidden="true"
      />
      <div
        ref={followerRef}
        className={`${styles.follower} ${isHovering ? styles.followerHovering : ''}`}
        aria-hidden="true"
      />
    </>
  );
};
