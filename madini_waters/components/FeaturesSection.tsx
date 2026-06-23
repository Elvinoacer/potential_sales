import Image from "next/image";

const features = [
  { icon: "/assets/icon-blue-1.png", label: "Full Controll", w: 65, h: 82 },
  { icon: "/assets/icon-blue-2.png", label: "Healthy Composition", w: 77, h: 77 },
  { icon: "/assets/icon-blue-3.png", label: "6 Filtration Stages", w: 53, h: 69 },
  { icon: "/assets/icon-blue-4.png", label: "Quality Certificates", w: 64, h: 79 },
];

export default function FeaturesSection() {
  return (
    <section className="bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((f) => (
            <div key={f.label} className="flex flex-col items-center text-center gap-4 py-4">
              <Image
                src={f.icon}
                alt={f.label}
                width={f.w}
                height={f.h}
                className="object-contain"
                style={{ maxHeight: 72 }}
              />
              <p className="text-white text-sm font-semibold tracking-wide">{f.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
