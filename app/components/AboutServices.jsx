export default function AboutServices() {
  return (
    <section className="bg-black text-white flex justify-center">

      <div className="w-[1920px]">

        {/* PART 1 */}
        <div className="flex w-[1920px] px-[240px] py-[48px] items-start gap-[48px]">

          {/* TITLE */}
          <h2 className="text-[#FFF] text-[32px] font-semibold leading-[40px] tracking-[-0.16px]">
            Who we are
          </h2>

          {/* PARAGRAPH */}
          <p className="flex-1 text-[#FFF] text-[32px] font-normal leading-[40px] tracking-[-0.16px]">
            We are a modern visual storytelling studio producing high-impact
            content for ambitious brands ready to grow, compete, and lead
            confidently in today’s fast-moving digital landscape.
          </p>

        </div>


        {/* PART 2 */}
        <div className="flex w-[1920px] px-[240px] py-[48px] flex-col justify-center items-center gap-[10px]">

          {/* WHAT WE DO TITLE */}
          <div className="w-[1440px]">
            <h2 className="text-[#FFF] text-[32px] font-semibold leading-[40px] tracking-[-0.16px]">
              What we do
            </h2>
          </div>

          {/* SERVICES */}
          <div className="w-[1440px] flex gap-[40px]">

            {/* 01 */}
            <div className="flex flex-col gap-[16px]">
              <span className="text-[14px] text-gray-400">01</span>

              <h3 className="text-[24px] font-semibold leading-[32px] tracking-[-0.16px]">
                Concept
              </h3>

              <p className="w-[342px] text-[18px] font-normal leading-[28px] text-gray-300">
                Every powerful visual begins with a clear idea. We shape
                compelling narratives, define direction, and align creative
                vision with your brand.
              </p>
            </div>

            {/* 02 */}
            <div className="flex flex-col gap-[16px]">
              <span className="text-[14px] text-gray-400">02</span>

              <h3 className="text-[24px] font-semibold leading-[32px] tracking-[-0.16px]">
                Previsualization
              </h3>

              <p className="w-[342px] text-[18px] font-normal leading-[28px] text-gray-300">
                We translate ideas into visual blueprints through storyboards,
                shot planning, and scene design, allowing you to see the vision
                before production begins.
              </p>
            </div>

            {/* 03 */}
            <div className="flex flex-col gap-[16px]">
              <span className="text-[14px] text-gray-400">03</span>

              <h3 className="text-[24px] font-semibold leading-[32px] tracking-[-0.16px]">
                Production
              </h3>

              <p className="w-[342px] text-[18px] font-normal leading-[28px] text-gray-300">
                Using refined techniques and precision execution, we create
                striking visuals that capture attention and communicate your
                message effectively.
              </p>
            </div>

            {/* 04 */}
            <div className="flex flex-col gap-[16px]">
              <span className="text-[14px] text-gray-400">04</span>

              <h3 className="text-[24px] font-semibold leading-[32px] tracking-[-0.16px]">
                Composition
              </h3>

              <p className="w-[342px] text-[18px] font-normal leading-[28px] text-gray-300">
                We elevate the final piece through seamless editing, color
                refinement, sound design, and music, delivering a polished and
                impactful result.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}