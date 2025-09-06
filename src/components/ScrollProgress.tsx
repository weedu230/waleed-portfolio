import { useState, useEffect } from 'react';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-background/20 backdrop-blur-sm z-50">
      <div 
        className="h-full bg-gradient-to-r from-brand-sky via-brand-orange to-brand-sky transition-all duration-300 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
      <div 
        className="absolute top-0 h-full w-2 bg-white rounded-full shadow-lg transition-all duration-300 ease-out"
        style={{ 
          left: `${Math.max(scrollProgress - 1, 0)}%`,
          opacity: scrollProgress > 0 ? 1 : 0
        }}
      />
    </div>
  );
};

export default ScrollProgress;