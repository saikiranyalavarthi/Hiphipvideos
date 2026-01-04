"use client";

import { useState } from "react";

export default function IndustriesSection() {
  const industries = [
    "All",
    "SaaS",
    "Tech",
    "Healthcare",
    "Biotech",
    "Education",
    "Finance",
    "Corporate",
    "Media",
  ];

  const projects = [
    {
      title: "Open Cinema",
      length: "60 Seconds",
      industry: "Transport",
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
      industry: "Healthcare",
      type: "Brand Film",
      image: "/image1 (4).jpeg",
    },
    {
      title: "Education Platform",
      length: "60 Seconds",
      industry: "Education",
      type: "Explainer Video",
      image: "/image1 (5).jpeg",
    },
    {
      title: "Startup Pitch",
      length: "30 Seconds",
      industry: "SaaS",
      type: "Promo Video",
      image: "/image1 (6).jpeg",
    },
    {
      title: "Biotech Visual",
      length: "75 Seconds",
      industry: "Biotech",
      type: "Animated Video",
      image: "/image1 (7).jpeg",
    },
    {
      title: "Finance Campaign",
      length: "45 Seconds",
      industry: "Finance",
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
      industry: "Media",
      type: "Motion Graphics",
      image: "/image1 (10).jpeg",
    },
  ];

  const [activeIndustry, setActiveIndustry] = useState("All");

  const filteredProjects =
    activeIndustry === "All"
      ? projects
      : projects.filter(
          (item) => item.industry === activeIndustry
        );

  return (
    <section className="bg-black text-white py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <p className="text-sm uppercase tracking-widest text-[#CCFF00] mb-4">
            Portfolio
          </p>

          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Industries <span className="text-[#CCFF00]">We’ve Worked In</span>
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Explore our selected work across multiple industries, crafted to
            deliver engaging and impactful visual experiences.
          </p>
        </div>

        {/* INDUSTRY FILTER */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {industries.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveIndustry(item)}
              className={`px-6 py-3 rounded-full border text-sm font-medium transition
                ${
                  activeIndustry === item
                    ? "bg-[#CCFF00] text-black border-[#CCFF00]"
                    : "border-white/15 text-white hover:border-[#CCFF00] hover:text-[#CCFF00]"
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
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* RED OVERLAY */}
              <div className="absolute inset-0 bg-red-600/90 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* CONTENT */}
              <div className="absolute inset-0 flex flex-col justify-center px-6 text-white opacity-0 group-hover:opacity-100 transition duration-500">
                <h3 className="text-xl font-bold mb-3 uppercase">
                  {item.title}
                </h3>
                <p className="text-sm mb-1">Length: {item.length}</p>
                <p className="text-sm mb-1">Industry: {item.industry}</p>
                <p className="text-sm">{item.type}</p>
              </div>

              {/* PLAY BUTTON */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center text-lg font-bold opacity-90 group-hover:scale-110 transition">
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
