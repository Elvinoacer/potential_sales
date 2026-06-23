"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  {
    label: "Home",
    sub: ["Dark Version", "Water Shop", "Water Delivery"],
  },
  {
    label: "About us",
    sub: ["About us", "Testimonials", "Team", "FAQ"],
  },
  {
    label: "Products",
    sub: ["Shop", "Cart", "Checkout", "My account"],
  },
  {
    label: "Blog",
    sub: ["Blog One Column", "Blog Two Columns", "Blog Three Columns"],
  },
  {
    label: "Gallery",
    sub: ["Gallery 2-columns", "Gallery 3-columns", "Gallery 4-columns"],
  },
  { label: "Contacts" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0a0a0a] shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#" className="flex-shrink-0">
          <Image
            src="/assets/logo.png"
            alt="Aquaterias"
            width={160}
            height={28}
            className="h-[48px] w-auto"
          />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li
              key={link.label}
              className="relative group"
              onMouseEnter={() => link.sub && setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a
                href="#"
                className="text-white text-sm font-medium tracking-wide uppercase hover:text-[#21b6ff] transition-colors duration-200 py-2 flex items-center gap-1"
              >
                {link.label}
                {link.sub && (
                  <svg className="w-3 h-3 opacity-60" fill="currentColor" viewBox="0 0 10 6">
                    <path d="M0 0l5 6 5-6H0z" />
                  </svg>
                )}
              </a>
              {link.sub && activeDropdown === link.label && (
                <ul className="absolute top-full left-0 bg-[#0d0d0d] border border-white/10 min-w-[180px] py-2 shadow-xl">
                  {link.sub.map((s) => (
                    <li key={s}>
                      <a
                        href="#"
                        className="block px-5 py-2 text-sm text-white/80 hover:text-[#21b6ff] hover:bg-white/5 transition-colors"
                      >
                        {s}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Right: Search + Cart */}
        <div className="hidden lg:flex items-center gap-5">
          <button className="text-white/70 hover:text-[#21b6ff] transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <a href="#" className="flex items-center gap-2 text-white/80 hover:text-[#21b6ff] text-sm transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span>Cart</span>
            <span className="bg-[#21b6ff] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">0</span>
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <div className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#0d0d0d] border-t border-white/10 px-6 py-4">
          {navLinks.map((link) => (
            <div key={link.label} className="border-b border-white/5 py-3">
              <a href="#" className="text-white text-sm font-medium uppercase tracking-wide">
                {link.label}
              </a>
              {link.sub && (
                <div className="pl-4 mt-2 space-y-1">
                  {link.sub.map((s) => (
                    <a key={s} href="#" className="block text-white/60 text-sm py-1 hover:text-[#21b6ff]">
                      {s}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
