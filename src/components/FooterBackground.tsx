import { useEffect, useRef } from 'react';

interface FloatingShape {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  rotation: number;
  rotationSpeed: number;
  shape: 'circle' | 'square' | 'triangle';
}

const FooterBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const shapesRef = useRef<FloatingShape[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const createShapes = () => {
      const shapes: FloatingShape[] = [];
      const shapeCount = Math.min(25, Math.floor((canvas.width * canvas.height) / 20000));
      const shapeTypes: ('circle' | 'square' | 'triangle')[] = ['circle', 'square', 'triangle'];
      
      for (let i = 0; i < shapeCount; i++) {
        shapes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 8 + 4,
          opacity: Math.random() * 0.2 + 0.05,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.01,
          shape: shapeTypes[Math.floor(Math.random() * shapeTypes.length)]
        });
      }
      shapesRef.current = shapes;
    };

    const updateShapes = () => {
      const shapes = shapesRef.current;
      shapes.forEach(shape => {
        shape.x += shape.vx;
        shape.y += shape.vy;
        shape.rotation += shape.rotationSpeed;

        if (shape.x < -shape.size) shape.x = canvas.width + shape.size;
        if (shape.x > canvas.width + shape.size) shape.x = -shape.size;
        if (shape.y < -shape.size) shape.y = canvas.height + shape.size;
        if (shape.y > canvas.height + shape.size) shape.y = -shape.size;

        // Subtle opacity animation
        shape.opacity += Math.sin(Date.now() * 0.001 + shape.x * 0.01) * 0.001;
        shape.opacity = Math.max(0.02, Math.min(0.15, shape.opacity));
      });
    };

    const drawShape = (shape: FloatingShape) => {
      ctx.save();
      ctx.translate(shape.x, shape.y);
      ctx.rotate(shape.rotation);
      
      // Get theme colors - check if dark mode
      const isDark = document.documentElement.classList.contains('dark');
      const skyColor = isDark ? 'rgba(77, 171, 209, ' : 'rgba(77, 171, 209, ';
      const orangeColor = isDark ? 'rgba(255, 107, 52, ' : 'rgba(255, 107, 52, ';
      const color = Math.random() > 0.5 ? skyColor : orangeColor;
      
      ctx.fillStyle = color + shape.opacity + ')';
      ctx.strokeStyle = color + (shape.opacity * 0.5) + ')';
      ctx.lineWidth = 1;

      switch (shape.shape) {
        case 'circle':
          ctx.beginPath();
          ctx.arc(0, 0, shape.size, 0, Math.PI * 2);
          ctx.fill();
          break;
        case 'square':
          ctx.fillRect(-shape.size/2, -shape.size/2, shape.size, shape.size);
          ctx.strokeRect(-shape.size/2, -shape.size/2, shape.size, shape.size);
          break;
        case 'triangle':
          ctx.beginPath();
          ctx.moveTo(0, -shape.size/2);
          ctx.lineTo(-shape.size/2, shape.size/2);
          ctx.lineTo(shape.size/2, shape.size/2);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
          break;
      }
      
      ctx.restore();
    };

    const drawShapes = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const shapes = shapesRef.current;
      shapes.forEach(drawShape);
    };

    const animate = () => {
      updateShapes();
      drawShapes();
      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createShapes();
    animate();

    const handleResize = () => {
      resizeCanvas();
      createShapes();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-60"
      style={{ zIndex: 1 }}
    />
  );
};

export default FooterBackground;