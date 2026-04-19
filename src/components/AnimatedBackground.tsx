"use client";

import React, { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    // Configurações das partículas
    const particleCount = 70; // Quantidade de pontos
    const maxSpeed = 0.3; // Bem lento e sutil

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;

      constructor(w: number, h: number) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.size = Math.random() * 1.5 + 0.5; // Tamanhos pequenos
        this.speedX = (Math.random() - 0.5) * maxSpeed;
        this.speedY = (Math.random() - 0.5) * maxSpeed;
        this.opacity = Math.random() * 0.5 + 0.1; // Opacidade baixa (0.1 a 0.6)
      }

      update(w: number, h: number) {
        this.x += this.speedX;
        this.y += this.speedY;

        // Efeito infinito de reaparecer no lado oposto sem criar novas instâncias processuais
        if (this.x < 0) this.x = w;
        if (this.x > w) this.x = 0;
        if (this.y < 0) this.y = h;
        if (this.y > h) this.y = 0;
      }

      draw(context: CanvasRenderingContext2D) {
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        context.fill();

        // Brilho difuso em volta da partícula principal
        context.shadowBlur = 10;
        context.shadowColor = "rgba(255, 255, 255, 0.4)";
      }
    }

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };

    const animate = () => {
      // Limpa o canvas e deixa o fundo transparente
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.update(canvas.width, canvas.height);
        p.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => {
      init();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-[-10]"
      />
      {/* Um fraco gradiente estático para misturar as cores dando sensação de profundidade sem impacto de FPS */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-[-11] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/[0.03] via-background to-background" />
    </>
  );
}

