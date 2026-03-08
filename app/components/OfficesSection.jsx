export default function OfficesSection() {
    return ( <section className="bg-black flex justify-center py-[40px]">
    
 
      <div className="w-full max-w-[1440px] px-6 lg:px-[240px] flex flex-col gap-[48px]">
    
        {/* HEADER */}
        <div className="flex flex-col gap-[8px]">
    
          <span className="text-white text-[16px] font-semibold leading-[24px] uppercase">
            Where are we?
          </span>
    
          <h2 className="text-white text-[32px] font-bold leading-[40px] tracking-[-0.16px]">
            Our Offices
          </h2>
    
        </div>
    
        {/* SEPARATOR LINE */}
        <div className="w-full h-[1px] bg-white/20"></div>
    
    
        {/* OFFICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[120px]">
    
          {/* USA */}
          <div className="flex flex-col gap-[8px]">
    
            <div className="flex items-center gap-[8px]">
              <img src="usa.jpg" alt="" className="w-[20px] h-[14px] object-cover"/>
              <h3 className="text-white text-[18px] font-semibold">
                USA
              </h3>
            </div>
    
            <p className="text-white text-[16px] font-light leading-[24px]">
              hiphip videos Inc
            </p>
    
            <p className="text-white text-[16px] font-light leading-[24px]">
              2150 S. Central Expressway
            </p>
    
            <p className="text-white text-[16px] font-light leading-[24px]">
              Suite 200-270
            </p>
    
            <p className="text-white text-[16px] font-light leading-[24px]">
              McKinney TX, USA 75070
            </p>
    
          </div>
    
    
          {/* INDIA */}
          <div className="flex flex-col gap-[8px]">
    
            <div className="flex items-center gap-[8px]">
              <img src="india.jpg" alt="" className="w-[20px] h-[14px] object-cover"/>
              <h3 className="text-white text-[18px] font-semibold">
                India
              </h3>
            </div>
    
            <p className="text-white text-[16px] font-light leading-[24px]">
              hiphip videos India Private limited
            </p>
    
            <p className="text-white text-[16px] font-light leading-[24px]">
              4th Floor, Reliance Cyber Ville
            </p>
    
            <p className="text-white text-[16px] font-light leading-[24px]">
              Hitech City,
            </p>
    
            <p className="text-white text-[16px] font-light leading-[24px]">
              Hyderabad, Telangana - 500081
            </p>
    
          </div>
    
        </div>
    
      </div>
    
    </section>
 
    
    );
    }
    