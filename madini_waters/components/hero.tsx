"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <>
      {/* ── Navbar ── */}
      <header className="aqua-header">
        <div className="aqua-header__inner">
          {/* Logo */}
          <Link href="/" className="aqua-logo">
            {/* Replace src with your actual logo image */}
            <div className="aqua-logo__icon">
              {/* Placeholder – swap with <Image src="/logo.png" …> */}
              <svg
                viewBox="0 0 60 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="aqua-logo__svg"
              >
                <ellipse
                  cx="20"
                  cy="22"
                  rx="18"
                  ry="12"
                  fill="#4FC3F7"
                  opacity="0.85"
                />
                <ellipse
                  cx="35"
                  cy="18"
                  rx="14"
                  ry="9"
                  fill="#1565C0"
                  opacity="0.7"
                />
              </svg>
            </div>
            <div className="aqua-logo__text">
              <span className="aqua-logo__name">AQUATERIAS</span>
              <span className="aqua-logo__tagline">natural healthy water</span>
            </div>
          </Link>

          {/* Nav links */}
          <nav className="aqua-nav">
            <Link href="/" className="aqua-nav__link aqua-nav__link--active">
              Home <span className="aqua-nav__caret">›</span>
            </Link>
            <Link href="/about" className="aqua-nav__link">
              About us <span className="aqua-nav__caret">›</span>
            </Link>
            <Link href="/products" className="aqua-nav__link">
              Products <span className="aqua-nav__caret">›</span>
            </Link>
            <Link href="/blog" className="aqua-nav__link">
              Blog <span className="aqua-nav__caret">›</span>
            </Link>
            <Link href="/gallery" className="aqua-nav__link">
              Gallery <span className="aqua-nav__caret">›</span>
            </Link>
            <Link href="/contacts" className="aqua-nav__link">
              Contacts
            </Link>
            <Link href="/pages" className="aqua-nav__link">
              Pages <span className="aqua-nav__caret">›</span>
            </Link>
          </nav>

          {/* Action icons */}
          <div className="aqua-header__actions">
            <button
              className="aqua-icon-btn aqua-icon-btn--cart"
              aria-label="Cart"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              <span className="aqua-icon-btn__badge">0</span>
            </button>
            <button
              className="aqua-icon-btn aqua-icon-btn--search"
              aria-label="Search"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="aqua-hero">
        {/* Rounded hero card */}
        <div className="aqua-hero__card">
          {/* Background image layer */}
          <div className="aqua-hero__bg">
            {/*
              Replace this div with:
              <Image
                src="/hero-bg.jpg"
                alt=""
                fill
                priority
                className="object-cover object-center"
              />
            */}
            <div className="aqua-hero__bg-placeholder" />
          </div>

          {/* Blue overlay tint */}
          <div className="aqua-hero__overlay" />

          {/* Product image – right side */}
          <div className="aqua-hero__product">
            {/*
              Replace this div with:
              <Image
                src="/water-bottles.png"
                alt="Aquaterias water bottles"
                fill
                priority
                className="object-contain object-bottom"
              />
            */}
            <div className="aqua-hero__product-placeholder" />
          </div>

          {/* Slide arrows */}
          <button
            className="aqua-slide-arrow aqua-slide-arrow--left"
            aria-label="Previous slide"
          >
            ‹
          </button>
          <button
            className="aqua-slide-arrow aqua-slide-arrow--right"
            aria-label="Next slide"
          >
            ›
          </button>

          {/* Content */}
          <div className="aqua-hero__content">
            <h1 className="aqua-hero__title">
              <span className="aqua-hero__title-line1">Mineral Water</span>
              <span className="aqua-hero__title-line2">FOR EVERY DAY</span>
            </h1>
            <p className="aqua-hero__subtitle">
              Our delivery service employs more than 100 professional couriers.
              <br />
              We will deliver water to your home.
            </p>
            <div className="aqua-hero__actions">
              <Link href="/about" className="aqua-btn aqua-btn--primary">
                Read More
              </Link>
              <Link href="/order" className="aqua-btn aqua-btn--dark">
                Make Order
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Scoped styles ── */}
      <style jsx>{`
        /* ─── Design tokens ─────────────────────────────── */
        :root {
          --aqua-purple-bg: #3a00c8; /* deep purple page background         */
          --aqua-purple-dark: #2800a0; /* darker purple shade                 */
          --aqua-blue-mid: #1a56db; /* mid-blue for active nav             */
          --aqua-blue-btn: #2979ff; /* "Read More" button                  */
          --aqua-btn-dark: #1a1f6e; /* "Make Order" button                 */
          --aqua-white: #ffffff;
          --aqua-white-80: rgba(255, 255, 255, 0.85);
          --aqua-white-60: rgba(255, 255, 255, 0.6);
          --aqua-font: "Segoe UI", "Open Sans", sans-serif;
          --aqua-radius-hero: 24px;
          --aqua-header-h: 80px;
        }

        /* ─── Page background ───────────────────────────── */
        :global(body) {
          background: var(--aqua-purple-bg);
          margin: 0;
          font-family: var(--aqua-font);
        }

        /* ─── Header ────────────────────────────────────── */
        .aqua-header {
          position: sticky;
          top: 0;
          z-index: 100;
          background: var(--aqua-purple-bg);
          height: var(--aqua-header-h);
          display: flex;
          align-items: center;
        }
        .aqua-header__inner {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          gap: 32px;
        }

        /* Logo */
        .aqua-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          flex-shrink: 0;
        }
        .aqua-logo__icon {
          width: 52px;
          height: 38px;
        }
        .aqua-logo__svg {
          width: 100%;
          height: 100%;
        }
        .aqua-logo__text {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }
        .aqua-logo__name {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1a56db;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .aqua-logo__tagline {
          font-size: 0.7rem;
          color: var(--aqua-white-80);
          letter-spacing: 0.02em;
        }

        /* Nav */
        .aqua-nav {
          display: flex;
          align-items: center;
          gap: 4px;
          flex: 1;
          justify-content: center;
        }
        .aqua-nav__link {
          color: var(--aqua-white);
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          padding: 6px 12px;
          border-radius: 4px;
          transition: color 0.2s;
          white-space: nowrap;
        }
        .aqua-nav__link:hover {
          color: #7ecef4;
        }
        .aqua-nav__link--active {
          color: #1a56db;
        }
        .aqua-nav__caret {
          font-size: 0.75rem;
          opacity: 0.8;
        }

        /* Action icons */
        .aqua-header__actions {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }
        .aqua-icon-btn {
          position: relative;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #1a56db;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--aqua-white);
          transition: background 0.2s;
        }
        .aqua-icon-btn:hover {
          background: #2979ff;
        }
        .aqua-icon-btn svg {
          width: 18px;
          height: 18px;
        }
        .aqua-icon-btn__badge {
          position: absolute;
          top: -4px;
          right: -4px;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #8bc34a;
          color: var(--aqua-white);
          font-size: 0.65rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* ─── Hero Section ──────────────────────────────── */
        .aqua-hero {
          background: var(--aqua-purple-bg);
          padding: 0 20px 40px;
        }

        .aqua-hero__card {
          position: relative;
          max-width: 1280px;
          margin: 0 auto;
          border-radius: var(--aqua-radius-hero);
          overflow: hidden;
          min-height: 500px;
          display: flex;
          align-items: center;
        }

        /* Background image */
        .aqua-hero__bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .aqua-hero__bg-placeholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg,
            #b8d4f0 0%,
            #8ab8e8 25%,
            #5a90d0 50%,
            #3a6ab8 70%,
            #2a50a0 100%
          );
        }

        /* Tint overlay */
        .aqua-hero__overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(
            90deg,
            rgba(30, 0, 100, 0.55) 0%,
            rgba(30, 0, 100, 0.25) 55%,
            rgba(30, 0, 100, 0.05) 100%
          );
        }

        /* Product bottle image */
        .aqua-hero__product {
          position: absolute;
          right: 0;
          bottom: 0;
          top: 0;
          width: 55%;
          z-index: 2;
        }
        .aqua-hero__product-placeholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(
            180deg,
            rgba(100, 150, 255, 0.15) 0%,
            rgba(30, 60, 180, 0.2) 100%
          );
        }

        /* Slide arrows */
        .aqua-slide-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          background: transparent;
          border: none;
          color: var(--aqua-white-60);
          font-size: 2rem;
          cursor: pointer;
          padding: 8px 4px;
          line-height: 1;
          transition: color 0.2s;
        }
        .aqua-slide-arrow:hover {
          color: var(--aqua-white);
        }
        .aqua-slide-arrow--left {
          left: 8px;
        }
        .aqua-slide-arrow--right {
          right: 8px;
        }

        /* Hero content block */
        .aqua-hero__content {
          position: relative;
          z-index: 5;
          padding: 60px 60px 60px 52px;
          max-width: 600px;
        }

        /* Title */
        .aqua-hero__title {
          margin: 0 0 24px 0;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .aqua-hero__title-line1 {
          font-size: clamp(2rem, 3.5vw, 3rem);
          font-weight: 700;
          font-style: italic;
          color: var(--aqua-white);
          letter-spacing: -0.01em;
          line-height: 1.15;
          font-family: Georgia, "Times New Roman", serif;
        }
        .aqua-hero__title-line2 {
          font-size: clamp(2.2rem, 3.8vw, 3.4rem);
          font-weight: 900;
          font-style: normal;
          color: #1a0e5e;
          letter-spacing: 0.02em;
          line-height: 1.1;
          text-transform: uppercase;
          font-family: var(--aqua-font);
        }

        /* Subtitle */
        .aqua-hero__subtitle {
          font-size: 1rem;
          font-style: italic;
          color: var(--aqua-white-80);
          line-height: 1.6;
          margin: 0 0 32px 0;
        }

        /* CTA buttons */
        .aqua-hero__actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }
        .aqua-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 14px 36px;
          border-radius: 50px;
          font-size: 0.95rem;
          font-weight: 600;
          text-decoration: none;
          cursor: pointer;
          border: none;
          transition:
            filter 0.2s,
            transform 0.15s;
          white-space: nowrap;
          letter-spacing: 0.01em;
        }
        .aqua-btn:hover {
          filter: brightness(1.12);
          transform: translateY(-1px);
        }
        .aqua-btn--primary {
          background: var(--aqua-blue-btn);
          color: var(--aqua-white);
        }
        .aqua-btn--dark {
          background: var(--aqua-btn-dark);
          color: var(--aqua-white);
        }

        /* ─── Responsive ─────────────────────────────────── */
        @media (max-width: 900px) {
          .aqua-nav {
            display: none;
          }
          .aqua-hero__content {
            padding: 40px 32px;
          }
          .aqua-hero__product {
            width: 50%;
            opacity: 0.6;
          }
        }
        @media (max-width: 600px) {
          .aqua-hero {
            padding: 0 10px 24px;
          }
          .aqua-hero__card {
            min-height: 420px;
          }
          .aqua-hero__content {
            padding: 32px 20px;
          }
          .aqua-hero__product {
            display: none;
          }
          .aqua-hero__title-line2 {
            font-size: 2rem;
          }
        }
      `}</style>
    </>
  );
}
