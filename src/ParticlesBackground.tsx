// ParticlesBackground.tsx
import { useRef, useEffect } from "react";

const ParticlesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particleCount = 120;
    const particles: { x: number; y: number; vx: number; vy: number; size: number }[] = [];

    // Crear partículas iniciales (estrellas normales)
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 3 + 1,
      });
    }

    // ---- Estrella fugaz ----
    let shootingStar: { x: number; y: number; vx: number; vy: number; life: number } | null = null;
    let shootingCooldown = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Fondo degradado (suaviza el parpadeo)
      const bg = ctx.createLinearGradient(0, 0, 0, height);
      bg.addColorStop(0, "#0f172a");
      bg.addColorStop(1, "#1e293b");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, width, height);

      // Dibujar estrellas normales
      particles.forEach((p) => {
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
        gradient.addColorStop(0, "white");
        gradient.addColorStop(0.5, "#1c2e4a");
        gradient.addColorStop(1, "#0f172a");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Movimiento
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      });

      // Dibujar estrella fugaz si existe
      if (shootingStar) {
        ctx.strokeStyle = "white";
        ctx.lineWidth = 2;
        ctx.globalAlpha = shootingStar.life / 100; // se desvanece
        ctx.beginPath();
        ctx.moveTo(shootingStar.x, shootingStar.y);
        ctx.lineTo(shootingStar.x - shootingStar.vx * 10, shootingStar.y - shootingStar.vy * 10);
        ctx.stroke();
        ctx.globalAlpha = 1;

        // Actualizar posición y vida
        shootingStar.x += shootingStar.vx;
        shootingStar.y += shootingStar.vy;
        shootingStar.life -= 2;

        // Cuando muere, se elimina
        if (shootingStar.life <= 0) shootingStar = null;
      } else {
        // Crear nueva estrella fugaz cada cierto tiempo
        if (shootingCooldown <= 0 && Math.random() < 0.002) {
          shootingStar = {
            x: Math.random() * width,
            y: Math.random() * height * 0.3, // aparece arriba
            vx: 10 + Math.random() * 5, // velocidad rápida
            vy: 10 + Math.random() * 5,
            life: 100,
          };
          shootingCooldown = 300; // enfriamiento (frames) antes de otra fugaz
        }
      }

      shootingCooldown--;

      requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        background: "#0f172a",
      }}
    />
  );
};

export default ParticlesBackground;
