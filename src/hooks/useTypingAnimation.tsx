import { useState, useEffect } from 'react';

export const useTypingAnimation = (
  texts: string[],
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 2000
) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    
    const timeout = setTimeout(() => {
      if (isTyping) {
        if (currentCharIndex < currentText.length) {
          setDisplayedText(currentText.slice(0, currentCharIndex + 1));
          setCurrentCharIndex(prev => prev + 1);
        } else {
          setTimeout(() => setIsTyping(false), pauseTime);
        }
      } else {
        if (currentCharIndex > 0) {
          setDisplayedText(currentText.slice(0, currentCharIndex - 1));
          setCurrentCharIndex(prev => prev - 1);
        } else {
          setIsTyping(true);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isTyping ? typingSpeed : deletingSpeed);

    return () => clearTimeout(timeout);
  }, [currentCharIndex, currentTextIndex, isTyping, texts, typingSpeed, deletingSpeed, pauseTime]);

  return displayedText;
};