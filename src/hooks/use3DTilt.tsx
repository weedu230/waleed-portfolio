import { useRef, useEffect } from 'react';

interface TiltOptions {
  maxTilt?: number;
  perspective?: number;
  easing?: string;
  scale?: number;
  speed?: number;
  transition?: boolean;
  reset?: boolean;
}

export const use3DTilt = (options: TiltOptions = {}) => {
  const {
    maxTilt = 20,
    perspective = 1000,
    easing = "cubic-bezier(.03,.98,.52,.99)",
    scale = 1.02,
    speed = 400,
    transition = true,
    reset = true
  } = options;

  const ref = useRef<any>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const settings = {
      maxTilt,
      perspective,
      easing,
      scale,
      speed,
      transition,
      reset
    };

    const handleMouseEnter = () => {
      if (transition) {
        element.style.transition = `${speed}ms ${easing}`;
      }
      element.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(${scale}, ${scale}, ${scale})`;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const width = element.offsetWidth;
      const height = element.offsetHeight;
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      const rotateY = (mouseX / width - 0.5) * maxTilt;
      const rotateX = (0.5 - mouseY / height) * maxTilt;
      
      element.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`;
    };

    const handleMouseLeave = () => {
      if (reset) {
        element.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      }
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [maxTilt, perspective, easing, scale, speed, transition, reset]);

  return ref;
};