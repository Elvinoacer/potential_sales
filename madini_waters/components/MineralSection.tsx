import Image from "next/image";

const minerals = [
  { name: "Calcium+", value: "5-12 mg/dm3" },
  { name: "Magnesium", value: "2-5 mg/dm3" },
  { name: "Sodium", value: "20-25 mg/dm3" },
];

const mineralsRight = [
  { name: "Chlorine", value: "~46 mg/dm3" },
  { name: "Sourness", value: "6.8-7.3" },
  { name: "Mineralization", value: "90-140 mg/dm3" },
];

export default function MineralSection() {
  return (
    <section className="bg-[#090909] py-20 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#21b6ff] text-xs font-medium uppercase tracking-[0.3em] mb-3">
            What inside
          </p>
          <h2 className="text-white text-3xl md:text-4xl font-bold">
            Mineral composition
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-10 items-center">
          {/* Left minerals */}
          <div className="space-y-10">
            {minerals.map((m) => (
              <div key={m.name}>
                <h4 className="text-white text-xl font-bold mb-1">{m.name}</h4>
                <p className="text-[#21b6ff] text-sm font-medium mb-2">{m.value}</p>
                <p className="text-white/40 text-xs leading-relaxed italic">
                  Vestibulum non nisi tincidunt, pulvinar nibh sed, accumsan dui.
                  In purus dolor.
                </p>
              </div>
            ))}
          </div>

          {/* Center: Bottle images */}
          <div className="hidden lg:flex justify-center items-end relative h-[420px]">
            {/* bottle-dark-1 (tall) */}
            <Image
              src="/assets/bottle-dark-1.png"
              alt="Aquaterias Bottle"
              width={130}
              height={205}
              className="object-contain z-10 drop-shadow-2xl"
              style={{ marginBottom: 0 }}
            />
            {/* bottle-dark-2 (small, left) */}
            <Image
              src="/assets/bottle-dark-2.png"
              alt="Aquaterias Small Bottle"
              width={50}
              height={136}
              className="object-contain z-20 absolute left-0 bottom-0"
            />
            {/* bottle-dark-3 (circle glass, right) */}
            <Image
              src="/assets/bottle-dark-3.png"
              alt="Aquaterias Glass"
              width={140}
              height={140}
              className="object-contain z-10 absolute right-0 bottom-0"
            />
          </div>

          {/* Right minerals */}
          <div className="space-y-10 lg:text-right">
            {mineralsRight.map((m) => (
              <div key={m.name}>
                <h4 className="text-white text-xl font-bold mb-1">{m.name}</h4>
                <p className="text-[#21b6ff] text-sm font-medium mb-2">{m.value}</p>
                <p className="text-white/40 text-xs leading-relaxed italic">
                  Vestibulum non nisi tincidunt, pulvinar nibh sed, accumsan dui.
                  In purus dolor.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
