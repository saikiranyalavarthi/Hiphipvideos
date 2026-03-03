"use client";

import { useState } from "react";

export default function IndustriesSection() {

  // ✅ Fixed Industries Array
  const industries = [
    "Featured",
    "Products",
    "Gadgets",
    "Automobiles",
    "Real Estate",
    "Fashion",
    "Industrial",
    "Corporate",
    "Explainers",
    "Documentaries",
    "Tech",
  ];

  const projects = [
    {
      title: "Open Cinema",
      length: "60 Seconds",
      industry: "Explainers",
      type: "Explainer Video Production",
      image: "/image1 (2).jpeg",
    },
    {
      title: "App Launch",
      length: "45 Seconds",
      industry: "Tech",
      type: "Product Video",
      image: "/image1 (3).jpeg",
    },
    {
      title: "Healthcare Story",
      length: "90 Seconds",
      industry: "Corporate",
      type: "Brand Film",
      image: "/image1 (4).jpeg",
    },
    {
      title: "Education Platform",
      length: "60 Seconds",
      industry: "Products",
      type: "Explainer Video",
      image: "/image1 (5).jpeg",
    },
    {
      title: "Startup Pitch",
      length: "30 Seconds",
      industry: "Gadgets",
      type: "Promo Video",
      image: "/image1 (6).jpeg",
    },
    {
      title: "Biotech Visual",
      length: "75 Seconds",
      industry: "Industrial",
      type: "Animated Video",
      image: "/image1 (7).jpeg",
    },
    {
      title: "Finance Campaign",
      length: "45 Seconds",
      industry: "Real Estate",
      type: "Ad Film",
      image: "/image1 (8).jpeg",
    },
    {
      title: "Corporate Film",
      length: "2 Minutes",
      industry: "Corporate",
      type: "Company Profile",
      image: "/image1 (9).jpeg",
    },
    {
      title: "Creative Motion",
      length: "50 Seconds",
      industry: "Featured",
      type: "Motion Graphics",
      image: "/image1 (10).jpeg",
    },
  ];

  const [activeIndustry, setActiveIndustry] = useState("Featured");

  const filteredProjects =
    activeIndustry === "Featured"
      ? projects
      : projects.filter((item) => item.industry === activeIndustry);

  return (
    <section className="bg-black text-white py-4">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <h2 className="text-3xl font-semibold mb-8">
          See what we have made
        </h2>

        {/* INDUSTRY FILTER */}
        <div className="flex flex-wrap gap-3 mb-16">
          {industries.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveIndustry(item)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition border
                ${
                  activeIndustry === item
                    ? "bg-[#CCFF00] text-black border-[#CCFF00]"
                    : "border-white/20 text-white hover:border-[#CCFF00] hover:text-[#CCFF00]"
                }
              `}
            >
              {item}
            </button>
          ))}
        </div>

        {/* PORTFOLIO GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
            >
              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[260px] object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* DARK OVERLAY (changed from red) */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* CONTENT */}
              <div className="absolute inset-0 flex flex-col justify-center px-6 text-white opacity-0 group-hover:opacity-100 transition duration-500">
                <h3 className="text-lg font-semibold mb-2 uppercase">
                  {item.title}
                </h3>
                <p className="text-sm mb-1">Length: {item.length}</p>
                <p className="text-sm mb-1">Industry: {item.industry}</p>
                <p className="text-sm">{item.type}</p>
              </div>

              {/* PLAY BUTTON (Green like screenshot) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-[#CCFF00] text-black flex items-center justify-center text-lg font-bold shadow-lg group-hover:scale-110 transition">
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