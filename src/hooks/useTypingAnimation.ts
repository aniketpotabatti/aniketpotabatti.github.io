import { useEffect, useState } from 'react';

export const useTypingAnimation = (
  words: string[],
  startDelay: number = 1200
): string => {
  const [typedText, setTypedText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  // Initial delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasStarted(true);
    }, startDelay);
    return () => clearTimeout(timer);
  }, [startDelay]);

  useEffect(() => {
    if (!hasStarted || words.length === 0) return;

    const currentWord = words[wordIndex];
    let delay = isDeleting ? 60 : 110;

    const tick = () => {
      if (!isDeleting) {
        // Typing
        setTypedText(currentWord.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === currentWord.length) {
          // Finished typing, pause
          delay = 1800;
          setIsDeleting(true);
        }
      } else {
        // Deleting
        setTypedText(currentWord.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex - 1 === 0) {
          // Finished deleting, go to next word
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
          delay = 400;
        }
      }
    };

    const timer = setTimeout(tick, delay);
    return () => clearTimeout(timer);
  }, [hasStarted, charIndex, isDeleting, wordIndex, words]);

  return typedText;
};
