// "use client";

// export default function ClientsSection() {

// const clients = [
// "/clients/img1.png",
// "/clients/img2.png",
// "/clients/img3.png",
// "/clients/img4.png",
// "/clients/img5.png",
// "/clients/img6.png",
// ];

// return ( <section className="bg-black flex flex-col justify-center items-center gap-[10px]">

//   {/* CONTAINER */}
//   <div className="w-full max-w-[1440px] px-6 lg:px-12 py-[60px] flex flex-col items-center gap-[16px]">

//     {/* TITLE */}
//     <h2 className="text-white text-[28px] md:text-[32px] font-semibold leading-[40px] tracking-[-0.16px] text-center">
//       Our Clients
//     </h2>

//     {/* LOGOS ROW */}
//     <div className="w-full flex flex-wrap items-center justify-center gap-6 md:gap-10 pt-6">

//       {clients.map((logo, index) => (
//         <div
//           key={index}
//           className="flex items-center justify-center w-[120px] md:w-[160px] h-[50px] md:h-[60px]"
//         >
//           <img
//             src={logo}
//             alt="Client Logo"
//             className="max-w-full max-h-full object-contain opacity-80 hover:opacity-100 transition duration-300"
//           />
//         </div>
//       ))}

//     </div>

//   </div>

// </section>

// );
// }

"use client";

const clients = [
  "/clients/Frame 2147211460.png",

  "/clients/Frame 2147211462.png",
  "/clients/Frame 2147211463.png",
  "/clients/Frame 2147211464.png",
  "/clients/Frame 2147211465.png",
  "/clients/Frame 2147211466.png",
  "/clients/Frame 2147211467.png",
  "/clients/Frame 2147211468.png",
  "/clients/Frame 2147211469.png",
  "/clients/Frame 2147211470.png",
  "/clients/Frame 2147211471.png",
  "/clients/Frame 2147211472.png",
  "/clients/Frame 2147211473.png",
  "/clients/Frame 2147211474.png",
  "/clients/Frame 2147211475.png",
  "/clients/Frame 2147211476.png",
  "/clients/Frame 2147211477.png",
  "/clients/Frame 2147211478.png",
  "/clients/Frame 2147211479.png",
  "/clients/Frame 2147211480.png",
  "/clients/Frame 2147211481.png",
  "/clients/Frame 2147211482.png",
  "/clients/Frame 2147211483.png",
  "/clients/Frame 2147211484.png",
  "/clients/Frame 2147211485.png",
  "/clients/Frame 2147211486.png",
  "/clients/Frame 2147211487.png",
  "/clients/Frame 2147211488.png",
  "/clients/Frame 2147211489.png",
  "/clients/Frame 2147211490.png",
  "/clients/Frame 2147211491.png",
  "/clients/Frame 2147211492.png",
  "/clients/Frame 2147211493.png",
  "/clients/Frame 2147211494.png",
];

function LogoCard({ logo, index }) {
  return (
    <div
      className="mx-2 flex h-16 w-40 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4 transition-all duration-300 hover:border-[#CCFF00]/50 hover:bg-white/[0.08] sm:h-28 sm:w-48"
      key={`${logo}-${index}`}
    >
      <img
        src={logo}
        alt={`Client logo ${index + 1}`}
        loading="lazy"
        className="max-h-full max-w-full object-contain grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
      />
    </div>
  );
}

function Marquee({ logos, direction }) {
  return (
    <div className="group relative w-full overflow-hidden">
      {/* Left and right fade effect */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#050505] to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#050505] to-transparent sm:w-24" />

      <div
        className={`flex w-max ${
          direction === "left" ? "clients-left" : "clients-right"
        }`}
      >
        {[0, 1].map((group) => (
          <div
            key={group}
            className="flex shrink-0 items-center"
            aria-hidden={group === 1}
          >
            {logos.map((logo, index) => (
              <LogoCard key={`${group}-${logo}`} logo={logo} index={index} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ClientsSection() {
  // Distribute logos across 3 rows
  const firstRow = clients.filter((_, i) => i % 3 === 0);
  const secondRow = clients.filter((_, i) => i % 3 === 1);
  const thirdRow = clients.filter((_, i) => i % 3 === 2);

  return (
    <section className="relative overflow-hidden bg-[#050505] py-4 sm:py-4">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center">
          <span className="mb-4 inline-block rounded-full border border-[#CCFF00]/30 bg-[#CCFF00]/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#CCFF00]">
            Our Trusted Partners
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Brands That <span className="text-[#CCFF00]">Trust Us</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
            Proud to collaborate with ambitious brands and businesses to create
            meaningful digital experiences.
          </p>
        </div>

        {/* Three Logo Rows */}
        <div className="flex w-full flex-col gap-5">
          <Marquee logos={firstRow} direction="left" />
          <Marquee logos={secondRow} direction="right" />
          <Marquee logos={thirdRow} direction="left" />
        </div>

        {/* Bottom Text */}
        <div className="text-center">
          <p className="text-sm text-white/50">
            Building partnerships. Creating impact. Growing together.
          </p>
        </div>
      </div>
    </section>
  );
}
