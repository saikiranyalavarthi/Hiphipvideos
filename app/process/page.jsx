import ProcessSteps from "../components/ProcessSteps";

export default function ProcessHero() {
return (
<>


  <section className="relative w-full h-[220px] md:h-[300px] lg:h-[360px] flex items-center justify-center overflow-hidden">

    {/* Background Image */}
    <img
      src="/hero1.jpg"
      alt="Process Background"
      className="absolute inset-0 w-full h-full object-cover"
    />

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/70"></div>

    {/* Content */}
    <div className="relative z-10 w-full max-w-[1440px] px-6 lg:px-12">

      <h1 className="text-white text-[28px] md:text-[36px] lg:text-[40px] font-semibold">
        Our Process
      </h1>

    </div>

  </section>

  <ProcessSteps />
  <section className="relative w-full h-[260px] md:h-[320px] flex items-center justify-center overflow-hidden">

    <img
      src="/hero1.jpg"
      alt=""
      className="absolute inset-0 w-full h-full object-cover"
    />

    <div className="absolute inset-0 bg-black/70"></div>

    <div className="relative z-10 w-full max-w-[1000px] px-6 text-center flex flex-col items-center gap-6">
      <h2 className="text-white text-[18px] sm:text-[22px] md:text-[28px] lg:text-[32px] font-semibold leading-[28px] md:leading-[40px]">
        Our team thrives on new projects and challenges. If you have a project in mind then we’d love to hear from you.
      </h2>

      <a
        href="/quote"
        className="flex items-center gap-2 px-[20px] py-[10px] rounded-[8px] bg-[#CCFF00] text-black text-[14px] font-semibold"
      >
        Free discovery call →
      </a>
    </div>

  </section>
  </>
);
}
