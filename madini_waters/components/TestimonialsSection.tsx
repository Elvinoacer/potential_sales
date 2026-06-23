"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    img: "/assets/w8.jpg",
    name: "Anastasia Stone",
    role: "Barista",
    text: "Nullam orci dui, dictum et magna sollicitudin, tempor blandit erat. Maecenas suscipit tellus sit amet augue placerat fringilla a id lacus. Fusce tincidunt in leo lacinia condimentum. Maecenas suscipit tellus sit amet augue placerat fringilla a id lacus.",
  },
  {
    img: "/assets/m2.jpg",
    name: "Patrick James",
    role: "Manager",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis at turpis eu faucibus. In dignissim, enim eu ornare aliquet, metus ex tempor neque, sit amet efficitur turpis lorem et odio. Nam congue in orci at facilisis.",
  },
  {
    img: "/assets/m1.jpg",
    name: "Steven Rashford",
    role: "Developer",
    text: "Duis et tellus imperdiet, lacinia risus id, tincidunt ipsum. Integer euismod elit vel nibh commodo, at consequat nisl rhoncus. Aliquam tempor lorem odio, non aliquam nunc egestas in. Proin rutrum justo ac lorem pellentesque pretium.",
  },
  {
    img: "/assets/w7.jpg",
    name: "Anastasia Stone",
    role: "Administrator",
    text: "Nullam orci dui, dictum et magna sollicitudin, tempor blandit erat. Maecenas suscipit tellus sit amet augue placerat fringilla a id lacus. Fusce tincidunt in leo lacinia condimentum. Maecenas suscipit tellus sit amet augue placerat fringilla a id lacus.",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[current];

  return (
    <section
      className="relative bg-[#0a0a0a] py-20 lg:py-28 overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75))",
      }}
    >
      {/* Dark overlay pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(33,182,255,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[800px] mx-auto px-6 relative z-10 text-center">
        {/* Header */}
        <p className="text-[#21b6ff] text-xs font-medium uppercase tracking-[0.3em] mb-3">
          Testimonials
        </p>
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-12">
          What our clients say
        </h2>

        {/* Card */}
        <div
          key={current}
          className="border border-[#21b6ff]/30 bg-white/3 backdrop-blur-sm px-8 py-10 transition-all duration-500"
        >
          <div className="flex flex-col items-center mb-6">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#21b6ff] mb-4">
              <Image
                src={t.img}
                alt={t.name}
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="text-white font-semibold text-base">{t.name}</p>
            <p className="text-[#21b6ff] text-xs font-medium uppercase tracking-widest mt-1">
              {t.role}
            </p>
          </div>

          <div className="relative">
            <span className="absolute -top-4 left-0 text-[#21b6ff] text-6xl font-serif leading-none opacity-40">
              &ldquo;
            </span>
            <p className="text-white/70 text-sm leading-relaxed pl-4">{t.text}</p>
          </div>
        </div>

        {/* Nav arrows */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() =>
              setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
            }
            className="w-10 h-10 border border-white/20 text-white/60 hover:border-[#21b6ff] hover:text-[#21b6ff] flex items-center justify-center transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === current ? "bg-[#21b6ff] w-5" : "bg-white/30"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setCurrent((c) => (c + 1) % testimonials.length)}
            className="w-10 h-10 border border-white/20 text-white/60 hover:border-[#21b6ff] hover:text-[#21b6ff] flex items-center justify-center transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="mt-8">
          <a
            href="#"
            className="inline-block px-6 py-2 border border-white/20 text-white/60 text-xs uppercase tracking-widest hover:border-[#21b6ff] hover:text-[#21b6ff] transition-all"
          >
            View more
          </a>
        </div>
      </div>
    </section>
  );
}
