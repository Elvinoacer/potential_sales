"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

interface Bubble {
  x: number;
  y: number;
  r: number;
  vy: number;
  vx: number;
  opacity: number;
}

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrameId: number;
    const bubbles: Bubble[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Init bubbles
    for (let i = 0; i < 55; i++) {
      bubbles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 20 + 4,
        vy: -(Math.random() * 0.6 + 0.2),
        vx: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.3 + 0.05,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      bubbles.forEach((b) => {
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(33,182,255,${b.opacity})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // Highlight
        const grad = ctx.createRadialGradient(b.x - b.r * 0.3, b.y - b.r * 0.3, 1, b.x, b.y, b.r);
        grad.addColorStop(0, `rgba(33,182,255,${b.opacity * 0.4})`);
        grad.addColorStop(1, `rgba(33,182,255,0)`);
        ctx.fillStyle = grad;
        ctx.fill();

        b.y += b.vy;
        b.x += b.vx;
        if (b.y + b.r < 0) {
          b.y = canvas.height + b.r;
          b.x = Math.random() * canvas.width;
        }
        if (b.x < -b.r) b.x = canvas.width + b.r;
        if (b.x > canvas.width + b.r) b.x = -b.r;
      });
      animFrameId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-[#0a0a0a] overflow-hidden flex items-center">
      {/* Animated bubbles canvas - full hero */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />

      {/* Subtle gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 60% 50%, rgba(33,182,255,0.06) 0%, transparent 70%)",
          zIndex: 1,
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full py-32 pt-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <p className="text-[#21b6ff] text-sm font-medium uppercase tracking-[0.25em] mb-3">
              Mineral Water
            </p>
            <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight mb-6 uppercase tracking-tight">
              FOR EVERY<br />DAY
            </h1>
            <p className="text-white/60 text-base leading-relaxed mb-8 max-w-md italic">
              Our delivery service employs more than 100 professional couriers.
              We will deliver water to your home.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-block px-8 py-3 border border-white/40 text-white text-sm uppercase tracking-widest hover:border-white hover:bg-white/5 transition-all duration-200"
              >
                Read More
              </a>
              <a
                href="#"
                className="inline-block px-8 py-3 bg-[#111] border border-white/20 text-white text-sm uppercase tracking-widest hover:bg-[#1a1a1a] transition-all duration-200"
              >
                Make Order
              </a>
            </div>
          </div>

          {/* Right: Bottle */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/assets/slider-dark-bottle.png"
              alt="Aquaterias Mineral Water Bottle"
              width={520}
              height={512}
              className="w-[340px] md:w-[420px] lg:w-[500px] object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
