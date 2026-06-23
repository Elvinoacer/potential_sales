"use client";
import { useState } from "react";

export default function SubscribeSection() {
  const [email, setEmail] = useState("");

  return (
    <section className="bg-[#21b6ff] py-10">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Label */}
          <div className="lg:flex-shrink-0">
            <p className="text-white/80 text-xs font-semibold uppercase tracking-[0.25em] mb-1">
              SUBSCRIBE
            </p>
            <h5 className="text-white font-bold text-xl">Weekly newsletter</h5>
          </div>

          {/* Form */}
          <div className="flex w-full max-w-xl">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-5 py-3 text-sm text-gray-800 bg-white outline-none rounded-l-sm"
            />
            <button className="bg-[#0a0a0a] text-white px-6 py-3 text-xs uppercase tracking-widest font-semibold hover:bg-[#111] transition-colors rounded-r-sm">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
