export default function AboutSection() {
  return ( <section className="bg-black flex justify-center py-[40px]">

    <div className="w-full max-w-[1440px] px-6 lg:px-12 flex flex-col md:flex-row items-start gap-[48px]">
  
      {/* LEFT TITLE */}
      <div className="w-[220px] flex-shrink-0">
  
        <h2 className="text-white text-[24px] font-semibold">
          About us
        </h2>
  
      </div>
  
  
      {/* RIGHT TEXT */}
      <div className="max-w-[900px] flex flex-col gap-[20px]">
  
        <p className="text-white text-[18px] md:text-[20px] lg:text-[22px] font-normal leading-[28px] md:leading-[30px] lg:leading-[32px] tracking-[-0.16px]">
          We have no house style, or allegiance to medium or method.
        </p>
  
        <p className="text-white text-[18px] md:text-[20px] lg:text-[22px] font-normal leading-[28px] md:leading-[30px] lg:leading-[32px] tracking-[-0.16px]">
          We pride ourselves on our ability to make best-in-class work for any sort
          of client: big or small, established or upstart, commercial or otherwise.
        </p>
  
        <p className="text-white text-[18px] md:text-[20px] lg:text-[22px] font-normal leading-[28px] md:leading-[30px] lg:leading-[32px] tracking-[-0.16px]">
          Creativity is our guiding principle. We come to work to create powerful
          stories, moments and messages. Our mission is to put more of the budget
          into the work, rather than the processes around it.
        </p>
  
      </div>
  
    </div>
  
  </section>

  
  );
}