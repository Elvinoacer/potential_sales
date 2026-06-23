"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const slides = [
  "https://aquaterias.like-themes.com/wp-content/uploads/2018/01/slider-2.jpg",
  "https://aquaterias.like-themes.com/wp-content/uploads/2018/01/slider-3.jpg",
  "https://aquaterias.like-themes.com/wp-content/uploads/2018/01/slider-4.jpg",
  "https://aquaterias.like-themes.com/wp-content/uploads/2018/01/slider-1.jpg",
  "https://aquaterias.like-themes.com/wp-content/uploads/2018/01/slider-5.jpg",
];

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const bubbles = Array.from({ length: 42 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: 2 + Math.random() * 4,
      speed: 0.15 + Math.random() * 0.35,
      opacity: 0.18 + Math.random() * 0.25,
    }));

    let frame = 0;
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      bubbles.forEach((bubble) => {
        ctx.beginPath();
        ctx.arc(bubble.x * canvas.width, bubble.y * canvas.height, bubble.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(123, 185, 255, ${bubble.opacity})`;
        ctx.lineWidth = 1.6;
        ctx.stroke();
        bubble.y -= bubble.speed / canvas.height;
        if (bubble.y < -0.04) bubble.y = 1.04;
      });
      frame = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="aquaterias-hero">
      <canvas ref={canvasRef} className="hero-bubbles" aria-hidden="true" />
      <div className="hero-slider-shell">
        <div className="hero-zoom-slider" aria-hidden="true">
          {slides.map((slide, index) => (
            <div
              key={slide}
              className="hero-slide"
              style={{
                backgroundImage: `url(${slide})`,
                animationDelay: `${index * 4.5}s`,
              }}
            />
          ))}
        </div>

        <div className="hero-content-wrap">
          <div className="hero-copy-panel">
            <p className="hero-subheader">Mineral Water</p>
            <h1>FOR EVERY DAY</h1>
            <p className="hero-description">
              <em>Our delivery service employs more than 100 professional couriers.</em>
              <br />
              <em>We will deliver water to your home.</em>
            </p>
            <div className="hero-actions">
              <a className="hero-btn hero-btn-blue" href="#about">Read More</a>
              <a className="hero-btn hero-btn-purple" href="#delivery">Make Order</a>
            </div>
          </div>
          <Image
            priority
            src="/assets/slider-dark-bottle.png"
            alt="Aquaterias mineral water bottles"
            width={707}
            height={696}
            className="hero-bottle-composite"
          />
        </div>
      </div>
    </section>
  );
}
