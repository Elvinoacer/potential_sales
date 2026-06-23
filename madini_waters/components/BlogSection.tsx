import Image from "next/image";

const posts = [
  {
    img: "/assets/blog01.jpg",
    title: "What's in your water?",
    excerpt:
      "In efficitur, leo non commodo lacinia, odio metus sodales purus, sed consequat lectus mi in purus. Vivamus vitae metus et nisl egestas sollicitudin...",
    date: "September 25, 2017",
    views: "6,005",
    comments: "0",
  },
  {
    img: "/assets/blog02.jpg",
    title: "Why do we need to drink water?",
    excerpt:
      "Integer maximus accumsan nunc, sit amet tempor lectus facilisis eu. Cras vel elit felis. Vestibulum convallis ipsum id aliquam varius. Etiam nec...",
    date: "September 25, 2017",
    views: "4,306",
    comments: "0",
  },
  {
    img: "/assets/blog03.jpg",
    title: "Drinking Water May Prevent Headaches",
    excerpt:
      "Cras mattis cursus tristique. Quisque maximus magna massa. Nulla id rutrum mauris. Donec finibus sit amet odio auctor faucibus. Nam ligula enim...",
    date: "September 25, 2017",
    views: "4,651",
    comments: "0",
  },
];

export default function BlogSection() {
  return (
    <section className="bg-[#0a0a0a] py-20 lg:py-28 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#21b6ff] text-xs font-medium uppercase tracking-[0.3em] mb-3">
            Our Blog
          </p>
          <h2 className="text-white text-3xl md:text-4xl font-bold">Recent posts</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.title} className="group flex flex-col">
              {/* Image */}
              <a href="#" className="overflow-hidden block mb-5">
                <Image
                  src={post.img}
                  alt={post.title}
                  width={494}
                  height={348}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </a>

              {/* Content */}
              <div className="flex flex-col flex-1">
                <a
                  href="#"
                  className="text-white font-bold text-base leading-snug mb-3 hover:text-[#21b6ff] transition-colors"
                >
                  <h4>{post.title}</h4>
                </a>
                <p className="text-white/50 text-sm leading-relaxed mb-4 flex-1">
                  {post.excerpt}
                </p>
                {/* Meta */}
                <div className="flex items-center justify-between text-white/30 text-xs mb-4">
                  <span>{post.date}</span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                      {post.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                      </svg>
                      {post.comments}
                    </span>
                  </div>
                </div>
                <a
                  href="#"
                  className="inline-block self-start px-5 py-2 border border-white/20 text-white/60 text-xs uppercase tracking-widest hover:border-[#21b6ff] hover:text-[#21b6ff] transition-all"
                >
                  Read more
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* View more */}
        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-block px-7 py-2.5 border border-white/20 text-white/60 text-xs uppercase tracking-widest hover:border-[#21b6ff] hover:text-[#21b6ff] transition-all"
          >
            View more
          </a>
        </div>
      </div>
    </section>
  );
}
