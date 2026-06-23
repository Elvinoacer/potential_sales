import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-[#0a0a0a] py-20 lg:py-28">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-[#21b6ff] text-xs font-medium uppercase tracking-[0.3em] mb-3">
            Water Skills
          </p>
          <h2 className="text-white text-3xl md:text-4xl font-bold">About Aquaterias</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <h3 className="text-[#21b6ff] text-xl md:text-2xl font-semibold leading-snug mb-4">
              Our company was founded in 1965
            </h3>
            <p className="text-white/80 text-base leading-relaxed mb-5">
              Aquatiras is ideal for drinking, cooking, sports and even for children.
              The product is certified in 12 countries.
            </p>
            <p className="text-white/50 text-sm leading-relaxed mb-8">
              Sed viverra, lorem in maximus faucibus, odio libero fringilla dolor,
              convallis vestibulum risus nisi ac neque. Maecenas convallis ligula
              metus, ac viverra magna egestas mollis. Etiam sed tortor vel purus
              aliquam faucibus. Pellentesque vel nisi pharetra, euismod sapien et,
              volutpat nulla. In congue maximus malesuada.
            </p>
            <a
              href="#"
              className="inline-block px-7 py-2.5 border border-white/30 text-white text-xs uppercase tracking-[0.2em] hover:border-[#21b6ff] hover:text-[#21b6ff] transition-all duration-200"
            >
              Read more
            </a>
          </div>

          {/* Right: Video thumbnail */}
          <div className="relative group cursor-pointer">
            <Image
              src="/assets/video.png"
              alt="About Video"
              width={640}
              height={400}
              className="w-full object-cover rounded-sm"
            />
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <a
                href="https://www.youtube.com/watch?v=J5-9EWa3tyQ"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-[#21b6ff] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_40px_rgba(33,182,255,0.5)]"
              >
                <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
