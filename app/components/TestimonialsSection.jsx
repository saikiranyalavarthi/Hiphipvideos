"use client";

export default function TestimonialsSection() {

  const testimonials = [
    {
      name: "Daniel Harper",
      role: "Aurelius Tech",
      image: "/avatar/avatar1.jpg",
      text: "They captured our product’s value with precision and clarity. The launch video alone drove a 38% increase in demo bookings within the first month.",
    },
    {
      name: "Isabella Rossi",
      role: "Velora Living",
      image: "/avatar/avatar2.svg",
      text: "Their creative direction transformed our concept into a premium visual story. Engagement across our paid campaigns doubled after publishing the new videos.",
    },
    {
      name: "Liam Bennett",
      role: "Northbridge Automotive",
      image: "/avatar/avatar3.svg",
      text: "From script to final render, the process was seamless and professional. The product film elevated our brand perception across international markets.",
    },
    {
      name: "Sofia Laurent",
      role: "Maison Elara",
      image: "/avatar/avatar4.png",
      text: "They translated intricate details into elegant, compelling visuals. Our online sales saw a noticeable lift immediately after the campaign went live.",
    },
    {
      name: "Ethan Müller",
      role: "Helix Dynamics",
      image: "avatar/avatar5.jpg",
      text: "Their understanding of technical features and market positioning was impressive. The final videos simplified our messaging without losing sophistication.",
    },
    {
      name: "Camila Duarte",
      role: "Solstice Realty",
      image: "avatar/avatar6.png",
      text: "They showcased our properties with cinematic precision and atmosphere. Buyer inquiries increased significantly after the first promotional release.",
    },
    {
      name: "Noah Andersen",
      role: "Arctic Labs",
      image: "avatar/avatar7.jpg",
      text: "Their team brought speed, structure, and creative excellence to the table. We saw measurable growth in conversions within weeks of launch.",
    },
    {
      name: "Amélie Dubois",
      role: "Luma Interiors",
      image: "avatar/avatar8.jpg",
      text: "The visuals felt modern, refined, and strategically crafted. Our brand now stands out clearly in an otherwise crowded marketplace.",
    },
  ];

  return (
    <section className="bg-black flex flex-col items-center justify-center py-[48px]">

      {/* TITLE */}
      <h2 className="text-white text-center text-[38px] font-bold leading-[56px] tracking-[-0.32px] mb-[48px]">
        What our clients say
      </h2>

      {/* GRID CONTAINER */}
      <div className="grid grid-cols-4 gap-[24px] max-w-[1440px]">

        {testimonials.map((item, index) => (
          <div
            key={index}
            className="w-[342px] h-[400px] flex flex-col items-center justify-center gap-[24px] p-[40px] border border-white/20 rounded-lg text-center"
          >

            {/* AVATAR */}
            <img
              src={item.image}
              alt={item.name}
              className="w-[64px] h-[64px] rounded-full object-cover"
            />

            {/* NAME */}
            <h3 className="text-white text-[16px] font-semibold leading-[24px]">
              {item.name}
            </h3>

            {/* ROLE */}
            <p className="text-white/70 text-[14px] leading-[20px]">
              {item.role}
            </p>

            {/* TEXT */}
            <p className="text-white text-[16px] leading-[24px]">
              "{item.text}"
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}