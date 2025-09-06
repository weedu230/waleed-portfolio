import { useRef, useEffect } from 'react';

interface MagneticEffectOptions {
  strength?: number;
  threshold?: number;
}

export const useMagneticEffect = ({ strength = 0.5, threshold = 100 }: MagneticEffectOptions = {}) => {
  const ref = useRef<any>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      
      if (distance < threshold) {
        const factor = (threshold - distance) / threshold;
        const translateX = deltaX * strength * factor;
        const translateY = deltaY * strength * factor;
        
        element.style.transform = `translate(${translateX}px, ${translateY}px)`;
      } else {
        element.style.transform = 'translate(0px, 0px)';
      }
    };

    const handleMouseLeave = () => {
      element.style.transform = 'translate(0px, 0px)';
    };

    window.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength, threshold]);

  return ref;
};