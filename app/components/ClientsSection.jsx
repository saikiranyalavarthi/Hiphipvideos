"use client";

export default function ClientsSection() {

  const clients = [
    "/clients/img1.png",
    "/clients/img2.png",
    "/clients/img3.png",
    "/clients/img4.png",
    "/clients/img5.png",
    "/clients/img6.png",
  ];

  return (
    <section className="bg-black flex flex-col justify-center items-center gap-[10px]">

      {/* CONTAINER */}
      <div className="w-[1440px] py-[60px] flex flex-col items-center gap-[16px]">

        {/* TITLE */}
        <h2 className="text-white text-[32px] font-semibold leading-[40px] tracking-[-0.16px] text-center">
          Our Clients
        </h2>

        {/* LOGOS ROW */}
        <div className="w-full flex items-center justify-center">

          {clients.map((logo, index) => (
            <div key={index} className="flex items-center justify-center w-[160px] h-[60px]">
              <img
                src={logo}
                alt="Client Logo"
                className="max-w-full max-h-full object-contain opacity-80 hover:opacity-100 transition duration-300"
              />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}