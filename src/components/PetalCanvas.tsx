import React, { useEffect, useRef } from 'react';

interface Petal {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotationSpeed: number;
  color: string;
  opacity: number;
}

export const PetalCanvas: React.FC<{ className?: string; count?: number }> = ({ 
  className = "absolute inset-0 pointer-events-none z-10",
  count = 18 
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const colors = [
      'rgba(247, 229, 227, 0.45)', // Soft blush
      'rgba(201, 143, 145, 0.35)', // Muted rose
      'rgba(243, 232, 216, 0.4)',  // Champagne
      'rgba(198, 164, 106, 0.3)',  // Champagne gold
    ];

    const petals: Petal[] = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height - height,
      size: 7 + Math.random() * 8,
      speedY: 0.5 + Math.random() * 0.9,
      speedX: (Math.random() - 0.5) * 0.7,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.02,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: 0.2 + Math.random() * 0.4,
    }));

    const drawPetal = (petal: Petal) => {
      ctx.save();
      ctx.translate(petal.x, petal.y);
      ctx.rotate(petal.rotation);
      ctx.fillStyle = petal.color;
      ctx.beginPath();
      // Draw organic petal curve
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(petal.size / 2, -petal.size / 2, petal.size, -petal.size / 4, petal.size, 0);
      ctx.bezierCurveTo(petal.size, petal.size / 4, petal.size / 2, petal.size / 2, 0, 0);
      ctx.fill();
      ctx.restore();
    };

    let isVisible = true;
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(canvas);

    const render = () => {
      if (isVisible) {
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < petals.length; i++) {
          const p = petals[i];
          p.y += p.speedY;
          p.x += Math.sin(p.y * 0.01) * 0.4 + p.speedX;
          p.rotation += p.rotationSpeed;

          // Recycle when out of bounds
          if (p.y > height + 20) {
            p.y = -20;
            p.x = Math.random() * width;
          }
          if (p.x > width + 20) p.x = -20;
          if (p.x < -20) p.x = width + 20;

          drawPetal(p);
        }
      }
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, [count]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
};
