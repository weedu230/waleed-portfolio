import { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  start?: number;
  trigger?: boolean;
}

const AnimatedCounter = ({ 
  end, 
  duration = 2000, 
  suffix = '', 
  prefix = '', 
  className = '',
  start = 0,
  trigger = true
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(start);
  const [hasStarted, setHasStarted] = useState(false);
  const countRef = useRef(start);
  const frameRef = useRef<number>();

  useEffect(() => {
    if (!trigger || hasStarted) return;

    setHasStarted(true);
    const startTime = Date.now();
    const startCount = countRef.current;
    const endCount = end;

    const easeOutQuart = (t: number): number => {
      return 1 - Math.pow(1 - t, 4);
    };

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easedProgress = easeOutQuart(progress);
      const currentCount = startCount + (endCount - startCount) * easedProgress;
      
      countRef.current = currentCount;
      setCount(Math.floor(currentCount));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(endCount);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [end, duration, trigger, hasStarted]);

  return (
    <span className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

export default AnimatedCounter;