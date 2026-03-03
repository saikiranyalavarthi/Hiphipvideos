"use client";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Daniel Harper",
      role: "Aurora Tech",
      image: "/avatar1.jpg",
      text: "We captured our product’s value with precision and clarity. The launch video alone drove a 35% increase in demo bookings within the first week.",
    },
    {
      name: "Isabella Rossi",
      role: "Velora Living",
      image: "/avatar2.jpg",
      text: "Their creative direction elevated our brand. From strategy to execution, everything felt seamless and intentional.",
    },
    {
      name: "Liam Bennett",
      role: "Northbridge Automotive",
      image: "/avatar1.jpg",
      text: "From script to final render, the team was professional and precise. We achieved exceptional brand recall across international markets.",
    },
    {
      name: "Sophia Laurent",
      role: "Maison Rêve",
      image: "/avatar2.jpg",
      text: "They translated our vision into stunning visual storytelling. The campaign generated immediate sales impact.",
    },
    {
      name: "Ethan Miller",
      role: "Helix Dynamics",
      image: "/avatar1.jpg",
      text: "Their understanding of technical features and market positioning was impressive.",
    },
    {
      name: "Camila Duarte",
      role: "Solara Beauty",
      image: "/avatar2.jpg",
      text: "They showcased our products with cinematic elegance and refinement.",
    },
    {
      name: "Noah Andersen",
      role: "Arctic Labs",
      image: "/avatar1.jpg",
      text: "The team brought speed, structure, and creativity.",
    },
    {
      name: "Amélie Dubois",
      role: "Lumière Interiors",
      image: "/avatar2.jpg",
      text: "We stood out in a crowded marketplace thanks to their strategy.",
    },
  ];

  return (
    <section className="bg-black text-white py-4">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
          What our clients say
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="border border-white/15 rounded-xl p-8 bg-black hover:border-[#CCFF00] hover:shadow-[0_0_20px_rgba(204,255,0,0.2)] transition duration-300"
            >
              {/* Avatar */}
              <div className="flex justify-center mb-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover border border-white/20"
                />
              </div>

              {/* Name */}
              <h3 className="text-center font-semibold text-lg">
                {item.name}
              </h3>

              {/* Role */}
              <p className="text-center text-gray-400 text-sm mb-4">
                {item.role}
              </p>

              {/* Text */}
              <p className="text-gray-300 text-sm text-center leading-relaxed">
                “{item.text}”
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}