"use client";

export default function ConnectQuoteSection() {
  return (
    <section className="bg-black flex justify-center py-[48px]">

      <div className="w-[1920px] px-[15px] flex justify-center">

        <div className="flex w-[952px] justify-between items-start gap-[117px]">

          {/* LEFT TEXT */}
          <div className="max-w-[360px] text-white">
            <h2 className="text-[32px] font-semibold leading-[40px] tracking-[-0.16px] mb-[16px]">
              Let’s Connect!
            </h2>

            <p className="text-[18px] leading-[28px] text-white/80 mb-[12px]">
              We are a leader video company that connects brands and people
              through tailor-made video content.
            </p>

            <p className="text-[18px] leading-[28px] text-white/80 mb-[12px]">
              Trusted by global brands, we cater to diverse clients.
            </p>

            <p className="text-[18px] leading-[28px] text-white/80">
              Let’s talk about your project – fill out the form to get started.
            </p>
          </div>

          {/* FORM */}
          <form className="flex flex-col gap-[24px] w-[436.813px]">

            {/* FIRST + LAST */}
            <div className="flex gap-[18px]">

              <div className="flex flex-col w-full gap-[6px]">
                <label className="text-[14px] uppercase font-medium text-white tracking-wide">
                  FIRST NAME
                  <span className="text-[rgba(251,94,42,0.9)] ml-1">*</span>
                </label>

                <input
                  type="text"
                  placeholder="Type your first name"
                  className="p-[16px] border border-[#757575] rounded-[3px] bg-black text-white placeholder:text-gray-400 focus:border-[#CCFF00] outline-none"
                />
              </div>

              <div className="flex flex-col w-full gap-[6px]">
                <label className="text-[14px] uppercase font-medium text-white tracking-wide">
                  LAST NAME
                  <span className="text-[rgba(251,94,42,0.9)] ml-1">*</span>
                </label>

                <input
                  type="text"
                  placeholder="Type your last name"
                  className="p-[16px] border border-[#757575] rounded-[3px] bg-black text-white placeholder:text-gray-400 focus:border-[#CCFF00] outline-none"
                />
              </div>

            </div>

            {/* EMAIL */}
            <div className="flex flex-col gap-[6px]">
              <label className="text-[14px] uppercase font-medium text-white tracking-wide">
                EMAIL
                <span className="text-[rgba(251,94,42,0.9)] ml-1">*</span>
              </label>

              <input
                type="email"
                placeholder="Type your email"
                className="w-[436.813px] p-[16px] border border-[#757575] rounded-[3px] bg-black text-white placeholder:text-gray-400 focus:border-[#CCFF00] outline-none"
              />
            </div>

            {/* SELECT ROW */}
            <div className="flex gap-[18px]">

              <div className="flex flex-col gap-[6px]">
                <label className="text-[14px] uppercase font-medium text-white tracking-wide">
                  DURATION
                  <span className="text-[rgba(251,94,42,0.9)] ml-1">*</span>
                </label>

                <select className="w-[209.31px] h-[55.4px] p-[16px] border border-[#757575] rounded-[3px] bg-black text-white focus:border-[#CCFF00] outline-none">
                  <option>Select Duration</option>
                  <option>1 Month</option>
                  <option>3 Months</option>
                </select>
              </div>

              <div className="flex flex-col gap-[6px]">
                <label className="text-[14px] uppercase font-medium text-white tracking-wide">
                  INDUSTRY
                  <span className="text-[rgba(251,94,42,0.9)] ml-1">*</span>
                </label>

                <select className="w-[209.31px] h-[55.4px] p-[16px] border border-[#757575] rounded-[3px] bg-black text-white focus:border-[#CCFF00] outline-none">
                  <option>Select Industry</option>
                  <option>Technology</option>
                  <option>Finance</option>
                </select>
              </div>

            </div>

            {/* MESSAGE */}
            <div className="flex flex-col gap-[6px]">
              <label className="text-[14px] uppercase font-medium text-white tracking-wide">
                TELL US ABOUT YOUR VIDEO NEEDS
                <span className="text-[rgba(251,94,42,0.9)] ml-1">*</span>
              </label>

              <textarea
                placeholder="TYPE SOMETHING"
                className="w-[436.813px] h-[77.8px] p-[16px] border border-[#757575] rounded-[3px] bg-black text-white placeholder:text-gray-400 focus:border-[#CCFF00] outline-none"
              />
            </div>

            {/* BUTTON */}
            <button className="h-[56px] border-[3px] border-[#CCFF00] bg-white text-black font-semibold rounded-[8px]">
              GET A QUOTE
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}