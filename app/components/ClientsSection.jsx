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

return ( <section className="bg-black flex flex-col justify-center items-center gap-[10px]">


  {/* CONTAINER */}
  <div className="w-full max-w-[1440px] px-6 lg:px-12 py-[60px] flex flex-col items-center gap-[16px]">

    {/* TITLE */}
    <h2 className="text-white text-[28px] md:text-[32px] font-semibold leading-[40px] tracking-[-0.16px] text-center">
      Our Clients
    </h2>

    {/* LOGOS ROW */}
    <div className="w-full flex flex-wrap items-center justify-center gap-6 md:gap-10 pt-6">

      {clients.map((logo, index) => (
        <div
          key={index}
          className="flex items-center justify-center w-[120px] md:w-[160px] h-[50px] md:h-[60px]"
        >
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
