"use client";

export default function ClientsSection() {
  const clients = [
    "Fonterra",
    "Allegion",
    "NZMP",
    "one.nz",
    "Toitū Envirocare",
    "Doc Edge",
    "Xiaomi",
    "Sony",
  ];

  return (
    <section className="bg-black py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-medium mb-16 text-white">
          Our Clients
        </h2>
      </div>

      {/* MARQUEE */}
      <div className="relative w-full overflow-hidden">
        <div className="marquee gap-20 px-10">
          {[...clients, ...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="text-white/90 text-2xl md:text-3xl font-semibold whitespace-nowrap hover:text-[#CCFF00] transition"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
