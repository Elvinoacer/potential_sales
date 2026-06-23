"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const socials = [
  {
    icon: "twitter",
    path: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
  },
  {
    icon: "facebook",
    path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
  },
  {
    icon: "instagram",
    path: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5a1 1 0 100-2 1 1 0 000 2zM5.86 2.23A2 2 0 004 4v16a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-1.86-1.77l-.4-.03H6.26z",
  },
  {
    icon: "google",
    path: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z",
  },
];

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Block footer */}
      <section className="bg-[#0a0a0a] border-t border-white/5 py-14">
        <div className="max-w-[600px] mx-auto px-6 text-center">
          <Image
            src="/assets/logo.png"
            alt="Aquaterias"
            width={180}
            height={32}
            className="mx-auto mb-5 h-10 w-auto"
          />
          <p className="text-white/40 text-sm leading-relaxed mb-8">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Vivamus tristique ligula quis orci
            malesuada tincidunt.
          </p>
          <div className="flex justify-center gap-4">
            {socials.map((s) => (
              <a
                key={s.icon}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#21b6ff] flex items-center justify-center hover:bg-[#0099e6] transition-colors"
              >
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer bar */}
      <footer className="bg-[#050505] py-5 border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
          <p className="text-white/30 text-xs">
            <a href="#" className="hover:text-[#21b6ff] transition-colors">
              Like-themes
            </a>{" "}
            © All Rights Reserved — 2018
          </p>
          {/* Back to top */}
          {showTop && (
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hidden md:block"
            >
              <Image
                src="/assets/go-top.png"
                alt="Go to top"
                width={40}
                height={40}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
            </button>
          )}
        </div>
      </footer>
    </>
  );
}
