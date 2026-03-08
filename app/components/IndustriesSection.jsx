"use client";

import { useState } from "react";

export default function IndustriesSection() {

const industries = [
"Featured","Products","Gadgets","Automobiles","Real Estate",
"Fashion","Industrial","Corporate","Explainers","Documentaries","Tech"
];

const projects = [
{ title:"Open Cinema", length:"60 Seconds", industry:"Explainers", type:"Explainer Video Production", image:"/image1 (2).jpeg"},
{ title:"App Launch", length:"45 Seconds", industry:"Tech", type:"Product Video", image:"/image1 (3).jpeg"},
{ title:"Healthcare Story", length:"90 Seconds", industry:"Corporate", type:"Brand Film", image:"/image1 (4).jpeg"},
{ title:"Education Platform", length:"60 Seconds", industry:"Products", type:"Explainer Video", image:"/image1 (5).jpeg"},
{ title:"Startup Pitch", length:"30 Seconds", industry:"Gadgets", type:"Promo Video", image:"/image1 (6).jpeg"},
{ title:"Biotech Visual", length:"75 Seconds", industry:"Industrial", type:"Animated Video", image:"/image1 (7).jpeg"},
{ title:"Finance Campaign", length:"45 Seconds", industry:"Real Estate", type:"Ad Film", image:"/image1 (8).jpeg"},
{ title:"Corporate Film", length:"2 Minutes", industry:"Corporate", type:"Company Profile", image:"/image1 (9).jpeg"},
{ title:"Creative Motion", length:"50 Seconds", industry:"Featured", type:"Motion Graphics", image:"/image1 (10).jpeg"},
];

const [activeIndustry, setActiveIndustry] = useState("Featured");

const filteredProjects =
activeIndustry === "Featured"
? projects
: projects.filter((item) => item.industry === activeIndustry);

return ( <section className="bg-black text-white flex justify-center">


  {/* SECTION CONTAINER */}
  <div className="w-full max-w-[1440px] px-6 lg:px-12 py-[48px] flex flex-col items-center gap-[10px]">

    {/* HEADER */}
    <div className="w-full">
      <h2 className="text-[28px] md:text-[32px] font-semibold leading-[40px] tracking-[-0.16px]">
        See what we have made
      </h2>
    </div>

    {/* FILTER BUTTONS */}
    <div className="w-full flex flex-wrap gap-[12px] mb-[40px] py-8">
      {industries.map((item,index)=>(
        <button
          key={index}
          onClick={()=>setActiveIndustry(item)}
          className={`px-[18px] py-[12px] rounded-[12px] border text-[14px] transition
          ${
            activeIndustry === item
            ? "bg-[#CCFF00] text-black border-[#CCFF00]"
            : "border-[#757575] text-white hover:border-[#CCFF00]"
          }`}
        >
          {item}
        </button>
      ))}
    </div>

    {/* GRID */}
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px]">

      {filteredProjects.map((item,index)=>(
        <div
          key={index}
          className="relative w-full h-[220px] md:h-[250px] lg:h-[261px] rounded-[12px] overflow-hidden group"
        >

          {/* IMAGE */}
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition"></div>

          {/* INFO */}
          <div className="absolute inset-0 flex flex-col justify-center px-6 opacity-0 group-hover:opacity-100 transition">
            <h3 className="text-[18px] font-semibold mb-2">{item.title}</h3>
            <p className="text-[14px]">Length: {item.length}</p>
            <p className="text-[14px]">Industry: {item.industry}</p>
            <p className="text-[14px]">{item.type}</p>
          </div>

          {/* PLAY BUTTON */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[100px] h-[52px] rounded-[999px] bg-[#CCFF00]/90 flex items-center justify-center text-black font-bold">
              ▶
            </div>
          </div>

        </div>
      ))}

    </div>

  </div>

</section>


);
}
