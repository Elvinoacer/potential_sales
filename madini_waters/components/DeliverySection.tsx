import Image from "next/image";

export default function DeliverySection() {
  return (
    <section className="bg-[#0a0a0a] py-20 lg:py-28 relative overflow-hidden">
      {/* Subtle blue glow top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center top, rgba(33,182,255,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Left: Delivery illustration */}
          <div className="hidden md:flex flex-col items-center relative">
            <div className="relative">
              <Image
                src="/assets/delivery-dark.png"
                alt="Delivery"
                width={340}
                height={355}
                className="object-contain"
              />
              {/* Floating "Free" label */}
              <div className="absolute -bottom-4 left-4">
                <Image
                  src="/assets/label-free.png"
                  alt="Free Delivery"
                  width={90}
                  height={90}
                  className="object-contain animate-bounce"
                  style={{ animationDuration: "3s" }}
                />
              </div>
            </div>
          </div>

          {/* Center: Delivery info */}
          <div className="md:col-span-1">
            <h3 className="text-3xl font-bold mb-5">
              <span className="text-[#21b6ff]">Delivery</span>{" "}
              <span className="text-white">Service</span>
            </h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Our delivery service employs more than 100 professional couriers. We
              will deliver water to your home for{" "}
              <span className="text-[#21b6ff] font-semibold">1 hour</span> to
              anywhere in the city.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Free Delivery Service",
                "7 days a week",
                "8:00 – 22:00 Every day",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <svg
                    className="w-4 h-4 text-[#21b6ff] flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-[#21b6ff] text-sm font-semibold">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="inline-block px-7 py-2.5 border border-white/30 text-white text-xs uppercase tracking-[0.2em] hover:border-[#21b6ff] hover:text-[#21b6ff] transition-all duration-200"
            >
              Read more
            </a>
          </div>

          {/* Right: Order Form */}
          <div className="bg-white rounded-sm p-7 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
            <h5 className="text-[#21b6ff] text-base font-bold mb-5">
              Please, fill delivery form
            </h5>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Your name"
                className="w-full bg-[#f5f9ff] border border-gray-200 px-4 py-3 text-sm text-gray-700 outline-none focus:border-[#21b6ff] transition-colors rounded-sm"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full bg-[#f5f9ff] border border-gray-200 px-4 py-3 text-sm text-gray-700 outline-none focus:border-[#21b6ff] transition-colors rounded-sm"
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Address"
                  className="bg-[#f5f9ff] border border-gray-200 px-4 py-3 text-sm text-gray-700 outline-none focus:border-[#21b6ff] transition-colors rounded-sm"
                />
                <input
                  type="text"
                  placeholder="Bottles"
                  className="bg-[#f5f9ff] border border-gray-200 px-4 py-3 text-sm text-gray-700 outline-none focus:border-[#21b6ff] transition-colors rounded-sm"
                />
              </div>
              <button className="w-full bg-[#111] text-white py-3 text-sm font-semibold uppercase tracking-widest hover:bg-[#21b6ff] transition-colors duration-300 rounded-sm mt-2">
                Make order
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
